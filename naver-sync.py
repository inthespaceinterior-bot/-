#!/usr/bin/env python3
"""
THE GWANGAN · 네이버 예약 달력 동기화
------------------------------------------------------------------
네이버 예약(m.booking.naver.com)의 공개 GraphQL(schedule)을 로그인 없이
조회해 날짜별 '1박 요금 + 판매/마감 상태'를 naver-sync.json 으로 저장한다.

  python3 naver-sync.py              # 오늘부터 180일
  python3 naver-sync.py --days 240
  python3 naver-sync.py --print      # 결과만 출력(파일 저장 안 함)

응답 필드 해석
  isBusinessDay false            -> 마감(영업일 아님)          => "sold"
  isSaleDay false                -> 판매중지(네이버에서 닫음)   => "closed"
  stock <= bookingCount          -> 재고 소진(이미 예약됨)     => "sold"
  그 외                          -> 예약 가능                    => "open"
"""
import json, sys, re, time, urllib.request, urllib.error, datetime, argparse, os

BUSINESS_ID = '842506'
BIZ_ITEM_ID = '4858363'
GRAPHQL = 'https://m.booking.naver.com/graphql?opName=schedule'
PAGE = f'https://m.booking.naver.com/booking/3/bizes/{BUSINESS_ID}/items/{BIZ_ITEM_ID}'
UA = ('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 '
      '(KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1')
QUERY = """query schedule($scheduleParams: ScheduleParams) {
  schedule(input: $scheduleParams) {
    bizItemSchedule { daily { date summary {
      dateKey minBookingCount maxBookingCount bookingCount stock
      isBusinessDay hasBusinessDays isSaleDay startTime endTime
      todayDealRate hasBookableSlots
      prices { groupName isDefault price priceId name normalPrice desc order }
    } } }
  }
}"""
KST = datetime.timezone(datetime.timedelta(hours=9))


def fetch(start: datetime.date, end: datetime.date):
    body = {
        "operationName": "schedule",
        "variables": {"scheduleParams": {
            "businessId": BUSINESS_ID, "bizItemId": BIZ_ITEM_ID, "businessTypeId": 3,
            "startDateTime": start.strftime('%Y-%m-%d') + 'T00:00:00+09:00',
            "endDateTime": end.strftime('%Y-%m-%d') + 'T23:59:59+09:00',
            "partitionDays": 15,
        }},
        "query": QUERY,
    }
    req = urllib.request.Request(GRAPHQL, data=json.dumps(body).encode(),
                                 headers={'Content-Type': 'application/json', 'Referer': PAGE, 'User-Agent': UA},
                                 method='POST')
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode())


def state_of(s):
    if not s.get('isBusinessDay'):
        return 'sold'
    if not s.get('isSaleDay'):
        return 'closed'
    stock = s.get('stock') or 0
    booked = s.get('bookingCount') or 0
    if stock and booked < stock:
        return 'open'
    return 'sold'


def scrape(days=180, verbose=False):
    today = datetime.datetime.now(KST).date()
    days_map = {}
    cur = today
    end_all = today + datetime.timedelta(days=days)
    last_err = None
    while cur <= end_all:
        chunk_end = min(cur + datetime.timedelta(days=14), end_all)
        data = None
        for attempt in range(4):
            try:
                data = fetch(cur, chunk_end)
            except Exception as e:
                last_err = f'{type(e).__name__}: {e}'
                print('WARN request failed', cur, chunk_end, last_err, file=sys.stderr)
                time.sleep(2.0 * (attempt + 1))
                continue
            errs = (data or {}).get('errors') or []
            if errs:
                msg = errs[0].get('message') or str(errs[0])
                last_err = msg
                if 'TooManyRequests' in msg and attempt < 3:
                    time.sleep(5.0 * (attempt + 1))
                    continue
                raise RuntimeError(f'naver graphql error ({cur}..{chunk_end}): {msg}')
            break
        bis = (((data or {}).get('data') or {}).get('schedule') or {}).get('bizItemSchedule') or {}
        daily = (bis.get('daily') or {}).get('date') or {}
        for k, s in daily.items():
            price = None
            prices = s.get('prices') or []
            if prices:
                price = prices[0].get('price')
            days_map[k] = [price, state_of(s)]
            if verbose:
                print(k, days_map[k], 'sale', s.get('isSaleDay'), 'stock', s.get('stock'), 'booked', s.get('bookingCount'))
        cur = chunk_end + datetime.timedelta(days=1)
        time.sleep(2.0)
    if not days_map and last_err:
        raise RuntimeError(last_err)
    last_open = max([d for d, v in days_map.items() if v[1] == 'open'], default=None)
    out = {
        "source": PAGE,
        "api": "m.booking.naver.com/graphql opName=schedule",
        "updatedAt": datetime.datetime.now(KST).isoformat(timespec='seconds'),
        "timezone": "Asia/Seoul",
        "openUntil": last_open,
        "days": dict(sorted(days_map.items())),
    }
    return out


def js_table(sync, indent='  '):
    """app.js 네이버 상수로 붙여넣을 수 있는 JS 문자열."""
    lines, row = [], []
    for d, (price, state) in sync['days'].items():
        row.append('"%s":[%s,"%s"]' % (d, 'null' if price is None else price, state))
        if len(row) == 3:
            lines.append(indent + ', '.join(row) + ',')
            row = []
    if row:
        lines.append(indent + ', '.join(row) + ',')
    return '\n'.join(lines)


def patch_app_js(sync, path):
    """app.js 안의 NAVER 표와 OPEN_UNTIL 을 방금 받은 값으로 교체(오프라인 대체값 최신화)."""
    src = open(path, encoding='utf-8').read()
    try:
        i = src.index('const NAVER = {')
        j = src.index('};', i) + 2
    except ValueError:
        return False
    new = ('const NAVER = {\n'
           '  /* 네이버 예약(업체 842506 / 상품 4858363) 실시간 조회 값 — naver-sync.py 가 갱신 */\n'
           + js_table(sync) + '\n};')
    changed = (src[i:j] != new)
    if changed:
        src = src[:i] + new + src[j:]
    if sync.get('openUntil'):
        src2 = re.sub(r"let OPEN_UNTIL = '\d{4}-\d{2}-\d{2}';",
                      "let OPEN_UNTIL = '%s';" % sync['openUntil'], src, count=1)
        if src2 != src:
            src = src2; changed = True
    if changed:
        open(path, 'w', encoding='utf-8').write(src)
    return changed


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument("--days", type=int, default=105)
    ap.add_argument('--out', default=os.path.join(os.path.dirname(os.path.abspath(__file__)), 'naver-sync.json'))
    ap.add_argument('--print', action='store_true')
    ap.add_argument('--verbose', action='store_true')
    ap.add_argument('--js', action='store_true', help='print JS constant body instead of JSON')
    ap.add_argument('--patch-app', action='store_true', help='also update the NAVER table in app.js beside this script')
    a = ap.parse_args()
    sync = scrape(a.days, a.verbose)
    if a.js:
        print(js_table(sync))
    elif a.print:
        print(json.dumps(sync, ensure_ascii=False, indent=1))
    else:
        with open(a.out, 'w', encoding='utf-8') as f:
            json.dump(sync, f, ensure_ascii=False, indent=1)
        n = len(sync['days'])
        opens = sum(1 for v in sync['days'].values() if v[1] == 'open')
        print(f'saved {a.out} · {n} days · open {opens} · openUntil {sync["openUntil"]} · updatedAt {sync["updatedAt"]}')
        if a.patch_app:
            app = os.path.join(os.path.dirname(os.path.abspath(a.out)), 'app.js')
            if os.path.exists(app):
                print('app.js patched' if patch_app_js(sync, app) else 'app.js already current')
            else:
                print('app.js not found:', app)
