
/* ══════════════════════════════════════════════════════
   i18n — 한국어 / English / 繁體中文
   ══════════════════════════════════════════════════════ */
const RATES = { usd:1346.13, twd:40.45, asof:'2026-11-20 장 마감 기준' };
let LANG='ko';
try{ LANG = localStorage.getItem('tg_lang') || 'ko'; }catch(e){}
function L(ko,en,zh){ return LANG==='en'?en:(LANG==='zh'?zh:ko); }
function fxText(krw){
  if(!krw) return '';
  const usd=Math.round(krw/RATES.usd/10)*10, twd=Math.round(krw/RATES.twd/10)*10;
  const u='US$'+usd.toLocaleString('en-US'), t='NT$'+twd.toLocaleString('en-US');
  return L('≈ '+u+' · '+t+' (참고 환율 · 실제 결제는 KRW 기준)',
           '≈ '+u+' · '+t+' (reference rate; charged in KRW)',
           '≈ '+u+' · '+t+'（參考匯率，實際以韓元結帳）');
}
const DICT = {};
DICT.en = {
'숙소 소개':'The house','사진':'Photos','요금':'Rates','후기':'Reviews','위치·이용안내':'Location & info',
'소개':'About','위치':'Location','예약':'Book',
'광안리 해변 1분,':'One minute to Gwangalli Beach,',
'60평 독채 오션뷰 풀빌라 · 온수풀·자쿠지·키즈룸':'A 60-pyeong private villa on the beach — pool, jacuzzi, kids’ room',
'슈퍼호스트':'Superhost',
'예약하기':'Book now','내 예약':'My bookings','호스트':'Host',
'체크인':'Check-in','체크아웃':'Check-out','인원':'Guests','날짜 선택':'Select date',
'성인 2명':'2 adults','성인 4명':'4 adults','성인 6명':'6 adults','성인 8명 (기준)':'8 adults (base)','성인 10명':'10 adults','성인 12명 (최대)':'12 adults (max)',
'기준 8인 · 최대 12인':'Base 8 · max 12','요금 확인':'Check rates',
'★ 4.95 · 후기 176':'★ 4.95 · 176 reviews','게스트 선호 · 상위 10%':'Guest favourite · Top 10%',
'슈퍼호스트 · 응답률 100%':'Superhost · 100% response rate','생활숙박업 제2023-00012호':'Licensed stay no. 2023-00012',
'광안리에 감성을 더하다,':'A little poetry added to Gwangalli,','더광안':'THE GWANGAN',
'광안리 해변까지 도보 1분. 60평 독채에 실내 온수풀과 자쿠지, 100인치 빔스크린, 아이들을 위한 키즈룸까지 — 바다를 품은 프라이빗 스테이.':'One minute on foot from Gwangalli Beach. A 60-pyeong private house with a heated indoor pool and jacuzzi, a 100-inch screen and a kids’ room — a private stay that holds the sea.',
'8인 기준 · 최대 12인':'8 base · max 12','침실 3 · 킹베드 5':'3 bedrooms · 5 king beds',
'1박 요금':'From / night','500,000원~':'₩500,000~','네이버 예약 실시간 요금 기준':'Live Naver Booking rates',
'광안리에서 가장 특별한 60평':'The most special 60 pyeong in Gwangalli',
'광안리 해변 도보 1분':'One minute to Gwangalli Beach',
'창을 열면 광안대교와 바다. 밀락더마켓 도보 5분, 민락수변공원 도보 10분.':'Open the window to Gwangan Bridge and the sea. Millac the Market 5 min, Millak Waterside Park 10 min on foot.',
'실내 온수풀 · 자쿠지':'Heated indoor pool & jacuzzi',
'사계절 24시간 이용 가능한 사설 실내 온수풀. 자쿠지 온수는 무료입니다.':'A private heated indoor pool, 24 hours a day all year. Hot water in the jacuzzi is free.',
'키즈룸 무료 오픈':'Kids’ room, opened free',
'대형 트램폴린존, 주방놀이, 원목장난감, 32인치 좌식 게임기, 붕붕카.':'Large trampoline zone, play kitchen, wooden toys, a 32-inch floor console and ride-on cars.',
'100인치 빔스크린':'100-inch projection screen',
'거실 2개 — 100인치 빔스크린과 65인치 TV. 넷플릭스·유튜브 시청 가능.':'Two living rooms — a 100-inch screen and a 65-inch TV, with Netflix and YouTube.',
'12인 다이닝 & 아일랜드 주방':'12-seat dining & island kitchen',
'바다가 보이는 대형 식탁. 얼음정수기·커피머신·에어프라이어 등 풀 셋업.':'A long table facing the sea, plus ice water purifier, coffee machine, air fryer and more.',
'4.95점 · 후기 176개':'4.95 · 176 reviews',
'청결도 5.0 · 정확도 5.0 · 체크인 5.0 · 의사소통 5.0 (에어비앤비 기준)':'Cleanliness 5.0 · Accuracy 5.0 · Check-in 5.0 · Communication 5.0 (Airbnb)',
'바다 앞 60평 독채,':'A 60-pyeong private house on the water,','단 한 팀만을 위한 공간':'kept for one party only',
'광안리 바닷가 바로 앞에 위치한':'Set directly in front of Gwangalli beach — a',
'합법적으로 운영하는 생활숙박업 숙소':'legally registered residential-stay property',
'입니다. 현관을 지나면 두 개의 거실과 바다가 보이는 아일랜드 주방, 12인이 앉는 대형 식탁이 이어집니다. 화이트톤 자쿠지에서는 광안대교의 노을과 밤바다를, 침실 세 개에서는 조용한 휴식을. 아이가 있다면 대형 트램폴린과 원목 장난감이 있는 키즈룸을 무료로 열어드립니다.':'. Beyond the entrance, two living rooms lead to an island kitchen facing the sea and a 12-seat dining table. The white jacuzzi looks onto Gwangan Bridge at sunset and the night sea; three bedrooms keep the quiet. Bring children and we open the kids’ room — trampoline and wooden toys — free of charge.',
'유형':'Type','독채 · 60평대 · 생활숙박업':'Private house · ~200 m² · licensed stay',
'기준 8인 / 최대 12인 (초과 1인당 30,000원, 24개월 미만 무료)':'8 base / 12 max (₩30,000 per extra guest; under 24 months free)',
'침실':'Bedrooms','침실 3 — 킹사이즈 베드 총 5개':'3 bedrooms — 5 king beds in total',
'욕실':'Bathrooms','욕실 2 (세면대·샤워기·휴젠트)':'2 bathrooms (basin, shower, hairdryer)',
'오후 3:00 / 체크아웃 오전 11:00 · 셀프 체크인(키패드)':'Check-in 15:00 / check-out 11:00 · self check-in (keypad)',
'주차':'Parking','전통시장 공영주차장 1대 무료 · 지하 1층 1대(협소) — 사전 문의':'1 free space at the Traditional Market public car park · 1 in B1 (tight) — please ask in advance',
'등록':'Licence','부산광역시 수영구 · 생활숙박업 제2023-00012호':'Suyeong-gu, Busan · residential-stay licence 2023-00012',
'사설 실내 온수풀':'Private heated pool','자쿠지 · 월풀':'Jacuzzi · whirlpool','오션뷰':'Ocean view','넷플릭스':'Netflix',
'65인치 TV':'65-inch TV','마샬 스피커':'Marshall speaker','아일랜드 주방':'Island kitchen','얼음정수기':'Ice water purifier',
'커피머신 · 원두':'Coffee machine & beans','에어프라이어':'Air fryer','식기 · 유아식기':'Tableware & kids’ tableware',
'드럼세탁기 · 건조기':'Washer & dryer','공기청정기':'Air purifier','샤워가운 · 어메니티':'Bathrobes & amenities',
'유아욕조 · 젖병소독기':'Baby bath & bottle steriliser','와이파이':'Wi-Fi','무료 주차':'Free parking',
'단체 · 파티 가능':'Groups & parties','금연 · 반려동물 불가':'No smoking · no pets',
'노을과 야경이 그대로 들어오는 창가 다이닝':'Window dining that drinks in the sunset and the night view',
'실제 숙소 사진':'Real photos of the house','장 모두 보기':'photos',
'사진 출처: 더광안 에어비앤비 공식 리스팅(숙소 819331064728703944) — 호스트가 직접 촬영·등록한 실제 숙소 사진입니다.':'Photo source: the official Airbnb listing of THE GWANGAN (room 819331064728703944) — real photos shot and uploaded by the host.',
'요금 안내':'Rates',
'아래 요금은':'The rates below are','네이버 예약(더광안 · 업체 842506) 달력에서 실제로 확인한 1박 요금':'per-night prices read directly from the Naver Booking calendar (THE GWANGAN, business 842506)',
'을 정리한 것입니다. 날짜별 요금이 다르므로, 예약 달력에서 선택하신 날짜의 정확한 금액이 자동 계산됩니다.':', collected here. Prices differ by date, so the calendar works out the exact amount for the nights you pick.',
'기간':'Period','일':'Sun','월~목':'Mon–Thu','금':'Fri','토':'Sat',
'2026년 11월':'Nov 2026','비수기':'low season','2026년 12월':'Dec 2026','준성수기':'shoulder','2027년 1월':'Jan 2027','성수기':'peak','특수일':'Special dates',
'성탄 전일(12/24) 800,000원 · 설 연휴 기간은 별도 요금':'Christmas Eve (24 Dec) ₩800,000 · Lunar New Year holidays priced separately',
'· 표시 요금은 1박 기준이며, 실제 판매 여부는 날짜마다 다릅니다(마감 다수).':'· Prices are per night; whether a date is actually on sale differs day by day (many are closed).',
'· 2027년 1월 31일까지만 예약이 열려 있고, 2월 이후는 아직 판매가 열리지 않아 온라인 예약 대신 문의로 안내합니다.':'· Online booking is open through 31 Jan 2027; February onwards is not on sale yet, so please send an enquiry.',
'· 요금은 호스트 사정에 따라 변경될 수 있으며, 결제 직전 견적 화면의 금액이 최종 금액입니다.':'· Rates may change at the host’s discretion; the amount on the final quote screen is what you pay.',
'추가 요금':'Extras','기준 인원':'Base occupancy','8인':'8 guests','인원 추가 (1인·1박)':'Extra guest (per night)','30,000원':'₩30,000',
'24개월 미만 영유아':'Infants under 24 months','무료':'Free','키즈룸':'Kids’ room','· 무료 쿠폰 적용 가능':'· free coupon available',
'자쿠지 온수':'Jacuzzi hot water','연박 할인':'Multi-night discount','2박 이상 시 추가 1박당 −50,000원':'₩50,000 off each extra night from 2 nights',
'예약 규정':'House rules','오후 3:00':'15:00','오전 11:00':'11:00','최대 인원':'Max guests','12인':'12',
'반려동물':'Pets','동반 불가':'Not allowed','흡연':'Smoking','전 구역 금연 (과태료 10만원)':'Non-smoking throughout (₩100,000 fine)',
'파티':'Parties','가능 (창문 테이프 부착 금지)':'Allowed (no tape on windows)','미성년자':'Minors','직계 보호자 동반 필수':'Only with a parent or guardian',
'취소·환불':'Cancellation & refunds','정책':'Policy','예약 전 호스트 확인':'Confirm with the host before booking',
'네이버 예약·에어비앤비 모두 취소 규정을 예약 단계에서만 노출하고 있어, 이 페이지에는 게시되어 있지 않습니다. 취소·환불은 예약 채널의 규정이 우선하며, 문의는 네이버 톡톡 또는 010-2650-0013으로 부탁드립니다.':'Naver Booking and Airbnb both publish their cancellation terms only inside the booking flow, so they are not posted here. The rules of the channel you booked through govern any cancellation; for help, message us on Naver TalkTalk or call 010-2650-0013.',
'날짜를 고르면 요금이 바로 계산됩니다':'Pick your dates — the price updates instantly',
'요금·마감 상태는 네이버 예약 달력에서 2026-11-21 기준으로 확인한 실제 값입니다.':'Rates and closures are the actual values read from the Naver Booking calendar on 21 Nov 2026.',
'예약 가능':'Available','선택':'Selected','마감 · 판매중지':'Closed / not on sale','숫자 아래는 1박 요금':'Small numbers are the nightly rate',
'숙박':'Stay','성인':'Adults','만 13세 이상':'13 and over','아동':'Children','만 2~12세 · 기준 인원에 포함':'Age 2–12 · counted in occupancy',
'유아':'Infants','24개월 미만 · 추가 요금 없음':'Under 24 months · no charge',
'예약 견적':'Your quote','달력에서 체크인·체크아웃 날짜를 선택해 주세요.':'Choose your check-in and check-out dates on the calendar.',
'총 결제 금액':'Total','결제 수단: 신용·체크카드 / 계좌이체(무통장). 예약 확정 시 해당 날짜는 자동으로 마감됩니다.':'Payment: credit/debit card or bank transfer. Confirming a booking closes those dates immediately.',
'에어비앤비 후기':'Airbnb reviews','· 게스트 선호 · 슈퍼호스트':'· Guest favourite · Superhost',
'청결도 5.0 · 정확도 5.0 · 체크인 5.0 · 의사소통 5.0 · 위치 4.9 · 가격 대비 4.9':'Cleanliness 5.0 · Accuracy 5.0 · Check-in 5.0 · Communication 5.0 · Location 4.9 · Value 4.9',
'“지금까지 머문 숙소 중 가장 비싼 곳 중 하나였지만, 전망과 주변 환경, 숙소 모두 훌륭해서 전혀 아깝지 않았습니다. 필요한 모든 것이 갖춰져 있었고, 아이들은 키즈룸에 푹 빠졌어요.”':'“One of the most expensive places I’ve stayed, and worth every won — the view, the surroundings and the house were all superb. Everything we needed was there, and the kids disappeared into the playroom.”',
'“훌륭한 전망과 충분한 공간. 인테리어가 매우 세련되었고, 가족 모두 편안하게 지냈습니다.”':'“Beautiful view and plenty of space. The interior is very stylish and the whole family was comfortable.”',
'“가족 여행 중 멋진 해안뷰와 드론쇼까지 볼 수 있어 만족스러웠습니다. 내부 인테리어도 예쁘고 편의시설이 잘 갖춰져 있어 모두 다시 오고 싶어 했어요.”':'“On our family trip we had the coastal view and even the drone show. Lovely interior and well equipped — everyone wants to come back.”',
'5일 전':'5 days ago','3주 전':'3 weeks ago','2026년 9월':'Sep 2026',
'광안리 해변 바로 앞':'Right on Gwangalli Beach','주소':'Address',
'부산광역시 수영구 민락수변로 13, 7층':'7F, 13 Millaksubyeon-ro, Suyeong-gu, Busan',
'(1층 송원 · 8층 진주횟집 건물)':'(building with Songwon on 1F and Jinju Hoetjip on 8F)',
'도보 거리':'On foot','광안리해수욕장 1분 · 밀락더마켓 5분 · 민락수변공원 10분':'Gwangalli Beach 1 min · Millac the Market 5 min · Millak Waterside Park 10 min',
'전통시장 공영주차장 1대 무료 · 건물 지하 1층 1대(층고 낮고 협소) — 사전 문의':'1 free space at the Traditional Market public car park · 1 in B1 (low ceiling, tight) — ask ahead',
'문의':'Contact','010-2650-0013 · 네이버 톡톡':'010-2650-0013 · Naver TalkTalk',
'예약 채널':'Booking channels','네이버 예약 · 에어비앤비 · 본 페이지':'Naver Booking · Airbnb · this page',
'이용 안내':'Good to know','체크인·체크아웃 시간은?':'What are the check-in and check-out times?',
'체크인 오후 3시, 체크아웃 오전 11시입니다. 셀프 체크인(키패드)으로 이용하실 수 있습니다.':'Check-in from 15:00, check-out by 11:00. Self check-in with a keypad.',
'인원 추가 요금은 얼마인가요?':'How much is the extra-guest fee?',
'기준 8인이며 최대 12인까지 가능합니다. 기준 인원 초과 시 1인당 30,000원이 추가되고, 24개월 미만 영유아는 추가 요금이 없습니다. 숙박하지 않는 방문객도 1인 3만원이 발생합니다.':'The base is 8 guests and the maximum is 12. Each guest above 8 adds ₩30,000 per night; infants under 24 months are free. Visitors who do not stay overnight are also charged ₩30,000 each.',
'키즈룸과 온수풀은 유료인가요?':'Are the kids’ room and the pool extra?',
'키즈룸은 30,000원 옵션이지만 현재 ‘키즈룸·자쿠지 무료 사용 쿠폰’이 배포 중이어서 예약 시 무료로 적용됩니다. 자쿠지 온수는 무료입니다.':'The kids’ room is a ₩30,000 option, but a free “kids’ room & jacuzzi” coupon is currently issued, so it applies at no cost. Jacuzzi hot water is free.',
'취소·환불은 어떻게 되나요?':'How do cancellations and refunds work?',
'취소 규정은 예약한 채널(네이버 예약 / 에어비앤비 / 본 페이지)의 정책이 적용됩니다. 본 페이지 예약은 예약 전 호스트 확인이 필요하며, 문의는 010-2650-0013으로 주시면 안내드립니다.':'The cancellation rules of the channel you booked through (Naver Booking, Airbnb or this page) apply. Bookings made here are confirmed with the host first; call 010-2650-0013 for details.',
'반려동물과 함께 갈 수 있나요?':'Can I bring a pet?',
'쾌적한 숙소 환경을 위해 반려동물 동반은 불가합니다. 숙소 전체가 금연 구역입니다.':'Pets are not allowed. The whole house is non-smoking.',
'파티나 촬영도 가능한가요?':'Can we hold a party or a shoot?',
'파티는 가능하지만 창문에 테이프를 붙이는 행위는 금지됩니다(원상복귀 불가 시 배상). 전열기구·버너·숯·양초 사용은 금지입니다.':'Parties are allowed, but do not tape anything to the windows (damage is chargeable). Heaters, burners, charcoal and candles are not permitted.',
'생활숙박업 제2023-00012호 · 부산광역시 수영구':'Residential-stay licence 2023-00012 · Suyeong-gu, Busan',
'문의 010-2650-0013 · thegwangan':'Contact 010-2650-0013 · thegwangan',
'예약·안내':'Booking & info','네이버 예약':'Naver Booking','에어비앤비':'Airbnb','요금표':'Rates',
'이 페이지는 더광안 예약을 위한 시연용 웹앱입니다. 실제 결제(카드 승인·입금)는 이루어지지 않으며, 실서비스 전환 시 PG 가맹점 연동과 입금 확인 서버가 필요합니다.':'This page is a demonstration booking app for THE GWANGAN. No real payment (card authorisation or deposit) takes place; going live needs a PG merchant account and a deposit-verification server.',
'사진 © 더광안 · 에어비앤비 공식 리스팅':'Photos © THE GWANGAN · official Airbnb listing',
'숙소 사진':'Photos','예약 진행':'Reservation','01 예약 정보':'01 Details','02 결제 수단':'02 Payment','03 완료':'03 Done',
'카드 결제':'Card payment','호스트 패널 · 채널 동기화':'Host panel · channel sync','통합 캘린더':'Unified calendar',
'iCal 동기화':'iCal sync','예약 관리':'Reservations','요금·계좌':'Rates & account','연동 가이드':'Integration guide',
'Reviews':'Reviews'
};
DICT.zh = {
'숙소 소개':'住宿介紹','사진':'照片','요금':'房價','후기':'評價','위치·이용안내':'位置與須知',
'소개':'介紹','위치':'位置','예약':'預訂',
'광안리 해변 1분,':'廣安里海灘 1 分鐘，',
'60평 독채 오션뷰 풀빌라 · 온수풀·자쿠지·키즈룸':'60 坪獨棟海景泳池別墅 · 溫水泳池・按摩浴缸・兒童房',
'슈퍼호스트':'超讚房東',
'예약하기':'立即預訂','내 예약':'我的預訂','호스트':'房東',
'체크인':'入住','체크아웃':'退房','인원':'人數','날짜 선택':'選擇日期',
'성인 2명':'2 位成人','성인 4명':'4 位成人','성인 6명':'6 位成人','성인 8명 (기준)':'8 位成人（基本）','성인 10명':'10 位成人','성인 12명 (최대)':'12 位成人（最多）',
'기준 8인 · 최대 12인':'基本 8 人 · 最多 12 人','요금 확인':'查詢房價',
'★ 4.95 · 후기 176':'★ 4.95 · 176 則評價','게스트 선호 · 상위 10%':'旅客最愛 · 前 10%',
'슈퍼호스트 · 응답률 100%':'超讚房東 · 回覆率 100%','생활숙박업 제2023-00012호':'合法住宿業登記 2023-00012 號',
'광안리에 감성을 더하다,':'為廣安里添上一點詩意，','더광안':'THE GWANGAN',
'광안리 해변까지 도보 1분. 60평 독채에 실내 온수풀과 자쿠지, 100인치 빔스크린, 아이들을 위한 키즈룸까지 — 바다를 품은 프라이빗 스테이.':'步行 1 分鐘即抵廣安里海水浴場。60 坪獨棟，附室內溫水泳池與按摩浴缸、100 吋投影螢幕，還有孩子專屬的兒童房——一座擁抱大海的私人住所。',
'8인 기준 · 최대 12인':'基本 8 人 · 最多 12 人','침실 3 · 킹베드 5':'3 間臥室 · 5 張特大床',
'1박 요금':'每晚起','500,000원~':'₩500,000 起','네이버 예약 실시간 요금 기준':'依 Naver 預訂即時房價',
'광안리에서 가장 특별한 60평':'廣安里最特別的 60 坪',
'광안리 해변 도보 1분':'步行 1 分鐘到廣安里海水浴場',
'창을 열면 광안대교와 바다. 밀락더마켓 도보 5분, 민락수변공원 도보 10분.':'打開窗就是廣安大橋與海。Millac the Market 步行 5 分鐘、民樂水邊公園步行 10 分鐘。',
'실내 온수풀 · 자쿠지':'室內溫水泳池 · 按摩浴缸',
'사계절 24시간 이용 가능한 사설 실내 온수풀. 자쿠지 온수는 무료입니다.':'全年 24 小時可用的私人室內溫水泳池，按摩浴缸熱水免費。',
'키즈룸 무료 오픈':'兒童房免費開放',
'대형 트램폴린존, 주방놀이, 원목장난감, 32인치 좌식 게임기, 붕붕카.':'大型彈跳床區、廚房玩具、原木玩具、32 吋遊戲機、電動小車。',
'100인치 빔스크린':'100 吋投影螢幕',
'거실 2개 — 100인치 빔스크린과 65인치 TV. 넷플릭스·유튜브 시청 가능.':'兩間客廳——100 吋投影幕與 65 吋電視，可看 Netflix 與 YouTube。',
'12인 다이닝 & 아일랜드 주방':'12 人餐桌 & 中島廚房',
'바다가 보이는 대형 식탁. 얼음정수기·커피머신·에어프라이어 등 풀 셋업.':'面海的大餐桌，另有冰水淨水器、咖啡機、氣炸鍋等完整配備。',
'4.95점 · 후기 176개':'4.95 分 · 176 則評價',
'청결도 5.0 · 정확도 5.0 · 체크인 5.0 · 의사소통 5.0 (에어비앤비 기준)':'清潔度 5.0 · 準確度 5.0 · 入住 5.0 · 溝通 5.0（Airbnb 標準）',
'바다 앞 60평 독채,':'面海的 60 坪獨棟，','단 한 팀만을 위한 공간':'只接待一組旅客的空間',
'광안리 바닷가 바로 앞에 위치한':'位於廣安里海灘正前方，是',
'합법적으로 운영하는 생활숙박업 숙소':'合法登記的生活住宿業',
'입니다. 현관을 지나면 두 개의 거실과 바다가 보이는 아일랜드 주방, 12인이 앉는 대형 식탁이 이어집니다. 화이트톤 자쿠지에서는 광안대교의 노을과 밤바다를, 침실 세 개에서는 조용한 휴식을. 아이가 있다면 대형 트램폴린과 원목 장난감이 있는 키즈룸을 무료로 열어드립니다.':'住宿。進門後是兩間客廳、面海的中島廚房與可坐 12 人的大餐桌。白色調按摩浴缸可看廣安大橋的夕陽與夜景，三間臥室則留給安靜的休息。帶孩子同行，我們免費開放有大型彈跳床與原木玩具的兒童房。',
'유형':'型態','독채 · 60평대 · 생활숙박업':'獨棟 · 約 200 m² · 合法住宿業',
'기준 8인 / 최대 12인 (초과 1인당 30,000원, 24개월 미만 무료)':'基本 8 人 / 最多 12 人（超出每人 ₩30,000，未滿 24 個月免費）',
'침실':'臥室','침실 3 — 킹사이즈 베드 총 5개':'3 間臥室 — 共 5 張特大床',
'욕실':'衛浴','욕실 2 (세면대·샤워기·휴젠트)':'2 間衛浴（洗手台、淋浴、吹風機）',
'오후 3:00 / 체크아웃 오전 11:00 · 셀프 체크인(키패드)':'入住 15:00 / 退房 11:00 · 自助入住（密碼鎖）',
'주차':'停車','전통시장 공영주차장 1대 무료 · 지하 1층 1대(협소) — 사전 문의':'傳統市場公有停車場 1 台免費 · 地下一樓 1 台（空間狹小）— 請事先詢問',
'등록':'登記','부산광역시 수영구 · 생활숙박업 제2023-00012호':'釜山廣域市水營區 · 生活住宿業 2023-00012 號',
'사설 실내 온수풀':'私人室內溫水泳池','자쿠지 · 월풀':'按摩浴缸 · 水療','오션뷰':'海景','넷플릭스':'Netflix',
'65인치 TV':'65 吋電視','마샬 스피커':'Marshall 音響','아일랜드 주방':'中島廚房','얼음정수기':'冰水淨水器',
'커피머신 · 원두':'咖啡機與咖啡豆','에어프라이어':'氣炸鍋','식기 · 유아식기':'餐具與兒童餐具',
'드럼세탁기 · 건조기':'滾筒洗衣機 · 烘衣機','공기청정기':'空氣清淨機','샤워가운 · 어메니티':'浴袍與備品',
'유아욕조 · 젖병소독기':'嬰兒澡盆 · 奶瓶消毒器','와이파이':'Wi-Fi','무료 주차':'免費停車',
'단체 · 파티 가능':'團體 · 可辦派對','금연 · 반려동물 불가':'禁菸 · 不可攜帶寵物',
'노을과 야경이 그대로 들어오는 창가 다이닝':'夕陽與夜景直接映入的窗邊餐桌',
'실제 숙소 사진':'實際住宿照片','장 모두 보기':'張照片，全部查看',
'사진 출처: 더광안 에어비앤비 공식 리스팅(숙소 819331064728703944) — 호스트가 직접 촬영·등록한 실제 숙소 사진입니다.':'照片來源：THE GWANGAN 官方 Airbnb 房源（房源編號 819331064728703944）——由房東親自拍攝並上傳的實際照片。',
'요금 안내':'房價說明',
'아래 요금은':'以下房價為','네이버 예약(더광안 · 업체 842506) 달력에서 실제로 확인한 1박 요금':'直接從 Naver 預訂日曆（THE GWANGAN，商家 842506）取得的每晚房價',
'을 정리한 것입니다. 날짜별 요금이 다르므로, 예약 달력에서 선택하신 날짜의 정확한 금액이 자동 계산됩니다.':'整理而成。各日房價不同，預訂日曆會自動計算您所選日期的正確金額。',
'기간':'期間','일':'日','월~목':'一~四','금':'五','토':'六',
'2026년 11월':'2026 年 11 月','비수기':'淡季','2026년 12월':'2026 年 12 月','준성수기':'次旺季','2027년 1월':'2027 年 1 月','성수기':'旺季','특수일':'特殊日期',
'성탄 전일(12/24) 800,000원 · 설 연휴 기간은 별도 요금':'聖誕夜（12/24）₩800,000 · 農曆新年期間另計',
'· 표시 요금은 1박 기준이며, 실제 판매 여부는 날짜마다 다릅니다(마감 다수).':'· 房價為每晚計價，實際是否開賣依日期而異（多數已滿）。',
'· 2027년 1월 31일까지만 예약이 열려 있고, 2월 이후는 아직 판매가 열리지 않아 온라인 예약 대신 문의로 안내합니다.':'· 線上預訂開放至 2027 年 1 月 31 日；2 月之後尚未開賣，請以詢問方式聯絡。',
'· 요금은 호스트 사정에 따라 변경될 수 있으며, 결제 직전 견적 화면의 금액이 최종 금액입니다.':'· 房價可能依房東安排調整，以結帳前報價畫面的金額為準。',
'추가 요금':'加收費用','기준 인원':'基本人數','8인':'8 人','인원 추가 (1인·1박)':'加人（每人每晚）','30,000원':'₩30,000',
'24개월 미만 영유아':'未滿 24 個月嬰兒','무료':'免費','키즈룸':'兒童房','· 무료 쿠폰 적용 가능':'· 可套用免費優惠券',
'자쿠지 온수':'按摩浴缸熱水','연박 할인':'連住優惠','2박 이상 시 추가 1박당 −50,000원':'2 晚以上，每多一晚折 ₩50,000',
'예약 규정':'住宿規定','오후 3:00':'15:00','오전 11:00':'11:00','최대 인원':'最多人數','12인':'12 人',
'반려동물':'寵物','동반 불가':'不可同行','흡연':'吸菸','전 구역 금연 (과태료 10만원)':'全區禁菸（罰款 ₩100,000）',
'파티':'派對','가능 (창문 테이프 부착 금지)':'可（禁止在窗戶貼膠帶）','미성년자':'未成年人','직계 보호자 동반 필수':'須有直系監護人陪同',
'취소·환불':'取消與退款','정책':'政策','예약 전 호스트 확인':'預訂前請向房東確認',
'네이버 예약·에어비앤비 모두 취소 규정을 예약 단계에서만 노출하고 있어, 이 페이지에는 게시되어 있지 않습니다. 취소·환불은 예약 채널의 규정이 우선하며, 문의는 네이버 톡톡 또는 010-2650-0013으로 부탁드립니다.':'Naver 預訂與 Airbnb 皆只在預訂流程中顯示取消規定，因此未刊登於此頁。取消與退款以您預訂的管道規定為準，洽詢請用 Naver TalkTalk 或 010-2650-0013。',
'날짜를 고르면 요금이 바로 계산됩니다':'選好日期，房價立即計算',
'요금·마감 상태는 네이버 예약 달력에서 2026-11-21 기준으로 확인한 실제 값입니다.':'房價與滿房狀態為 2026 年 11 月 21 日從 Naver 預訂日曆讀取的實際資料。',
'예약 가능':'可預訂','선택':'已選','마감 · 판매중지':'已滿 / 未開賣','숫자 아래는 1박 요금':'下方小數字為每晚房價',
'숙박':'住宿','성인':'成人','만 13세 이상':'13 歲以上','아동':'兒童','만 2~12세 · 기준 인원에 포함':'2~12 歲 · 計入基本人數',
'유아':'嬰兒','24개월 미만 · 추가 요금 없음':'未滿 24 個月 · 不加價',
'예약 견적':'預訂報價','달력에서 체크인·체크아웃 날짜를 선택해 주세요.':'請在日曆上選擇入住與退房日期。',
'총 결제 금액':'應付總額','결제 수단: 신용·체크카드 / 계좌이체(무통장). 예약 확정 시 해당 날짜는 자동으로 마감됩니다.':'付款方式：信用卡/簽帳卡 或 銀行轉帳。確認預訂後，該日期將自動關閉。',
'에어비앤비 후기':'Airbnb 評價','· 게스트 선호 · 슈퍼호스트':'· 旅客最愛 · 超讚房東',
'청결도 5.0 · 정확도 5.0 · 체크인 5.0 · 의사소통 5.0 · 위치 4.9 · 가격 대비 4.9':'清潔度 5.0 · 準確度 5.0 · 入住 5.0 · 溝通 5.0 · 位置 4.9 · 性價比 4.9',
'“지금까지 머문 숙소 중 가장 비싼 곳 중 하나였지만, 전망과 주변 환경, 숙소 모두 훌륭해서 전혀 아깝지 않았습니다. 필요한 모든 것이 갖춰져 있었고, 아이들은 키즈룸에 푹 빠졌어요.”':'「雖然是住過最貴的住宿之一，但景觀、周邊環境與房子都無可挑剔，完全值得。需要的東西一應俱全，孩子們更是愛上兒童房。」',
'“훌륭한 전망과 충분한 공간. 인테리어가 매우 세련되었고, 가족 모두 편안하게 지냈습니다.”':'「絕佳的景觀與充足的空間，裝潢非常有品味，全家都住得很舒適。」',
'“가족 여행 중 멋진 해안뷰와 드론쇼까지 볼 수 있어 만족스러웠습니다. 내부 인테리어도 예쁘고 편의시설이 잘 갖춰져 있어 모두 다시 오고 싶어 했어요.”':'「家庭旅遊時能看到漂亮的海景與無人機表演，非常滿意。室內裝潢漂亮、設備齊全，大家都想再回來。」',
'5일 전':'5 天前','3주 전':'3 週前','2026년 9월':'2026 年 9 月',
'광안리 해변 바로 앞':'就在廣安里海灘前','주소':'地址',
'부산광역시 수영구 민락수변로 13, 7층':'釜山廣域市水營區民樂水邊路 13，7 樓',
'(1층 송원 · 8층 진주횟집 건물)':'（1 樓松園 · 8 樓珍鮮生魚片店所在建築）',
'도보 거리':'步行距離','광안리해수욕장 1분 · 밀락더마켓 5분 · 민락수변공원 10분':'廣安里海水浴場 1 分鐘 · Millac the Market 5 分鐘 · 民樂水邊公園 10 分鐘',
'전통시장 공영주차장 1대 무료 · 건물 지하 1층 1대(층고 낮고 협소) — 사전 문의':'傳統市場公有停車場 1 台免費 · 建築地下一樓 1 台（層高較低且狹窄）— 請事先詢問',
'문의':'洽詢','010-2650-0013 · 네이버 톡톡':'010-2650-0013 · Naver TalkTalk',
'예약 채널':'預訂管道','네이버 예약 · 에어비앤비 · 본 페이지':'Naver 預訂 · Airbnb · 本頁面',
'이용 안내':'入住須知','체크인·체크아웃 시간은?':'入住與退房時間？',
'체크인 오후 3시, 체크아웃 오전 11시입니다. 셀프 체크인(키패드)으로 이용하실 수 있습니다.':'入住 15:00、退房 11:00，可自助入住（密碼鎖）。',
'인원 추가 요금은 얼마인가요?':'加人費用多少？',
'기준 8인이며 최대 12인까지 가능합니다. 기준 인원 초과 시 1인당 30,000원이 추가되고, 24개월 미만 영유아는 추가 요금이 없습니다. 숙박하지 않는 방문객도 1인 3만원이 발생합니다.':'基本 8 人，最多 12 人。超出基本人數每人每晚加收 ₩30,000，未滿 24 個月嬰兒不收費。不過夜的訪客同樣每人收 ₩30,000。',
'키즈룸과 온수풀은 유료인가요?':'兒童房與泳池需另外付費嗎？',
'키즈룸은 30,000원 옵션이지만 현재 ‘키즈룸·자쿠지 무료 사용 쿠폰’이 배포 중이어서 예약 시 무료로 적용됩니다. 자쿠지 온수는 무료입니다.':'兒童房為 ₩30,000 選項，但目前發放「兒童房·按摩浴缸免費券」，預訂時可免費使用。按摩浴缸熱水免費。',
'취소·환불은 어떻게 되나요?':'取消與退款如何處理？',
'취소 규정은 예약한 채널(네이버 예약 / 에어비앤비 / 본 페이지)의 정책이 적용됩니다. 본 페이지 예약은 예약 전 호스트 확인이 필요하며, 문의는 010-2650-0013으로 주시면 안내드립니다.':'取消規定依您預訂的管道（Naver 預訂 / Airbnb / 本頁面）政策辦理。本頁面的預訂需事先與房東確認，詳情請洽 010-2650-0013。',
'반려동물과 함께 갈 수 있나요?':'可以帶寵物嗎？',
'쾌적한 숙소 환경을 위해 반려동물 동반은 불가합니다. 숙소 전체가 금연 구역입니다.':'為維持住宿環境，不可攜帶寵物。全館禁菸。',
'파티나 촬영도 가능한가요?':'可以辦派對或拍攝嗎？',
'파티는 가능하지만 창문에 테이프를 붙이는 행위는 금지됩니다(원상복귀 불가 시 배상). 전열기구·버너·숯·양초 사용은 금지입니다.':'可辦派對，但禁止在窗戶貼膠帶（無法復原時需賠償）。禁止使用電熱器、爐具、木炭與蠟燭。',
'생활숙박업 제2023-00012호 · 부산광역시 수영구':'生活住宿業 2023-00012 號 · 釜山廣域市水營區',
'문의 010-2650-0013 · thegwangan':'洽詢 010-2650-0013 · thegwangan',
'예약·안내':'預訂與資訊','네이버 예약':'Naver 預訂','에어비앤비':'Airbnb','요금표':'房價表',
'이 페이지는 더광안 예약을 위한 시연용 웹앱입니다. 실제 결제(카드 승인·입금)는 이루어지지 않으며, 실서비스 전환 시 PG 가맹점 연동과 입금 확인 서버가 필요합니다.':'本頁面為 THE GWANGAN 的預訂示範網站。不會進行實際付款（刷卡授權或匯款），正式上線需串接 PG 商店帳號與匯款確認伺服器。',
'사진 © 더광안 · 에어비앤비 공식 리스팅':'照片 © THE GWANGAN · 官方 Airbnb 房源',
'숙소 사진':'住宿照片','예약 진행':'預訂流程','01 예약 정보':'01 預訂資訊','02 결제 수단':'02 付款方式','03 완료':'03 完成',
'카드 결제':'信用卡付款','호스트 패널 · 채널 동기화':'房東後台 · 通路同步','통합 캘린더':'整合日曆',
'iCal 동기화':'iCal 同步','예약 관리':'預訂管理','요금·계좌':'房價與帳戶','연동 가이드':'串接指南'
};

/* ── 2026-11-21 UX 개선: 원터치 날짜 칩 · 하단 예약 바 · 간단 예약 모달 ── */
Object.assign(DICT.en, {
'예약 가능한 날짜 바로 선택':'Pick an open night',
'한 번만 누르면 체크인·체크아웃과 요금이 세팅됩니다':'One tap sets your check-in, check-out and price.',
'마감·차단된 날짜는 자동으로 빠집니다 · 실제 예약 가능 여부는 서버와 실시간으로 맞춰집니다':'Closed and blocked dates are dropped automatically — availability stays in sync with the server.',
'02 결제·완료':'02 Payment',
'176개':'176 reviews',
'사진 출처: 더광안 에어비앤비 공식 리스팅(숙소 819331064728703944) — 호스트가 직접 촬영·등록한 실제 숙소 사진이며, 공간 구분은 리스팅의 사진 투어 분류를 따랐습니다.':'Photo source: the official Airbnb listing of THE GWANGAN (room 819331064728703944) — real photos taken and uploaded by the host; the room grouping follows the listing\u2019s photo tour.',
'네이버 예약·에어비앤비 모두 취소 규정을 예약 단계에서만 노출하고 있어 이 페이지에는 게시되어 있지 않습니다. 취소·환불은 예약 채널의 규정이 우선하며, 문의는 네이버 톡톡 또는 010-2650-0013으로 부탁드립니다.':'Naver Booking and Airbnb both show their cancellation terms only inside the booking flow, so they are not posted here. The rules of the channel you booked through govern any cancellation; for help, message us on Naver TalkTalk or call 010-2650-0013.',
'예약자 성함':'Your name','연락처':'Phone','예약자 이름':'Guest name',
'거실 · 침실 1~3 · 욕실 1~2 · 온수풀 · 키즈룸 · 주방까지 공간별로 골라 보세요.':'Living room · bedrooms 1–3 · bathrooms 1–2 · heated pool · kids’ room · kitchen — browse by space.',
'· 외국인 게스트 참고 환율: US$1 ≈ 1,346원 · NT$1 ≈ 40.45원 (2026-11-20 기준)':'· Reference rates for international guests: US$1 ≈ ₩1,346 · NT$1 ≈ ₩40.45 (as of 20 Nov 2026)',
'에어비앤비 후기 176개 전체 보기 ↗':'See all 176 Airbnb reviews ↗',
'구글 지도에서 크게 보기 ↗':'Open in Google Maps ↗',
'길찾기 ↗':'Directions ↗'
});
Object.assign(DICT.zh, {
'예약 가능한 날짜 바로 선택':'直接選擇可預訂日期',
'한 번만 누르면 체크인·체크아웃과 요금이 세팅됩니다':'按一下即設定入住、退房與房價。',
'마감·차단된 날짜는 자동으로 빠집니다 · 실제 예약 가능 여부는 서버와 실시간으로 맞춰집니다':'已滿與關閉的日期會自動排除，可預訂狀態與伺服器即時同步。',
'02 결제·완료':'02 付款',
'176개':'176 則',
'사진 출처: 더광안 에어비앤비 공식 리스팅(숙소 819331064728703944) — 호스트가 직접 촬영·등록한 실제 숙소 사진이며, 공간 구분은 리스팅의 사진 투어 분류를 따랐습니다.':'照片來源：THE GWANGAN 官方 Airbnb 房源（房源編號 819331064728703944）——由房東親自拍攝並上傳的實際照片，空間分類依房源照片導覽。',
'네이버 예약·에어비앤비 모두 취소 규정을 예약 단계에서만 노출하고 있어 이 페이지에는 게시되어 있지 않습니다. 취소·환불은 예약 채널의 규정이 우선하며, 문의는 네이버 톡톡 또는 010-2650-0013으로 부탁드립니다.':'Naver 預訂與 Airbnb 皆只在預訂流程中顯示取消規定，因此未刊登於此頁。取消與退款以您預訂的管道規定為準，洽詢請用 Naver TalkTalk 或 010-2650-0013。',
'예약자 성함':'預訂人姓名','연락처':'聯絡電話','예약자 이름':'預訂人姓名',
'거실 · 침실 1~3 · 욕실 1~2 · 온수풀 · 키즈룸 · 주방까지 공간별로 골라 보세요.':'客廳 · 臥室 1~3 · 衛浴 1~2 · 溫水泳池 · 兒童房 · 廚房，依空間瀏覽。',
'· 외국인 게스트 참고 환율: US$1 ≈ 1,346원 · NT$1 ≈ 40.45원 (2026-11-20 기준)':'· 海外旅客參考匯率：US$1 ≈ ₩1,346 · NT$1 ≈ ₩40.45（2026-11-20 基準）',
'에어비앤비 후기 176개 전체 보기 ↗':'查看全部 176 則 Airbnb 評價 ↗',
'구글 지도에서 크게 보기 ↗':'在 Google 地圖開啟 ↗',
'길찾기 ↗':'路線指引 ↗'
});

const ORIG = new WeakMap();
function applyStatic(){
  const w=document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(w.nextNode()){
    const n=w.currentNode, p=n.parentElement;
    if(!p || !n.nodeValue.trim()) continue;
    if(p.closest('script,style,[data-dyn]')) continue;
    nodes.push(n);
  }
  nodes.forEach(n=>{
    if(!ORIG.has(n)) ORIG.set(n, n.nodeValue);
    const ko=ORIG.get(n);
    if(LANG==='ko'){ n.nodeValue=ko; return; }
    const key=ko.trim().replace(/\s+/g,' ');
    const tr=(DICT[LANG]||{})[key];
    if(tr){ const lead=ko.match(/^\s*/)[0], trail=ko.match(/\s*$/)[0]; n.nodeValue=lead+tr+trail; }
    else n.nodeValue=ko;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    if(!el.dataset.koPh) el.dataset.koPh = el.getAttribute('placeholder')||'';
    const tr=(DICT[LANG]||{})[el.dataset.koPh];
    el.setAttribute('placeholder', LANG==='ko'? el.dataset.koPh : (tr||el.dataset.koPh));
  });
  document.documentElement.lang = LANG==='zh'?'zh-Hant':LANG;
  document.title = LANG==='en' ? 'THE GWANGAN · Ocean-view pool villa in Gwangalli, Busan'
    : LANG==='zh' ? 'THE GWANGAN · 釜山廣安里海景泳池別墅'
    : 'THE GWANGAN · 더광안 | 광안리 오션뷰 풀빌라 예약';
  document.querySelectorAll('.lang-sw button').forEach(b=>b.classList.toggle('on', b.dataset.lang===LANG));
  document.querySelectorAll('.cal-nav button').forEach((b,i)=>{
    b.setAttribute('aria-label', i===0?L('이전 달','Previous month','上個月'):L('다음 달','Next month','下個月'));
  });
}
function setLang(l){
  LANG=l; try{ localStorage.setItem('tg_lang',l); }catch(e){}
  applyStatic();
  if(typeof renderCals==='function'){ renderCals(); renderQuote(); syncSearch(); renderGallery(); }
  if(typeof renderReviews==='function') renderReviews();
  if(typeof paintNaverStamp==='function') paintNaverStamp();
  if(typeof paintCloud==='function') paintCloud();
  document.querySelectorAll('.modal.show').forEach(m=>closeModal(m.id));
}

/* ═══════════════════════════════════════════════════════════
   THE GWANGAN booking app — data layer
   ─ 실제 확인된 값: 네이버 예약(업체 842506 / 상품 4858363)
     2026-11-21 조회. 날짜별 1박 요금 + 판매상태.
   ═══════════════════════════════════════════════════════════ */
const TODAY = '2026-11-21';
const BASE_CURRENCY = 'KRW';
const EXTRA_PERSON_FEE = 30000;   // 기준 8인 초과 1인·1박
const KIDSROOM_FEE = 30000;
const LONGSTAY_DISCOUNT = 50000;  // 2박 이상 추가 1박당
const BASE_GUESTS = 8;
const MAX_GUESTS = 12;

/* 네이버 예약에서 확인한 날짜별 요금/상태: [price, state]
   state: open(예약가능) / closed(판매중지) / sold(마감) */
const NAVER = {
  /* 네이버 예약(업체 842506 / 상품 4858363) 실시간 조회 값 — naver-sync.py 가 갱신 */
  "2026-11-24":[500000,"closed"], "2026-11-25":[500000,"closed"], "2026-11-26":[500000,"open"],
  "2026-11-27":[700000,"closed"], "2026-11-28":[null,"sold"], "2026-11-29":[600000,"open"],
  "2026-11-30":[600000,"closed"], "2026-12-01":[null,"sold"], "2026-12-02":[null,"sold"],
  "2026-12-03":[null,"sold"], "2026-12-04":[null,"sold"], "2026-12-05":[1000000,"sold"],
  "2026-12-06":[700000,"open"], "2026-12-07":[null,"sold"], "2026-12-08":[null,"sold"],
  "2026-12-09":[null,"sold"], "2026-12-10":[600000,"open"], "2026-12-11":[700000,"open"],
  "2026-12-12":[null,"sold"], "2026-12-13":[null,"sold"], "2026-12-14":[600000,"open"],
  "2026-12-15":[600000,"open"], "2026-12-16":[null,"sold"], "2026-12-17":[null,"sold"],
  "2026-12-18":[null,"sold"], "2026-12-19":[null,"sold"], "2026-12-20":[null,"sold"],
  "2026-12-21":[600000,"open"], "2026-12-22":[600000,"open"], "2026-12-23":[600000,"open"],
  "2026-12-24":[800000,"closed"], "2026-12-25":[1200000,"open"], "2026-12-26":[1200000,"open"],
  "2026-12-27":[700000,"open"], "2026-12-28":[null,"sold"], "2026-12-29":[null,"sold"],
  "2026-12-30":[null,"sold"], "2026-12-31":[null,"sold"], "2027-01-01":[null,"sold"],
  "2027-01-02":[null,"sold"], "2027-01-03":[null,"sold"], "2027-01-04":[null,"sold"],
  "2027-01-05":[600000,"open"], "2027-01-06":[null,"sold"], "2027-01-07":[null,"sold"],
  "2027-01-08":[null,"sold"], "2027-01-09":[1200000,"sold"], "2027-01-10":[700000,"open"],
  "2027-01-11":[600000,"open"], "2027-01-12":[600000,"open"], "2027-01-13":[600000,"open"],
  "2027-01-14":[600000,"open"], "2027-01-15":[700000,"open"], "2027-01-16":[1200000,"open"],
  "2027-01-17":[700000,"open"], "2027-01-18":[600000,"open"], "2027-01-19":[600000,"open"],
  "2027-01-20":[600000,"open"], "2027-01-21":[null,"sold"], "2027-01-22":[null,"sold"],
  "2027-01-23":[null,"sold"], "2027-01-24":[700000,"open"], "2027-01-25":[600000,"open"],
  "2027-01-26":[600000,"open"], "2027-01-27":[600000,"open"], "2027-01-28":[600000,"open"],
  "2027-01-29":[700000,"open"], "2027-01-30":[1200000,"open"], "2027-01-31":[700000,"open"],
  "2027-02-01":[null,"sold"], "2027-02-02":[null,"sold"], "2027-02-03":[null,"sold"],
  "2027-02-04":[null,"sold"], "2027-02-05":[null,"sold"], "2027-02-06":[null,"sold"],
  "2027-02-07":[null,"sold"], "2027-02-08":[null,"sold"], "2027-02-09":[null,"sold"],
  "2027-02-10":[null,"sold"], "2027-02-11":[null,"sold"], "2027-02-12":[null,"sold"],
  "2027-02-13":[null,"sold"], "2027-02-14":[null,"sold"], "2027-02-15":[null,"sold"],
  "2027-02-16":[null,"sold"], "2027-02-17":[null,"sold"], "2027-02-18":[null,"sold"],
  "2027-02-19":[null,"sold"], "2027-02-20":[null,"sold"], "2027-02-21":[null,"sold"],
  "2027-02-22":[null,"sold"], "2027-02-23":[null,"sold"], "2027-02-24":[null,"sold"],
  "2027-02-25":[null,"sold"], "2027-02-26":[null,"sold"], "2027-02-27":[null,"sold"],
  "2027-02-28":[null,"sold"], "2027-03-01":[null,"sold"], "2027-03-02":[null,"sold"],
  "2027-03-03":[null,"sold"], "2027-03-04":[null,"sold"], "2027-03-05":[null,"sold"],
  "2027-03-06":[null,"sold"], "2027-03-07":[null,"sold"], "2027-03-08":[null,"sold"],
  "2027-03-09":[null,"sold"],
};
let OPEN_UNTIL = '2027-01-31';   // 판매 오픈 마지막 날 (naver-sync.json의 openUntil로 갱신됨)
const TODAY_LIVE = () => new Date();

/* ═══════════════════════════════════════════════════════════
   네이버 예약 달력 실시간 동기화
   naver-sync.py / GitHub Actions 가 만들어 두는 ./naver-sync.json 을
   캐시 없이 읽어, 날짜별 요금과 마감 상태를 즉시 덮어쓴다.
   (파일이 없거나 읽기에 실패하면 위에 내장된 값으로 그대로 동작)
   ═══════════════════════════════════════════════════════════ */
const NAVER_SYNC = { ok:false, at:null, updatedAt:null, err:null, timer:null, lastChange:0 };
function applyNaverSync(json){
  if(!json || !json.days || typeof json.days!=='object') throw new Error('bad json');
  let changed = 0;
  Object.keys(json.days).forEach(d=>{
    if(!/^\d{4}-\d{2}-\d{2}$/.test(d)) return;
    const v = json.days[d];
    if(!Array.isArray(v)) return;
    const price = (v[0]==null ? null : Number(v[0]));
    const st = String(v[1]||'');
    if(['open','closed','sold','blocked','unopened'].indexOf(st)<0) return;
    const cur = NAVER[d];
    if(cur && cur[0]===price && cur[1]===st) return;
    NAVER[d] = [price, st]; changed++;
  });
  if(json.openUntil) OPEN_UNTIL = String(json.openUntil);
  NAVER_SYNC.ok = true; NAVER_SYNC.at = new Date();
  NAVER_SYNC.updatedAt = json.updatedAt || null; NAVER_SYNC.err = null; NAVER_SYNC.lastChange = changed;
  return changed;
}
async function loadNaverSync(silent){
  try{
    const res = await fetch('./naver-sync.json?t='+Date.now(), {cache:'no-store'});
    if(!res.ok) throw new Error('HTTP '+res.status);
    const json = await res.json();
    const changed = applyNaverSync(json);
    paintNaverStamp();
    renderCals(); renderQuote();
    if(!silent) console.log('[naver] synced · changed '+changed);
    return true;
  }catch(e){
    NAVER_SYNC.ok = false;
    NAVER_SYNC.err = String((e && e.message) || e);
    paintNaverStamp();
    console.warn('[naver] sync failed:', NAVER_SYNC.err);
    return false;
  }
}
function paintNaverStamp(){
  const el = document.getElementById('naverStamp'); if(!el) return;
  const t = NAVER_SYNC.at;
  const hhmm = t ? String(t.getHours()).padStart(2,'0')+':'+String(t.getMinutes()).padStart(2,'0') : '';
  if(NAVER_SYNC.ok){
    el.textContent = L('네이버 예약 달력과 실시간 동기화 — '+hhmm+' 기준 (예약된 날짜는 자동으로 닫힙니다)',
      'Synced live with the Naver Booking calendar — as of '+hhmm+' (booked dates close automatically)',
      '與 Naver 預訂日曆即時同步 — '+hhmm+' 基準（已預訂的日期會自動關閉）');
    el.style.color = '';
  }else{
    el.textContent = L('네이버 달력 자동 동기화가 지금은 막혀 있습니다. 아래 마감 상태는 마지막으로 확인한 값이니, 예약 전 네이버 예약에서 한 번 더 확인해 주세요.',
      'Automatic Naver sync is unavailable right now. The closures below are the last values read — please double-check on Naver Booking before you book.',
      '目前無法自動同步 Naver 日曆。下方滿房狀態為上次讀取的值，預訂前請再於 Naver 預訂確認。');
    el.style.color = '#A34A00';
  }
}
function startNaverSync(){
  loadNaverSync(true);
  if(NAVER_SYNC.timer) clearInterval(NAVER_SYNC.timer);
  NAVER_SYNC.timer = setInterval(()=>loadNaverSync(true), 15*60*1000);   /* 15분마다 */
  document.addEventListener('visibilitychange', ()=>{
    if(document.visibilityState==='visible' && (!NAVER_SYNC.at || Date.now()-NAVER_SYNC.at.getTime()>5*60*1000)) loadNaverSync(true);
  });
}

/* 판매가 열려 있지 않은 기간의 예상 요금 규칙 (위 확인 요금 패턴 기준) */
function rulePrice(ds){
  const d = parseDS(ds), dow = d.getDay(), m = d.getMonth()+1;
  const peak = (m===1||m===7||m===8), semi = (m===12||m===2);
  if (dow>=1 && dow<=4) return peak||semi ? 600000 : 500000;
  if (dow===5) return 700000;
  if (dow===6) return peak ? 1200000 : (semi ? 1000000 : 700000);
  return peak||semi ? 700000 : 600000;
}

/* ── helpers ── */
const pad = n => String(n).padStart(2,'0');
function ds(d){ return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate()); }
function parseDS(s){ const [y,m,d]=s.split('-').map(Number); return new Date(y,m-1,d); }
function addDays(s,n){ const d=parseDS(s); d.setDate(d.getDate()+n); return ds(d); }
function fmt(n){ return (n==null?'—':n.toLocaleString('en-US')); }
function won(n){ if(n==null) return '—'; return LANG==='ko' ? fmt(n)+'원' : '₩'+fmt(n); }
const DOW=['일','월','화','수','목','금','토'];
const DOW_EN=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const DOW_ZH=['日','一','二','三','四','五','六'];
const MON_EN=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function dowOf(s){ return DOW[parseDS(s).getDay()]; }
function pretty(s){
  const d=parseDS(s), w=d.getDay();
  if(LANG==='en') return DOW_EN[w]+', '+d.getDate()+' '+MON_EN[d.getMonth()];
  if(LANG==='zh') return (d.getMonth()+1)+'月'+d.getDate()+'日（'+DOW_ZH[w]+'）';
  return (d.getMonth()+1)+'월 '+d.getDate()+'일 ('+DOW[w]+')';
}
function prettyFull(s){
  const d=parseDS(s), w=d.getDay();
  if(LANG==='en') return DOW_EN[w]+', '+d.getDate()+' '+MON_EN[d.getMonth()]+' '+d.getFullYear();
  if(LANG==='zh') return d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日（'+DOW_ZH[w]+'）';
  return d.getFullYear()+'. '+pretty(s);
}
function monthLabel(y,m){
  if(LANG==='en') return MON_EN[m]+' '+y;
  if(LANG==='zh') return y+'年'+(m+1)+'月';
  return y+'년 '+(m+1)+'월';
}
function nightsLabel(n){ return L(n+'박', n+(n===1?' night':' nights'), n+' 晚'); }

/* ── state ── */
const LS = {
  get(k,fb){ try{ const v=localStorage.getItem(k); return v?JSON.parse(v):fb; }catch(e){ return fb; } },
  set(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){} }
};
let ST = {
  y:2026, m:10,          // 달력 표시 (2026-11)
  in:null, out:null,
  adults:8, children:0, infants:0,
  kidsroom:false, coupon:true,
  reservations: LS.get('tg_reservations',[]),
  blocks: LS.get('tg_blocks',{}),          // {date: {src:'airbnb'|'host'|'ical', note}}
  cfg: loadCfg()
};
function saveAll(){ LS.set('tg_reservations',ST.reservations); LS.set('tg_blocks',ST.blocks); LS.set('tg_cfg',ST.cfg); LS.set('tg_cfg_v',1); }
function loadCfg(){
  const d={ bank:'카카오뱅크 (KakaoBank)', account:'7979-37-59001', holder:'송경화', depositNote:'예약 후 24시간 내 입금' };
  if(LS.get('tg_cfg_v',0)<1) return d;
  return Object.assign({}, d, LS.get('tg_cfg',{}));
}

/* ═══════════════════════════════════════════════════════════
   CLOUD — Firebase Firestore 실시간 서버 (무료 Spark 플랜)
   예약·날짜 차단·계좌 설정이 모든 기기에 실시간으로 공유됩니다.
   연결이 안 되는 환경(오프라인·방화벽)에서는 이 브라우저 저장소로
   자동 폴백해 앱이 그대로 동작합니다.
   ═══════════════════════════════════════════════════════════ */
const FB_CFG = {
  apiKey: "AIzaSyBQ3p-HNEYmsPjrvzW5Eow6sdzj9jGBZTc",
  authDomain: "thegwangan-booking.firebaseapp.com",
  projectId: "thegwangan-booking",
  storageBucket: "thegwangan-booking.firebasestorage.app",
  messagingSenderId: "159741444156",
  appId: "1:159741444156:web:f38cad59da6c792e518339"
};
const HOST_EMAIL = 'inthespaceinterior@gmail.com';
const CLOUD = { on:false, db:null, auth:null, uid:null, user:null, host:false, live:false, err:null };

function initCloud(){
  try{
    if(typeof firebase === 'undefined' || !firebase.initializeApp) throw new Error('sdk');
    firebase.initializeApp(FB_CFG);
    CLOUD.db = firebase.firestore();
    CLOUD.auth = firebase.auth();
    CLOUD.on = true;
    CLOUD.auth.onAuthStateChanged(u=>{
      CLOUD.user = u || null;
      CLOUD.uid = u ? u.uid : null;
      CLOUD.host = !!(u && u.email === HOST_EMAIL);
      paintCloud();
      if(hostCurrent==='res'||hostCurrent==='cfg'||hostCurrent==='cal') hostTab(hostCurrent);
      if(document.getElementById('mineModal').classList.contains('show')) openMine();
    });
    CLOUD.auth.signInAnonymously().catch(e=>{ console.warn('[cloud] anon', e && e.code); });
    watchCloud();
  }catch(e){
    CLOUD.on = false; CLOUD.err = (e && e.message) || 'init';
    console.warn('[cloud] init failed', e);
    paintCloud();
  }
}

function watchCloud(){
  CLOUD.db.collection('bookings').onSnapshot(snap=>{
    ST.reservations = snap.docs.map(d=>Object.assign({docId:d.id}, d.data()))
      .sort((a,b)=>String(b.createdAt||'').localeCompare(String(a.createdAt||'')));
    CLOUD.live = true; CLOUD.err = null;
    paintCloud(); refreshUI();
    if(document.getElementById('mineModal').classList.contains('show')) openMine();
    if(hostCurrent==='res' && document.getElementById('hostModal').classList.contains('show')) hostTab('res');
  }, e=>{ CLOUD.live=false; CLOUD.err=(e&&e.code)||'read'; paintCloud(); console.warn('[cloud] bookings', e); });

  CLOUD.db.collection('blocks').onSnapshot(snap=>{
    const b={}; snap.docs.forEach(d=>{ b[d.id]=Object.assign({}, d.data()); });
    ST.blocks = b; refreshUI();
    if(hostCurrent==='ical'||hostCurrent==='cal') hostTab(hostCurrent);
  }, e=>{ console.warn('[cloud] blocks', e); });

  CLOUD.db.collection('config').doc('site').onSnapshot(doc=>{
    if(!doc.exists) return;
    ST.cfg = Object.assign({}, ST.cfg, doc.data());
    if(hostCurrent==='cfg' && document.getElementById('hostModal').classList.contains('show')) hostTab('cfg');
    renderQuote();
  }, e=>{ console.warn('[cloud] config', e); });
}

function refreshUI(){
  if(typeof renderCals==='function'){ renderCals(); renderQuote(); }
  if(typeof syncSearch==='function') syncSearch();
}
function paintCloud(){
  const el=document.getElementById('cloudState'); if(!el) return;
  if(!CLOUD.on){ el.textContent = L('이 기기에만 저장 (오프라인 모드)','Saved on this device only (offline mode)','僅儲存在此裝置（離線模式）'); return; }
  if(CLOUD.err){ el.textContent = L('서버 연결 오류 — 이 기기에만 저장','Server error — saving on this device','伺服器連線錯誤——僅存於此裝置'); return; }
  if(CLOUD.host) el.textContent = L('서버 실시간 연결 · 호스트 로그인됨','Live server · host signed in','伺服器即時連線 · 房東已登入');
  else if(CLOUD.live) el.textContent = L('서버 실시간 연결됨','Live server connected','伺服器已即時連線');
  else el.textContent = L('서버 연결 중…','Connecting to server…','正在連線伺服器…');
}

async function ensureAnon(){
  if(CLOUD.auth.currentUser) return CLOUD.auth.currentUser;
  const cred = await CLOUD.auth.signInAnonymously();
  return cred.user;
}

/* 쓰기: 예약 생성 */
async function cloudAddBooking(rec){
  if(!CLOUD.on) return {ok:false, offline:true};
  const u = await ensureAnon();
  const data = Object.assign({}, rec, {
    ownerUid: u.uid, ownerAnonymous: !!u.isAnonymous,
    createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  });
  delete data.docId;
  await CLOUD.db.collection('bookings').doc(rec.id).set(data);
  return {ok:true};
}
/* 쓰기: 예약 상태 변경 (입금확인·취소) */
async function cloudUpdateBooking(docId, patch, minimal){
  if(!CLOUD.on) return {ok:false, offline:true};
  const data = minimal ? Object.assign({}, patch)
                       : Object.assign({updatedAt:new Date().toISOString()}, patch);
  await CLOUD.db.collection('bookings').doc(docId).update(data);
  return {ok:true};
}
/* 쓰기: 날짜 차단/해제 */
async function cloudSetBlock(date, val){
  if(!CLOUD.on) return {ok:false, offline:true};
  const ref = CLOUD.db.collection('blocks').doc(date);
  if(val) await ref.set(Object.assign({updatedAt:new Date().toISOString()}, val));
  else await ref.delete();
  return {ok:true};
}
/* 쓰기: 계좌·설정 */
async function cloudSaveCfg(cfg){
  if(!CLOUD.on) return {ok:false, offline:true};
  await CLOUD.db.collection('config').doc('site').set(Object.assign({updatedAt:new Date().toISOString()}, cfg), {merge:true});
  return {ok:true};
}
function cloudErrMsg(e){
  const c = (e && e.code) || '';
  if(String(c).indexOf('permission-denied')>=0) return L('권한이 없습니다 — 호스트 로그인이 필요합니다','Permission denied — host sign-in required','權限不足——需要房東登入');
  if(String(c).indexOf('unavailable')>=0) return L('서버에 연결할 수 없습니다. 잠시 후 다시 시도해 주세요','Cannot reach the server. Please try again','無法連線伺服器，請稍後再試');
  return L('저장에 실패했습니다','Could not save','儲存失敗');
}
function hostSignIn(){
  if(!CLOUD.on){ toast(L('서버에 연결되어 있지 않습니다','Not connected to the server','未連線伺服器')); return; }
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  CLOUD.auth.signInWithPopup(provider).then(res=>{
    if(!res.user || res.user.email !== HOST_EMAIL){
      const em = res.user ? res.user.email : '';
      CLOUD.auth.signOut().then(()=>CLOUD.auth.signInAnonymously().catch(()=>{}));
      toast(L('호스트 계정이 아닙니다: ','Not the host account: ','非房東帳號：')+em);
      return;
    }
    toast(L('호스트로 로그인했습니다','Signed in as host','已以房東身分登入'));
  }).catch(e=>{
    if((e&&e.code)==='auth/popup-closed-by-user'||(e&&e.code)==='auth/cancelled-popup-request') return;
    toast(L('로그인 실패: ','Sign-in failed: ','登入失敗：')+((e&&e.code)||(e&&e.message)||''));
  });
}
function hostSignOut(){
  CLOUD.auth.signOut().then(()=>CLOUD.auth.signInAnonymously().catch(()=>{})).then(()=>toast(L('로그아웃했습니다','Signed out','已登出')));
}
function hostAuthStrip(){
  if(!CLOUD.on) return '<div class="warnbox" style="background:#FFF6E3;border:1px solid #EBD9A8;padding:10px 12px;font-size:12px;color:#6A5312;margin-bottom:14px">'+L('서버 연결 없이 이 기기에만 저장 중입니다.','Working offline — data stays on this device.','離線作業中——資料僅存於此裝置。')+'</div>';
  if(CLOUD.host) return '<div style="background:#EEF6F0;border:1px solid #CBE3D2;padding:9px 12px;font-size:12px;color:#22573B;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;gap:10px"><span>'+L('호스트 로그인됨 · ','Host signed in · ','房東已登入 · ')+esc(CLOUD.user.email||'')+'</span><button class="ghost-mini" onclick="hostSignOut()">'+L('로그아웃','Sign out','登出')+'</button></div>';
  return '<div style="background:#FFF6E3;border:1px solid #EBD9A8;padding:10px 12px;font-size:12px;color:#6A5312;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap"><span>'+L('예약 확인·입금확인·취소·날짜 차단은 호스트 로그인이 필요합니다. (조회는 자유)','Viewing is open; confirming, cancelling and blocking dates need host sign-in.','可自由查看；確認、取消與關閉日期需房東登入。')+'</span><button class="btn gold" style="padding:7px 13px;font-size:12px" onclick="hostSignIn()">'+L('호스트 구글 로그인','Host Google sign-in','房東 Google 登入')+'</button></div>';
}

/* ── availability ── */
function baseOf(ds){ return NAVER[ds] || null; }
function ruleState(ds){
  if (ds>TODAY && ds>OPEN_UNTIL) return 'unopened';
  return 'sold';
}
function stateOf(ds){
  if (ds < TODAY) return 'past';
  if (isReserved(ds)) return 'reserved';
  const blk = ST.blocks[ds];
  if (blk && !blk.forceOpen) return 'blocked';
  if (blk && blk.forceOpen) return 'open';
  const b = baseOf(ds);
  if (!b) return ruleState(ds);
  return b[1];
}
function isReserved(ds){
  return ST.reservations.some(r => r.status!=='cancel' && ds >= r.checkIn && ds < r.checkOut);
}
function priceOf(ds){
  const b = baseOf(ds);
  return b && b[0] ? b[0] : rulePrice(ds);
}
function isOpen(ds){ return stateOf(ds)==='open'; }
function stateLabel(s){
  const M={
    open:L('예약 가능','Available','可預訂'),
    closed:L('판매중지','Not on sale','未開賣'),
    sold:L('마감','Booked / closed','已滿'),
    past:L('지난 날짜','Past date','已過日期'),
    reserved:L('예약 완료','Booked','已預訂'),
    blocked:L('차단됨','Blocked','已關閉'),
    unopened:L('판매 미오픈','Not yet open','尚未開賣')
  };
  return M[s]||s;
}

/* ── quote ── */
function nights(){ if(!ST.in||!ST.out) return 0; return Math.round((parseDS(ST.out)-parseDS(ST.in))/86400000); }
function overGuests(){ return Math.max(0, ST.adults+ST.children-BASE_GUESTS); }
function quote(){
  const n = nights(); if(n<=0) return null;
  let nightly = [], sum = 0, blockedIn = null;
  for(let i=0;i<n;i++){
    const d = addDays(ST.in,i);
    const st = stateOf(d);
    if(st!=='open') blockedIn = d;
    const p = priceOf(d); nightly.push({d,p}); sum += p;
  }
  const extra = overGuests()*EXTRA_PERSON_FEE*n;
  const longStay = n>=2 ? (n-1)*LONGSTAY_DISCOUNT : 0;
  const kids = ST.kidsroom ? KIDSROOM_FEE : 0;
  const coupon = (ST.kidsroom && ST.coupon) ? KIDSROOM_FEE : 0;
  const total = sum - longStay + extra + kids - coupon;
  return {n, nightly, sum, extra, longStay, kids, coupon, total, blockedIn};
}

/* ── calendar render ── */
function renderCals(){
  const box = [document.getElementById('cal1'), document.getElementById('cal2')];
  for(let k=0;k<2;k++){
    let y = ST.y, m = ST.m + k;
    if(m>11){ m-=12; y+=1; }
    box[k].innerHTML = monthHTML(y,m);
  }
  document.getElementById('calTitle').textContent = monthLabel(ST.y, ST.m);
}
function monthHTML(y,m){
  const first = new Date(y,m,1), start = first.getDay();
  const last = new Date(y,m+1,0).getDate();
  const dows = LANG==='en'?DOW_EN:(LANG==='zh'?DOW_ZH:DOW);
  let h = '<div class="dow">'+dows.map(d=>'<span>'+d+'</span>').join('')+'</div><div class="grid">';
  for(let i=0;i<start;i++) h+='<span></span>';
  for(let d=1;d<=last;d++){
    const dsr = y+'-'+pad(m+1)+'-'+pad(d), st = stateOf(dsr);
    const asOut = !!(ST.in && !ST.out && dsr > ST.in && st !== 'past');
    const cls = ['d','open'];
    if(st!=='open') cls[1]='off';
    if(asOut && st!=='open') cls.push('asout');
    if(dsr===ST.in || dsr===ST.out) cls.push(dsr===ST.in?'start':'end');
    else if(ST.in && ST.out && dsr>ST.in && dsr<ST.out) cls.push('inrange');
    if(dsr===TODAY) cls.push('today');
    const p = priceOf(dsr);
    const priceTxt = (st==='open'||st==='reserved') ? calPriceShort(p) : '';
    const dis = (st==='open' || asOut) ? '' : ' disabled';
    const titleTxt = pretty(dsr)+' · '+(asOut && st!=='open' ? L('체크아웃일로 선택 가능','Can be your check-out day','可選為退房日') : stateLabel(st))+(st==='open'?' · '+won(p):'');
    h += '<button class="'+cls.join(' ')+'"'+dis+' onclick="pickDate(\''+dsr+'\')" title="'+titleTxt+'">'
       + '<span class="n">'+d+'</span>'+(priceTxt?'<span class="p">'+priceTxt+'</span>':'')+'</button>';
  }
  h += '</div>';
  return h;
}
function shiftMonth(d){
  ST.m += d;
  if(ST.m>11){ ST.m=0; ST.y++; }
  if(ST.m<0){ ST.m=11; ST.y--; }
  renderCals();
}
function pickDate(dsr){
  const st = stateOf(dsr);
  if(!ST.in || (ST.in && ST.out)){
    if(st!=='open') return;
    ST.in = dsr; ST.out = null;
  } else if(dsr > ST.in){
    ST.out = dsr;            // 마감·판매중지일도 체크아웃일로는 선택 가능
  } else {
    if(st!=='open') return;
    ST.in = dsr; ST.out = null;
  }
  renderCals(); renderQuote(); syncSearch();
}

/* ── quote render ── */
function renderQuote(){
  const qh = document.querySelector('#quoteCard .qhead b');
  if(qh) qh.textContent = L('예약 견적','Your quote','預訂報價');
  const qt=document.getElementById('qTotalLab'); if(qt) qt.textContent=L('총 결제 금액','Total','應付總額');
  const qn=document.querySelector('#quoteCard .qnote');
  if(qn) qn.textContent = L('결제 수단: 신용·체크카드 / 해외카드(Visa·Mastercard·JCB) / PayPal / 계좌이체(무통장). 예약 확정 시 해당 날짜는 자동으로 마감됩니다.',
    'Payment: Korean credit/debit card, international card (Visa · Mastercard · JCB), PayPal, or bank transfer. Confirming a booking closes those dates immediately.',
    '付款方式：韓國信用卡/簽帳卡、海外信用卡（Visa·Mastercard·JCB）、PayPal 或銀行轉帳。確認預訂後該日期將自動關閉。');
  const qb=document.getElementById('qBtn');
  if(qb && qb.disabled && !qb.textContent.includes('—')) qb.textContent = L('예약하기','Book now','立即預訂');

  const q = quote();
  const body = document.getElementById('qBody');
  const badge = document.getElementById('qBadge');
  const total = document.getElementById('qTotal');
  const btn = document.getElementById('qBtn');
  document.getElementById('selIn').textContent = ST.in? pretty(ST.in) : '—';
  document.getElementById('selOut').textContent = ST.out? pretty(ST.out) : '—';
  document.getElementById('selNights').textContent = q? nightsLabel(q.n) : '—';

  const fxEl = document.getElementById('qFx');
  if(!q){
    badge.textContent = ST.in? L('체크아웃 선택','Choose check-out','選擇退房日') : L('날짜 선택','Select dates','選擇日期');
    body.innerHTML = '<p style="font-size:13px;color:var(--muted);margin:4px 0 8px">'
      + (ST.in? pretty(ST.in)+L(' 체크인 — 체크아웃 날짜를 선택해 주세요.',' check-in — now choose your check-out date.',' 入住——請選擇退房日期。') : L('달력에서 체크인·체크아웃 날짜를 선택해 주세요.','Choose your check-in and check-out dates on the calendar.','請在日曆上選擇入住與退房日期。'))
      + '</p><div class="qline"><span>'+L('1박 요금','Nightly rate','每晚房價')+'</span><b>—</b></div>';
    total.textContent='—'; if(fxEl) fxEl.textContent=''; btn.disabled = true;
    renderBar();
    return;
  }
  let rows = '';
  q.nightly.forEach(x=>{
    rows += '<div class="qline"><span>'+pretty(x.d)+'</span><b>'+won(x.p)+'</b></div>';
  });
  rows += '<div class="qline sub"><span>'+L('숙박 요금 합계','Room total','住宿小計')+' ('+nightsLabel(q.n)+')</span><b>'+won(q.sum)+'</b></div>';
  if(q.longStay>0) rows += '<div class="qline disc"><span>'+L('연박 할인 (2박 이상 1박당 −5만)','Long-stay discount (₩50,000 off each extra night)','連住優惠（第 2 晚起每晚折 ₩50,000）')+'</span><b>−'+won(q.longStay)+'</b></div>';
  if(q.extra>0) rows += '<div class="qline"><span>'+L('인원 추가 ','Extra guests ','加人 ')+overGuests()+L('명 × '+q.n+'박',' × '+q.n+' nights', ' 名 × '+q.n+' 晚')+'</span><b>'+won(q.extra)+'</b></div>';
  if(q.kids>0) rows += '<div class="qline"><span>'+L('키즈룸','Kids’ room','兒童房')+'</span><b>'+won(q.kids)+'</b></div>';
  if(q.coupon>0) rows += '<div class="qline disc"><span>'+L('키즈룸·자쿠지 무료 쿠폰','Kids’ room & jacuzzi coupon','兒童房·按摩浴缸免費券')+'</span><b>−'+won(q.coupon)+'</b></div>';
  rows += '<div class="opt-row'+((ST.kidsroom&&ST.coupon)?' free':'')+'"><input type="checkbox" id="optKids" '+(ST.kidsroom?'checked':'')+' onchange="toggleKids()">'
        + '<label class="t" for="optKids">'+L('키즈룸 이용','Kids’ room','使用兒童房')+' <small>'+L('트램폴린·원목장난감·게임기 · 30,000원','Trampoline · wooden toys · console · ₩30,000','彈跳床·原木玩具·遊戲機 · ₩30,000')+'</small></label>'
        + '<span class="amt">'+((ST.kidsroom&&ST.coupon)?L('무료','Free','免費'):won(KIDSROOM_FEE))+'</span></div>';
  rows += '<div class="opt-row free"><input type="checkbox" checked disabled><label class="t">'+L('자쿠지 온수 이용','Jacuzzi hot water','按摩浴缸熱水')+' <small>'+L('온수 요금 없음','No charge','不收費')+'</small></label><span class="amt">'+L('무료','Free','免費')+'</span></div>';
  if(ST.kidsroom) rows += '<div class="opt-row"><input type="checkbox" id="optCoupon" '+(ST.coupon?'checked':'')+' onchange="toggleCoupon()"><label class="t" for="optCoupon">'+L('키즈룸·자쿠지 무료 쿠폰 적용','Apply kids’ room & jacuzzi coupon','套用兒童房·按摩浴缸免費券')+'</label><span class="amt">−'+won(KIDSROOM_FEE)+'</span></div>';

  body.innerHTML = rows;
  badge.textContent = nightsLabel(q.n);
  total.textContent = won(q.total);
  if(fxEl) fxEl.textContent = fxText(q.total);

  if(q.blockedIn){
    body.insertAdjacentHTML('afterbegin','<div class="demo-note" style="margin:0 0 10px">'+L('선택한 기간에 예약 불가 날짜(','Your stay includes an unavailable date (','您選擇的期間包含無法預訂的日期（')+pretty(q.blockedIn)+L(')가 포함되어 있습니다. 다시 선택해 주세요.','). Please choose again.','），請重新選擇。')+'</div>');
    btn.disabled = true; btn.textContent=L('날짜를 다시 선택하세요','Choose dates again','請重新選擇日期');
  }else{
    btn.disabled = false; btn.textContent=L('예약하기','Book now','立即預訂')+' · '+won(q.total);
  }
  renderBar();
}
function toggleKids(){ ST.kidsroom = !ST.kidsroom; renderQuote(); }
function toggleCoupon(){ ST.coupon = !ST.coupon; renderQuote(); }
function stepGuest(k,d){
  ST[k] = Math.max(0, ST[k]+d);
  if(k==='adults') ST.adults = Math.max(1, Math.min(MAX_GUESTS, ST.adults));
  if(k==='children'){ ST.children = Math.min(4, ST.children); if(ST.adults+ST.children>MAX_GUESTS) ST.children = MAX_GUESTS-ST.adults; }
  if(k==='infants') ST.infants = Math.min(6, ST.infants);
  document.getElementById('gAdults').textContent=ST.adults;
  document.getElementById('gChildren').textContent=ST.children;
  document.getElementById('gInfants').textContent=ST.infants;
  if(ST.adults+ST.children>MAX_GUESTS){ ST.children = MAX_GUESTS-ST.adults; document.getElementById('gChildren').textContent=ST.children; toast(L('최대 12인까지 예약 가능합니다','Up to 12 guests can stay','最多可入住 12 人')); }
  renderQuote();
}

/* ── search bar sync ── */
function syncSearch(){
  const si=document.getElementById('sbIn'), so=document.getElementById('sbOut');
  si.value = ST.in||''; so.value = ST.out||'';
  so.min = ST.in? addDays(ST.in,1) : TODAY;
  document.getElementById('sbInHint').textContent = ST.in? pretty(ST.in):L('날짜 선택','Select date','選擇日期');
  document.getElementById('sbOutHint').textContent = ST.out? pretty(ST.out):L('날짜 선택','Select date','選擇日期');
  const g = ST.adults+ST.children;
  const qnow = quote();
  document.getElementById('sbSum').textContent = L('총 '+g+'명',''+g+' guests','共 '+g+' 人')
    + (ST.infants?L(' + 유아 '+ST.infants,' + '+ST.infants+' infant(s)',' + 嬰兒 '+ST.infants):'')
    + L(' · 1박 ',' · per night from ',' · 每晚 ')+won(qnow?qnow.nightly[0].p:500000)+L('~','~','起');
}
function sbChanged(){
  const i=document.getElementById('sbIn').value, o=document.getElementById('sbOut').value;
  if(i) ST.in=i; if(o) ST.out=o; else ST.out=null;
  const g = parseInt(document.getElementById('sbGuests').value,10);
  ST.adults = g; ST.children=0;
  document.getElementById('gAdults').textContent=ST.adults;
  document.getElementById('gChildren').textContent=ST.children;
  renderCals(); renderQuote(); syncSearch();
}
function goBook(){
  if(!ST.in){
    // 첫 예약 가능일 자동 추천 (다음 날도 마감이면 1박만)
    pickEarliest();
  }
  document.getElementById('booking').scrollIntoView({behavior:'smooth'});
  renderCals(); renderQuote(); syncSearch();
}
function nextOpenAfter(d){
  for(let i=1;i<40;i++){ const x=addDays(d,i); if(stateOf(x)==='open') return x; }
  return null;
}

/* ── 원터치 날짜 칩 + 하단 고정 예약 바 ── */
function wonShort(n){
  if(n==null) return '—';
  if(LANG==='ko') return Math.round(n/10000)+'만원';
  if(LANG==='zh') return '₩'+Math.round(n/10000)+'萬';
  return n>=1000000 ? '₩'+(Math.round(n/100000)/10)+'m' : '₩'+Math.round(n/1000)+'k';
}
function calPriceShort(n){
  if(n==null) return '';
  if(LANG==='ko') return (n/10000)+'만';
  if(LANG==='zh') return Math.round(n/10000)+'萬';
  return Math.round(n/1000)+'k';
}
/* 실제 판매중(마감·차단 제외)인 다가오는 날짜만 1박 옵션으로 뽑는다 */
function quickPickOptions(max){
  const out=[], lim=max||6;
  for(let i=0;i<170 && out.length<lim;i++){
    const d=addDays(TODAY,i);
    if(stateOf(d)!=='open') continue;
    out.push({in:d, out:addDays(d,1), price:priceOf(d)});
  }
  return out;
}
function pickEarliest(){
  const o=quickPickOptions(1);
  if(!o.length) return false;
  ST.in=o[0].in; ST.out=o[0].out;
  return true;
}
function lowestOpenPrice(){
  const o=quickPickOptions(1);
  if(o.length) return o[0].price;
  let m=null;
  Object.keys(NAVER).forEach(k=>{ const v=NAVER[k]; if(v[0] && (m==null || v[0]<m)) m=v[0]; });
  return m||500000;
}
function renderBar(){
  const priceEl=document.getElementById('bbPrice'); if(!priceEl) return;
  const per=document.getElementById('bbPer'), sub=document.getElementById('bbSub'), btn=document.getElementById('bbBtn');
  const q=quote();
  if(q){
    priceEl.textContent=won(q.total);
    per.textContent=L('총 결제액','total','總額');
    sub.textContent=pretty(ST.in)+' → '+pretty(ST.out)+' · '+nightsLabel(q.n);
    btn.textContent=L('예약하기','Book now','立即預訂');
  }else{
    const o=quickPickOptions(1);
    priceEl.textContent=won(lowestOpenPrice())+L('~','~','起');
    per.textContent=L('/ 1박','/ night','/ 晚');
    sub.textContent = ST.in
      ? pretty(ST.in)+L(' 체크인 · 체크아웃 날짜를 고르세요',' check-in · choose your check-out',' 入住 · 請選退房日')
      : (o.length ? L('가장 빠른 체크인 ','Next check-in ','最快可入住 ')+pretty(o[0].in)
                  : L('예약 가능한 날짜 문의','Please ask about dates','請洽詢可預訂日期'));
    btn.textContent=L('바로 예약하기','Book now','立即預訂');
  }
}
function barBooking(){
  if(!quote()){
    if(!pickEarliest()){
      document.getElementById('booking').scrollIntoView({behavior:'smooth'});
      toast(L('지금 바로 예약 가능한 날짜가 없습니다. 010-2650-0013으로 문의해 주세요.','No dates are open right now — please call 010-2650-0013.','目前沒有可預訂的日期，請電 010-2650-0013。'));
      return;
    }
    renderCals(); renderQuote(); syncSearch();
  }
  startBooking();
}

/* ── gallery ── */
const PHOTOS = [
 {s:'p01',c:'living',t:['오션뷰 거실 & 아일랜드 주방','Ocean-view living & island kitchen','海景客廳與中島廚房']},
 {s:'p02',c:'living',t:['거실 라운지','Living lounge','客廳休憩區']},
 {s:'p03',c:'living',t:['밤바다 뷰 거실','Living room at night','夜景客廳']},
 {s:'p04',c:'living',t:['100인치 빔스크린','100-inch projection screen','100 吋投影螢幕']},
 {s:'p05',c:'kitchen',t:['아일랜드 주방','Island kitchen','中島廚房']},
 {s:'p06',c:'kitchen',t:['주방 전경','Kitchen, wide view','廚房全景']},
 {s:'p07',c:'kitchen',t:['바다 보이는 다이닝','Dining with a sea view','面海餐桌']},
 {s:'p08',c:'kitchen',t:['12인 다이닝테이블','12-seat dining table','12 人餐桌']},
 {s:'p09',c:'bed1',t:['침실 1','Bedroom 1','臥室 1']},
 {s:'p10',c:'bed1',t:['침실 1 · 창가','Bedroom 1 by the window','臥室 1・窗邊']},
 {s:'p11',c:'bed2',t:['침실 2 · 킹베드 2','Bedroom 2 · two king beds','臥室 2・兩張特大床']},
 {s:'p12',c:'bed2',t:['침실 2','Bedroom 2','臥室 2']},
 {s:'p13',c:'bed3',t:['침실 3 · 킹베드 2','Bedroom 3 · two king beds','臥室 3・兩張特大床']},
 {s:'p14',c:'bed3',t:['침실 3','Bedroom 3','臥室 3']},
 {s:'p15',c:'bath1',t:['욕실 1 · 샤워','Bathroom 1 · shower','衛浴 1・淋浴']},
 {s:'p16',c:'bath1',t:['욕실 1 · 세면','Bathroom 1 · vanity','衛浴 1・洗手台']},
 {s:'p17',c:'bath2',t:['욕실 2 · 세면','Bathroom 2 · vanity','衛浴 2・洗手台']},
 {s:'p18',c:'bath2',t:['욕실 2','Bathroom 2','衛浴 2']},
 {s:'p19',c:'entry',t:['현관','Entrance','玄關']},
 {s:'p20',c:'entry',t:['세탁실','Laundry','洗衣間']},
 {s:'p21',c:'pool',t:['자쿠지 · 야경','Jacuzzi at night','按摩浴缸・夜景']},
 {s:'p22',c:'pool',t:['오션뷰 온수풀','Heated pool with ocean view','海景溫水泳池']},
 {s:'p23',c:'pool',t:['노을 진 온수풀','Heated pool at sunset','夕陽下的溫水泳池']},
 {s:'p24',c:'kids',t:['키즈룸','Kids\u2019 room','兒童房']},
 {s:'p25',c:'kids',t:['키즈룸 · 트램폴린','Kids\u2019 room · trampoline','兒童房・彈跳床']},
 {s:'p26',c:'cinema',t:['영화관 (빔스크린)','Cinema corner','影院角落']},
 {s:'p27',c:'entry',t:['이벤트룸','Event room','活動空間']}
];
function pt(p){ return p.t[LANG==='en'?1:(LANG==='zh'?2:0)]; }
function catsList(){
  return [
    ['all',L('전체','All','全部')],
    ['living',L('거실','Living room','客廳')],
    ['bed1',L('침실 1','Bedroom 1','臥室 1')],
    ['bed2',L('침실 2','Bedroom 2','臥室 2')],
    ['bed3',L('침실 3','Bedroom 3','臥室 3')],
    ['bath1',L('욕실 1','Bathroom 1','衛浴 1')],
    ['bath2',L('욕실 2','Bathroom 2','衛浴 2')],
    ['pool',L('온수풀·자쿠지','Heated pool & jacuzzi','溫水泳池・按摩浴缸')],
    ['kids',L('키즈룸','Kids\u2019 room','兒童房')],
    ['kitchen',L('주방·다이닝','Kitchen & dining','廚房・餐桌')],
    ['cinema',L('빔스크린','Projection screen','投影螢幕')],
    ['entry',L('현관·기타','Entrance & more','玄關與其他')]
  ];
}
function renderGallery(){
  const mosaic = ['p01','p05','p21','p09','p24'];
  document.getElementById('galMosaic').innerHTML = mosaic.map((id,i)=>{
    const p = PHOTOS.find(x=>x.s===id);
    const more = i===4 ? '<span class="more">+'+ (PHOTOS.length-1) +'</span>' : '';
    return '<button onclick="openLightbox(\'all\')" aria-label="'+pt(p)+'"><img src="assets/'+id+'.webp" alt="'+pt(p)+'" loading="lazy"><span class="lab">'+pt(p)+'</span>'+more+'</button>';
  }).join('');
  document.getElementById('galCount').textContent = PHOTOS.length;
}
let lbCat='all', viewerList=[], viewerIdx=0;
function openLightbox(cat){
  lbCat = cat||'all';
  document.getElementById('lbChips').innerHTML = catsList().map(([k,v])=>
    '<button class="chip'+(k===lbCat?' on':'')+'" onclick="openLightbox(\''+k+'\')">'+v+'</button>').join('');
  const list = PHOTOS.filter(p=>lbCat==='all'||p.c===lbCat);
  viewerList = list;
  document.getElementById('lbCount').textContent = '· '+list.length+L('장',' photos',' 張');
  document.getElementById('lbGrid').innerHTML = list.map((p,i)=>
    '<button onclick="openViewer('+i+')"><img src="assets/'+p.s+'.webp" alt="'+pt(p)+'" loading="lazy"><span class="t">'+pt(p)+'</span></button>').join('');
  openModal('lbModal');
}
function openViewer(i){
  viewerIdx=i; const p=viewerList[i];
  document.getElementById('viewerImg').src='assets/'+p.s+'.webp';
  document.getElementById('viewerCap').textContent=pt(p)+'  ('+(i+1)+'/'+viewerList.length+')';
  const v=document.getElementById('viewer');
  if(!v.classList.contains('show')){ v.classList.add('show'); tgPush('viewer'); }
}
function viewerStep(d){
  viewerIdx = (viewerIdx+d+viewerList.length)%viewerList.length; openViewer(viewerIdx);
}
function closeViewer(){
  const v=document.getElementById('viewer');
  if(!v.classList.contains('show')) return;
  v.classList.remove('show');
  const i=TG_LAYERS.lastIndexOf('viewer'); if(i>=0) TG_LAYERS.splice(i,1);
  tgSync();
}

/* ═══════════════════════════════════════════════════════════
   브라우저 뒤로가기(popstate) ↔ 모달·라이트박스 연동
   · 모달·라이트박스를 열 때마다 history.pushState({tg:깊이})로 기록을 쌓는다.
   · 사용자가 브라우저 ← / 모바일 스와이프 뒤로가기를 누르면(popstate)
     그 기록 깊이까지만 레이어를 위에서부터 차례로 닫는다(페이지 이탈 없음).
   · ✕·배경 클릭·Esc로 닫으면 남은 기록만큼 history.go(-n)으로 정리해
     히스토리가 꼬이지 않게 한다.
   ═══════════════════════════════════════════════════════════ */
const TG_LAYERS=[];              /* 열린 레이어 이름 목록(아래→위) */
let TG_PENDING=0, TG_TIMER=null; /* 우리가 요청한 history.go(-n) 누적 / 디바운스 타이머 */
function tgDepth(){ const s=history.state; return (s && typeof s.tg==='number') ? s.tg : 0; }
function tgPush(name){
  TG_LAYERS.push(name);
  try{ history.pushState({tg:TG_LAYERS.length}, ''); }catch(e){}
}
function tgSync(){ if(TG_TIMER) return; TG_TIMER=setTimeout(function(){ TG_TIMER=null; tgSyncNow(); },0); }
function tgSyncNow(){
  const diff = (tgDepth()-TG_PENDING) - TG_LAYERS.length;
  if(diff>0){ TG_PENDING+=diff; try{ history.go(-diff); }catch(e){ TG_PENDING-=diff; } }
}
function tgHideDom(name){
  if(name==='viewer'){ document.getElementById('viewer').classList.remove('show'); return; }
  const el=document.getElementById(name); if(!el) return;
  el.classList.remove('show');
  if(name==='bookModal'){
    try{ captureBookInputs(); }catch(e){}
    try{ renderCals(); renderQuote(); }catch(e){}
  }
  if(!document.querySelector('.modal.show')) document.body.style.overflow='';
}
function tgCloseTop(){ const name=TG_LAYERS.pop(); if(name) tgHideDom(name); }
window.addEventListener('popstate', function(){
  TG_PENDING=0;
  const depth=tgDepth();
  let guard=0;
  while(TG_LAYERS.length>depth && guard++<12) tgCloseTop();
  if(!document.querySelector('.modal.show')) document.body.style.overflow='';
});

/* ── modal helpers ── */
function openModal(id){
  const el=document.getElementById(id); if(!el) return;
  if(!el.classList.contains('show')){ el.classList.add('show'); tgPush(id); }
  document.body.style.overflow='hidden';
}
function closeModal(id){
  const el=document.getElementById(id); if(!el) return;
  if(!el.classList.contains('show')) return;
  tgHideDom(id);
  const i=TG_LAYERS.lastIndexOf(id); if(i>=0) TG_LAYERS.splice(i,1);
  tgSync();
}
function toast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;
  t.classList.toggle('over-modal', !!document.querySelector('.modal.show'));
  t.classList.add('show');
  clearTimeout(window.__tt); window.__tt=setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=>{ if(!t.classList.contains('show')) t.textContent=''; },260); },2200);
}

/* ═══════════════════════════════════════════════════════════
   BOOKING FLOW — 원스크린(1-Page) 예약 + 결제
   예약 정보·인원·결제 수단을 한 화면에 이어 붙여,
   이름·연락처 입력 → 결제 수단 선택 → 확정을 화면 이동 없이 끝낸다.
   ═══════════════════════════════════════════════════════════ */
let BOOK = null;
function startBooking(){
  if(!ST.in) pickEarliest();
  if(ST.in && !ST.out && stateOf(ST.in)==='open') ST.out = addDays(ST.in,1);
  const q = quote();
  if(!q){ toast(L('체크아웃 날짜를 선택해 주세요','Please choose a check-out date','請選擇退房日期')); return; }
  if(q.blockedIn){ toast(L('선택한 기간에 예약할 수 없는 날짜가 있습니다. 다른 날짜를 선택해 주세요.','Your stay includes an unavailable date — please pick another.','所選期間包含無法預訂的日期，請重新選擇。')); return; }
  BOOK = {
    q,
    method: LANG==='ko' ? 'bank' : 'intl',      /* 언어에 맞는 기본 결제 수단 */
    card:{company:'', installment:'일시불'},
    depositor:'', depositorTouched:false,
    payer:{name:'',phone:'',email:'',memo:''}
  };
  renderBookStep();
  openModal('bookModal');
}
function setStep(n){ /* 원스크린에서는 단계 표시가 없다(완료 화면 호환용) */
  [1,2].forEach(i=>{ const el=document.getElementById('st'+i); if(el) el.classList.toggle('on', i===n); });
}

/* ── 예약 모달: 입력값을 잃지 않고 다시 그리기 ── */
function captureBookInputs(){
  if(!BOOK) return;
  const g = id => document.getElementById(id);
  const n=g('bName'), p=g('bPhone'), e=g('bEmail'), m=g('bMemo'), dep=g('depositor');
  if(n) BOOK.payer.name=n.value;
  if(p) BOOK.payer.phone=p.value;
  if(e) BOOK.payer.email=e.value;
  if(m) BOOK.payer.memo=m.value;
  if(dep){ BOOK.depositor=dep.value; if(dep.value!==BK_LAST_AUTO) BOOK.depositorTouched=true; }
}
let BK_LAST_AUTO=null;
function guestRowModal(k, label, sub){
  return '<div class="guests-row"><div class="lab">'+label+' <small>'+sub+'</small></div>'
    + '<div class="stepper"><button type="button" onclick="stepGuestModal(\''+k+'\',-1)" aria-label="−">−</button>'
    + '<b id="mg_'+k+'">'+ST[k]+'</b>'
    + '<button type="button" onclick="stepGuestModal(\''+k+'\',1)" aria-label="+">+</button></div></div>';
}
function stepGuestModal(k,d){
  captureBookInputs();
  stepGuest(k,d);
  if(BOOK) BOOK.q = quote() || BOOK.q;
  renderBookStep();
}
function toggleKidsModal(){
  captureBookInputs();
  toggleKids();
  if(BOOK) BOOK.q = quote() || BOOK.q;
  renderBookStep();
}
function bookSummary(q){
  return '<div class="sum">'
    + '<div class="row"><span>'+L('체크인','Check-in','入住')+'</span><b>'+prettyFull(ST.in)+' 15:00</b></div>'
    + '<div class="row"><span>'+L('체크아웃','Check-out','退房')+'</span><b>'+prettyFull(ST.out)+' 11:00</b></div>'
    + '<div class="row"><span>'+L('인원','Guests','人數')+'</span><b>'+L('성인 ','Adults ','成人 ')+ST.adults+' · '+L('아동 ','Children ','兒童 ')+ST.children+' · '+L('유아 ','Infants ','嬰兒 ')+ST.infants+'</b></div>'
    + '<div class="row"><span>'+L('숙박','Stay','住宿')+'</span><b>'+nightsLabel(q.n)+' · '+L('숙소 요금 ','Room total ','住宿小計 ')+won(q.sum)+'</b></div>'
    + (q.longStay?'<div class="row" style="color:var(--ok)"><span>'+L('연박 할인','Long-stay discount','連住優惠')+'</span><b>−'+won(q.longStay)+'</b></div>':'')
    + (q.extra?'<div class="row"><span>'+L('인원 추가 (기준 8인 초과)','Extra guests (over 8)','加人（超出 8 人）')+'</span><b>'+won(q.extra)+'</b></div>':'')
    + (q.kids?'<div class="row"><span>'+L('키즈룸','Kids’ room','兒童房')+'</span><b>'+won(q.kids)+'</b></div>':'')
    + (q.coupon?'<div class="row" style="color:var(--ok)"><span>'+L('키즈룸 무료 쿠폰','Kids’ room free coupon','兒童房免費券')+'</span><b>−'+won(q.coupon)+'</b></div>':'')
    + '<div class="row" style="border-top:1px solid var(--line);margin-top:6px;padding-top:8px"><span><b>'+L('총 결제 금액','Total','應付總額')+'</b></span><b>'+won(q.total)+'</b></div>'
    + '</div>';
}
function bookHeader(){
  const t=document.getElementById('bkTitle'); if(t) t.textContent = L('예약 · 결제 한 화면','Book & pay on one screen','預訂與付款 · 同一畫面');
  const b=document.getElementById('osTitle'); if(b) b.textContent = L('원스크린 예약','One-screen booking','單頁預訂');
  const s=document.getElementById('osSub'); if(s) s.textContent = L('정보 입력 → 결제 수단 → 확정. 화면을 넘기지 않습니다.','Details → payment → confirm, without changing screens.','填寫資料 → 付款 → 確認，不需切換畫面。');
}
function renderBookStep(){
  if(!BOOK) return;
  const fresh = quote(); if(fresh) BOOK.q = fresh;
  const q = BOOK.q;
  const pane = document.getElementById('bkPane'); if(!pane) return;
  const sheet = pane.closest('.sheet-scroll') || pane.closest('.sheet'); if(sheet) sheet.scrollTop = 0;
  bookHeader();

  pane.innerHTML =
      '<div class="bk-total"><span>'+L('총 결제 금액','Total to pay','應付總額')+'</span><b>'+won(q.total)+'</b></div>'
    + '<div class="os-sum">'
    +   '<div class="os-cell"><span>'+L('체크인','Check-in','入住')+'</span><b>'+prettyFull(ST.in)+'</b><em>15:00</em></div>'
    +   '<div class="os-cell"><span>'+L('체크아웃','Check-out','退房')+'</span><b>'+prettyFull(ST.out)+'</b><em>11:00</em></div>'
    +   '<div class="os-cell"><span>'+L('숙박','Stay','住宿')+'</span><b>'+nightsLabel(q.n)+'</b><em>'+L('숙소 요금 ','Room ','住宿 ')+won(q.sum)+'</em></div>'
    +   '<div class="os-cell"><span>'+L('인원','Guests','人數')+'</span><b>'+L('성인 ','A ')+ST.adults+' · '+L('아동 ','C ')+ST.children+' · '+L('유아 ','I ')+ST.infants+'</b><em>'+L('기준 8인','base 8','基本 8 人')+'</em></div>'
    + '</div>'
    + '<details class="os-detail"><summary>'+L('요금 상세 보기','See the price breakdown','查看費用明細')+'</summary>'+bookSummary(q)+'</details>'
    + '<div class="book-guest" style="margin-top:14px">'
    +   guestRowModal('adults', L('성인','Adults','成人'), L('만 13세 이상','13 and over','13 歲以上'))
    +   guestRowModal('children', L('아동','Children','兒童'), L('만 2~12세 · 기준 인원 포함','Age 2–12 · counted in base','2~12 歲 · 計入基本人數'))
    +   guestRowModal('infants', L('유아','Infants','嬰兒'), L('24개월 미만 · 무료','Under 24 months · free','未滿 24 個月 · 免費'))
    + '</div>'
    + '<div class="two">'
    +   '<div class="field"><label>'+L('예약자 성함','Your name','預訂人姓名')+' *</label><input id="bName" value="'+esc(BOOK.payer.name)+'" autocomplete="name" oninput="syncDepositor()" placeholder="'+L('홍길동','Full name','姓名')+'"></div>'
    +   '<div class="field"><label>'+L('연락처','Phone','聯絡電話')+' *</label><input id="bPhone" type="tel" inputmode="tel" autocomplete="tel" value="'+esc(BOOK.payer.phone)+'" placeholder="'+L('010-0000-0000','+82 10 0000 0000','+82 10-0000-0000')+'"></div>'
    + '</div>'
    + '<div class="book-opt"><label><input type="checkbox" id="bkKids" '+(ST.kidsroom?'checked':'')+' onchange="toggleKidsModal()"><span>'+L('키즈룸 이용 — 무료 쿠폰 자동 적용','Kids’ room — free coupon applied','使用兒童房 — 自動套用免費券')+'</span></label><span class="amt">'+L('무료','Free','免費')+'</span></div>'
    + '<details class="book-more"><summary>'+L('이메일 · 요청 사항 (선택)','Email & requests (optional)','電子郵件與需求（選填）')+'</summary>'
    +   '<div class="field"><label>'+L('이메일','Email','電子郵件')+'</label><input id="bEmail" type="email" autocomplete="email" value="'+esc(BOOK.payer.email)+'" placeholder="you@example.com"></div>'
    +   '<div class="field"><label>'+L('요청 사항','Requests','其他需求')+'</label><textarea id="bMemo" rows="2" placeholder="'+L('주차, 키즈룸 준비, 얼리 체크인 등','Parking, kids’ room set-up, early check-in…','停車、兒童房準備、提早入住等')+'">'+esc(BOOK.payer.memo)+'</textarea></div>'
    + '</details>'
    + '<div class="pay-label">'+L('결제 수단 선택','Choose a payment method','選擇付款方式')+'</div>'
    + '<div class="pay-tiles">'+ payOrder().map(id=>payTile(id,true)).join('') +'</div>'
    + '<div class="pay-alts">'+ payAlts().map(id=>payTile(id,false)).join('') +'</div>'
    + '<div id="payBody">'+ payBodyHTML(q) +'</div>'
    + '<p class="qnote" style="text-align:center;margin-top:12px">'+L('성함·연락처와 결제 수단만 고르면 끝납니다. 확정하면 해당 날짜가 모든 기기에서 바로 마감됩니다.','A name, a number and a payment method — that is all. Confirming closes those dates on every device.','只需姓名、電話與付款方式。確認後該日期將在所有裝置上立即關閉。')+'</p>';
}
/* 구 2단계 버튼 호환: 결제 수단으로 스크롤 */
function savePayer(){
  if(!BOOK) return;
  if(!ensurePayer()) return;
  const body=document.getElementById('payBody'); if(body) body.scrollIntoView({block:'center'});
}

const CARD_COMPANIES = ['KB국민카드','신한카드','삼성카드','현대카드','롯데카드','하나카드','우리카드','NH농협카드','BC카드','카카오뱅크','케이뱅크','토스뱅크'];
const INSTALLMENTS = ['일시불','2개월','3개월','4개월','5개월','6개월','12개월','24개월'];
const PAY_META = {
  bank:  {ic:'🏦', t:['계좌이체 · 카카오뱅크','Bank transfer · KakaoBank','銀行轉帳 · KakaoBank'], s:['계좌번호만 복사해 입금','Copy the number, send the transfer','複製帳號即可匯款']},
  card:  {ic:'💳', t:['신용·체크카드','Credit / debit card','信用卡／簽帳卡'], s:['토스 · 네이버 · 카카오페이','Toss · Naver · Kakao Pay','Toss · Naver · Kakao Pay']},
  intl:  {ic:'🌐', t:['해외카드','International card','海外信用卡'], s:['Visa · Mastercard · JCB','Visa · Mastercard · JCB','Visa · Mastercard · JCB']},
  paypal:{ic:'🅿️', t:['PayPal','PayPal','PayPal'], s:['해외 계정으로 결제','Pay from your own country','以海外帳戶付款']}
};
function payOrder(){ return LANG==='ko' ? ['bank','card'] : ['intl','paypal']; }        /* 언어별 메인 결제 수단 */
function payAlts(){ return LANG==='ko' ? ['intl','paypal'] : ['card','bank']; }
function payTitle(id){ const m=PAY_META[id]; return L(m.t[0],m.t[1],m.t[2]); }
function paySub(id){ const m=PAY_META[id]; return L(m.s[0],m.s[1],m.s[2]); }
function payTile(id,big){
  const m=PAY_META[id], on=!!(BOOK && BOOK.method===id);
  return '<button type="button" class="pay-tile'+(big?' big':'')+(on?' on':'')+'" id="pt_'+id+'" onclick="pickMethod(\''+id+'\')" aria-pressed="'+(on?'true':'false')+'">'
    + '<span class="ic">'+m.ic+'</span><b>'+payTitle(id)+'</b><small>'+paySub(id)+'</small></button>';
}
function pickMethod(m){
  if(!BOOK) return;
  captureBookInputs();
  BOOK.method = m;
  document.querySelectorAll('#bkPane .pay-tile').forEach(el=>{
    const on = el.id === 'pt_'+m;
    el.classList.toggle('on', on);
    el.setAttribute('aria-pressed', on?'true':'false');
  });
  const body = document.getElementById('payBody');
  if(body) body.innerHTML = payBodyHTML(BOOK.q);
}
function instLabel(c){ return c==='일시불' ? L('일시불','Lump sum','一次付清') : c.replace('개월', L('개월',' months',' 個月')); }
function accountBlock(q){
  const c=ST.cfg;
  q = q || (BOOK && BOOK.q) || quote();
  if(!c.account) return '<div class="acct" style="border-color:var(--warn);background:#FFF6EF"><div style="font-size:12px;color:var(--warn);font-weight:700">'+L('입금 계좌가 아직 등록되지 않았습니다','No bank account registered yet','尚未設定匯款帳戶')+'</div><div style="font-size:12px;color:#6A5312;margin-top:4px">'+L('호스트 패널 → 요금·계좌 탭에서 실제 계좌를 등록하세요.','Add the real account in Host panel → Rates & account.','請在房東後台 → 房價與帳戶 中設定。')+'</div></div>';
  return '<div class="acct">'
    + '<div style="font-size:11px;letter-spacing:.16em;color:var(--muted)">'+L('입금 계좌','Transfer to','匯款帳戶')+'</div>'
    + '<div style="font-size:12.5px;color:#46525E;margin-top:2px">'+esc(c.bank)+' · '+L('예금주 ','holder ','戶名 ')+esc(c.holder)+'</div>'
    + '<div class="n">'+esc(c.account)+'</div>'
    + '<div class="copy-row">'
    +   '<button type="button" class="copy-btn primary" onclick="copyAccount(true)">'+L('계좌번호 복사','Copy account no.','複製帳號')+'</button>'
    +   '<button type="button" class="copy-btn amount" onclick="copyAmount()">'+L(fmt(q.total)+'원 복사','Copy ₩'+fmt(q.total),'複製 ₩'+fmt(q.total))+'</button>'
    + '</div>'
    + '<div style="font-size:11.5px;color:var(--muted);margin-top:8px">'+esc(c.depositNote||'')+'</div></div>';
}
function payBodyHTML(q){
  q = q || (BOOK && BOOK.q) || quote();
  if(!q || !BOOK) return '';
  const meth = BOOK.method;

  if(meth==='bank'){
    return '<div class="pay-sheet">'
      + accountBlock(q)
      + '<div class="field" style="margin:12px 0 10px"><label>'+L('입금자명','Sender name','匯款人姓名')+'</label>'
      +   '<input id="depositor" value="'+esc(BOOK.depositor||BOOK.payer.name||'')+'" oninput="depositorTyped()" placeholder="'+L('입금하실 분 성함','Name on the transfer','匯款人姓名')+'"></div>'
      + '<button type="button" class="btn gold wide pay-main" onclick="confirmBank()">'+L('입금 예약 확정','Confirm booking','確認預訂')+' · '+won(q.total)+'</button>'
      + '<p class="qnote" style="text-align:center;margin-top:8px">'+L('확정하면 선택하신 날짜가 바로 마감됩니다. 입금 확인 후 예약이 최종 확정됩니다.','Confirming holds those dates immediately; the booking is final once the transfer arrives.','確認後立即關閉日期，入帳後完成預訂。')+'</p>'
      + '</div>';
  }
  if(meth==='card'){
    return '<div class="pay-sheet">'
      + '<div class="quickpay"><span>'+L('간편결제','Quick pay','快速付款')+'</span>'
      +   ['토스페이','네이버페이','카카오페이'].map(p=>'<button type="button" class="qp" onclick="quickPay(\''+p+'\')">'+p+'</button>').join('')
      + '</div>'
      + '<div class="two">'
      +   '<div class="field"><label>'+L('카드사','Card issuer','發卡銀行')+'</label><select id="cardCompany">'+CARD_COMPANIES.map(c=>'<option'+(BOOK.card.company===c?' selected':'')+'>'+c+'</option>').join('')+'</select></div>'
      +   '<div class="field"><label>'+L('할부','Instalments','分期')+'</label><select id="cardInstallment">'+INSTALLMENTS.map(c=>'<option'+(BOOK.card.installment===c?' selected':'')+'>'+instLabel(c)+'</option>').join('')+'</select></div>'
      + '</div>'
      + '<label class="agree"><input type="checkbox" id="cardAgree"> '+L('결제 정보 확인 및 개인정보 제공에 동의합니다.','I agree to the payment and privacy terms.','我同意付款資訊與個人資料條款。')+'</label>'
      + '<button type="button" class="btn gold wide pay-main" onclick="payCard()">'+won(q.total)+L(' 카드 결제',' card payment',' 信用卡付款')+'</button>'
      + '<p class="qnote" style="text-align:center;margin-top:8px">'+L('토스페이·네이버페이·카카오페이는 각 앱으로 넘어가 결제합니다(데모).','Toss, Naver Pay and Kakao Pay open their own app to pay (demo).','Toss、Naver Pay、Kakao Pay 將開啟各自 App 付款（示範）。')+'</p>'
      + '</div>';
  }
  if(meth==='intl'){
    return '<div class="pay-sheet">'
      + '<div class="two">'
      +   '<div class="field"><label>'+L('카드 브랜드','Card brand','卡片品牌')+'</label><select id="intlBrand">'+['Visa','Mastercard','JCB','American Express'].map(b=>'<option'+(String(BOOK.card.company).indexOf(b)===0?' selected':'')+'>'+b+'</option>').join('')+'</select></div>'
      +   '<div class="field"><label>'+L('할부','Instalments','分期')+'</label><select id="intlInstallment">'+INSTALLMENTS.map(c=>'<option'+(BOOK.card.installment===c?' selected':'')+'>'+instLabel(c)+'</option>').join('')+'</select></div>'
      + '</div>'
      + '<div class="acct" style="border-color:var(--sand);background:#fff;margin:0 0 12px">'+L('결제 금액','Amount','付款金額')+': <b>'+won(q.total)+'</b><div style="font-size:11.5px;color:var(--muted);margin-top:4px">'+fxText(q.total)+'</div></div>'
      + '<label class="agree"><input type="checkbox" id="intlAgree"> '+L('해외카드 결제 및 3-D Secure 인증에 동의합니다.','I agree to international card payment and 3-D Secure.','我同意海外信用卡付款與 3-D Secure 驗證。')+'</label>'
      + '<button type="button" class="btn gold wide pay-main" onclick="payIntl()">'+L('해외카드로 결제','Pay with international card','以外國信用卡付款')+'</button>'
      + '<button type="button" class="btn ghost wide" style="margin-top:8px" onclick="pickMethod(\'paypal\')">PayPal</button>'
      + '</div>';
  }
  /* paypal */
  return '<div class="pay-sheet">'
    + '<div class="acct" style="border-color:var(--sand);background:#fff;margin:0 0 12px">'+L('결제 금액','Amount','付款金額')+': <b>'+won(q.total)+'</b><div style="font-size:11.5px;color:var(--muted);margin-top:4px">'+fxText(q.total)+'</div></div>'
    + '<button type="button" class="btn gold wide pay-main" onclick="payPaypal()">PayPal '+L('로 결제','checkout','結帳')+'</button>'
    + '<p class="qnote" style="text-align:center;margin-top:8px">'+L('PayPal 계정으로 안전하게 결제합니다.','Pay securely with your PayPal account.','使用 PayPal 帳戶安全付款。')+'</p>'
    + '</div>';
}
function depositorTyped(){ if(BOOK){ const d=document.getElementById('depositor'); if(d){ BOOK.depositor=d.value; BOOK.depositorTouched=true; } } }
function syncDepositor(){
  if(!BOOK) return;
  const n=document.getElementById('bName'); if(!n) return;
  BOOK.payer.name = n.value;
  if(!BOOK.depositorTouched){
    BOOK.depositor = n.value; BK_LAST_AUTO = n.value;
    const d=document.getElementById('depositor'); if(d) d.value = n.value;
  }
}
function focusEl(id){ const el=document.getElementById(id); if(el){ try{el.scrollIntoView({block:'center'}); el.focus();}catch(e){} } }
function ensurePayer(){
  if(!BOOK) return false;
  captureBookInputs();
  const n=(BOOK.payer.name||'').trim(), p=(BOOK.payer.phone||'').trim();
  if(!n){ toast(L('예약자 성함을 입력해 주세요','Please enter your name','請輸入預訂人姓名')); focusEl('bName'); return false; }
  if(p.replace(/[^0-9]/g,'').length<8){ toast(L('연락처를 정확히 입력해 주세요','Please enter a valid phone number','請輸入正確的聯絡電話')); focusEl('bPhone'); return false; }
  if(!BOOK.depositor) BOOK.depositor = n;
  return true;
}

/* ── 카드 결제 (데모 PG) ── */
function payCard(){
  if(!ensurePayer()) return;
  const agree=document.getElementById('cardAgree');
  if(agree && !agree.checked){ toast(L('결제 동의에 체크해 주세요','Please tick the agreement','請勾選同意')); return; }
  BOOK.card.company=document.getElementById('cardCompany').value;
  BOOK.card.installment=document.getElementById('cardInstallment').value;
  demoPG(BOOK.card.company, BOOK.card.installment, false);
}
function quickPay(p){
  if(!ensurePayer()) return;
  BOOK.card={company:p, installment:'-'};
  demoPG(p, '-', false, p);
}
function payIntl(){
  if(!ensurePayer()) return;
  const a=document.getElementById('intlAgree');
  if(a && !a.checked){ toast(L('결제 동의에 체크해 주세요','Please tick the agreement','請勾選同意')); return; }
  BOOK.card.company=document.getElementById('intlBrand').value+' (international)';
  BOOK.card.installment=document.getElementById('intlInstallment').value;
  demoPG(BOOK.card.company, BOOK.card.installment, true);
}
function payPaypal(){ if(!ensurePayer()) return; demoPG('PayPal','-', true, 'PayPal'); }
function demoPG(company, installment, usd, brand){
  const q=BOOK.q;
  const amtHtml = usd ? won(q.total)+'<span style="font-size:14px;color:var(--muted)"> ('+fxText(q.total).replace(/^≈ /,'≈ ')+')</span>' : won(q.total);
  document.getElementById('pgBody').innerHTML =
    '<div class="brandline">THE GWANGAN · '+(brand||'SECURE PAY')+'</div>'
    + '<div style="font-size:12px;color:var(--muted)">'+L('결제 금액','Amount','付款金額')+'</div><div class="amt">'+amtHtml+'</div>'
    + '<div style="font-size:13px;color:#46525E">'+company+(installment&&installment!=='-'?' · '+instLabel(installment):'')+'</div>'
    + '<div class="spin"></div>'
    + '<div style="text-align:center;font-size:12.5px;color:var(--muted)" id="pgMsg">'+L('승인 요청 중…','Requesting authorisation…','授權處理中…')+'</div>';
  openModal('pgModal');
  setTimeout(()=>{
    document.getElementById('pgBody').innerHTML =
      '<div class="brandline">THE GWANGAN · '+(brand||'SECURE PAY')+'</div>'
      + '<div style="text-align:center;padding:10px 0 4px"><div style="width:56px;height:56px;border-radius:50%;background:#2E7D57;color:#fff;display:flex;align-items:center;justify-content:center;font-size:26px;margin:0 auto">✓</div>'
      + '<div class="ok" style="margin-top:14px;font-size:16px">'+L('승인 완료 (데모)','Approved (demo)','授權完成（示範）')+'</div>'
      + '<div style="font-size:12.5px;color:var(--muted);margin-top:6px">'+company+(installment&&installment!=='-'?' · '+instLabel(installment):'')+' · '+won(q.total)+'</div></div>'
      + '<div class="demo-note" style="margin:18px 0 0">'+L('실제 카드 승인은 발생하지 않았습니다. 실서비스에서는 PG사(나이스페이·토스페이먼츠·KG이니시스) 또는 PayPal 비즈니스 계정을 연동해야 합니다.','No real authorisation took place. Going live needs a PG merchant account (Nicepay, Toss Payments, KG Inicis) or a PayPal Business account.','未進行實際授權。正式上線需串接 PG（Nicepay、Toss Payments、KG Inicis）或 PayPal 商業帳戶。')+'</div>'
      + '<button class="btn gold wide" style="margin-top:12px" onclick="finishBooking(\''+(brand==='PayPal'?'paypal':(usd?'intl':'card'))+'\')">'+L('예약 확정하기','Confirm booking','確認預訂')+'</button>';
  }, 1600);
}
function esc(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

/* ── 계좌이체 ── */
function confirmBank(){
  if(!ensurePayer()) return;
  const dep=document.getElementById('depositor');
  if(dep){
    if(!dep.value.trim()){ toast(L('입금자명을 입력해 주세요','Please enter the sender name','請輸入匯款人姓名')); dep.focus(); return; }
    BOOK.depositor = dep.value.trim();
  }
  finishBooking('bank');
}
function copyText(txt, done){
  const fallback=()=>{
    try{
      const ta=document.createElement('textarea'); ta.value=txt;
      ta.style.position='fixed'; ta.style.top='-1000px'; ta.style.opacity='0';
      document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); ta.remove();
      toast(done||txt);
    }catch(e){ toast(txt); }
  };
  if(navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(txt).then(()=>toast(done||txt)).catch(fallback);
  else fallback();
}
function copyAccount(digits){
  if(!ST.cfg.account){ toast(L('등록된 계좌가 없습니다','No account registered','尚未設定帳戶')); return; }
  const digitsOnly = String(ST.cfg.account).replace(/[^0-9]/g,'');
  if(digits){
    copyText(digitsOnly, L('계좌번호 '+digitsOnly+'를 복사했습니다','Account number '+digitsOnly+' copied','已複製帳號 '+digitsOnly));
  }else{
    copyText(ST.cfg.bank+' '+ST.cfg.account+' ('+ST.cfg.holder+')', L('계좌 정보를 복사했습니다','Account details copied','已複製帳戶資訊'));
  }
}
function copyAmount(){
  const q=(BOOK&&BOOK.q)||quote(); if(!q) return;
  copyText(String(q.total), L('입금 금액 '+fmt(q.total)+'원을 복사했습니다 — 금액 칸에 붙여넣으세요.','Copied ₩'+fmt(q.total)+' — paste it into the amount field.','已複製 ₩'+fmt(q.total)+'——請貼到金額欄位。'));
}

/* ── 확정 ── */
async function finishBooking(method){
  const q=BOOK.q;
  const no = 'TG'+String(Date.now()).slice(-8);
  const rec = {
    id:no, checkIn:ST.in, checkOut:ST.out, nights:q.n,
    adults:ST.adults, children:ST.children, infants:ST.infants,
    kidsroom:ST.kidsroom, coupon:ST.coupon,
    sum:q.sum, longStay:q.longStay, extra:q.extra, total:q.total,
    method, status: method==='bank' ? 'wait' : 'paid',
    card: (method==='card'||method==='intl')? {...BOOK.card}:null,
    depositor: method==='bank'? BOOK.depositor : null,
    payer: BOOK.payer, createdAt:new Date().toISOString()
  };
  let synced = false;
  if(CLOUD.on){
    const btn = document.querySelector('#bkPane .btn.gold'); if(btn){ btn.disabled = true; btn.textContent = L('저장 중…','Saving…','儲存中…'); }
    try{ await cloudAddBooking(rec); synced = true; }
    catch(e){
      console.warn('[cloud] create', e);
      toast(cloudErrMsg(e));
      if(btn){ btn.disabled = false; btn.textContent = L('다시 시도','Try again','再試一次'); }
      return; // 서버에 저장되지 않았으면 날짜를 마감 처리하지 않는다
    }
  }
  ST.reservations.unshift(rec); saveAll();
  closeModal('pgModal');
  setStep(2);
  const payLabel = method==='bank' ? (L('계좌이체','Bank transfer','銀行轉帳')+' · '+L('입금자 ','from ','匯款人 ')+esc(BOOK.depositor))
    : method==='paypal' ? 'PayPal'
    : (BOOK.card.company+(BOOK.card.installment&&BOOK.card.installment!=='-'?' · '+instLabel(BOOK.card.installment):''));
  const stLabel = method==='bank' ? L('입금 대기 — 입금 확인 후 확정','Awaiting transfer — confirmed on receipt','待匯款——入帳後確認') : L('결제 완료 (데모)','Paid (demo)','已付款（示範）');
  document.getElementById('bkPane').innerHTML =
    '<div class="done"><div class="ico">✓</div><h3>'+(method==='bank'?L('입금 예약이 접수되었습니다','Your transfer booking is received','已受理您的轉帳預訂'):L('예약이 확정되었습니다','Your booking is confirmed','預訂已確認'))+'</h3>'
    + '<div style="color:var(--muted);font-size:13px">'+L('예약번호','Booking no.','預訂編號')+'</div><div class="no">'+no+'</div>'
    + '<div class="sum" style="text-align:left">'
    + '<div class="row"><span>'+L('숙소','Stay','住宿')+'</span><b>THE GWANGAN · '+L('60평 독채','60-pyeong private house','60 坪獨棟')+'</b></div>'
    + '<div class="row"><span>'+L('일정','Dates','日期')+'</span><b>'+prettyFull(ST.in)+' → '+prettyFull(ST.out)+' ('+nightsLabel(q.n)+')</b></div>'
    + '<div class="row"><span>'+L('인원','Guests','人數')+'</span><b>'+L('성인 ','Adults ','成人 ')+ST.adults+' · '+L('아동 ','Children ','兒童 ')+ST.children+' · '+L('유아 ','Infants ','嬰兒 ')+ST.infants+'</b></div>'
    + '<div class="row"><span>'+L('결제','Payment','付款')+'</span><b>'+payLabel+'</b></div>'
    + '<div class="row"><span>'+L('상태','Status','狀態')+'</span><b>'+stLabel+'</b></div>'
    + '<div class="big"><span style="font-size:12px;letter-spacing:.14em;color:var(--muted)">'+L('결제 금액','Amount','付款金額')+'</span><b>'+won(q.total)+'</b></div>'
    + '<div style="font-size:11.5px;color:var(--muted);text-align:right;margin-top:4px">'+fxText(q.total)+'</div>'
    + '</div>'
    + (method==='bank'? '<div class="acct">'+(ST.cfg.account? esc(ST.cfg.bank)+' '+esc(ST.cfg.account)+' ('+L('예금주 ','holder ','戶名 ')+esc(ST.cfg.holder)+')' : L('입금 계좌는 호스트가 등록 후 안내드립니다.','The host will send the account details.','房東將另行提供匯款帳號。'))+'<div style="font-size:11.5px;color:var(--muted);margin-top:6px">'+L('입금자명 ','Sender ')+esc(BOOK.depositor)+L(' 으로 ',' — ',' — ')+won(q.total)+L(' 입금','',' 請匯款')+'</div></div>':'')
    + '<div style="display:flex;gap:8px;justify-content:center;margin-top:16px;flex-wrap:wrap"><button class="btn ghost" onclick="downloadICS()">'+L('캘린더(.ics) 저장','Save to calendar (.ics)','儲存至行事曆（.ics）')+'</button>'
    + '<button class="btn ghost" onclick="openMine()">'+L('내 예약 보기','My bookings','查看我的預訂')+'</button>'
    + '<button class="btn" onclick="closeBooking();renderCals();renderQuote()">'+L('닫기','Close','關閉')+'</button></div>'
    + '<p class="qnote" style="text-align:center;margin-top:14px">'+(synced
        ? L('선택하신 날짜가 서버에 등록되어 모든 기기에서 예약 마감으로 잼깁니다.','Those dates are now held on the server and closed on every device.','您選擇的日期已在伺服器登記，所有裝置上都會顯示為已滿。')
        : L('서버에 연결되지 않아 이 기기에만 저장되었습니다.','Not connected to the server, so this booking was saved on this device only.','未連線伺服器，此預訂僅儲存在本裝置。'))+'</p></div>';
  ST.in=null; ST.out=null;
  renderCals(); renderQuote(); syncSearch();
}
function closeBooking(){ captureBookInputs(); closeModal('bookModal'); closeModal('pgModal'); renderCals(); renderQuote(); }

/* ── my reservations ── */
function openMine(){
  const body=document.getElementById('mineBody');
  const list = CLOUD.on ? ST.reservations.filter(r=>r.ownerUid===CLOUD.uid) : ST.reservations;
  if(!list.length){ body.innerHTML='<p style="color:var(--muted);font-size:13.5px">'+L('아직 예약 내역이 없습니다. 달력에서 날짜를 선택해 예약해 보세요.','No bookings yet. Pick dates on the calendar to make one.','尚無預訂紀錄。請在日曆上選擇日期預訂。')+'</p>'; }
  else {
    body.innerHTML = list.map(r=>{
      const st = r.status==='paid'?'<span class="status paid">'+L('결제완료','Paid','已付款')+'</span>'
        : r.status==='wait'?'<span class="status wait">'+L('입금대기','Awaiting transfer','待匯款')+'</span>'
        : '<span class="status cancel">'+L('취소','Cancelled','已取消')+'</span>';
      const payTxt = r.method==='card'?'카드':(r.method==='intl'?('해외카드 '+(r.card?r.card.company:'')).replace(' (international)',''):(r.method==='paypal'?'PayPal':(L('계좌이체 ','Bank transfer ')+esc(r.depositor||''))));
      const payShown = r.method==='card'?L('카드','Card','信用卡'):(r.method==='intl'?'Visa/MC/JCB':payTxt);
      return '<div class="res-item"><div class="m"><b>'+prettyFull(r.checkIn)+' → '+pretty(r.checkOut)+' · '+nightsLabel(r.nights)+'</b>'
        + '<small>'+L('예약번호 ','Booking no. ','預訂編號 ')+r.id+' · '+L('성인 ','Adults ','成人 ')+r.adults+'·'+L('아동 ','Children ','兒童 ')+r.children+' · '+won(r.total)+' · '+payShown+'</small></div>'
        + st + (r.status!=='cancel'?'<button class="ghost-mini" onclick="cancelRes(\''+r.id+'\')">'+L('취소','Cancel','取消')+'</button>':'')
        + '</div>';
    }).join('');
  }
  openModal('mineModal');
}
async function cancelRes(id){
  const r = ST.reservations.find(x=>x.id===id); if(!r) return;
  if(!confirm(L(prettyFull(r.checkIn)+' 예약을 취소할까요? 취소하면 해당 날짜가 다시 열립니다.',
                   'Cancel the booking starting '+prettyFull(r.checkIn)+'? Those dates will open again.',
                   '要取消 '+prettyFull(r.checkIn)+' 起的預訂嗎？取消後該日期將重新開放。'))) return;
  if(CLOUD.on){
    try{ await cloudUpdateBooking(r.docId||r.id, {status:'cancel', cancelledAt:new Date().toISOString()}, true); }
    catch(e){ console.warn('[cloud] cancel', e); toast(cloudErrMsg(e)); return; }
  }
  r.status='cancel'; saveAll(); openMine(); renderCals(); renderQuote();
  toast(L('예약이 취소되었습니다','Booking cancelled','預訂已取消'));
}

/* ═══════════════════════════════════════════════════════════
   iCal
   ═══════════════════════════════════════════════════════════ */
function icsEscape(s){ return String(s).replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/,/g,'\\,').replace(/;/g,'\\;'); }
function dt(s){ return s.replace(/-/g,''); }
function buildICS(){
  let out=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//THE GWANGAN//Booking//KO','CALSCALE:GREGORIAN','METHOD:PUBLISH','X-WR-CALNAME:더광안 예약'];
  ST.reservations.filter(r=>r.status!=='cancel').forEach(r=>{
    out.push('BEGIN:VEVENT');
    out.push('UID:'+r.id+'@thegwangan.app');
    out.push('DTSTAMP:'+new Date().toISOString().replace(/[-:]/g,'').split('.')[0]+'Z');
    out.push('DTSTART;VALUE=DATE:'+dt(r.checkIn));
    out.push('DTEND;VALUE=DATE:'+dt(r.checkOut));
    out.push('SUMMARY:'+icsEscape('더광안 예약 · '+r.payer.name+' ('+r.nights+'박)'));
    out.push('DESCRIPTION:'+icsEscape('예약번호 '+r.id+'\n인원 성인'+r.adults+'/아동'+r.children+'/유아'+r.infants+'\n결제 '+won(r.total)+' ('+r.method+')'));
    out.push('LOCATION:'+icsEscape('부산 수영구 민락수변로 13'));
    out.push('END:VEVENT');
  });
  Object.entries(ST.blocks).forEach(([d,b])=>{
    out.push('BEGIN:VEVENT');
    out.push('UID:'+d+'-'+encodeURIComponent(b.src||'block')+'@thegwangan.app');
    out.push('DTSTART;VALUE=DATE:'+dt(d));
    out.push('DTEND;VALUE=DATE:'+dt(addDays(d,1)));
    out.push('SUMMARY:'+icsEscape('차단 · '+(b.src||'block')+(b.note?' ('+b.note+')':'')));
    out.push('END:VEVENT');
  });
  out.push('END:VCALENDAR');
  return out.join('\r\n');
}
function downloadICS(){
  const blob=new Blob([buildICS()],{type:'text/calendar;charset=utf-8'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob); a.download='thegwangan-bookings.ics';
  document.body.appendChild(a); a.click(); a.remove();
  toast('.ics 파일을 내려받았습니다 — 에어비앤비·구글 캘린더에 가져올 수 있습니다');
}
function parseICS(text, src='ical'){
  const lines = text.replace(/\r\n/g,'\n').split('\n');
  let ev=null, added=0;
  const events=[];
  for(const raw of lines){
    const line = raw;
    if(line.startsWith('BEGIN:VEVENT')) ev={};
    else if(line.startsWith('END:VEVENT')){ if(ev&&ev.start){ events.push(ev); } ev=null; }
    else if(ev){
      if(/^DTSTART/.test(line)) ev.start = normICalDate(line.split(':').slice(1).join(':'));
      else if(/^DTEND/.test(line)) ev.end = normICalDate(line.split(':').slice(1).join(':'));
      else if(/^SUMMARY/.test(line)) ev.summary = line.split(':').slice(1).join(':');
    }
  }
  const pushed=[];
  events.forEach(e=>{
    if(!e.start) return;
    const end = e.end && e.end>e.start ? e.end : addDays(e.start,1);
    let d=e.start;
    while(d<end){ if(!ST.blocks[d]){ ST.blocks[d]={src, note:(e.summary||'').slice(0,40)}; pushed.push(d); added++; } d=addDays(d,1); }
  });
  saveAll();
  if(CLOUD.on && pushed.length){
    if(!CLOUD.host){
      toast(L('가져온 날짜는 호스트 로그인 후에 모든 기기에 반영됩니다','Imported dates reach every device after host sign-in','匯入日期需房東登入後才會同步到所有裝置'));
    } else {
      pushed.forEach(d=>cloudSetBlock(d, ST.blocks[d]).catch(er=>console.warn('[cloud] ical', er)));
    }
  }
  return {added, events: events.length};
}
function normICalDate(v){
  if(!v) return null;
  v=v.trim();
  if(/^\d{8}$/.test(v)) return v.slice(0,4)+'-'+v.slice(4,6)+'-'+v.slice(6,8);
  if(/^\d{8}T/.test(v)) return v.slice(0,4)+'-'+v.slice(4,6)+'-'+v.slice(6,8);
  return null;
}

/* ═══════════════════════════════════════════════════════════
   HOST PANEL
   ═══════════════════════════════════════════════════════════ */
let hostCurrent='cal';
function openHost(){ hostTab('cal', document.querySelector('.tabs button')); openModal('hostModal'); }
function hostTab(t, btn){
  hostCurrent=t;
  document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('on'));
  if(btn) btn.classList.add('on'); else document.querySelectorAll('.tabs button').forEach((b,i)=>{ if(['cal','ical','res','cfg','guide'][i]===t) b.classList.add('on'); });
  const body=document.getElementById('hostBody');
  if(t==='cal') body.innerHTML = hostCal();
  if(t==='ical') body.innerHTML = hostIcal();
  if(t==='res') body.innerHTML = hostRes();
  if(t==='cfg') body.innerHTML = hostCfg();
  if(t==='guide') body.innerHTML = hostGuide();
  body.insertAdjacentHTML('afterbegin', hostAuthStrip());
  if(LANG!=='ko') body.insertAdjacentHTML('afterbegin','<div class="demo-note">Host tools are kept in Korean for the owner. Guest-facing pages switch with the language menu.</div>');
}
function hostCal(){
  const selfN = ST.reservations.filter(r=>r.status!=='cancel').length;
  const airN = Object.values(ST.blocks).filter(b=>b.src==='airbnb').length;
  const navN = Object.values(NAVER).filter(v=>v[1]==='open'||v[1]==='sold').length;
  let cells='';
  const y=ST.y, m=ST.m, first=new Date(y,m,1).getDay(), last=new Date(y,m+1,0).getDate();
  for(let i=0;i<first;i++) cells+='<div class="c"></div>';
  for(let d=1;d<=last;d++){
    const dsr=y+'-'+pad(m+1)+'-'+pad(d);
    const b=baseOf(dsr), blk=ST.blocks[dsr], rv=isReserved(dsr);
    let cls='c'; let tag='';
    if(rv){ cls+=' self'; tag='자체'; }
    else if(blk){ cls+= blk.src==='airbnb'?' air':' off'; tag=blk.src==='airbnb'?'Airbnb':'차단'; }
    else if(b && b[1]==='sold'){ cls+=' off'; tag='마감'; }
    else if(b && b[1]==='open'){ cls+=' naver'; tag='네이버'; }
    else { cls+=' off'; tag='미오픈'; }
    if(dsr===TODAY) cls+=' imp';
    cells+='<div class="'+cls+'" title="'+dsr+'"><b>'+d+'</b><span class="tag">'+tag+'</span></div>';
  }
  return '<div class="chan">'
    + '<div><b><span class="dot" style="background:#2B4B6F"></span>자체 예약</b><span>'+selfN+'건 · 이 브라우저</span></div>'
    + '<div><b><span class="dot" style="background:#C0453F"></span>에어비앤비</b><span>iCal 가져오기 '+airN+'일</span></div>'
    + '<div><b><span class="dot" style="background:#2E7D57"></span>네이버 예약</b><span>참조 데이터 '+navN+'일</span></div></div>'
    + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">'
    + '<b style="font-family:var(--serif);font-size:16px">'+y+'년 '+(m+1)+'월 통합 캘린더</b>'
    + '<div style="display:flex;gap:6px"><button class="ghost-mini" onclick="shiftMonth(-1);hostTab(\'cal\')">‹</button><button class="ghost-mini" onclick="shiftMonth(1);hostTab(\'cal\')">›</button></div></div>'
    + '<div class="hcal">'
    + DOW.map(x=>'<div class="c" style="background:none;border:0;text-align:center;color:var(--muted);font-size:10px">'+x+'</div>').join('')
    + cells
    + '</div>'
    + '<div style="font-size:11.5px;color:var(--muted);margin:8px 0 14px">네이버(초록)=판매중 · 자체(파랑)=이 앱 예약 · 에어비앤비(빨강)=iCal 차단 · 회색=마감/미오픈</div>'
    + '<p style="font-size:12.5px;color:#46525E">정적 웹앱이므로 다른 채널의 달력을 원격으로 바꿀 수는 없습니다. 에어비앤비에서 내려받은 .ics를 가져오면 차단 날짜가 이 달력에 표시되고, 이 앱의 예약은 .ics로 내보내 에어비앤비·구글 캘린더에 반영할 수 있습니다.</p>';
}
function hostIcal(){
  return '<h4 style="font-size:14px;margin-bottom:6px">① 내보내기 — 더광안 예약 .ics</h4>'
    + '<p style="font-size:12.5px;color:#46525E">이 앱에 등록된 예약·차단 날짜를 iCalendar 형식으로 내려받습니다. 에어비앤비 캘린더 → <b>가져오기</b>, 구글캘린더 → <b>URL로 추가</b>에 사용하세요.</p>'
    + '<button class="btn" onclick="downloadICS()">.ics 내려받기</button>'
    + '<div style="height:1px;background:var(--line);margin:22px 0"></div>'
    + '<h4 style="font-size:14px;margin-bottom:6px">② 가져오기 — 에어비앤비 iCal</h4>'
    + '<p style="font-size:12.5px;color:#46525E">에어비앤비 캘린더 → <b>내보내기</b>에서 받은 .ics 파일을 선택하거나, 내용을 붙여넣으세요.</p>'
    + '<input type="file" accept=".ics,text/calendar" id="icsFile" style="font-size:12.5px;margin-bottom:10px">'
    + '<textarea id="icsText" rows="5" placeholder="BEGIN:VCALENDAR … END:VCALENDAR" style="width:100%;border:1px solid var(--line);padding:10px;font-size:11.5px;font-family:ui-monospace,monospace"></textarea>'
    + '<div style="display:flex;gap:8px;margin-top:8px"><button class="btn" onclick="importFromFile()">파일 가져오기</button><button class="btn ghost" onclick="importFromText()">붙여넣은 내용 가져오기</button></div>'
    + '<div style="height:1px;background:var(--line);margin:22px 0"></div>'
    + '<h4 style="font-size:14px;margin-bottom:6px">③ Airbnb iCal URL</h4>'
    + '<div style="display:flex;gap:8px"><input id="icsUrl" placeholder="https://www.airbnb.com/calendar/ical/819331064728703944.ics?s=..." style="flex:1;border:1px solid var(--line);padding:10px;font-size:12px">'
    + '<button class="btn ghost" onclick="fetchIcal()">불러오기</button></div>'
    + '<div class="warnbox" style="margin-top:10px">브라우저 보안(CORS) 정책 때문에 에어비앤비·네이버의 .ics URL을 이 페이지에서 직접 읽을 수 없습니다. 실서비스에서는 ⑴ 서버/프록시에서 주기적으로 .ics를 받아 DB에 반영하거나, ⑵ 채널매니저(에어비앤비 공식 API·호스텔월드·부킹닷컴 채널매니저 등)를 붙여야 양방향 자동 마감이 됩니다.</div>'
    + '<div style="margin-top:14px"><b style="font-size:12.5px">현재 차단 날짜 ('+Object.keys(ST.blocks).length+'일)</b>'
    + (Object.keys(ST.blocks).length? '<div style="max-height:120px;overflow:auto;font-size:12px;margin-top:6px">'+Object.entries(ST.blocks).sort().map(([d,b])=>d+' · '+b.src+(b.note?' · '+esc(b.note):'')).join('<br>')+'</div><button class="ghost-mini" style="margin-top:8px" onclick="clearBlocks()">모두 지우기</button>' : '<p style="font-size:12px;color:var(--muted)">없음</p>')
    + '</div>';
}
function importFromFile(){
  const f=document.getElementById('icsFile').files[0];
  if(!f){ toast('파일을 선택해 주세요'); return; }
  const rd=new FileReader();
  rd.onload=()=>{ const r=parseICS(rd.result,'airbnb'); toast(r.added+'일을 차단했습니다 (이벤트 '+r.events+'개)'); hostTab('ical'); };
  rd.readAsText(f);
}
function importFromText(){
  const t=document.getElementById('icsText').value;
  if(!t.trim()){ toast('내용을 붙여넣어 주세요'); return; }
  const r=parseICS(t,'airbnb'); toast(r.added+'일을 차단했습니다 (이벤트 '+r.events+'개)'); hostTab('ical');
}
function fetchIcal(){
  const u=document.getElementById('icsUrl').value.trim();
  if(!u){ toast('URL을 입력해 주세요'); return; }
  fetch(u).then(r=>r.text()).then(t=>{
    const r=parseICS(t,'airbnb'); toast(r.added+'일을 차단했습니다'); hostTab('ical');
  }).catch(()=>{
    toast('CORS로 직접 읽을 수 없습니다. .ics 파일을 내려받아 가져와 주세요');
  });
}
function clearBlocks(){ if(!confirm('가져온 차단 날짜를 모두 지울까요?')) return;
  const dates=Object.keys(ST.blocks);
  ST.blocks={}; saveAll(); hostTab('ical'); renderCals();
  if(CLOUD.on) dates.forEach(d=>cloudSetBlock(d,null).catch(e=>console.warn('[cloud] clear', e)));
}
function hostRes(){
  const list=ST.reservations;
  if(!list.length) return '<p style="font-size:13px;color:var(--muted)">자체 예약 내역이 없습니다.</p>';
  return '<table class="tbl"><thead><tr><th>예약번호</th><th>일정</th><th>인원</th><th>결제</th><th>상태</th><th></th></tr></thead><tbody>'
    + list.map(r=>'<tr><td>'+r.id+'</td><td>'+r.checkIn+' ~ '+r.checkOut+'</td><td>'+r.adults+'/'+r.children+'/'+r.infants+'</td><td>'+won(r.total)+'<br><small style="color:var(--muted)">'+(r.method==='card'?'카드':('계좌 '+esc(r.depositor||'')))+'</small></td>'
    + '<td>'+(r.status==='paid'?'<span class="status paid">결제완료</span>':r.status==='wait'?'<span class="status wait">입금대기</span>':'<span class="status cancel">취소</span>')+'</td>'
    + '<td>'+(r.status==='wait'?'<button class="ghost-mini" onclick="markPaid(\''+r.id+'\')">입금확인</button>':'')+'</td></tr>').join('')
    + '</tbody></table>';
}
function markPaid(id){ const r=ST.reservations.find(x=>x.id===id); if(!r) return;
  const done=()=>{ r.status='paid'; saveAll(); hostTab('res'); toast('입금 확인 처리했습니다'); };
  if(CLOUD.on){
    cloudUpdateBooking(r.docId||r.id, {status:'paid'}).then(done).catch(e=>{ console.warn('[cloud] markPaid', e); toast(cloudErrMsg(e)); });
  } else done();
}
function hostCfg(){
  return '<h4 style="font-size:14px;margin-bottom:8px">입금 계좌</h4>'
    + '<p style="font-size:12.5px;color:#46525E">계좌이체 예약 화면에 표시될 실제 계좌입니다. 비어 있으면 예약 화면에 “계좌 미등록”으로 안내됩니다.</p>'
    + '<div class="two"><div class="field"><label>은행</label><input id="cfBank" value="'+esc(ST.cfg.bank)+'" placeholder="예: 국민은행"></div>'
    + '<div class="field"><label>계좌번호</label><input id="cfAcct" value="'+esc(ST.cfg.account)+'" placeholder="000-000-000000"></div></div>'
    + '<div class="two"><div class="field"><label>예금주</label><input id="cfHolder" value="'+esc(ST.cfg.holder)+'" placeholder="예금주명"></div>'
    + '<div class="field"><label>입금 안내 문구</label><input id="cfNote" value="'+esc(ST.cfg.depositNote||'')+'" placeholder="예약 후 24시간 내 입금"></div></div>'
    + '<button class="btn" onclick="saveCfg()">계좌 저장</button>'
    + '<div style="height:1px;background:var(--line);margin:22px 0"></div>'
    + '<h4 style="font-size:14px;margin-bottom:8px">날짜 열기·닫기 (데모)</h4>'
    + '<p style="font-size:12.5px;color:#46525E">네이버에서 아직 열지 않은 날짜를 이 앱에서만 열어 시험해 볼 수 있습니다.</p>'
    + '<div style="display:flex;gap:8px"><input type="date" id="cfOpen" style="border:1px solid var(--line);padding:9px"><button class="btn ghost" onclick="openDate()">이 날짜 예약 열기</button><button class="btn ghost" onclick="blockDate()">이 날짜 차단</button></div>'
    + '<div style="height:1px;background:var(--line);margin:22px 0"></div>'
    + '<h4 style="font-size:14px;margin-bottom:8px">요금 정책 (확인된 값)</h4>'
    + '<table class="tbl"><tbody>'
    + '<tr><td>기준 인원</td><td>8인 / 최대 12인</td></tr>'
    + '<tr><td>인원 추가</td><td>1인·1박 30,000원 (24개월 미만 무료)</td></tr>'
    + '<tr><td>키즈룸</td><td>30,000원 (무료 쿠폰 배포 중)</td></tr>'
    + '<tr><td>연박 할인</td><td>2박 이상 추가 1박당 −50,000원</td></tr>'
    + '<tr><td>체크인/아웃</td><td>15:00 / 11:00</td></tr>'
    + '</tbody></table>';
}
function saveCfg(){
  const cfg={ bank:document.getElementById('cfBank').value.trim(), account:document.getElementById('cfAcct').value.trim(),
              holder:document.getElementById('cfHolder').value.trim(), depositNote:document.getElementById('cfNote').value.trim() };
  ST.cfg=Object.assign({}, ST.cfg, cfg); saveAll(); renderQuote();
  if(CLOUD.on){
    cloudSaveCfg(cfg).then(()=>{ toast('계좌 정보를 저장했습니다 (모든 기기에 반영)'); hostTab('cfg'); })
      .catch(e=>{ console.warn('[cloud] cfg', e); toast(cloudErrMsg(e)); });
  } else { toast('계좌 정보를 저장했습니다 (이 기기에만)'); hostTab('cfg'); }
}
function openDate(){
  const d=document.getElementById('cfOpen').value; if(!d){ toast('날짜를 선택해 주세요'); return; }
  const val={src:'host', note:'호스트 강제 오픈', forceOpen:true};
  ST.blocks[d]=val; saveAll(); renderCals(); toast(d+' 예약 오픈 (서버 반영 중)'); hostTab('cfg');
  if(CLOUD.on) cloudSetBlock(d, val).catch(e=>{ console.warn('[cloud] block', e); toast(cloudErrMsg(e)); });
}
function blockDate(){
  const d=document.getElementById('cfOpen').value; if(!d){ toast('날짜를 선택해 주세요'); return; }
  const val={src:'host', note:'호스트 차단'};
  ST.blocks[d]=val; saveAll(); renderCals(); toast(d+' 차단 (서버 반영 중)'); hostTab('cfg');
  if(CLOUD.on) cloudSetBlock(d, val).catch(e=>{ console.warn('[cloud] block', e); toast(cloudErrMsg(e)); });
}
function hostGuide(){
  return '<div class="guide">'
    + '<div class="okbox"><b>지금 이 앱에서 실제로 되는 것</b><br>· 네이버 예약에서 확인한 날짜별 요금·마감 상태 표시<br>· 예약 시 해당 날짜가 <b>서버(Firebase)에 저장되어 모든 기기에서 즉시 마감</b><br>· 어느 기기에서 들어온 예약이든 이 호스트 패널에서 실시간 조회·입금확인·취소<br>· 호스트가 차단·오프픈한 날짜도 모든 기기에 즉시 반영<br>· .ics 내보내기 / .ics 파일·텍스트 가져오기(가져온 날짜도 서버 저장)</div>'
    + '<div class="warnbox"><b>아직 안 되는 것</b><br>· 에어비앤비·네이버 서버 달력을 원격으로 마감(에어비앤비에서 이 앱으로는 .ics 가져오기로 가능)<br>· 카드 실제 승인, 입금 자동 확인</div>'
    + '<h4>실서비스 전환 시 필요한 연결</h4>'
    + '<ul>'
    + '<li><b>에어비앤비 양방향:</b> 에어비앤비 캘린더 iCal은 한쪽 방향(가져오기)만 지원합니다. 이 앱 예약을 에어비앤비에 자동 마감하려면 iCal URL을 서버에 두고 주기적으로 동기화하거나, 에어비앤비 API/채널매니저(호스텔월드·Smoobu·Guesty 등)를 연동해야 합니다.</li>'
    + '<li><b>네이버 예약:</b> 네이버 예약 파트너센터의 예약 관리와 연동하려면 네이버 예약 사업자 계정의 파트너 API(또는 채널매니저)가 필요합니다. 화면 자동화는 약관상 권장되지 않습니다.</li>'
    + '<li><b>결제:</b> 카드 결제는 PG사(토스페이먼츠·나이스페이·KG이니시스 등) 가맹점 키와 서버 승인 API가 필요합니다. 계좌이체 자동 확인은 가상계좌 발급(PG) 또는 입금 확인 서버(은행 API/오픈뱅킹)가 필요합니다.</li>'
    + '<li><b>공유 DB:</b> 예약·차단 날짜는 Firebase Firestore(프로젝트 thegwangan-booking · 서울 리전)에 저장되어 모든 기기·모든 접속자가 실시간으로 공유합니다. 보안 규칙상 손님은 자기 예약만 만들고 취소할 수 있고, 호스트 기능(입금확인·취소·날짜차단·계좌)은 호스트 계정 로그인에서만 동작합니다.</li>'
    + '</ul>'
    + '<h4>새 예약 알림 붙이기 (무료 플랜에서 가능한 방법)</h4>'
    + '<p>Spark(무료) 플랜에는 Cloud Functions 트리거나 Firebase 확장 기능이 없습니다. 대신 <b>Google Apps Script 시간 기반 트리거</b>로 Firestore를 5분마다 읽어 새 예약이 있으면 메일·알림을 보낼 수 있습니다. 준비된 스크립트는 <span class="code" style="display:inline-block;padding:1px 6px">work/thegwangan-app/notifications-apps-script.gs</span> 입니다.</p>'
    + '<ul><li>Apps Script에서 새 프로젝트 → 위 스크립트 붙여넣기 → <b>트리거</b>에서 <code>checkNewBookings</code>를 5분마다 실행으로 추가</li><li>메일 받을 주소만 바꾸면 됨(기본값: 호스트 지메일). 스크립트가 마지막 확인 시각을 저장해 중복 알림을 막아줍니다.</li></ul>'
    + '<h4>운영 순서 제안</h4>'
    + '<ul><li>1) 이 페이지를 숙소 소개·견적 안내용으로 먼저 사용</li><li>2) 결제는 기존 채널(네이버·에어비앤비)로 연결</li><li>3) 자체 결제를 원하면 PG 가맹 + 서버(예약 DB·iCal 동기화) 구축 후 전환</li></ul>'
    + '</div>';
}

/* ── reviews ── */
const REVIEWS = [
 {n:'Valerie', when:['5일 전','5 days ago','5 天前'], loc:'', t:[
   '지금까지 머문 숙소 중 가장 비싼 곳 중 하나였지만, 전망·주변 환경·숙소 모두 훌륭해서 전혀 아깝지 않았습니다. 필요한 모든 것이 갖춰져 있었고, 아이들은 키즈룸에 푹 빠졌어요.',
   'One of the most expensive places I have stayed, and worth every won — the view, the surroundings and the house were all superb. Everything we needed was there, and the kids disappeared into the playroom.',
   '住過最貴的住宿之一，但景觀、周邊環境與房子都無可挑剔，完全值得。需要的東西一應俱全，孩子們更是愛上兒童房。']},
 {n:'Achara', when:['2주 전','2 weeks ago','2 週前'], loc:['멜버른, 호주','Melbourne, Australia','墨爾本，澳洲'], t:[
   '사랑스러운 숙소! 깨끗하고 편안하며 관리가 잘 되어 있습니다. 강력 추천합니다.',
   'A lovely home! Clean, comfortable and well kept. Highly recommended.',
   '很棒的房源！乾淨舒適、維護得很好，強力推薦。']},
 {n:'Yi-Na', when:['3주 전','3 weeks ago','3 週前'], loc:'', t:[
   '훌륭한 전망과 충분한 공간. 인테리어가 매우 세련되었고 가족 모두 편안하게 지냈습니다.',
   'Great view and plenty of space. Very stylish interior — the whole family was comfortable.',
   '絕佳的景觀與充足的空間，裝潢非常有品味，全家都住得很舒適。']},
 {n:'Pitchayanin', when:['3주 전','3 weeks ago','3 週前'], loc:'', t:[
   '창문 앞에 해변이 있는 좋은 숙소. 주인은 매우 친절하고 신속하게 응답합니다.',
   'A great stay with the beach right outside the window. The host is kind and replies fast.',
   '窗外就是海灘的好住宿。房東親切且回覆迅速。']},
 {n:'Inch', when:['2026년 10월','Oct 2026','2026 年 10 月'], loc:'', t:[
   '가족 여행에 딱 좋은 숙소. 바로 아래가 해변이고 쇼핑·식사가 편리하며 휴양지 느낌도 납니다.',
   'Wonderful for a family trip — the beach is right below, shopping and dining are easy, and it feels like a resort.',
   '非常適合家庭旅遊——樓下就是海灘，購物用餐方便，還有度假感。']},
 {n:'Taewon', when:['2026년 9월','Sep 2026','2026 年 9 月'], loc:'', t:[
   '멋진 해안뷰에 드론쇼까지. 인테리어도 예쁘고 편의시설이 잘 갖춰져 가족 모두 만족했어요. 재방문 예정입니다.',
   'Superb coastal view and even the drone show. Lovely interior, well equipped — the whole family was happy. We will be back.',
   '漂亮的海景還有無人機表演。裝潢漂亮、設備齊全，全家都很滿意，一定會再來。']}
];
function renderReviews(){
  const grid=document.getElementById('revGrid'); if(!grid) return;
  const li = LANG==='en'?1:(LANG==='zh'?2:0);
  grid.innerHTML = REVIEWS.map(r=>{
    const w = r.when[LANG==='en'?1:(LANG==='zh'?2:0)];
    const loc = r.loc ? (typeof r.loc==='string'?r.loc:r.loc[li])+' · ' : '';
    return '<div class="rev"><div class="st">★ 5.0</div><p>“'+r.t[li]+'”</p>'
      + '<div class="who"><span>'+r.n+'</span><span>'+loc+w+'</span></div></div>';
  }).join('');
  const note=document.getElementById('revNote');
  if(note) note.textContent = L(
    '후기 발췌: 더광안 에어비앤비 리스팅에 실제로 남긴 게스트 후기입니다. 전체 후기는 에어비앤비 리스팅에서 확인하실 수 있습니다.',
    'Excerpts from real guest reviews left on the THE GWANGAN Airbnb listing. See the full list on Airbnb.',
    '節錄自 THE GWANGAN Airbnb 房源的實際旅客評價，完整內容請見 Airbnb。');
}

/* ── init ── */
function init(){
  document.getElementById('gAdults').textContent=ST.adults;
  document.getElementById('gChildren').textContent=ST.children;
  document.getElementById('gInfants').textContent=ST.infants;
  applyStatic();
  renderCals(); renderQuote(); syncSearch(); renderGallery(); renderReviews();
  startNaverSync();
  initCloud();
  paintCloud();
  /* 새로고침 뒤 남아 있을 수 있는 모달 히스토리 흔적을 현재 페이지 기록으로 정리 */
  if(tgDepth()>0){ try{ history.replaceState({tg:0}, ''); }catch(e){} }
  document.addEventListener('keydown', e=>{
    if(e.key==='Escape'){ closeViewer(); document.querySelectorAll('.modal.show').forEach(m=>closeModal(m.id)); }
    if(document.getElementById('viewer').classList.contains('show')){
      if(e.key==='ArrowRight') viewerStep(1);
      if(e.key==='ArrowLeft') viewerStep(-1);
    }
  });
}
init();
