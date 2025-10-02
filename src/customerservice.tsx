import { useState } from "react";
import svgPaths0 from "../imports/svg-ntinw6tyna";
const imgImage8 = "/images/image 8.png";
const imgImage5 = "/images/image 5.png";
const imgImage6 = "/images/image 6.png";
const imgImage7 = "/images/image 7.png";
const imgImage9 = "/images/image 9.png";
const imgPaylogIcon = "/images/paylog_icon.png";
import { imgRectangle4 } from "../imports/svg-apdcb";
import { SearchBox } from "../components/SearchBox";
import { TabNavigation } from "../components/TabNavigation";
import { FaqList } from "../components/FaqList";
import { ActionButton } from "../components/ActionButton";
import { PrimaryButton } from "../components/PrimaryButton";
import { Navbar } from "../components/Navbar";
import { Pagination } from "../components/Pagination";
import { Footer } from "../components/Footer";
import { PageContainer } from "../components/PageContainer";
import { PageSection } from "../components/PageSection";

export default function Customerservice() {
  // Footer 내부에서 자체 관리로 전환됨
  const tabs = [
    '전체', '질문Top', '💳 국내결제', '🌍 해외결제', '🏦 정산', '📄 계약', 
    '📝 지급대행', '💳 카드사 심사', '📘 서류안내', '🏬 상점관리자', '🧾 부가세 신고', 
    '💻️ 기술지원', '🧑‍💼 통신판매업 바로신청'
  ];

  // FAQ items data with answers
  const faqItems = [
    { 
      id: 1, 
      category: '부가세 신고', 
      question: 'Q. 부가가치세 신고는 어떻게 하나요?',
      answer: {
        html: '<p>부가가치세 신고기간에 <a href="https://www.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index.xml" rel="noopener noreferrer" target="_blank"><strong>국세청 홈택스 홈페이지</strong></a> 통해 신고 가능해요.</p><p>토스페이먼츠 부가세 신고 자료 조회는 \'<strong>상점관리자 &gt; 부가세신고 자료</strong>\' 에서 확인 가능해요.</p><p>자세한 자료 확인 방법은 아래 링크에서 확인해 주세요.</p><p><a href="https://blog.tosspayments.com/articles/how-to-vat" rel="noopener noreferrer" target="_blank"><strong>확인하러 가기</strong></a></p><p><br></p><p>* 부가세신고 자료는 참고용 자료이므로 반드시 내부 회계자료 등과 비교 후 사용해주세요.</p>'
      },
      isTop: true
    },
    { 
      id: 2, 
      category: '부가세 신고', 
      question: 'Q. 부가가치세 신고기간은 언제인가요?',
      answer: {
        html: '<p>과세 유형에 따라 신고 기간이 상이해요.</p><p><strong>일반과세자 (연 2회)</strong></p><ul class="p-rich_text_list p-rich_text_list__bullet" data-border="0" data-indent="1" data-stringify-type="unordered-list"><li data-stringify-border="0" data-stringify-indent="1">1월 1일~6월 30일 실적 : 7월 25일까지 신고</li><li data-stringify-border="0" data-stringify-indent="1">7월 1일~12월 31일 실적 : 1월 25일까지 신고</li></ul><p><strong>간이과세자 (연 1회)</strong></p><ul class="p-rich_text_list p-rich_text_list__bullet" data-border="0" data-indent="1" data-stringify-type="unordered-list"><li data-stringify-border="0" data-stringify-indent="1">1월 1일~12월 31일 실적 : 1월 25일까지 신고&nbsp;</li></ul><p>일반과세자/간이과세자에 대한 자세한 내용은 <a href="http://www.hometax.go.kr/" rel="noopener noreferrer" target="_blank">국세청 홈택스 홈페이지</a> 통해 확인 가능해요.</p>'
      },
      isTop: true
    },
    { 
      id: 3, 
      category: '부가세 신고', 
      question: 'Q. "매출/매입신고 조회" 와 "부가세신고자료 조회" 메뉴에서 내역이 보이지 않아요. (상점ID에 NHN_가 포함돼요.)',
      answer: {
        html: '<p>2021년 9월 30일부로 토스페이먼츠와 네이버 체크아웃 계약이 종료되었어요.</p><p>해당 시점 이후 매출내역 확인이 필요하다면 <strong>네이버페이 고객센터 1588-3819&nbsp;</strong>으로 문의해 주세요.</p>'
      }
    },
    { 
      id: 4, 
      category: '부가세 신고', 
      question: 'Q. 국세청에서 현금영수증 발급이 가능한가요?',
      answer: {
        html: '<p>토스페이먼츠 무료 현금영수증 서비스 미사용시, 매출내역 확인이 필요하다면 <a href="https://www.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index.xml&" rel="noopener noreferrer" target="_blank">국세청 현금영수증 홈페이지</a>에서 조회 혹은 국세상담센터 126번 유선 상담을 통해 확인 가능해요.</p>'
      }
    },
    { 
      id: 5, 
      category: '부가세 신고', 
      question: 'Q. 면세 상점인데, [현금영수증]이 과세로 발행됐어요. 국세청으로 신고할 때 문제가 되지 않나요?',
      answer: {
        html: '<p>영수증에 반영되는 과세/면세 여부는 국세청으로 전송되지 않아요.</p><p>부가세신고 기간에 사업자 형태(일반과세자/간이과세자/면세사업자/영세사업자)에 따라 매출 신고가 필요해요.</p>'
      }
    },
    { 
      id: 6, 
      category: '부가세 신고', 
      question: 'Q. 상점관리자의 현금영수증 메뉴에서 거래내역이 확인되지 않아요.',
      answer: {
        html: '<p>현금영수증 메뉴에서는 계좌이체 또는 가상계좌를 선택하여 결제, 발행된 내역만 확인할 수 있어요.</p><p>복합결제로 발행된 현금영수증은 상점관리자에서 확인 가능해요.</p><p>경로 : 상점관리자 &gt; 결제조회 &gt; 신용·체크카드 &nbsp;&gt; 결제기관 "토스페이" 선택 &gt; 매출전표 선택</p>'
      }
    },
    { 
      id: 7, 
      category: '부가세 신고', 
      question: 'Q. 상점관리자 부가세신고 자료의 토스머니, 토스포인트가 무엇인가요?',
      answer: {
        html: '<p>토스페이는 토스페이먼츠 결제창에서 소비자가 신용카드 결제수단을 선택 후 간편결제인 \'토스결제(toss 로고)\' 를 선택할 경우 이용하실 수 있는 서비스예요.<br><br>간편결제를 통해 카드(여신거래)와 계좌이체(토스머니) 또는 토스포인트(비여신거래) 를 복합하여 결제할 수 있어요.<br><br>해당 내역은 상점관리자의 카드 결제 내역으로 반영되며, 복합하여 결제할 때 현금거래(토스머니)가 포함되어 있다면 현금영수증 발행 대상에 포함돼요.<br><br>※ 토스포인트 단독 결제시, 현금영수증 미발행 대상이에요.</p>'
      }
    },
    { 
      id: 8, 
      category: '부가세 신고', 
      question: 'Q. 매출에 대한 공급가액과 부가세를 표기해야 하는데 상점관리자에서는 총 매출 금액으로만 보입니다.',
      answer: {
        html: '<p>"부가세신고 자료" 메뉴에서 공급가액, 면세가액, 부가세 등 보다 자세한 확인이 가능해요.</p><p>조회가 되지 않는 경우, 상점아이디(MID) 를 선택 후 다시 조회해주세요.</p><p>다만, 면세가액이 "1원"이라도 포함된 거래 건이 있는 경우 부가세신고 자료에 합계 금액만 표기되고 있어요.</p><p><br></p><p>결제내역의 과/면세 금액 확인이 필요할 경우 상점관리자에서 확인 가능해요.</p><p>경로 : 상점관리자 &gt; 수단별 거래내역 조회 &gt; 표 설정 &gt; 확인 필요한 값 체크 후 조회</p>'
      }
    },
    { 
      id: 9, 
      category: '부가세 신고', 
      question: 'Q. (구)상점관리자에서 자료를 참고하여 부가세 신고를 할 예정입니다. 어떻게 하면 되나요?',
      answer: {
        html: '<p><strong>(구)상점관리자</strong>의 <strong>매출/매입 신고 조회</strong> 메뉴로 조회 시 간편결제 (토스머니, 포인트) 매출이 원활히 조회되지 않을 수 있어요.</p><p>보다 정확한 자료 확인을 원하신다면 <strong>(신)상점관리자</strong> "<strong>부가세신고 자료</strong>" 메뉴에서 조회해 주세요.</p><p>TIP<br>(구)상점관리자의 "부가세신고자료조회" 메뉴는 모든 상태(승인, 취소)의 거래 건이 포함되어 있어 "매출매입신고조회" 탭보다 건 수 및 금액이 더 표기될 수 있습니다. 부가세 신고는 플러스, 마이너스 매출이 아닌 온전히 발생된 순 매출 건에 대해서만 신고하기에 "매출매입신고" 메뉴를 통해 확인해 주세요.</p>'
      }
    },
    { 
      id: 10, 
      category: '부가세 신고', 
      question: 'Q. 매출이 없어도 부가가치세 신고가 필수인가요?',
      answer: {
        html: '<p>부가가치세 납세 의무가 있는 사업자는 매출이 없어도 부가가치세 신고하셔야 해요.</p><p>매출이 없을 경우에는 매출을 "0원" 으로 입력하셔서 신고하시면 돼요.</p>'
      }
    },
    { 
      id: 11, 
      category: '부가세 신고', 
      question: 'Q. 간이과세자와 일반과세자의 차이는 무엇인가요?',
      answer: {
        html: '<p>과세 유형은 <strong>연 매출액을 기준&nbsp;</strong>으로 나누어져요.</p><ul class="p-rich_text_list p-rich_text_list__bullet" data-border="0" data-indent="0" data-stringify-type="unordered-list"><li data-stringify-border="0" data-stringify-indent="0">간이과세자 : 연 매출액 8천만원 미만 개인사업자</li><li data-stringify-border="0" data-stringify-indent="0">일반과세자 : 연 매출액 8천만원 이상 개인사업자</li></ul><p>자세한 내용은 <a href="http://www.hometax.go.kr" rel="noopener noreferrer" target="_blank">국세청 홈택스 홈페이지</a>를 통해 확인 가능해요.</p>'
      }
    },
    { 
      id: 12, 
      category: '부가세 신고', 
      question: 'Q. 부가세신고 자료와 내부 회계 자료의 현금영수증 발급 금액이 달라요.',
      answer: {
        html: '<p>토스페이먼츠 상점관리자가 아닌 <strong>가맹점 자체적으로 별도 발행한 현금영수증은 상점관리자에서 조회되지 않아요.</strong><br><br>자체 발행 건은 내부 회계 자료와 비교해 주셔야 해요.<br><br>※ 부가세신고 자료의 현금영수증 별도 발급분은 토스페이먼츠 상점관리자에서 발급한 건입니다.</p>'
      }
    },
    { 
      id: 13, 
      category: '부가세 신고', 
      question: 'Q. 작년 부가세 신고를 진행한 결제 건에 대하여 회계연도가 바뀐 올해 취소하였습니다. 어떻게 처리하면 될까요?',
      answer: {
        html: '<p>전기 회계연도 마감 후, 취소를 하셨다면 해당 금액만큼 차감하여 신고하셔야 해요.</p><p>최초 발행 일자의 확인이 필요하신 경우, 결제 내역에서 매출전표를 선택하시면 확인 가능해요.</p>'
      }
    },
    { 
      id: 14, 
      category: '부가세 신고', 
      question: 'Q. 부가세신고 자료와 통합결제 내역의 신용카드 금액이 달라요.',
      answer: {
        html: '<p>통합 결제 내역과 부가세신고 자료의 신용/체크카드 합계가 상이한 이유는, 비여신거래 금액의 차이예요.</p><p>부가세 신고 자료의 신용/체크카드 + 토스머니 + 포인트(토스포인트, PAYCO) 금액의 합계가 통합결제 내역의 신용/체크카드 합계예요.</p><p>부가세신고 자료에서 토스머니와 포인트 금액은 별도로 표기되고 있어요.</p>'
      }
    },
    { 
      id: 15, 
      category: '국내결제', 
      question: 'Q. 휴대폰 결제가 타 결제수단에 비해 정산주기가 긴 이유가 무엇인가요?',
      answer: {
        html: '<p>휴대폰 결제 서비스의 기본적 흐름은 다음과 같습니다.</p><p><img src="https://s3.ap-northeast-2.amazonaws.com/s3.static.toss.im/faq/LIVE/c3cf1d48-c318-4e1b-bc12-c5eec0cd0d37/blob" alt="https://homepage-attachment.s3.ap-northeast-2.amazonaws.com/faq/휴대폰+결제+서비스+flow.png" class="fr-fic fr-fil fr-dib" style="width: 300px;"></p><p><strong>1. n월에 휴대폰 결제 발생</strong></p><p><strong>2. n+1월에 이동 통신사에서 휴대폰 요금 확정 후, 구매자에 납부 요청</strong></p><p><strong>3. n+1월 말에 구매자가 이동통신사에 휴대폰 요금 납부</strong></p><p><strong>4. n+2월에 통신사에서 PG사에 정산</strong></p><ul><li><strong>(4-1. 구매자가 휴대폰 요금 미납 시, 익월 정산)</strong></li></ul><p><strong>5. n+2 또는 n+3월에 PG사에서 가맹점에 정산</strong></p><p>따라서 결제 발생 시점에서 1개월 이상 경과된 시점에 정산 금액이 확정되기 때문에, 최소 2개월 뒤에 정산이 가능한 형태입니다.</p>'
      }
    },
    { 
      id: 16, 
      category: '국내결제', 
      question: 'Q. 고객센터 연결은 어떻게 하면 되나요?',
      answer: {
        html: '<p><strong>[고객센터 유선 상담 연결 안내도]</strong><br>토스페이먼츠 고객센터 1544-7772로 연결 후 원하시는 문의를 선택해 주세요.</p><table style="width: 100%;"><tbody><tr><td rowspan="6" style="width: 50.0000%;"><strong>1. 구글결제 및 개인결제 고객 문의</strong><br></td><td colspan="2" style="width: 50.0000%;"><a href="https://consumer.tosspayments.com/payment-history/card" rel="noopener noreferrer" target="_blank">1. 결제 내역 조회</a><br></td></tr><tr><td rowspan="2" style="width: 25%;">2. 구글 결제 세부내역 확인 및 취소<br></td><td style="width: 25%;"><a href="https://support.google.com/store/answer/6160235?hl=ko&co=GOOGLE_STORE._UnderstandCharges=AuthorizationHold" rel="noopener noreferrer" target="_blank">1. 구글 주문 번호 (G코드) 조회</a><br></td></tr><tr><td style="width: 25%;"><a href="https://consumer.tosspayments.com/payment-history/card" rel="noopener noreferrer" target="_blank">2. 결제내역 조회하기</a><br></td></tr><tr><td rowspan="3" style="width: 25.0533%;">3. 테무(TEMU) 결제 세부내역 확인 및 취소<br></td><td style="width: 25.0533%;"><a href="https://www.temu.com/kr/support-center.html?_x_sessn_id=b7xi31oi2g&refer_page_name=home&refer_page_id=10005_1713233202859_7prkd8bgif&refer_page_sn=10005" rel="noopener noreferrer" target="_blank">1. TEMU 고객센터 문의하기</a><br></td></tr><tr><td style="width: 25.0533%;"><a href="https://real-team-905992.framer.app/" rel="noopener noreferrer" target="_blank">2. TEMU 고객센터 문의방법</a><br></td></tr><tr><td style="width: 25.0533%;"><a href="https://consumer.tosspayments.com/payment-history/card" rel="noopener noreferrer" target="_blank">3. 결제내역 조회하기</a><br></td></tr><tr><td rowspan="4" style="width: 50.0000%;"><strong>2. 가맹점 문의</strong><br></td><td colspan="2" style="width: 50.0000%;"><a href="https://toss.oopy.io/b99d2cb7-1d29-401c-82ee-cb64ae6f712c" rel="noopener noreferrer" target="_blank">1. 상점관리자 이용방법</a><br></td></tr><tr><td colspan="2" style="width: 50.0000%;">2. 신규 가맹점 문의<br></td></tr><tr><td colspan="2" style="width: 50.0000%;">3. 기존 가맹점 문의<br></td></tr><tr><td colspan="2" style="width: 50.0000%;">4. 개발연동 관련 기술지원 문의<br></td></tr><tr><td rowspan="6" style="width: 50.0000%;"><strong>3. 일반 결제, 무료 현금영수증 문의</strong><br></td><td colspan="2" style="width: 49.9468%;">1. 개인 결제 내역 조회 방법<br></td></tr><tr><td colspan="2" style="width: 49.9468%;">2. 일반 문의<br></td></tr><tr><td rowspan="4" style="width: 25.0533%;">3. 무료 현금영수증 문의<br></td><td style="width: 24.9467%;"><a href="https://palette-obey-042402.framer.app/" rel="noopener noreferrer" target="_blank">1. 비밀번호 초기화 방법 문의</a><br></td></tr><tr><td style="width: 24.9467%;"><a href="https://mind-tick-456932.framer.app/" rel="noopener noreferrer" target="_blank">2. 현금영수증 발행</a>, <a href="https://perspective-maintain-590572.framer.app/" rel="noopener noreferrer" target="_blank"></a><a href="https://perspective-maintain-590572.framer.app/" rel="noopener noreferrer" target="_blank">조회 방법 문의</a><br></td></tr><tr><td style="width: 24.9467%;"><a href="https://circle-swear-310207.framer.app/" rel="noopener noreferrer" target="_blank">3. 가맹점 정보 변경 문의</a><br></td></tr><tr><td style="width: 24.9467%;">0. 상담원 연결<br></td></tr><tr><td colspan="3" style="width: 99.8935%;"><strong>4. 스쿨/키즈뱅킹, 기업펌뱅킹 및 CMS 문의</strong><br></td></tr><tr><td colspan="3" style="width: 99.8935%;"><strong>5. 퀵계좌이체 출금이체동의 해지 알림톡 관련 문의&nbsp;</strong></td></tr><tr><td style="width: 50%;"><strong>7. 신용플러스/프라임 결제취소 관련 문의&nbsp;</strong></td><td colspan="2" style="width: 49.9468%;">1. 신용플러스/토스 프라임 결제취소 관련 문의 방법 알림톡 발송&nbsp;</td></tr><tr><td colspan="3" style="width: 99.8935%;"><strong>8. 신용카드 사용 내역 조회&nbsp;</strong></td></tr></tbody></table><p><br></p><p>* 각 항목 클릭 시, 가이드 및 자세한 내용을 확인할 수 있어요.</p><p><strong>* 구글페이먼츠코리아 결제 취소 및 환불 건에 대해 확인이 필요하신 경우, 가이드를 따라 상담 접수 후 구글페이먼츠코리아로 문의해 주세요.<br></strong>&gt; <a href="https://support.google.com/googleplay/gethelp" rel="noopener noreferrer" target="_blank">구글 유선상담 접수하기</a><br>&gt; <a href="https://clear-level-219871.framer.app/" rel="noopener noreferrer" target="_blank">유선접수 가이드 확인하기</a></p>'
      },
      isTop: true
    },
    { 
      id: 17, 
      category: '국내결제', 
      question: 'Q. 가상계좌 발급 계좌번호는 어떻게 확인하나요?',
      answer: {
        html: '<p>아래 경로에서 확인 가능해요.</p><p>경로 : 상점관리자 &gt; 결제조회 &gt; 가상계좌 &gt; 계좌번호</p><p>조회가 되지 않는 경우, 표 설정 &gt; 은행, 계좌번호 선택 &gt; 적용하기 후 다시 조회해주세요.</p>'
      }
    },
    { 
      id: 18, 
      category: '국내결제', 
      question: 'Q. 무이자 할부 적용 여부는 어떻게 확인하나요?',
      answer: {
        html: '<p>아래 경로에서 확인 가능해요.</p><p>경로 : 상점관리자 &gt; 결제조회 &gt; 신용·체크카드 &gt; 할부 &gt; <strong>\'무\'</strong></p><p>조회가 되지 않는 경우, 표 설정 &gt; 할부 선택 &gt; 적용하기 후 다시 조회해주세요.</p>'
      }
    },
    { 
      id: 19, 
      category: '국내결제', 
      question: 'Q. 자진발급제 설정은 어떻게 하나요?',
      answer: {
        html: '<p>현금영수증 기능을 \'사용\'하는 경우 자진발급제는 자동으로 적용되며, 아래 경로에서 신청할 수 있어요.</p><p>경로 : 상점관리자 &gt; 이용정보 &gt; 결제·부가서비스 &gt; 가상계좌, 계좌이체 &gt; 현금영수증 &gt; \'미사용\', \'사용\' 선택</p><p><br></p><p>* 별도 신청을 통해 발행 금액을 설정한 경우, 설정 금액 별로 발행이 되지 않을 수 있어요.&nbsp;</p>'
      }
    },
    { 
      id: 20, 
      category: '국내결제', 
      question: 'Q. 현금영수증 발행 및 발급 내역 확인하고 싶습니다.',
      answer: {
        html: '<p>상점관리자 내 \'<strong>현금영수증</strong>\' 메뉴에서 확인 가능해요.</p><p>구매자가 결제 중 현금영수증 발급을 진행하지 못해 발급을 요청하는 경우, <strong>각 결제수단 별 내역 조회</strong>에서 발급이 가능해요.</p><p>토스페이먼츠 거래 건이 아닌 건에 대한 발급을 원하신다면, 상점관리자 내 \'<strong>현금영수증 &gt; 우측 상단의 \'별도 발급하기</strong>\' 메뉴에서 발급이 가능해요.</p><p>발행한 영수증의 정보 수정을 원하신다면 \'<strong>다시 발급하기 &gt; 변경하기</strong>\' 메뉴를 통해 가능하며, 발급 취소의 경우 \'<strong>취소하기</strong>\' 메뉴에서 가능해요.</p><p>* 부분 취소를 하실 경우, 현금 영수증도 해당 금액만큼 자동 반영돼요.</p>'
      },
      isTop: true
    },
    { 
      id: 21, 
      category: '국내결제', 
      question: 'Q. 결제 안내 메일에 표기되는 상점명을 변경하고 싶어요.',
      answer: {
        html: '<p>아래 경로에서 변경 가능해요.</p><p>경로 : 상점관리자 &gt; 계약·운영 &gt; 이용정보 &gt; 결제·부가서비스 &gt; 신용·체크카드 &gt; 문자·결제메일 상호 \'변경\'</p>'
      }
    },
    { 
      id: 22, 
      category: '국내결제', 
      question: 'Q. 신용카드 결제 할인에는 어떤 방식이 있나요?',
      answer: {
        html: '<p>1. 즉시할인&nbsp;</p><p>&nbsp; &nbsp;결제창에 할인 내용이 노출되며, 할인된 금액으로 결제가 이루어져요.&nbsp;</p><p>2. 청구할인&nbsp;</p><p>&nbsp; &nbsp;기본 금액으로 결제 이후, 카드사에서 구매 고객에 카드 이용 대금을 청구할 때 할인된 금액으로 청구돼요.&nbsp;</p><p>3. 제휴할인&nbsp;</p><p>&nbsp; &nbsp;카드사와 가맹점 간 직접 제휴카드를 설정하여 특정 제휴카드에만 할인이 적용되도록 하는 방법이며, 제휴카드 이용 시, 사전에 토스페이먼츠 측으로 전달해 주셔야 해요.</p>'
      }
    },
    { 
      id: 23, 
      category: '국내결제', 
      question: 'Q. 휴대폰 결제 건 환불은 어떻게 진행되나요?',
      answer: {
        html: '<p>휴대폰 결제의 경우 통신사 정책으로 <strong>결제 발생 당월에만 취소가 가능</strong>해요.&nbsp;</p><p>취소 가능 기간이 지난 이후에는 PG사를 통한 환불이 불가하며, 가맹점에서 자체적으로 환불을 진행해주셔야 해요.&nbsp;</p><p>부분 환불을 진행할 경우, 전체 금액 취소 후 취소된 금액을 제외한 나머지 금액이 재결제되는 방식으로 운영되고 있는 점 참고해 주세요.&nbsp;</p><p>예) 10월 31일 결제 &gt; 11월 1일 취소 불가</p><p>경로 : 상점관리자 &gt; 결제조회 &gt; 휴대폰 &gt; \'취소하기\'</p>'
      }
    },
    { 
      id: 24, 
      category: '국내결제', 
      question: 'Q. 결제 및 취소 시 자동 발송되는 SMS 서비스가 있나요?',
      answer: {
        html: '<p>결제 / 환불 성공 시 구매자에게 자동 발송되는 SMS 서비스는 지원하고 있지 않아요.</p><p>카드 결제 시, 카드사 등록 정보에 따라 카드사에서 결제 성공 SMS가 발송될 수 있으나 취소 건은 발송되지 않아요.</p><p>가상 계좌 결제 시, 계좌 발급 및 최종 입금에 대한 SMS가 자동 발송되는 서비스를 추가적으로 제공하고 있어요.</p>'
      }
    },
    { 
      id: 25, 
      category: '국내결제', 
      question: 'Q. 무이자 할부 서비스를 이용하고 싶습니다.',
      answer: {
        html: '<p>카드사 부담 무이자의 경우, 통상 12개월까지 이용 가능해요.<br>매달 진행되는 카드 무이자 할부 행사는 정산달력 하단 \'신용카드 무이자 할부\'에서 확인 가능해요.</p><p>가맹점이 부담하는 무이자 할부 서비스의 신청을 원하시는 경우 소프트먼트 고객센터 1833-8540로 문의해 주세요.<br>카드사 별 할부 가능 개월 수가 상이하며, 할부 개월 수에 따라 수수료 또한 상이해요.</p><p>* 단, 가맹점이 부담하는 무이자 할부를 설정하셨더라도, 카드사 무이자 행사 이벤트 적용이 가능한 경우 카드사 이벤트가 우선 적용되고 있어요.</p>'
      }
    },
    { 
      id: 26, 
      category: '국내결제', 
      question: 'Q. 결제수단 별 최소 결제 가능 금액이 어떻게 되나요?',
      answer: {
        html: '<p>결제수단 별 최소 결제 가능 금액은 아래와 같습니다.&nbsp;</p><ul><li>신용카드: 100원&nbsp;</li><li>계좌이체: 200원&nbsp;</li><li>가상계좌 : 200원</li><li>휴대폰: 300원<ul><li>휴대폰결제의 경우 통신사에 따라 최소결제 금액은 상이할 수 있어요.&nbsp;<br><br></li></ul></li><li>토스페이<ul><li>머니/계좌 : 0원 (포인트로 전액결제 가능)</li><li>카드 : 100원</li></ul></li><li>페이코<ul><li>포인트: 1원</li><li>카드: 100원</li></ul></li><li>삼성페이/네이버페이/카카오페이/애플페이<ul><li>전결제수단: 100원</li></ul></li></ul><p><br></p><p>* 호스팅 업체를 이용하시는 경우 이용 가능한 간편결제사는 상이할 수 있어요.</p>'
      }
    },
    { 
      id: 27, 
      category: '국내결제', 
      question: 'Q. 퀵계좌이체 등록 문자를 받았어요.',
      answer: {
        html: '<p>토스페이먼츠에 \'계좌이체 결제 수단으로 본인의 계좌를 연결했을 때\' 받는 알림성 문자예요.<br>그래서 문자를 받았더라도 고객님께서 진행하지 않은 출금이 발생하는 것이 아니기 때문에 안심하셔도 돼요.</p><p>만약, 등록된 계좌 삭제, 비밀번호 변경, 탈퇴를 하고 싶으시다면 아래 링크를 통해 진행하실 수 있어요.</p><p><a href="https://consumer.tosspayments.com/accountpay/settings" rel="noopener noreferrer" target="_blank"><strong>변경하러 가기</strong></a></p><p>계좌를 삭제하면 추후 결제 시 재 등록이 필요한 점 양해 부탁드려요.</p>'
      },
      isTop: true
    },
    { 
      id: 28, 
      category: '국내결제', 
      question: 'Q. 자진발급제란 무엇인가요?',
      answer: {
        html: '<p>자진발급제는 가상계좌, 계좌이체로 결제한 구매자가 결제 당시에 현금영수증을 발행하지 않더라도, 결제 내역을 국세청으로 전송하여 구매자의 발행 요청이 있을 경우에 발급 받을 수 있는 제도입니다.</p><p>상점관리자에서 구매자의 자진 발급 기록을 조회하여 \'승인번호, 거래일자, 거래금액\'을 전달하여, 구매자가 직접 국세청 홈페이지의 \'자진발급권 발행\' 메뉴에서 현금 영수증을 수정 발행할 수 있어요.</p><p>가맹점에서 변경 발행을 원하시는 경우, 취소 후 재발행이 필요해요.</p>'
      }
    },
    { 
      id: 29, 
      category: '국내결제', 
      question: 'Q. 체크카드 결제 건 취소는 어떻게 진행되나요?',
      answer: {
        html: '<p>체크 카드 거래 건 취소는 최대 10일 정도가 소요되나, 전액 취소의 경우 취소 요청 당일 환불 처리돼요.&nbsp;</p><p>당일 환불이 불가한 예외 대상은 아래와 같습니다.</p><ul><li>부분취소</li><li>프로모션 (포인트, 청구할인 등)</li></ul>'
      }
    },
    { 
      id: 30, 
      category: '국내결제', 
      question: 'Q. 카드사 포인트로 결제가 가능한가요?',
      answer: {
        html: '<p>네, 카드사 포인트 결제 이용을 원하시는 경우, 신청서 제출 및 카드사 심사가 필요해요.&nbsp;</p><p>\'<strong>신용카드 포인트 서비스 이용 합의서</strong>\' 작성 후, 포인트 제공 카드사에서 심사이 필요해요.&nbsp;</p><p>사전 협의가 필요하기 때문에, 사용을 희망하시는 경우 토스페이먼츠 고객센터(1544-7772)로 문의해 주세요.</p>'
      }
    },
    { 
      id: 31, 
      category: '국내결제', 
      question: 'Q. 가상계좌는 계좌이체와 무엇이 다른가요?',
      answer: {
        html: '<p>계좌이체의 경우, 결제창에서 은행 계좌 정보 입력 후 보안매체 및 인증서 입력을 통해 계좌에서 즉시 출금되는 서비스입니다.</p><p>가상계좌의 경우 기존의 무통장 입금을 보완한 형태로, 고객이 구매 시 계좌번호를 지정하여 입금하도록 안내하는 서비스입니다.<br>예금주와 구매자 정보가 상이하여도 입금이 가능하며, 자동 입금 확인이 진행됩니다. <br>지정된 금액만 입금 가능하여 오납 문제가 발생하지 않습니다. </p>'
      }
    },
    { 
      id: 32, 
      category: '국내결제', 
      question: 'Q. 결제 수단 별 실패 내역은 어떻게 확인하나요?',
      answer: {
        html: '<p>자세한 내역은 아래 경로에서 확인 가능합니다.</p><p>경로 : 상점관리자 &gt; 결제조회 &gt; 결제수단 선택 &gt; 결제상태 \'실패\' </p>'
      }
    },
    { 
      id: 33, 
      category: '국내결제', 
      question: 'Q. 카드 매출전표 조회는 어떻게 하나요?',
      answer: {
        html: '<p>아래 경로에서 확인 가능합니다.</p><p>경로 : 상점관리자 &gt; 결제조회 &gt; 신용·체크카드 &gt; 영수증 &gt; 선택</p><p>우측 상단의 아이콘을 선택하여 이메일 보내기, 링크 복사, 출력이 가능합니다.</p><p>조회가 되지 않는 경우, 표 설정 &gt; 영수증 선택 &gt; 적용하기 후 다시 조회해주세요.</p>'
      }
    },
    { 
      id: 34, 
      category: '국내결제', 
      question: 'Q. 계좌이체 건 환불은 어떻게 진행되나요?',
      answer: {
        html: '<p>환불 가능 기한은 180일로 모든 거래가 실시간 환불이 진행돼요.&nbsp;</p><p>단, 심사 결과에 따라 환불 가능 기한은 축소될 수 있어요.</p><p><strong>또한 계좌이체 취소 건에 대해서 원거래 수수료는 반환 되지 않는 점 참고 부탁드려요.</strong> </p><p>경로 : 상점관리자 &gt; 결제조회 &gt; 계좌이체 &gt; \'취소하기\'</p>'
      }
    },
    { 
      id: 35, 
      category: '국내결제', 
      question: 'Q. 가상계좌 건 환불은 어떻게 진행되나요?',
      answer: {
        html: '<p>환불 가능 기한은 365일입니다.</p><p>가상계좌 건은 실시간으로 환불 처리가 불가하며, 영업일 기준 2~3일 소요 될 수 있습니다.</p><p><strong>또한 가상계좌 취소 건에 대해서 원거래 수수료는 반환 되지 않는 점 참고 부탁드려요.</strong> </p><p>경로 : 상점관리자 &gt; 결제조회 &gt; 가상계좌 &gt; \'취소하기\'</p>'
      }
    },
    { 
      id: 36, 
      category: '국내결제', 
      question: 'Q. PG사(=결제대행사)가 무엇인가요?',
      answer: {
        html: '<p>PG사는 20개 가량의 신용카드사와 직접 계약하기 어려운 온라인 쇼핑몰을 대신해 결제와 정산 업무를 대행해 주는 업체를 말해요.&nbsp;</p><p>PG사와 계약하면 카드 결제, 휴대폰 결제, 계좌이체, 무통장입금 등 다양한 결제 수단을 쇼핑몰 방문 고객에게 제공할 수 있어요.&nbsp;</p><p>결제를 대신해 준다고 해서 \'결제대행사\'라고도 해요.</p><p>* PG:Payment Gateway의 약자</p>'
      }
    },
    { 
      id: 37, 
      category: '국내결제', 
      question: 'Q. 신용카드 결제건 취소는 어떻게 진행되나요?',
      answer: {
        html: '<p><strong>신용카드 취소 시에는 별도의 수수료가 부과되지 않아요.</strong></p><p>구매고객에게 청구된 금액 전액이 취소되며, 가맹점에는 수수료 금액을 제외한 나머지 금액을 지급액에서 차감해요.</p><p><br></p><p><strong>매입 전 취소(승인 취소)의 경우, 결제 발생 당일에만 취소가 가능해요</strong><strong>.</strong></p><p>매입 후 취소의 경우, 카드사에 따라 상이할 수 있으나 통상 1년까지 가능해요.</p><p>취소 제한 기한은 없으나, 카드사 별 결제 데이터 보관 기간이 상이하여 1년 초과 시 취소가 불가할 수 있어요.</p><p>경로 : 상점관리자 &gt; 결제조회 &gt; 신용·체크카드 &gt; \'취소하기\'</p><p><br></p><p><strong>[취소 소요 기간]</strong><br>* 매입 전 취소(승인 취소/전체 취소) : 취소 요청 직후 즉시<br>* 매입 전 취소(부분 취소) : 영업일 기준 3~4일<br>* 매입 후 취소 : 취소 요청 후 영업일 기준 3~4일</p>'
      },
      isTop: true
    },
    { 
      id: 38, 
      category: '국내결제', 
      question: 'Q. 에스크로 결제 건을 취소하려면 어떻게 해야 하나요?',
      answer: {
        html: '<p><strong>배송 전</strong></p><p>1. 구매자가 구매 결정 메일에서 구매 취소 요청을 하면, 상점관리자에 취소 요청이 생성돼요.&nbsp;</p><p>취소 수락 시, 영업일 기준 2~3일 후에 구매자 계좌로 환불돼요. (계좌이체 당일 거래 건을 전체 취소하실 경우 실시간 즉시 환불 가능)<br>경로 : 상점관리자 &gt; 에스크로 &gt; 구매취소요청 &gt; 수락하기</p><p>2. 결제 수단 별 환불 경로와 동일하게 취소 가능해요. &nbsp;<br>경로: 상점관리자 &gt; 결제조회 &gt; 계좌이체/가상계좌 &gt; 취소하기</p><p><br></p><p><strong>배송 후</strong></p><p>1. 구매자가 구매 결정 메일에서 취소 요청 (상동)</p><p>2. N/C 기한이 지나 구매 확정 처리된 거래의 경우, 자체적으로 환불이 필요할 수 있어요.</p><p>* 단, 부분 취소의 경우, 배송 정보 등록 &gt; 배송 완료 &gt; 구매 확정 &gt; 매출 일자가 설정 되어야 가능해요. (신용카드 거래 건 부분 취소 불가)</p><p>* 매출일 설정은 구매 확정 다음날 설정 돼요.</p><p><br></p><p>* 에스크로 서비스 이용 수수료는 환불 되지 않아요.<br>에스크로 서비스 이용 수수료 (VAT 별도) &gt; 신용카드/계좌이체 : 0.2% 추가, 가상계좌 : 건당 200원 추가</p><p>- N/C(Negative Confirm) 란?<br>구매 확인 요청 메일이 발송된 후 3일 간 구매자가 구매 확정 처리를 하지 않을 시, 구매 거절 의사가 없다고 판단하여 자동 구매 확인이 되는 것을 N/C 라고 칭해요.</p>'
      }
    },
    { 
      id: 39, 
      category: '해외결제', 
      question: 'Q. [해외카드] 해외카드 결제 서비스가 가능한가요?',
      answer: {
        html: '<p>국내 온라인 가맹점의 물품 구매를 위해 외국인이 해외에서 발행된 VISA, MASTER, JCB, 중국은련카드 등으로 결제가 가능하도록 만든 서비스입니다.&nbsp;</p><p>다만, 한글 도메인은 해외 카드사에서 심사가 불가하여 신청이 어려우며, 할부 결제는 지원하지 않습니다.</p><p>해외카드 결제는 본인 확인을 체크하는 별도 인증 절차가 없어 도용 사고가 발생할 수 있으며, 구매자의 이의/민원제기 및 사고 발생에 대한 모든 손해는 가맹점에서 부담해야 합니다.</p><p>* 서비스 이용 가능 호스팅 업체는 카페24, 뉴런, 나무씨엔에스, 메이크샵, 아임웹이며, 카페24페이먼츠는 제공하지 않아요.</p><p>* DINERS, AMEX 카드는 지원하지 않아요.</p>'
      }
    },
    { 
      id: 40, 
      category: '해외결제', 
      question: 'Q. [페이팔] 페이팔 결제는 어떻게 진행되나요?',
      answer: {
        html: '<p>전 세계에서 사용되는 글로벌 간편결제 서비스로 이메일 주소와 비밀번호로 간편하게 결제를 진행할 수 있어요.&nbsp;</p><p>페이팔에 등록된 있는 카드 혹은 계좌로 결제가 가능해요.</p><p>가맹점이 웹사이트 운영 시 사용하는 통화의 종류와 관련 없이, 구매자 국가의 통화로 가격을 제공하여 편리하게 결제할 수 있어요.</p>'
      }
    },
    { 
      id: 41, 
      category: '해외결제', 
      question: 'Q. [페이팔] 정산은 달러로 지급되나요?',
      answer: {
        html: '<p>정산액은 원화로 지급되고 있어요.</p><p>(USD 추후 지원 예정)</p>'
      }
    },
    { 
      id: 42, 
      category: '해외결제', 
      question: 'Q. [페이팔] 적용 수수료가 어떻게 되나요?',
      answer: {
        html: '<p><strong>기본수수료 : 4% + 건 당 0.3 USD (고정 수수료) + 1.94% (환전/인출 수수료)</strong> 가 적용돼요. (VAT 제외)</p><p>* 고정 수수료란? <br>상점 결제통화별로 건당 수수료가 부과되며, 수수료는 통화별로 상이해요.</p><p>* 환전/인출 수수료란? <br>해외 결제 수단의 경우 인출 또는 환전 시 추가 수수료가 부과되고 있어요. <br>페이팔의 경우 정산 예정액의 3% 추가 수수료가 부과되어 있어 이에 준하는 수수료가 적용되고 있어요.</p>'
      }
    },
    { 
      id: 43, 
      category: '해외결제', 
      question: 'Q. [페이팔] 상점 결제통화가 무엇인가요?',
      answer: {
        html: '<p>가맹점이 홈페이지에서 운영하는 통화로, 원화가 아닌 USD 달러로 결제 요청이 필요해요.&nbsp;</p><p>지원되지 않는 통화로 결제가 요청될 경우 결제가 실패돼요.</p><p>( JPY, EUR, CAD, GBP, AUD, SGD 추후 지원 예정 )</p>'
      }
    },
    { 
      id: 44, 
      category: '해외결제', 
      question: 'Q. [페이팔] 정산주기는 어떻게 되나요?',
      answer: {
        html: '<p>주 정산으로 진행되며, 일요일 기준으로 4일째 입금되고 있어요. (영업일 기준)</p>'
      }
    },
    { 
      id: 45, 
      category: '해외결제', 
      question: 'Q. [페이팔] 호스팅 업체를 통해 구축했는데 이용 가능한가요?',
      answer: {
        html: '<p>호스팅 업체를 이용하는 경우, 일부는 제공이 불가능해요.&nbsp;</p><p>호스팅 업체를 이용 하시더라도 결제 수단을 호스팅 업체를 통해서 연동하는 것이 아닌, 홈페이지 구축만 호스팅사를 통해 하고 가맹점에서 결제를 직접 연동할 수 있다면 제공이 가능해요.</p><p>더 나은 서비스 제공을 위해 노력할게요.</p>'
      }
    },
    { 
      id: 46, 
      category: '해외결제', 
      question: 'Q. [페이팔] 환불은 어떻게 진행되나요?',
      answer: {
        html: '<p>환불 가능 기한은 180일이며, 결제 취소 발생 시 원 거래 수수료는 반환되지 않아요.</p>'
      }
    },
    { 
      id: 47, 
      category: '해외결제', 
      question: 'Q. [페이팔] 어떤 결제창 이용이 가능한가요?',
      answer: {
        html: '<p>결제 위젯을 통해 이용할 수 있어요. 자체 구축을 통해 페이팔 수단을 직접 노출하는 형태로도 이용할 수 있어요.</p><p>아래 링크를 통해 연동 가이드를 확인할 수 있어요.</p><p><a href="https://docs.tosspayments.com/guides/payment-widget/integration-paypal" rel="noopener noreferrer" target="_blank">확인하러 가기</a></p>'
      }
    },
    { 
      id: 48, 
      category: '해외결제', 
      question: 'Q. [페이팔] 해외결제 분쟁관리(차지백) 메뉴는 무엇인가요?',
      answer: {
        html: '<p>가맹점 보호 프로그램이에요.</p><p>토스페이먼츠를 통해 해외 결제서비스를 이용하시면, <strong>해외결제 분쟁관리</strong> 메뉴를 통해 고객의 차지백 요청에 효과적으로 대응하실 수 있어요.&nbsp;</p><p>상품의 미배송, 본인 미사용 결제, 상품이 광고와 다를 경우 소비자가 카드사 혹은 결제사를 통하여 민원을 제기할 수 있어요.</p><p>접수된 민원 거래 건을 확인하고, 해외 결제 분쟁 관리 메뉴를 통해 직접 소비자에게 답변이 가능해요.</p><p>경로 : 상점관리자 &gt; 해외결제 분쟁관리 &gt; Open cases &gt; 확인하기</p>'
      }
    },
    { 
      id: 49, 
      category: '해외결제', 
      question: 'Q. [해외카드 외화결제] 해외카드 외화결제 서비스를 신청하면 어떤 통화로 결제가 가능한가요?',
      answer: {
        html: '<p>해외카드 외화결제 서비스 신청시, USD(미국 달러), JPY(일본 엔화) 통화로 결제 가능해요.</p><p><br></p>'
      }
    },
    { 
      id: 50, 
      category: '해외결제', 
      question: 'Q. [해외카드 외화결제] 해외카드 외화결제 서비스 이용시 어떤 통화로 정산 받을 수 있나요?',
      answer: {
        html: '<ol><li>결제통화가 USD(달러)일 경우, 원화(KRW) 또는 달러(USD) 중 하나의 통화로 선택이 가능해요.</li><li>결제통화가 JPY(엔화)일 경우, 원화(KRW)와 엔화(JPY) 중 하나의 통화로 선택이 가능해요.</li></ol><p><br></p>'
      }
    },
    { 
      id: 51, 
      category: '해외결제', 
      question: 'Q. [해외카드 외화결제] 심사는 어떻게 진행되나요? (심사 프로세스 / 심사 소요기간)',
      answer: {
        html: '<p>해외 카드 외화결제 서비스 신청은 \'독립몰(자체구축몰)\' 기준으로 이용 가능해요.</p><ul><li>심사 기간 : 영업일 기준 10~15일</li></ul><p><strong>[심사 관련 유의사항]</strong></p><ul><li>결제창 내에서 사용하고자 하는 통화(USD, JPY)로 확인이 필요하나, 원화(KRW) 결제창으로도 심사 진행 가능합니다.</li><li>홈페이지 내 환불 정책을 명확히 기재해주셔야 합니다.</li><li>객단가(1회 결제 평균 금액) 5만 원 미만의 경우 심사 불가합니다. (단, 최소 결제 금액을 5만 원 이상으로 설정하면 심사 가능)</li></ul>'
      }
    },
    { 
      id: 52, 
      category: '해외결제', 
      question: 'Q. [해외카드 외화결제] 해외카드 외화결제 서비스를 신청하면 어떤 카드 이용이 가능한가요?',
      answer: {
        html: '<p>이용 가능한 해외 카드 외화결제 서비스 카드사는 VISA, Master, JCB 입니다.</p><p>단, 서비스 이용 가능 여부는 매입사 심사 후 확인하실 수 있으며, 카드사 심사 프로세스 및 심사 소요 기간은 아래 제목의 FAQ 를 참고해 주세요.</p><ul><li>참고 FAQ 제목: [해외카드 외화결제] 심사는 어떻게 진행되나요? (심사 프로세스 / 심사 소요기간)</li></ul><p><br></p>'
      }
    },
    { 
      id: 53, 
      category: '정산', 
      question: 'Q. 정산한도 증액 신청은 어떻게 하나요?',
      answer: {
        html: '<p>경로 : 상점관리자 &gt; 계약·운영 &gt; 이용정보 &gt; 정산 &gt; 정산한도 변경하기</p><p>토스페이먼츠를 처음 이용하시는 경우 매출액이 확인되지 않아 기본 한도를 부여하고 있습니다.</p><p>실제 매출이 발생하면 증액을 신청하실 수 있어요. (카드사 심사 완료 전일 경우에는 불가능)</p><p>증액 신청 시, 심사에 따라 보증보험 담보금액을 상향하여 가입해주셔야 할 수 있습니다.&nbsp;</p>'
      },
      isTop: true
    },
    { 
      id: 54, 
      category: '정산', 
      question: 'Q. 보증보험 갱신은 어떻게 신청하나요?',
      answer: {
        html: '<p>보증보험은 1년 단위로 갱신이 필요하며, 만료 전에 등록되어 있는 대표 이메일로 갱신 방법을 안내 드리고 있어요.</p><p>보증보험 갱신(연장)은 계약한 대리점으로 연락 해주세요.</p><p>· 플러스 : 02-595-8740~2</p><p>· 인산아이비 : 02-563-0003</p><p>이 외 대리점 통해 가입하신 경우 해당 대리점 연락처로 문의 부탁드려요.</p>'
      }
    },
    { 
      id: 55, 
      category: '정산', 
      question: 'Q. 정산한도란 무엇인가요?',
      answer: {
        html: '<p>한 달 간(매월 1일~ 말일) 정산대금을 지급 받으실 수 있는 한도이며, 부정거래 방지를 위해 업종이나 보증보험 가입 금액에 따라 한도가 제공돼요.</p><p>만약, 월 정산한도를 초과하여 거래가 발생하는 경우 익월 첫 영업일에 지급되고 있어요.</p><p>예) 정산한도 200만원, 300만원 결제 발생 시 200만원 당월 지급 후 100만원은 익월 지급</p>'
      },
      isTop: true
    },
    { 
      id: 56, 
      category: '정산', 
      question: 'Q. 보증보험 보험료는 얼마인가요?',
      answer: {
        html: '<p>보증보험 가입비는 보증금액의 0.953% 선에서 책정됩니다.</p><p>예시) 월 정산한도 700만원 / 필요 보증보험 가입금액 700만원일 때, 보증보험 가입비는 7만원 수준 (보증보험 가입 금액의 약 1% 수준)&nbsp;</p><p><br></p><p>또한, 요청하신 월 정산한도 대비 필요한 보증보험 금액 (월정산한도:보증보험 비율)은 사업자별 업종, 규모, 판매하시는 물품 등 여러 요인에 의해</p><p>상이할 수 있습니다.</p><p><br></p><p><br></p>'
      },
      isTop: true
    },
    { 
      id: 57, 
      category: '정산', 
      question: 'Q. 지급예정액(입금 예정 금액) 조회는 어디서 하나요?',
      answer: {
        html: '<p>상점관리자 내 \'정산달력 &gt; 달력 이미지 상단\' 에서 월 매출액, 오늘 입금 금액과 입금 예정 금액을 확인할 수 있습니다.</p><p>정산내역의 상세 정보는 상점관리자 내 \'<strong>정산내역</strong>\' 에서 확인 가능합니다.</p>'
      }
    },
    { 
      id: 58, 
      category: '정산', 
      question: 'Q. 에스크로 주문건의 배송정보 등록은 어떻게 하나요?',
      answer: {
        html: '<p>상점관리자에서 배송정보를 등록할 수 있어요. 아래 경로 참고하시어 배송정보 등록 부탁드립니다.</p><p>경로 : 상점관리자 &gt; 에스크로 &gt; 배송정보 등록 \'등록하기\' &gt; 운송장 &gt; \'택배사\' 선택, \'운송장번호\' 입력 &gt; 등록하기</p><p><br></p><p>배송결과를 등록하지 않으면 구매 물품을 전달하지 않은 것으로 간주되어 거래대금 지급이 이루어지지 않습니다.</p><p>또한, 3개월이 지난 시점에 배송정보를 등록하면, 배송 상태가 업데이트 되지 않을 수 있습니다.</p><p>원활한 정산 처리를 위하여 배송정보를 신속하게 등록해 주세요.</p>'
      }
    },
    { 
      id: 59, 
      category: '정산', 
      question: 'Q. 에스크로 이용 시 정산주기는 어떻게 되나요?',
      answer: {
        html: '<p>상점관리자에서 배송정보를 등록하시면, 구매자에게 구매 확인 요청 메일이 발송됩니다.</p><p>에스크로 결제의 경우, 구매 확정 여부에 따라 정산일이 상이합니다.</p><p><br></p><p>1. 고객이 구매 확정 처리하는 경우 : 구매 확정 후 3일째 입금(영업일 기준)</p><p>2. 고객이 구매 확정 처리하지 않는 경우 : 물품 수령 후 6일째 입금(영업일 기준)</p><p>*3일 동안 구매 거절 요청이 없는 경우 구매 거절 의사가 없다고 판단하여 자동 구매 확정되며, 구매자에게는 &lt;구매확인기간 종료안내&gt; 메일 발송</p><p><br></p><p>단, 배송결과를 등록하지 않으면 구매자에게 구매 물품을 전달하지 않은 것으로 간주되어 거래대금 지급이 이루어 지지 않습니다.</p><p>원활한 정산 처리를 위하여 반드시 배송결과를 등록해 주시기 바랍니다.</p>'
      }
    },
    { 
      id: 60, 
      category: '정산', 
      question: 'Q. 에스크로 결제건 중 택배사 운송장 정보가 없는 경우 배송정보를 어떻게 등록하나요?',
      answer: {
        html: '<p>무형재화/퀵배송/직접배송/방문수령 등 택배사 운송장 정보가 없는 경우, 아래 경로 참고하시어 \'수령자 수령 결과 등록\' 을 선택하시어 배송 정보를 등록해주시면 됩니다.</p><p><br>경로 : 상점관리자 &gt; 결제조회 &gt; 에스크로 &gt; 배송정보 등록 \'등록하기\' &gt; \'수령인\' 선택 &gt; 등록하기</p><p><br>등록 후, 구매자에게 구매확정 요청 메일이 발송되며 이후 정산일자는 택배사 운송장 정보를 등록한 에스크로 결제와 동일합니다.</p>'
      }
    },
    { 
      id: 61, 
      category: '정산', 
      question: 'Q. 정산데이터는 언제부터 조회 가능한가요?',
      answer: {
        html: '<p>정산 예정 금액은 결제일자 기준 익일 정산내역 또는 달력에서 확인이 가능해요.&nbsp;</p><p>정산 지급이 확정되는 시점은 설정된 정산 주기에 맞춰 지급일 기준 영업일 2~3일 전으로 확정되고 있어요.</p>'
      }
    },
    { 
      id: 62, 
      category: '정산', 
      question: 'Q. 정산한도 증액 안내 문자/메일을 받았어요. 반드시 증액 신청해야 하나요?',
      answer: {
        html: '<p>월 정산 한도가 소진되어 가는 시점에 자동으로 문자나 메일이 발송됩니다.</p><p>정산한도를 초과한 매출분은 다음 달로 이월되어 지급되기 때문에, 잔여 한도와 예상 매출액 고려하시어 증액 신청 여부를 결정해주시면 됩니다. </p>'
      }
    },
    { 
      id: 63, 
      category: '정산', 
      question: 'Q. 신규 신청 후 최종 심사완료까지 얼마나 소요되나요?',
      answer: {
        html: '<p>온라인 신청 이후 입점 심사는 영업일 기준 1~2일 이내 이루어지며, 결제창 연동 및 홈페이지에 상품이 올바르게 등록되어 있고 구비 서류를 잘 제출하셨다면 이후 카드사 심사가 진행됩니다. 카드사 심사는 7~10일 가량 소요되나 업종 및 서비스 유형 방식에 따라 심사 기간이 지연될 수 있어요. </p><p>모든 카드사 심사 승인이 완료되면, 이때 모든 계약 절차가 완료되어 정산을 받을 수 있어요. </p><p><br></p><p><a href="https://blog.tossbusiness.com/articles/semo-7" rel="noopener noreferrer" target="_blank">입점심사 한번에 통과하기</a><br><a href="https://file.notion.so/f/f/5ce36d31-78ba-49d0-aeaf-0919cf07d3f4/b9dd8f39-0549-44ea-b39e-2ad22ea039b8/토스페이먼츠_상점관리자_이용_가이드_230810.pdf?id=15d00fcb-7f37-4fba-9746-84742bc15e20&table=block&spaceId=5ce36d31-78ba-49d0-aeaf-0919cf07d3f4&expirationTimestamp=1700537362627&signature=aB31aaPfzCtRAXIwB0Th1TKKqIq_MWjsKil7_NqjvoA&downloadName=토스페이먼츠+상점관리자+가이드_전체.pdf" rel="noopener noreferrer" target="_blank">상점관리자 이용 가이드</a>&nbsp;</p>'
      },
      isTop: true
    },
    { 
      id: 64, 
      category: '계약', 
      question: 'Q. 새로운 사이트를 추가하고 싶어요. 어떻게 진행해야 하나요?',
      answer: {
        html: '<p>토스페이먼츠 홈페이지에서 결제 서비스 추가 신청이 가능해요</p><p>경로: 토스페이먼츠 홈페이지 &gt; 상단의 \'결제 서비스\' &gt; \'모든 결제 서비스\' &gt; \'이용 신청하기\'</p><p>호스팅 업체를 이용하시는 경우 진행 과정이 상이할 수 있어요.</p>'
      }
    },
    { 
      id: 65, 
      category: '계약', 
      question: 'Q. 신규 신청 후 최종 심사완료까지 얼마나 소요되나요?',
      answer: {
        html: '<p>온라인 신청 이후 입점 심사는 영업일 기준 1~2일 이내 이루어지며, 결제창 연동 및 홈페이지에 상품이 올바르게 등록되어 있고 구비 서류를 잘 제출하셨다면 이후 카드사 심사가 진행됩니다. 카드사 심사는 7~10일 가량 소요되나 업종 및 서비스 유형 방식에 따라 심사 기간이 지연될 수 있어요. </p><p>모든 카드사 심사 승인이 완료되면, 이때 모든 계약 절차가 완료되어 정산을 받을 수 있어요. </p><p><br></p><p><a href="https://blog.tossbusiness.com/articles/semo-7" rel="noopener noreferrer" target="_blank">입점심사 한번에 통과하기</a><br><a href="https://file.notion.so/f/f/5ce36d31-78ba-49d0-aeaf-0919cf07d3f4/b9dd8f39-0549-44ea-b39e-2ad22ea039b8/토스페이먼츠_상점관리자_이용_가이드_230810.pdf?id=15d00fcb-7f37-4fba-9746-84742bc15e20&table=block&spaceId=5ce36d31-78ba-49d0-aeaf-0919cf07d3f4&expirationTimestamp=1700537362627&signature=aB31aaPfzCtRAXIwB0Th1TKKqIq_MWjsKil7_NqjvoA&downloadName=토스페이먼츠+상점관리자+가이드_전체.pdf" rel="noopener noreferrer" target="_blank">상점관리자 이용 가이드</a>&nbsp;</p>'
      },
      isTop: true
    },
    { 
      id: 66, 
      category: '계약', 
      question: 'Q. 가입비 결제 영수증은 어떻게 확인하나요?',
      answer: {
        html: '<p>가입비 영수증은 계약 완료일 기준 익월 첫 영업일에 세금계산서로 발행됩니다.</p><p>계약이 완료되기 전까지는 계약 취소 시 가입비 환불이 가능하기 때문에, 계약 완료 후 세금계산서로 발행해드리고 있어요.</p><p>※ 신용·체크카드, 실시간 계좌이체 모두 동일하게 세금계산서로 발행해드려요.</p>'
      }
    },
    { 
      id: 67, 
      category: '계약', 
      question: 'Q. 모바일 앱은 심사가 불가능한가요?',
      answer: {
        html: '<p>모바일 앱도 심사가 가능해요.<br> <br>다만 앱으로 심사를 받을 때 홈페이지 URL은 앱스토어(IOS) 또는 플레이스토어(Android) 내 앱이 등록된 주소로 심사를 요청해주세요.<br><br>아직 스토어에 APP이 등록되어있지 않다면 APP을 소개하는 웹 페이지와 APK 다운로드 링크를 전달해주시면 심사가 가능해요.</p>'
      }
    },
    { 
      id: 68, 
      category: '계약', 
      question: 'Q. 빌링결제 결제를 추가하고 싶어요.',
      answer: {
        html: '<p>토스페이먼츠 홈페이지에서 결제수단 (빌링결제) 추가 신청이 가능해요.</p><p>경로 : 토스페이먼츠 홈페이지 &gt; 상단의 \'결제 서비스\' &gt; \'모든 결제 서비스\' &gt; \'이용 신청하기\' &gt; 사업자 정보 입력 &gt; 결제 서비스 선택하기</p><p>* 호스팅 업체를 이용하시는 경우 서비스 진행 과정이 상이할 수 있어요.</p>'
      }
    },
    { 
      id: 69, 
      category: '계약', 
      question: 'Q. 영중소 카드 수수료율 우대 혜택이 무엇인가요?',
      answer: {
        html: '<p>영세・중소 사업자의 경우, 카드결제 수수료율 우대 혜택이 제공됩니다.<br>매 년 2・8월 국세청에서 영중소 사업자 명단을 받아, 해당하는 가맹점의 등급에 따라 우대 수수료율을 반영해 드립니다.<br>신규 사업자는 첫 세금 신고 전까지 일반 등급으로 적용됩니다.<br><br>* 호스팅 업체를 이용하시는 경우 호스팅 업체의 정책을 따르고 있어요.</p>'
      }
    },
    { 
      id: 70, 
      category: '계약', 
      question: 'Q. 구매안전서비스 이용 확인증(에스크로 가입 사실 확인서)은 어디서 받을 수 있나요?',
      answer: {
        html: '<p>상점관리자 로그인 후 아래 경로에서 확인할 수 있어요.</p><p>경로 : 상점관리자 &gt; 나의 상점 &gt; 하단의 \'구매안전서비스 이용 확인증\' &gt; 상점ID, 사업자 등록번호 입력 후 확인</p><p>※ [나의 상점]이 확인되지 않는 경우, 우측 상단 [전체상점 홈] 선택 후 확인 부탁드려요.</p>'
      },
      isTop: true
    },
    { 
      id: 71, 
      category: '계약', 
      question: 'Q. 에스크로가 적용 가능한 결제 수단은 무엇이 있나요?',
      answer: {
        html: '<ul><li>신용·체크카드</li><li>실시간 계좌이체</li><li>가상계좌</li></ul><p>위 3가지 결제 수단에 적용 가능해요.</p>'
      }
    },
    { 
      id: 72, 
      category: '계약', 
      question: 'Q. 에스크로 서비스는 무엇이고, 어떻게 신청하나요?',
      answer: {
        html: '<p>에스크로 서비스는 에스크로 사업자(토스페이먼츠)가 물품 수령 여부를 확인하고 결제 대금을 판매자에게 지불하는 제도로, 전자상거래에서 발생 가능한 허위 주문, 미배송 등의 피해를 방지하기 위한 <strong>매매보호서비스</strong>입니다.<br>전자상거래법 상, 현금 결제에 대해서는 금액과 무관하게 의무적으로 에스크로 시스템을 도입해야 합니다. 에스크로 등 매매보호 거래를 선택을 제공하지 않는 경우, 공정거래위원회로부터 시정 조치 / 영업정지 등의 행정처분을 받게 되오니 참고 부탁드립니다.&nbsp;</p><p>에스크로 서비스는 별도의 서류 접수가 필요하지 않으며, 아래 경로 통해 신청해주시면 신청 즉시 적용됩니다.</p><p>경로 : 상점관리자 &gt; 계약·운영 &gt; 이용정보 &gt; 결제·부가서비스 &gt; 에스크로 \'변경\'</p><p>*의무 적용 예외 사례: 신용카드 거래, 콘텐츠(실물거래가 발생하지 않는) 거래</p>'
      }
    },
    { 
      id: 73, 
      category: '계약', 
      question: 'Q. PG 서비스 별 수수료율이 궁금해요.',
      answer: {
        html: '<p>결제수단 별 수수료는 아래 링크에서 확인 부탁드립니다.&nbsp;</p><p><a href="https://www.tosspayments.com/about/fee" rel="noopener noreferrer" target="_blank"><strong>확인하러 가기</strong></a></p><p>* 호스팅 업체를 이용하시는 경우 업체별 수수료는 상이할 수 있어요.</p>'
      },
      isTop: true
    },
    { 
      id: 74, 
      category: '계약', 
      question: 'Q. 결제 수단 추가는 어떻게 해야하나요?',
      answer: {
        html: '<p>토스페이먼츠 홈페이지에서 결제 서비스 추가 신청이 가능해요.</p><p>경로: 토스페이먼츠 홈페이지 &gt; 상단의 \'결제 서비스\' &gt; \'모든 결제 서비스\' &gt; \'이용 신청하기\' &gt; 사업자정보 입력 &gt; 희망 결제 서비스 선택하기</p><p>결제수단별 서류 및 진행 절차가 상이하며, 자세한 내용은 아래 링크에서 확인 부탁 드려요</p><p><a href="https://www.notion.so/tosspublic/74cec9fa79844001be7a13fc46d96f96" rel="noopener noreferrer" target="_blank"><strong>확인하러 가기</strong></a><strong>&nbsp;</strong></p><p>* 호스팅 업체를 이용하시는 경우 진행 과정이 상이할 수 있어요.</p>'
      },
      isTop: true
    },
    { 
      id: 75, 
      category: '계약', 
      question: 'Q. 정산액이 입금되는 계좌를 변경하고 싶어요.',
      answer: {
        html: '<p>소요기간은 영업일 기준 2~3일이며 미지급금이 있다면 추가 소요기간이 있을 수 있습니다.</p><p>아직 계약이 완료되지 않았거나, 카드사 심사가 남아있다면 정산 탭을 확인하기 어렵습니다.</p><p>경로: 상점관리자 &gt; 계약·운영 &gt; 이용정보 &gt; 정산 &gt; 정산계좌 &gt; \'변경\'</p>'
      }
    },
    { 
      id: 76, 
      category: '계약', 
      question: 'Q. 총 등록비는 얼마인가요? (가입비, 연관리비, 보증보험료)',
      answer: {
        html: '<p>1. 신규 신청 시, 초기 가입비 33만원(부가세 포함)이 부과됩니다.</p><ul class="p-rich_text_list p-rich_text_list__bullet" data-border="0" data-indent="0" data-stringify-type="unordered-list"><li data-stringify-border="0" data-stringify-indent="0">초기 가입비 = 가입비 22만원 + 연관리비 11만원 (부가세 포함)</li><li data-stringify-border="0" data-stringify-indent="0">가입비 22만원은 초기 1회만 납부하며, 연관리비 11만원은 연 1회 납부 필요합니다.&nbsp;</li></ul><p>2. 희망 월 정산한도가 1,000만원 이하인 경우 보증 보험료를 부담하지 않는 무담보 정책을 실시하고 있습니다.<br>1,000만원을 초과하는 월 정산 한도를 희망하시는 경우 담보 가입은 필수이며, 가맹점의 취급 상품 및 업종 형태에 따라 무담보 정책이 적용되지 않을 수 있습니다.<br><br>* 호스팅 업체를 이용하는 경우, 업종 및 취급 상품에 따라 계약 조건은 상이할 수 있어요.</p>'
      },
      isTop: true
    },
    { 
      id: 77, 
      category: '계약', 
      question: 'Q. 이전에 해지한 ID를 다시 사용할 수 있을까요?',
      answer: {
        html: '<p>토스페이먼츠 시스템 상 발급된 상점ID를 해지하실 경우 재사용이 불가해요.</p><p>번거로우시겠지만 새로운 상점ID 신청이 필요해요.</p>'
      }
    },
    { 
      id: 78, 
      category: '계약', 
      question: 'Q. 사업자 번호가 변경되었습니다',
      answer: {
        html: '<p>자세한 내용은 아래 링크에서 확인 부탁드립니다.</p><p><a href="https://www.notion.so/tosspublic/3d66109248ba4af2b86a7c3a29b5ca9f" rel="noopener noreferrer" target="_blank"><strong>확인하러 가기</strong></a></p><p><strong>* 기존과 동일한 ID는 사용하실 수 없습니다.</strong></p><p>* 호스팅 업체를 이용하시는 경우 진행 과정이 상이할 수 있어요.</p>'
      }
    },
    { 
      id: 79, 
      category: '계약', 
      question: 'Q. 전자 결제 서비스 해지를 원합니다',
      answer: {
        html: '<p>해지 신청서 작성 후 기재되어 있는 메일로 접수하시면 해지가 완료됩니다.</p><p>계약 해지는 서류 송부 후 1~3영업일 이내로 처리되는 점 참고 부탁드립니다.</p><p>다만 해지 이후에는 상점관리자 내에서 조회 업무만 가능하며, 구매 고객의 취소 요청 등에 대응하기 어려운 점 참고 부탁드립니다.</p>'
      }
    },
    { 
      id: 80, 
      category: '계약', 
      question: 'Q. PG 서비스 신규 계약 절차는 어떻게 되나요?',
      answer: {
        html: '<p>신규 신청에서 최종 오픈까지 절차는 다음과 같습니다.</p><ol><li><p><a href="https://www.tosspayments.com" rel="noopener noreferrer" target="_blank">토스페이먼츠 홈페이지</a>의 메인 화면에서 \'전자결제 신청하기\' 버튼을 클릭하시어 회원 가입 및 전자결제 서비스 가입 신청을 진행해 주세요,</p></li><li><p>신청이 완료되면 <a href="https://docs.tosspayments.com" rel="noopener noreferrer" target="_blank">개발 가이드</a>에 따라 결제창을 연동해주세요.</p><p>테스트 API는 \'토스페이먼츠 로그인 &gt; 상점명 &gt; 개발 연동\'에서 확인하실 수 있습니다.</p></li><li><p>1~2일 이내에 입점 심사가 이루어집니다.</p><p>신청 내용 또는 홈페이지 내에 수정이 필요한 경우 전화 및 이메일로 연락을 드립니다.</p></li><li><p>입점 심사에서 문제가 없을 경우, 계약이 완료됩니다.</p></li><li><p>테스트 API 키를 라이브 API 키로 변경해주시면 \'카드 결제\'를 제외한 결제 서비스 이용이 가능합니다. (계좌 이체, 가상 계좌 등)</p></li><li><p>카드 결제 이용을 위하여 카드사 심사가 진행됩니다.</p><p>평균 7~10일 정도 소요되며, 전 카드사 심사 통과 시 문자로 안내드립니다.</p><p>상세 심사 현황은 상점관리자 내 \'이용정보&gt; 결제·부가서비스 &gt; 이용카드사\' 메뉴에서 확인이 가능합니다.</p></li></ol><p>위 절차가 완료되면, 신청하신 모든 서비스를 이용하실 수 있습니다</p>'
      },
      isTop: true
    },
    { 
      id: 81, 
      category: '계약', 
      question: 'Q. 가입 후  매년 계약 연장을 해야 하나요?',
      answer: {
        html: '<p>별도 해지를 진행하시지 않는 이상 연장하실 필요는 없어요.<br><br>추가로, 보증보험에 가입하셨다면 보증보험 계약 기간은 1년이므로 매년 보증보험사를 통해 갱신이 필요할 수 있어요.</p>'
      }
    },
    { 
      id: 82, 
      category: '카드사 심사', 
      question: 'Q. 카드사 심사를 위해 어떤 준비를 해야 하나요?',
      answer: {
        html: '<p>카드사 심사 준비는 아래 링크에서 확인 부탁 드립니다.</p><p><a href="https://blog.tosspayments.com/articles/semo-7" rel="noopener noreferrer" target="_blank"><strong>확인하러 가기</strong></a></p>'
      }
    },
    { 
      id: 83, 
      category: '카드사 심사', 
      question: 'Q. 입점 가능한 업종을 알고 싶어요.',
      answer: {
        html: '<p>입점 불가한 업종과 제한적으로 가능한 업종 안내드릴게요.&nbsp;</p><p>자세한 내용은 아래 링크에서 확인 부탁드려요.</p><p><strong>* 해당 기준은 사업자 가맹점이신 경우에 적용되는 기준입니다. 비사업자이신 경우, 7일 이내에 배송되는 유형의 기성제품에 한하여 입점이 가능합니다.</strong></p><p><a href="https://tosspublic.notion.site/113ab653d9d849ac86748ea18834d806" rel="noopener noreferrer" target="_blank"><strong>확인하러 가기</strong></a></p>'
      },
      isTop: true
    },
    { 
      id: 84, 
      category: '카드사 심사', 
      question: 'Q. 신규 신청 후 최종 심사완료까지 얼마나 소요되나요?',
      answer: {
        html: '<p>온라인 신청 이후 입점 심사는 영업일 기준 1~2일 이내 이루어지며, 결제창 연동 및 홈페이지에 상품이 올바르게 등록되어 있고 구비 서류를 잘 제출하셨다면 이후 카드사 심사가 진행됩니다. 카드사 심사는 7~10일 가량 소요되나 업종 및 서비스 유형 방식에 따라 심사 기간이 지연될 수 있어요. </p><p>모든 카드사 심사 승인이 완료되면, 이때 모든 계약 절차가 완료되어 정산을 받을 수 있어요. </p><p><br></p><p><a href="https://blog.tossbusiness.com/articles/semo-7" rel="noopener noreferrer" target="_blank">입점심사 한번에 통과하기</a><br><a href="https://file.notion.so/f/f/5ce36d31-78ba-49d0-aeaf-0919cf07d3f4/b9dd8f39-0549-44ea-b39e-2ad22ea039b8/토스페이먼츠_상점관리자_이용_가이드_230810.pdf?id=15d00fcb-7f37-4fba-9746-84742bc15e20&table=block&spaceId=5ce36d31-78ba-49d0-aeaf-0919cf07d3f4&expirationTimestamp=1700537362627&signature=aB31aaPfzCtRAXIwB0Th1TKKqIq_MWjsKil7_NqjvoA&downloadName=토스페이먼츠+상점관리자+가이드_전체.pdf" rel="noopener noreferrer" target="_blank">상점관리자 이용 가이드</a>&nbsp;</p>'
      },
      isTop: true
    },
    { 
      id: 85, 
      category: '카드사 심사', 
      question: 'Q. 카드사 심사 현황을 알고 싶어요.',
      answer: {
        html: '<p>아래 경로에서 \'이용가능\' 으로 표기되어 있다면 카드사 심사가 완료되어 결제가 가능합니다.</p><p>경로 : 상점관리자 &gt; 계약·운영 &gt; 이용정보 &gt; 결제·부가서비스 &gt; 이용카드사</p>'
      }
    },
    { 
      id: 86, 
      category: '카드사 심사', 
      question: 'Q. 카드사 심사를 위해 상품을 몇 개 업로드 해야 할까요?',
      answer: {
        html: '<p>현재 판매 가능한 상품 최소 1개 이상 업로드가 필요해요.&nbsp;</p><p><strong>단, 품절 및 샘플 상품으로만 등록 시 심사가 불가해요.</strong></p>'
      }
    },
    { 
      id: 87, 
      category: '카드사 심사', 
      question: 'Q. 카드사 등록 이후 해지가 될 수 있나요?',
      answer: {
        html: '<p>카드사에 등록된 사업자가 특정기간(1년이상) 결제가 없는 경우 해지 될 수 있어요. </p>'
      }
    },
    { 
      id: 88, 
      category: '카드사 심사', 
      question: 'Q. 카드사 심사를 받지 않으면 다른 결제 수단을 이용하지 못하나요?',
      answer: {
        html: '<p>카드사 심사 여부와 관계없이 계좌이체, 가상계좌(무통장입금) 서비스 이용 가능해요.</p>'
      }
    },
    { 
      id: 89, 
      category: '카드사 심사', 
      question: 'Q. 앱 서비스인 경우 앱스토어 등록하지 않아도 카드사 심사 가능한가요?',
      answer: {
        html: '<p>대표 홈페이지가 있다면 심사 가능해요.&nbsp;</p><p>단, 대표 홈페이지가 없는 경우 APK 파일 다운로드 링크와 앱스토어 등록 예정일을 준비해주시면<strong>&nbsp;국민카드 제외</strong>하고 카드사 심사 가능해요.</p>'
      }
    },
    { 
      id: 90, 
      category: '카드사 심사', 
      question: 'Q. 카드사 심사 신청 절차가 어떻게 되나요?',
      answer: {
        html: '<p>계약 신청 후 담당자가 2~3일(영업일) 이내 입점 심사를 위한 연락을 드려요. 입점 심사 완료 후 카드사 심사가 진행돼요. </p>'
      }
    },
    { 
      id: 91, 
      category: '카드사 심사', 
      question: 'Q. 결제 제한과 인증 절차가 추가 되는 경우가 있나요?',
      answer: {
        html: '<p>환금성 업종(게임/상품권/충전서비스/웹하드/기부금/기프트카드/유심칩/유심칩 충전 등)의 경우 필요할 수 있어요.&nbsp;</p><p>자세한 사항은 계약 신청 후 담당자가 안내 드려요.</p>'
      }
    },
    { 
      id: 92, 
      category: '지급대행', 
      question: 'Q. 셀러 등록하는 방법 알려주세요.',
      answer: {
        html: '<p>상점관리자 &gt; 셀러관리 화면에서 등록이 가능하고 셀러 유형에 따라 아래 정보가 필요해요.</p><ul><li>개인/개인 사업자 : 셀러ID / 대표자명 / 은행 / 계좌번호 / 전화번호 / 이메일 과 함께 셀러의 \'휴대폰 본인인증\' 이 필요해요.</li><li>법인 사업자 : 셀러ID / 상호명 / 사업자번호 / 대표자명 / 은행 / 계좌번호 / 전화번호 / 이메일 주소 정보 가 필요해요.</li></ul><p><br></p><p>* 셀러의 휴대폰 본인인증은 왜 필요한가요 ?</p><p>셀러가 개인/개인사업자인 경우, 지급 대상을 식별하는데 필요한 필수 정보에요.</p><p>고객확인의무가 부여되는 일회성 금융거래의 기준금액을 집계하기 위해 휴대폰 본인인증이 필요합니다. 법인사업자의 경우에는 사업자 등록번호로 식별합니다.&nbsp;</p>'
      }
    },
    { 
      id: 93, 
      category: '지급대행', 
      question: 'Q. 지급대행 서비스 제공 기준을 알고 싶어요.',
      answer: {
        html: '<p>고객사는 지급대행 서비스를 이용하기 위해서 토스페이먼츠에 입점된 셀러에 대한 필수적인 정보를 제공할 수 있어야 하며,&nbsp;</p><p>정보를 제공할 수 있어야 하며, 해당 정보의 제공이 어려운 경우 지급대행 서비스의 이용이 어렵습니다.&nbsp;</p>'
      }
    },
    { 
      id: 94, 
      category: '지급대행', 
      question: 'Q. 지급대행 서비스 해지하고 싶어요.',
      answer: {
        html: '<p>지급대행 서비스 이용을 원치 않으실 경우, 해지신청서 작성 및 제출이 필요해요.<br>자세한 필요서류 및 제출 방법은 토스페이먼츠 고객센터 1544-7772 로 문의 주시면 안내 해드리겠습니다.<br><br>【 운영시간 】<br>- 평일 : 08:00 - 19:00 (주말/공휴일 휴무) </p>'
      }
    },
    { 
      id: 95, 
      category: '지급대행', 
      question: 'Q. 지급대행 서비스가 무엇인가요 ?',
      answer: {
        html: '<p>오픈마켓 형태의 쇼핑몰을 운영하는 고객사를 대상으로 전자금융업자인 토스페이먼츠가 고객사가 지정한 쇼핑몰 입점 판매자(고객사의 쇼핑몰에</p><p>입점하여 재화나 용역을 직접 제공하는 자, \'셀러\'라고 합니다)에게 대금지급을 대행해주는 서비스에요.</p><p><br></p><p>고객사가 셀러에게 정산대금을 각각 송금할 필요 없이 편리하게 지급 업무를 할 수 있어요.</p><p>지급대행은 기본적으로 가맹점의 "정산대금""을 지급의 재원으로 해요.</p><p><br></p><p>다만, 셀러에 관한 정보, 셀러에 대한 정산대금 관련 데이터를 관리해야 하며 토스페이먼츠는 정산대금의 지급 대행 업무만을 수행 합니다.</p>'
      }
    },
    { 
      id: 96, 
      category: '지급대행', 
      question: 'Q. 지급대행 서비스 계약은 어떻게 하나요?',
      answer: {
        html: '<p>상점관리자 이용정보 우측 상단 \'서비스 추가 신청\' 버튼을 통해 간편하게 서비스 이용 신청이 가능해요.</p>'
      }
    },
    { 
      id: 97, 
      category: '지급대행', 
      question: 'Q. 요청서 전송을 통해 이미 전송된 지급 요청건도 취소가 가능한가요 ?',
      answer: {
        html: '<p>당일 지급이 아닌 요청 건은 \'상점관리자\' 또는 \'API\' 를 통해 전송 취소가 가능해요.</p><ul><li>경로 : 상점관리자 &gt; 지급요청서 작성/조회 메뉴 &gt;  \'전송 취소\' </li></ul>'
      }
    },
    { 
      id: 98, 
      category: '지급대행', 
      question: 'Q. 적요를 바꿀 수 있나요?',
      answer: {
        html: '<p>적요는 고객사의 \'상점명\' 이 기본값으로 설정되며, 원하는 내용으로 변경하실 수 있어요.</p><p>적요 변경을 원하실 경우,</p><p>상점관리자 &gt; 이용정보 화면에서 변경이 가능해요. </p>'
      }
    },
    { 
      id: 99, 
      category: '지급대행', 
      question: 'Q. 지급대행 지급요청서 작성을 완료 했는데, 지급이 안돼요.',
      answer: {
        html: '<p>지급 요청서를 작성하신 후, \'요청서 전송\' 기능을 통해 지급 요청을 해주셔야 정산대금이 지급됩니다. </p>'
      }
    },
    { 
      id: 100, 
      category: '지급대행', 
      question: 'Q. 지급대행 지급 건이 없어도 수수료가 발생하나요?',
      answer: {
        html: '<p>지급대행 수수료는 최초 셀러 지급이 발생한 달부터 발생해요.</p><p>최초 이용료가 발생한 이후에는 지급 내역이 없어도 매 월 고정 이용요금인 300,000 원 (부가세 별도) 이 부과돼요.</p><p>월별 발생한 총 지급 건수에 따라 수수료는 상이할 수 있어요.</p><ul><li>월 별 총 지급 건수 1천 건 : 건당 수수료 없음</li><li>무료 분 모두 사용시 ( 지급 건수 1천 건 초과시 ) : 건당 100원<br><br>예) 2,000건 발생 시,</li><li>고정수수료 300,000원 + 초과수수료 (1,000건 X 100원 = 100,000원) = 400,000원 수수료 발생(부가세 별도) </li></ul>'
      }
    },
    { 
      id: 101, 
      category: '지급대행', 
      question: 'Q. 정산대금에서 수수료 차감은 어떻게 확인하나요?',
      answer: {
        html: '<p>상점관리자 &gt; 정산내역 화면에서 결제수단별 \'지급대행\' 에서 확인이 가능해요. </p>'
      }
    },
    { 
      id: 102, 
      category: '지급대행', 
      question: 'Q. 수수료 납부는 어떻게 하나요?',
      answer: {
        html: '<p>지급 예정 정산 대금에서 지급대행 서비스 이용료가 차감 되는 방식이에요.</p><p>매월 초 고객사의 정산대금에서 차감되므로 별도 납부하지 않아도 됩니다.</p><p>단, 차감할 정산대금이 없을 경우 마이너스 금액으로 누적되어 다음 정산대금 발생 시 차감됩니다. </p>'
      }
    },
    { 
      id: 103, 
      category: '지급대행', 
      question: 'Q. 일괄요청 엑셀업로드 양식이 어떻게 되나요?',
      answer: {
        html: '<p>상점관리자 &gt; 지급요청서 작성/조회 화면에서 양식을 다운로드 받으실 수 있어요. </p>'
      }
    },
    { 
      id: 104, 
      category: '지급대행', 
      question: 'Q. 지급요청일이 공휴일일 경우 지급은 언제되나요?',
      answer: {
        html: '<p>지급일은 영업일만 지정 가능하고, 토요일이나 공휴일을 지정할 수 없습니다. </p>'
      }
    },
    { 
      id: 105, 
      category: '지급대행', 
      question: 'Q. 지급대행 수수료 세금계산서는 언제 발행되나요?',
      answer: {
        html: '<p>세금계산서 발행은 지급대행 이용 월의 말일자로 발행 됩니다. </p>'
      }
    },
    { 
      id: 106, 
      category: '지급대행', 
      question: 'Q. 지급대행 서비스 이용료는 사업자단위인가요? MID 단위인가요?',
      answer: {
        html: '<p>지급대행 서비스 이용료는 고객사가 요청하는 지급그룹 단위로 계산 됩니다.</p><p>고객사의 지급대행 서비스 신청 시 별도로 확인하실 수 있습니다. </p>'
      }
    },
    { 
      id: 107, 
      category: '지급대행', 
      question: 'Q. 고객 확인 심사로 인해 지급대행 지급 요청서 작성/전송이 안됩니다.',
      answer: {
        html: '<p>지급대행 서비스를 통해 대금을 지급받는 셀러 대상으로 고객확인(KYC) 이행이 필요합니다.</p><p>셀러가 이메일로 발송된 고객확인 신청서를 제출하지 않았다면, 정산데이터 작성 및 전송이 제한되고 있어요.</p><p>특정 금융거래 정보의 보고 및 이용 등에 관한 법률에 따라 고객확인을 수행하고 있으며, 안전한 전자금융 거래를 위한 절차로 반드시 이행이 필요합니다.</p><ul><li>상점관리자 &gt; KYC 심사 화면에서 각 셀러에 대한 KYC 이행 상황을 확인 할 수 있어요. </li></ul>'
      }
    },
    { 
      id: 108, 
      category: '지급대행', 
      question: 'Q. 셀러가 지급받은 내역을 토스페이먼츠를 통해 확인할 수 있나요?',
      answer: {
        html: '<p>네, 가능해요.</p><p>상점관리자 &gt; 잔액관리 화면에서 입/출금일 기준으로 고객사 정산대금 입금 내역, 셀러 정산대금 입/출금 내역 등을 관리할 수 있어요. </p>'
      }
    },
    { 
      id: 109, 
      category: '지급대행', 
      question: 'Q. 서비스 신청시 적용은 언제부터 되는지?',
      answer: {
        html: '<p>지급대행 서비스 신청 이후, 토스페이먼츠의 승인이 완료되면 서비스 이용이 가능 해요. </p>'
      }
    },
    { 
      id: 110, 
      category: '지급대행', 
      question: 'Q. 지급 방식에 따른 지급가능 일자와 시간이 궁금해요.',
      answer: {
        html: '<p>바로지급 / 예약지급 모두 영입일 기준 08:00 am - 15:00 pm 사이에 지급 요청 할 수 있어요.</p><p>지급은 순차적으로 이루어 집니다.</p><ul><li>바로 지급 : 당일 08:00~15:00 사이&nbsp;</li><li>예약 지급 : 익일 부터 ~ 최대 1년 이내로 지급일 설정이 가능해요.</li></ul>'
      }
    },
    { 
      id: 111, 
      category: '지급대행', 
      question: 'Q. 셀러에게 정산대금을 지급하기 위한 잔액은 어떻게 관리 되나요?',
      answer: {
        html: '<p>셀러에 대한 정산대금은 고객사가 이용하는 전자지급결제 서비스에 따라 발생하는 가맹점의 "정산대금"을 지급의 재원으로 해요.</p><p>고객사의 신청에 따라 셀러에게 지급됩니다.</p><p><br></p><p>고객사의 정산 주기에 맞게 "정산대금"을 토스페이먼츠가 지정한 고객사별 지급대행용 가상계좌로 입금 받게 돼요.&nbsp;</p><p><br></p><p>예를들어 기존에 D+6일로 정산 계좌에 지급을 받고 계셨다면, 지급대행을 사용하는 경우 동일하게 D+6 일에 지급 잔액이 채워집니다.</p><p>채워지는 시간은 정산 계좌로 지급받는 시간과 동일해요. (오전 10시 30분~11시 30분사이)</p><p><br></p><ul><li>상점관리자 or API 를 통해 잔액을 쉽게 확인하고 관리 할 수 있어요.</li></ul>'
      }
    },
    { 
      id: 112, 
      category: '서류안내', 
      question: 'Q. 열람용/팩스 발송 확인용으로 제출해도 되나요?',
      answer: {
        html: '<p>열람용, 팩스 발송 확인용의 경우 법적 증빙 효력이 없어 발급본 및 원본으로 제출 필요해요. (단, 전자계약으로 계약을 체결하는 경우에는 발급본을 스캔하시어 첨부 가능합니다.)</p>'
      }
    },
    { 
      id: 113, 
      category: '서류안내', 
      question: 'Q. 계약 신청 시 어떤 서류가 필요한가요?',
      answer: {
        html: '<p>필요한 서류는 사업자 유형에 따라 상이하며, 본인 유형에 맞는 서류를 모두 준비해주셔야 해요</p><p>자세한 내용은 아래 링크에서 확인해 주세요</p><p><a href="https://tosspublic.notion.site/d142c2936b4246b083eaf33be95068f0" rel="noopener noreferrer" target="_blank"><strong>확인하러 가기</strong></a></p>'
      }
    },
    { 
      id: 114, 
      category: '서류안내', 
      question: 'Q. 사용인감계가 무엇인가요?',
      answer: {
        html: '<p>사용인감계란 사업자가 인감의 보조 수단으로 사용하는 도장인 사용인감을 이용하여 서류를 날인한 경우, 이의 효력을 증명하기 위해 제출하는 서류입니다.&nbsp;</p><p>만약 인감도장으로 모든 서류를 날인한 경우는 제출하지 않으셔도 됩니다.</p>'
      }
    },
    { 
      id: 115, 
      category: '서류안내', 
      question: 'Q. 외국인인 경우에는 어떤 서류를 제출해야 하나요?',
      answer: {
        html: '<p>국내 거주 외국인의 경우 외국인 등록증 (또는 거소증)을 추가로 제출해야 해요.</p>'
      }
    },
    { 
      id: 116, 
      category: '서류안내', 
      question: 'Q. 공동대표자인 경우 신분증을 다 제출해야 하나요?',
      answer: {
        html: '<p>고객확인 의무를 위해 주 대표자 뿐만 아니라 공동 대표자 모두의 고객확인을 하고 있기에 공동대표자 관련 구비서류 (신분증, 인감증명서)를 모두 제출해 주셔야 해요.</p>'
      }
    },
    { 
      id: 117, 
      category: '서류안내', 
      question: 'Q. 신분증 뒷면도 필요한가요?',
      answer: {
        html: '<p>신분증 뒷면도 필요해요. 다만, 주소지 변경이 없을 경우에는 앞면 제출로도 가능해요.</p>'
      }
    },
    { 
      id: 118, 
      category: '서류안내', 
      question: 'Q. 신분증은 왜 뒷자리가 마스킹되면 안되나요?',
      answer: {
        html: '<p>특정 금융거래 정보의 보고 및 이용 등에 관한 법률」 제5조의 2(고객확인 의무)에 따라 개인사업자의 대표자, 개인사업자 및 법인사업자의 계약 대리인에 대한 실지 명의(성명, 주민등록번호), 국적, 거주지, 연락처를 확인하고 있어요. 실지 명의 확인을 위해서 신분증 상 주민등록번호 뒷자리를 가리지 않고 보내주셔야 해요.</p>'
      }
    },
    { 
      id: 119, 
      category: '서류안내', 
      question: 'Q. 신분증은 왜 여권이 안되나요?',
      answer: {
        html: '<p>특정 금융거래 정보의 보고 및 이용 등에 관한 법률」 제5조의 2(고객확인 의무)에 따라 개인사업자의 대표자, 개인사업자 및 법인사업자의 계약 대리인에 대한 실지 명의(성명, 주민등록번호), 국적, 거주지, 연락처를 확인하고 있어요. 여권에는 거주지가 표기되어 있지 않아 여권이 아닌 주민등록증 또는 운전면허증으로 제출해야 해요.</p>'
      }
    },
    { 
      id: 120, 
      category: '서류안내', 
      question: 'Q. 도로명 주소가 아닌 지번주소(구주소)로 발급된 사업자등록증도 가능한가요?',
      answer: {
        html: '<p>사업장 주소지가 최신 주소라면 도로명/지번주소 관계없이 가능해요.</p>'
      }
    },
    { 
      id: 121, 
      category: '서류안내', 
      question: 'Q. 사업자등록증은 최신본 이어야 하나요?',
      answer: {
        html: '<p>현재 사업자 최신 정보 확인(상호명, 사업장 주소지, 대표자, 업태/종목 등)을 위해 최신본으로 제출해야 해요.</p>'
      }
    },
    { 
      id: 122, 
      category: '서류안내', 
      question: 'Q. 지점인 경우, 본점의 등기부등본을 제출하면 되나요?',
      answer: {
        html: '<p>지점 사업자인 경우 같은 법인 등록번호를 기준으로 법인의 등기부등본으로 제출해 주시면 돼요.</p>'
      }
    },
    { 
      id: 123, 
      category: '서류안내', 
      question: 'Q. 인감증명서는 최신본 이어야 하나요?',
      answer: {
        html: '<p>인감증명서의 목적 확인 및 최신 정보 확인을 위해 제출일 기준으로 발급 일자 3개월 이내 발급된 서류를 제출해 주셔야 해요.</p>'
      }
    },
    { 
      id: 124, 
      category: '서류안내', 
      question: 'Q. 법인등기부등본은 최신본 이어야 하나요?',
      answer: {
        html: '<p>법인의 현재 최신 정보(법인명, 법인 주소지, 대표이사 정보 등)를 기준으로 고객 정보 확인이 필요하여 최신본 (제출일 기준으로 발급 일자 3개월 이내 발급본)으로 제출해 주셔야 해요.</p>'
      }
    },
    { 
      id: 125, 
      category: '서류안내', 
      question: 'Q. 최대 주주가 해외법인이라 주주명부가 존재하지 않거나 확인이 어려워요.',
      answer: {
        html: '<p>해외 법인의 UBO (실제 소유자 확인서)를 제출해 주시거나 계약하는 사업자의 실제 소유자 정보에 대한 내용을 기재하시어 공문으로 제출해 주셔도 돼요.</p>'
      }
    },
    { 
      id: 126, 
      category: '서류안내', 
      question: 'Q. 주주명부에 필수적으로 들어가야 하는 정보가 있나요?',
      answer: {
        html: '<p>실제 소유자의 성명, 생년월일, 성별, 국적, 지분율(%)을 확인하고 있어요.</p>'
      }
    },
    { 
      id: 127, 
      category: '서류안내', 
      question: 'Q. 주주명부 1대 주주가 법인인 경우에는 어떻게 하죠? 주주가 계속 법인이에요.',
      answer: {
        html: '<p>법인의 최대 주주가 타 법인인 경우 해당 법인의 주주명부 제출도 필요해요. 고객확인 및 실제 소유자 확인은 법인의 최대 지분을 보유한 자연인 (법인이 아닌 사람)을 확인하는 의무를 수행하는 것이에요. 최대 주주인 법인의 주주명부 상 최대 주주가 또다시 타 법인인 경우 해당 법인의 주주명부도 제출이 필요하며, 이러한 단계에서 주주명부 상 최대 지분 보유 자연인 확인이 어려운 경우 계약하는 법인 사업자의 실제 소유자 정보를 기재하시어 공문 제출로 대체 가능해요.</p>'
      }
    },
    { 
      id: 128, 
      category: '서류안내', 
      question: 'Q. 주주명부는 최신본 이어야 하나요?',
      answer: {
        html: '<p>법인의 실제 소유자 현황을 확인하여야 하므로 3개월 이내 최신본으로 제출해 주셔야 해요.</p>'
      }
    },
    { 
      id: 129, 
      category: '서류안내', 
      question: 'Q. 가상 계좌 발급확인서로 통장사본을 대체해도 될까요?',
      answer: {
        html: '<p>계약 가맹점 명의로 발급받은 가상 계좌 발급확인서로 정산계좌 등록/변경은 가능하나, 가맹점 명의가 아닌 가상 계좌 발급확인서로는 정산계좌 등록/변경은 어렵습니다. 별도 협의 및 확약서 체결을 한 경우 가능해요.</p>'
      }
    },
    { 
      id: 130, 
      category: '서류안내', 
      question: 'Q. 무효 통장도 정산 받을 계좌로 사용이 가능한가요?',
      answer: {
        html: '<p>해지, 만료된 통장은 정산계좌 등록/변경이 불가해요.</p>'
      }
    },
    { 
      id: 131, 
      category: '서류안내', 
      question: 'Q. 평생계좌도 정산받을 계좌로 등록이 되나요?',
      answer: {
        html: '<p>평생 계좌번호(010- 번호 형태)의 경우에도 실제 은행 계좌번호가 존재하므로 해당 계좌번호 및 실 계좌번호가 명시된 통장사본으로 제출해 주셔야 해요.</p>'
      }
    },
    { 
      id: 132, 
      category: '서류안내', 
      question: 'Q. 어떤 통장사본이 필요한가요?',
      answer: {
        html: '<p>PG 결제 대금을 정산 받을 계좌의 은행 통장사본 제출이 필요해요. 개인사업자의 경우 대표자 명의 계좌 또는 사업자 명의 계좌로만 정산 대금을 지급받을 수 있으며, 가족/직원 등 제3자 명의 계좌로의 정산 대금 지급은 불가해요. 법인사업자의 경우 사업자 명의 계좌로만 정산 대금을 지급받을 수 있으며, 대표자 개인 명의, 타인 명의, 타 사업자 명의 게좌 등 제3자 명의 계좌로의 정산 대금 지급은 불가해요.</p>'
      }
    },
    { 
      id: 133, 
      category: '서류안내', 
      question: 'Q. 인감증명서는 왜 제출이 필요한가요?',
      answer: {
        html: '<p>인감증명서는 계약서/신청서 상 날인한 인감도장이 해당 사업자의 인감도장임을 증명하는 서류로서 제출이 필요해요.</p>'
      }
    },
    { 
      id: 134, 
      category: '상점관리자', 
      question: 'Q. 가상계좌 발급 계좌번호는 어떻게 확인하나요?',
      answer: {
        html: '<p>아래 경로에서 확인 가능해요.</p><p>경로 : 상점관리자 &gt; 결제조회 &gt; 가상계좌 &gt; 계좌번호</p><p>조회가 되지 않는 경우, 표 설정 &gt; 은행, 계좌번호 선택 &gt; 적용하기 후 다시 조회해주세요.</p>'
      }
    },
    { 
      id: 135, 
      category: '상점관리자', 
      question: 'Q. 안심 키인 결제 (수기결제) 어떻게 하나요?',
      answer: {
        html: '<p>아래 경로를 통해 결제할 수 있어요.</p><p>경로 : 상점관리자 &gt; 우측 상단 \'(구)상점관리자\' &gt; 상점아이디(MID) 선택 &gt; 신용카드 &gt; 안심수기결제</p>'
      }
    },
    { 
      id: 136, 
      category: '상점관리자', 
      question: 'Q. 계약취소, 해지된 상점들을 보고 싶지 않아요.',
      answer: {
        html: '<p>유효하지 않은 상점아이디(MID)들을 미노출 할 수 있어요.</p><p>경로 : 상점관리자 &gt; 계약·운영 &gt; 사용자관리 &gt; 계정 우측 \'수정\' &gt; 계약해지·취소 상점 안보기</p>'
      }
    },
    { 
      id: 137, 
      category: '상점관리자', 
      question: 'Q. 청구공문서와 세금계산서는 어떻게 확인하나요?',
      answer: {
        html: '<p><strong>* 청구공문서</strong></p><p>수수료를 추후에 처리하는 \'후취\' 상점MID 에만 적용돼요.</p><p>경로 : 상점관리자 &gt; 우측 상단 \'(구)상점관리자\' &gt; 상점아이디(MID) 선택 &gt; 정산내역 &gt; 청구내역조회 &gt; 청구공문서(합산) 또는 청구공문서(분리)</p><p><br></p><p><strong>* 세금계산서</strong></p><p>세금계산서는 매월 첫 영업일 오후에 순차적으로 발행되고 있어요. </p><p>경로 : 상점관리자 &gt; 우측 상단 \'(구)상점관리자\' &gt; 상점아이디(MID) 선택 &gt; 정산내역 &gt; 전자세금계산서</p>'
      }
    },
    { 
      id: 138, 
      category: '상점관리자', 
      question: 'Q. 상점아이디(MID)는 어디서 확인하나요?',
      answer: {
        html: '<p>상점ID 확인이 어려우신 경우 아래 경로로 확인하실 수 있어요.</p><p>경로 : 상점관리자 &gt; 회사정보/이용정보 &gt; 상점아이디(MID)</p>'
      }
    },
    { 
      id: 139, 
      category: '상점관리자', 
      question: 'Q. 모바일 상점관리자 이용할 수 있나요?',
      answer: {
        html: '<p>안타깝게도 현재 모바일 버전은 일부 기능만 이용하실 수 있음에, PC에서 사용을 권장 드려요.</p><p>편리하게 이용하실 수 있도록 빠른 시일내에 준비할께요.</p><p><br></p>'
      }
    },
    { 
      id: 140, 
      category: '상점관리자', 
      question: 'Q. 현금영수증 대량 발급은 어떻게 하나요?',
      answer: {
        html: '<p>아래 경로에서 엑셀 양식을 받아 발급 및 취소가 가능해요.</p><p>경로 : 상점관리자 &gt; 현금영수증 &gt; 대량 등록하기 &gt; 발급/취소/다시 발급 &gt; 엑셀 양식 받기 &gt; 파일 올리기 &gt; 발급하기</p><p><br></p><p>[유의사항]</p><p>예시로 기재된 내용은 수정하지 말아주세요.</p><p>주문번호는 영문, 숫자, -, _ 외 다른 문자를 포함할 수 없어요.</p><p>이전 발급 이력이 있는 사업자 번호의 \'상호명, 대표자명, 전화번호, 주소\'는 변경할 수 없어요.</p><p>공급가액, 부가세, 합계를 정확히 입력해주세요.</p>'
      }
    },
    { 
      id: 141, 
      category: '상점관리자', 
      question: 'Q. 무이자 할부 적용 여부는 어떻게 확인하나요?',
      answer: {
        html: '<p>아래 경로에서 확인 가능해요.</p><p>경로 : 상점관리자 &gt; 결제조회 &gt; 신용·체크카드 &gt; 할부 &gt; <strong>\'무\'</strong></p><p>조회가 되지 않는 경우, 표 설정 &gt; 할부 선택 &gt; 적용하기 후 다시 조회해주세요.</p>'
      }
    },
    { 
      id: 142, 
      category: '상점관리자', 
      question: 'Q. 카드 매출전표 조회는 어떻게 하나요?',
      answer: {
        html: '<p>아래 경로에서 확인 가능합니다.</p><p>경로 : 상점관리자 &gt; 결제조회 &gt; 신용·체크카드 &gt; 영수증 &gt; 선택</p><p>우측 상단의 아이콘을 선택하여 이메일 보내기, 링크 복사, 출력이 가능합니다.</p><p>조회가 되지 않는 경우, 표 설정 &gt; 영수증 선택 &gt; 적용하기 후 다시 조회해주세요.</p>'
      }
    },
    { 
      id: 143, 
      category: '상점관리자', 
      question: 'Q. 상점관리자는 어떻게 이용하나요?',
      answer: {
        html: '<p>상점관리자는 전자결제 서비스를 이용하시면서 필요한 다양한 정보와 기능을 제공하고 있어요.</p><p>자세한 상점관리자 이용 방법은 아래 가이드를 통해 확인 가능해요.</p><p><a href="https://tosspublic.notion.site/b99d2cb71d29401c82eecb64ae6f712c" rel="noopener noreferrer" target="_blank"><strong>매뉴얼 바로가기</strong></a></p><table style="width: 61%; margin-right: calc(30%); margin-left: calc(10%);"><tbody><tr><td style="width: 28.1026%; text-align: center;">정산</td><td style="width: 71.7229%; text-align: center;">매출액, 입금 예정 금액, 정산내역 등<br></td></tr><tr><td style="width: 28.1026%; text-align: center;">결제조회</td><td style="width: 71.7229%; text-align: center;">결제수단 별 결제 내역 조회, 결제 취소 및 환불 진행 등<br></td></tr><tr><td style="width: 28.1026%; text-align: center;">현금영수증</td><td style="width: 71.7229%; text-align: center;">발급 내역, 별도 발급 등<br></td></tr><tr><td style="width: 28.1026%; text-align: center;">계약·운영<br></td><td style="width: 71.7229%; text-align: center;">사업자 정보 및 담당자 정보 변경,<br>수수료, 정산 한도 변경, 사용자 관리 등<br></td></tr><tr><td style="width: 28.1026%; text-align: center;">부가세신고자료</td><td style="width: 71.7229%; text-align: center;">부가세신고 매출/매입 신고 자료 조회<br></td></tr><tr><td style="width: 28.1026%; text-align: center;">업데이트 소식</td><td style="width: 71.7229%; text-align: center;">상점관리자의 새로운 기능 안내<br></td></tr><tr><td style="width: 28.1026%; text-align: center;">자주 묻는 질문</td><td style="width: 71.7229%; text-align: center;">자주 묻는 질문과 답, 채팅 상담 연결 등</td></tr></tbody></table>'
      }
    },
    { 
      id: 144, 
      category: '상점관리자', 
      question: 'Q. 담당자 정보 변경은 어떻게 하나요?',
      answer: {
        html: '<p>운영·개발·정산 담당자 정보 변경은 아래 경로에서 각각 변경 가능해요.<br>경로 : 상점관리자 &gt; 계약·운영\'&gt; 회사정보 &gt; 상점아이디(MID) 선택 &gt; 담당자 \'변경\' </p>'
      }
    },
    { 
      id: 145, 
      category: '상점관리자', 
      question: 'Q. 상점관리자 계정 연락처 변경은 어떻게 하나요?',
      answer: {
        html: '<p><a href="https://www.tosspayments.com/" rel="noopener noreferrer" target="_blank">토스페이먼츠 홈페이지</a>에서 로그인 후 변경할 수 있습니다.</p><p>경로 : 상점관리자 &gt; 우측 상단 \'프로필(사람 모양 아이콘)\' 선택 &gt; 계정 설정 &gt; 휴대폰 번호 입력 &gt; \'변경하기\'</p>'
      }
    },
    { 
      id: 146, 
      category: '상점관리자', 
      question: 'Q. 상점관리자 계정 정보변경(비밀번호, 이름, 연락처)은 어떻게 하나요?',
      answer: {
        html: '<p><a href="https://www.tosspayments.com/" rel="noopener noreferrer" target="_blank"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">토스페이먼츠 홈페이지</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&nbsp;에서 로그인 후 변경할 수 있어요.</font></font></p><p>경로 : 상점관리자 &gt; 우측 상단 \'프로필\' 선택 &gt; 계정 설정 </p>'
      }
    },
    { 
      id: 147, 
      category: '상점관리자', 
      question: 'Q. 사용자 추가와 대표관리자 변경은는 어떻게 하나요?',
      answer: {
        html: '<p>추가를 원하시는 이메일주소를 아래 경로를 통해 사용자 추가할 수 있어요.</p><p>경로 : 상점관리자 &gt; 계약·운영 &gt; 사용자 관리 &gt; 사용자 추가하기</p><p>이 후 초대 메일 수락을 하시면 이용이 가능해요.</p><p>초대를 받는 사용자가 이미 회원가입이 되어있는 계정이라면 추가시 바로 이용하실 수 있어요.</p><p><br></p><p>사용자 추가가 완료되었다면 대표관리자 권한도 넘길 수 있어요.</p><p>경로 : 상점관리자 &gt; 계약,운영 &gt; 사용자관리 &gt; 대표관리자 권한 넘기기</p><p>권한넘기기가 되지 않는다면, 사용자 추가가 되었는지 먼저 확인해 주세요.</p>'
      }
    },
    { 
      id: 148, 
      category: '상점관리자', 
      question: 'Q. 적용 수수료는 어디서 볼 수 있나요?',
      answer: {
        html: '<p>아래 경로에서 적용 수수료 및 계약 완료 이후 변동 내역 확인이 가능하며, 부가세가 포함되어 있어요.</p><p>경로 : 상점관리자 &gt; 계약·운영 &gt; 이용정보 &gt; 수수료</p>'
      }
    },
    { 
      id: 149, 
      category: '상점관리자', 
      question: 'Q. (구)상점관리자 사용이 종료되나요?',
      answer: {
        html: '<p>더 나은 서비스 제공을 위해 (구)상점관리자 서비스가 2022년 6월 9일 종료되었어요.</p><p>(구)상점관리자는 종료되지만 새 상점관리자 상단의 (구)상점관리자 메뉴를 통해 기존 사용하시던 메뉴를 사용할 수 있어요.</p><p>새 상점관리자 이용에 문의가 있으시다면 토스페이먼츠 고객센터(1544-7772)로 문의해 주세요.</p>'
      },
      isTop: true
    },
    { 
      id: 150, 
      category: '상점관리자', 
      question: 'Q. 회사 정보가 변경되었습니다.',
      answer: {
        html: '<p>상점관리자에서 변경이 가능하며 영업일 기준 2~3일 소요돼요.</p><p>필요 서류는 신청 과정에서 확인이 가능해요.</p><p>경로 : 상점관리자 &gt; 계약·운영 &gt; 회사정보 &gt; \'변경\'</p><p>*단, 사업자번호 변경이 있는 경우, 추가 절차 확인이 필요해요. ( <a href="https://www.notion.so/tosspublic/3d66109248ba4af2b86a7c3a29b5ca9f" rel="noopener noreferrer" target="_blank">확인하러 가기</a> )&nbsp;</p>'
      }
    },
    { 
      id: 151, 
      category: '상점관리자', 
      question: 'Q. 상점관리자의 주소가 어떻게 되나요?',
      answer: {
        html: '<p>계약이 완료되어야 상점에 접속할 수 있어요.</p><p><a href="https://app.tosspayments.com" rel="noopener noreferrer" target="_blank">토스페이먼츠 홈페이지</a> 에서 원하시는 상점을 찾아서 "상점 들어가기"를 클릭해주세요.</p>'
      }
    },
    { 
      id: 152, 
      category: '기술지원', 
      question: 'Q. 테스트 결제를 진행하고 싶어요.',
      answer: {
        html: '<p>아래 페이지에서 결제창 체험 및 가상계좌 입/출금 테스트를 진행하실 수 있습니다.</p><p><a href="https://pgweb.tosspayments.com/pg/wmp/Home2009/demo/xpaydemo/payreq_crossplatform.jsp" rel="noopener noreferrer" target="_blank"><strong>결제창 확인하러 가기</strong></a></p><p><a href="https://pgweb.tosspayments.com/pg/wmp/Home2009/demo/xpaydemo/httpCasDeposit.jsp" rel="noopener noreferrer" target="_blank"><strong>가상계좌 입/출금 테스트 하러가기</strong></a></p>'
      }
    },
    { 
      id: 153, 
      category: '기술지원', 
      question: 'Q. 전자결제 서비스 신청을 완료하였습니다. 테스트ID는 무엇인가요?',
      answer: {
        html: '<p>신청하신 상점ID 앞에 t를 붙이면 테스트 ID 입니다.&nbsp;</p><p>예) abc123으로 가입 &gt; tabc123이 테스트 ID</p>'
      }
    },
    { 
      id: 154, 
      category: '기술지원', 
      question: 'Q. 결제창 연동을 위한 키 값은 어디서 확인할 수 있나요?',
      answer: {
        html: '<p>경로: 상점관리자 &gt; 개발자센터 &gt; 상점아이디(MID)선택 &gt; 테스트/라이브 선택&nbsp;</p><p>* 상점아이디(MID) 별로 각각 생성됩니다.</p><p>* Mertkey는 결제 연동 시 MID마다 부여되는 고유 값으로 구 버전 연동에만 사용됩니다.</p>'
      }
    },
    { 
      id: 155, 
      category: '기술지원', 
      question: 'Q. 계좌 본인확인 시 예금주 응답길이가 은행마다 다른가요?',
      answer: {
        html: '<p>법인계좌에 대해서는 은행마다 예금주에 대한 응답자리수가 다릅니다.&nbsp;</p><p>토스페이먼츠에서는 최대 7자리로 응답을 하고 있습니다.&nbsp;</p><p>일부은행의 경우 은행에서 최대 6자리(우리, 농협 등)로 응답하고 있습니다.</p>'
      }
    },
    { 
      id: 156, 
      category: '기술지원', 
      question: 'Q. 결제 프로그램 연동 매뉴얼이 필요해요.',
      answer: {
        html: '<p><a href="https://docs.tosspayments.com/guides/overview" rel="noopener noreferrer" target="_blank"><strong>SDK(신모듈) 확인하러 가기</strong></a></p><p>* XPAY(구모듈) 관련 문의가 있으시다면, 아래 경로를 통해 접수하시거나 토스페이먼츠 고객센터(1544-7772)로 문의주시기 바랍니다.<a href="https://tally.so/r/3xVePo" rel="noopener noreferrer" target="_blank"></a><br><a href="https://tally.so/r/3xVePo" rel="noopener noreferrer" target="_blank">XPAY(구모듈) 문의하기</a></p>'
      }
    },
    { 
      id: 157, 
      category: '기술지원', 
      question: 'Q. 라이브 키(live key) 확인 시 \'전자결제 신청 완료 후에 확인할 수 있어요\' 문구가 확인되고 선택되지 않아요.',
      answer: {
        html: '<p>라이브 키(live key)는 계약 심사 완료 후 확인이 가능합니다.</p><p>계약 완료 후 아래 경로에서 라이브 키(live key) 값을 확인하실 수 있습니다.</p><p>경로 : 경로: 상점관리자 &gt; 개발자센터 &gt; 상점아이디(MID)선택 &gt; 테스트/라이브 선택</p><p>* \'개발 테스트\' 메뉴에서는 라이브 키(live key) 조회가 불가합니다.</p>'
      }
    },
    { 
      id: 158, 
      category: '기술지원', 
      question: 'Q. 할부 개월 수 노출 값을 변경하고 싶어요.',
      answer: {
        html: '<p>별도 설정이 없는 경우, 5만원 이상 결제 건에 대해 12개월 할부 선택 창을 노출하고 있습니다. (현대카드 제외)</p><p>아래 파라미터 값 설정을 통해 결제 창에 노출되는 할부 개월 수 변경이 가능합니다.</p><p>- SDK (신모듈) : installmentPlanMonths (예시 : cardInstallmentPlan: \'0\' )</p><p>- XPay (구모듈) : LGD_INSTALLRANGE (예시 : LGD_INSTALLRANGE = 0:2:3:4:5:6:7:8:9:10:11:12 )</p>'
      }
    },
    { 
      id: 159, 
      category: '기술지원', 
      question: 'Q. 결제 테스트 중 \'인증되지 않은 클라이언트키, 시크릿키 입니다\' 문구가 확인됩니다.',
      answer: {
        html: '<p>승인 요청 API 진행 시, authrization 헤더에 전달되는 \'시크릿 키(secret key)\'를 통해 가맹점을 식별하고 있습니다.</p><p>Base64 (\'시크릿 키(secret key)\' + : (콜론))로 인코딩하여 전달이 필요합니다.</p><p>: (콜론)이 누락되어 인코딩 되는 경우, 위와 같은 문구가 발생됩니다.</p>'
      }
    },
    { 
      id: 160, 
      category: '기술지원', 
      question: 'Q. 빌링 결제 테스트 중 본인인증용 인증번호가 오지 않아요.',
      answer: {
        html: '<p>테스트 결제 창에서는 본인 인증 번호를 수신할 수 없어요.&nbsp;</p><p>숫자 \'000000\'로 대체 입력 후 진행이 가능해요.</p>'
      }
    },
    { 
      id: 161, 
      category: '기술지원', 
      question: 'Q. 결제 프로그램 연동 샘플을 확인하고 싶어요.',
      answer: {
        html: '<p>아래 페이지에서 샘플 자료를 확인하실 수 있습니다.</p><p><a href="https://github.com/tosspayments/payment-samples/tree/main/payment-window" rel="noopener noreferrer" target="_blank"><strong>SAMPLE 자료 확인하러 가기</strong></a></p>'
      }
    },
    { 
      id: 162, 
      category: '기술지원', 
      question: 'Q. [페이팔] 어떤 결제창 이용이 가능한가요?',
      answer: {
        html: '<p>결제 위젯을 통해 이용할 수 있어요. 자체 구축을 통해 페이팔 수단을 직접 노출하는 형태로도 이용할 수 있어요.</p><p>아래 링크를 통해 연동 가이드를 확인할 수 있어요.</p><p><a href="https://docs.tosspayments.com/guides/payment-widget/integration-paypal" rel="noopener noreferrer" target="_blank">확인하러 가기</a></p>'
      }
    },
    { 
      id: 163, 
      category: '통신판매업 바로신청', 
      question: 'Q. 통신판매업 바로신청 서비스를 이용할 수 있는 대상을 알고 싶어요.',
      answer: {
        html: '<p>단독대표이고, 개인사업자인 경우에만 이용 가능해요.<br><br>공동대표자의 경우 온라인으로 통신판매업 신고 불가 하며, 관할 군/구청에 직접 방문하셔야 하는 점 참고해주세요.<br><br>* 정부24 고객센터 : 1588-2188 (09:00~18:00)</p>'
      }
    },
    { 
      id: 164, 
      category: '통신판매업 바로신청', 
      question: 'Q. 통신판매업 바로신청을 통해 신고 했는데 조회가 안돼요.',
      answer: {
        html: '<p>먼저 면허세 납부가 필요해요.<br><br>신고증 조회 및 출력은 면허세 납부 이후에 정부24에서 가능해요.<br><br>* 정부24 고객센터 : 1588-2188 (09:00~18:00)</p>'
      }
    },
    { 
      id: 165, 
      category: '통신판매업 바로신청', 
      question: 'Q. 통신판매업 바로신청을 통해 신고했어요. 면허세 납부는 어떻게 하나요?',
      answer: {
        html: '<p>신고가 완료된 후 위택스로 등록면허세 납부하시면 돼요.<br><br>알림톡에서 [면허세 납부하기] 버튼을 클릭하면 위택스로 연결되니 참고해주세요.<br><br>【 납부 방법 】<br>· 위택스(www.wetax.go.kr) - 위쪽의 \'납부하기\' 선택 - \'지방세\' 메뉴 선택 - 목록에서 금액 확인 후 납부 버튼 선택<br><br>※ 오프라인 납부는, 관할 군·구청 방문이 필요해요.<br>* 정부24 고객센터 : 1588-2188 (09:00~18:00)</p>'
      }
    },
    { 
      id: 166, 
      category: '통신판매업 바로신청', 
      question: 'Q. 통신판매업 바로신청을 통해 신고했어요. 신고증은 어떻게 출력하나요?',
      answer: {
        html: '<p>통신판매업신고증은 정부24에서 출력하거나, 관할 군·구청에서 직접 방문하여 발급 받을 수 있어요.<br><br>* 정부24 고객센터 : 1588-2188 (09:00~18:00)</p>'
      }
    },
    { 
      id: 167, 
      category: '통신판매업 바로신청', 
      question: 'Q. 통신판매업 바로신청 후 정보를 수정하고 싶어요.',
      answer: {
        html: '<p>통신판매업 바로신청 서비스를 통해 신청 후 사업자등록증 상 정보가 수정되어 변경 신고 필요한 경우 정부 24로 문의하셔야 해요.<br><br>【 문의 방법 】<br>· 정부24홈페이지 접속(https://www.gov.kr/portal/main#none) - 로그인 - 통신판매업 변경신고 : https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A09006&amp;CappBizCD=11300000007&amp;tp_seq=01#noaction</p>'
      }
    },
    { 
      id: 168, 
      category: '통신판매업 바로신청', 
      question: 'Q. 통신판매업 바로신청을 취소하고 싶어요. 어떻게 취소하나요?',
      answer: {
        html: '<p>통신판매업 신고 바로신청 서비스 취소는 정부24를 통해서만 가능해요.<br><br>【 문의 방법 】<br>① 정부24홈페이지 접속(https://www.gov.kr/portal/main#none) - 로그인 - My Gov - 신청내역 - 취소<br>② 정부24 콜센터 : 1588-2188 (09:00~18:00)<br><br>진행 과정에 있어 추가 문의사항이 있으실 경우 정부24로 문의하시면 돼요.</p>'
      }
    },
    { 
      id: 169, 
      category: '통신판매업 바로신청', 
      question: 'Q. 통신판매업 바로신청 중 오류가 발생했어요. 신청에 실패했는데 다시 하려면 어떻게 해야 하나요?',
      answer: {
        html: '<p>토스페이먼츠 고객센터로 문의해주시면 재신청하실 수 있도록 도와드릴게요.<br><br>*토스페이먼츠 고객센터 1544-7772 (평일 08:00-19:00)</p>'
      }
    }
  ];

  // Pagination state
  const [activePage, setActivePage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('전체');
  const ITEMS_PER_PAGE = 8;

  const handleSearchChange = (value: string) => {
    console.log('Search value:', value);
    setSearchQuery(value);
    setActivePage(1); // 검색 시 첫 페이지로
  };

  const handleTabChange = (tab: string) => {
    console.log('Active tab:', tab);
    setActiveTab(tab);
    setActivePage(1); // 탭 변경 시 첫 페이지로
  };

  // 필터링된 FAQ 아이템
  const getFilteredItems = () => {
    let filtered = faqItems;

    // 탭 필터링 (이모티콘 제거 후 비교)
    if (activeTab === '질문Top') {
      filtered = filtered.filter(item => item.isTop === true);
    } else if (activeTab !== '전체') {
      // 탭에서 이모티콘 제거 (모든 이모지와 변형 선택자, ZWJ 등 제거)
      const normalizedTab = activeTab
        .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{E000}-\u{F8FF}\uFE0F\u200D]/gu, '')
        .trim();
      filtered = filtered.filter(item => item.category === normalizedTab);
    }

    // 검색 필터링
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredItems = getFilteredItems();
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageItems = filteredItems.slice(startIndex, endIndex);

  // 페이지 번호 생성
  const generatePageNumbers = () => {
    const pages: number[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (activePage <= 4) {
        pages.push(1, 2, 3, 4, 5, -1, totalPages); // -1은 '...'를 의미
      } else if (activePage >= totalPages - 3) {
        pages.push(1, -1, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, -1, activePage - 1, activePage, activePage + 1, -1, totalPages);
      }
    }
    return pages;
  };

  const handleFaqClick = (id: number) => {
    console.log('FAQ clicked:', id);
  };

  const handlePaymentHistoryClick = () => {
    console.log('결제내역 확인 clicked');
    window.open('https://pis.softment.co.kr/', '_blank');
  };

  const handleChatClick = () => {
    console.log('1:1 채팅상담 clicked');
  };

  const handleQuickInquiryClick = () => {
    console.log('빠른 문의하기 clicked');
  };

  // (removed) inline pagination styles – handled in Pagination component

  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-start p-0 relative size-full">
      {/* Hero Section */}
      <div className="bg-[#f2f4f6] relative shrink-0 w-full">
        <div className="flex flex-row items-center relative size-full">
          <PageContainer className="pt-[114px] pb-[54px]">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-8 lg:gap-0">
              {/* Hero Text */}
              <div className="box-border content-stretch flex flex-col gap-5 md:gap-6 lg:gap-[24px] h-auto md:h-auto lg:h-[400px] items-start justify-center p-0 relative shrink-0 text-left w-full md:w-auto">
                <div className="box-border content-stretch flex flex-col gap-2 md:gap-2 lg:gap-[6px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0">
                  <div className="font-medium relative shrink-0 text-[#6b7684] text-base md:text-lg lg:text-xl">
                    <p className="block leading-[1.6] text-nowrap whitespace-pre">고객센터</p>
                  </div>
                  <div className="font-bold relative shrink-0 text-[#333d4b] text-[28px] md:text-[36px] lg:text-[48px]">
                    <p className="block leading-[1.3] text-nowrap whitespace-pre">무엇을 도와드릴까요?</p>
                  </div>
                </div>
                {/* Search Box */}
                <SearchBox 
                  placeholder="검색어를 입력해 주세요."
                  onSearchChange={handleSearchChange}
                  className="w-full"
                />
              </div>
              
              {/* Cards */}
              <div className="hidden lg:flex lg:flex-row lg:gap-[24px] items-center justify-start w-full lg:w-auto">
                {/* Card 1 - 결제내역 확인 */}
                <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2 md:gap-2 lg:gap-[8px] h-[140px] md:h-[140px] lg:h-[160px] items-center justify-center overflow-clip p-0 relative rounded-[20px] shrink-0 w-full max-w-[300px] md:max-w-[300px] lg:max-w-none md:w-full lg:w-[200px]">
                  {/* Graphic Bill */}
                  <div className="overflow-clip relative shrink-0 size-[50px] md:size-[50px] lg:size-[60px]">
                    <img 
                      src={imgPaylogIcon} 
                      alt="결제내역" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Text Button */}
                  <ActionButton onClick={handlePaymentHistoryClick}>
                    결제내역 확인
                  </ActionButton>
                </div>

                {/* Card 2 - 1:1 채팅상담 - 채널톡과 중복으로 숨김 처리 */}
                {/* <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2 md:gap-2 lg:gap-[8px] h-[140px] md:h-[140px] lg:h-[160px] items-center justify-center overflow-clip p-0 relative rounded-[20px] shrink-0 w-full max-w-[300px] md:max-w-[300px] lg:max-w-none md:w-full lg:w-[200px]">
                  <div className="overflow-clip relative shrink-0 size-[50px] md:size-[50px] lg:size-[60px]">
                    <div className="absolute h-[61.999px] left-[-0.41px] top-[-8px] w-[60.816px]">
                      <div className="absolute bg-[#ffd3bb] inset-[29.29%_21.69%_6.2%_19.12%] rounded-[17px]" />
                      <div className="absolute box-border content-stretch flex flex-row gap-[6px] inset-[61.55%_39.77%_28.78%_37.21%] items-center justify-start p-0">
                        <div className="bg-[#4e5968] h-[6px] rounded-[100px] shrink-0 w-[4px]" />
                        <div className="bg-[#4e5968] h-[6px] rounded-[100px] shrink-0 w-[4px]" />
                      </div>
                      <div className="absolute bottom-[33.5%] contents left-0 right-0 top-0">
                        <div
                          className="absolute bg-[#4e5968] inset-[23.89%_19.81%_6.2%_17.24%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.486px_-14.81px] mask-size-[60.816px_41.229px] rounded-[17px]"
                          style={{ maskImage: `url('${imgRectangle4}')` }}
                        />
                      </div>
                      <div className="absolute bottom-0 left-[3.29%] right-[6.45%] top-[22.14%]">
                        <div className="absolute bottom-[-3.11%] left-0 right-0 top-[-3.11%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 52">
                            <g>
                              <path
                                d={svgPaths0.pffcf800}
                                stroke="var(--stroke-0, #AEB6BF)"
                                strokeLinecap="round"
                                strokeWidth="3"
                              />
                              <path d={svgPaths0.p15480700} fill="var(--fill-0, #AEB6BF)" />
                              <path d={svgPaths0.p254db200} fill="var(--fill-0, #AEB6BF)" />
                              <path d={svgPaths0.p17bb5c00} stroke="var(--stroke-0, #AEB6BF)" strokeWidth="3" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ActionButton onClick={handleChatClick}>
                    1:1 채팅상담
                  </ActionButton>
                </div> */}
              </div>
            </div>
          </PageContainer>
        </div>
      </div>

      {/* Body */}
      <PageSection id="faq" spacing="none" className="w-full lg:py-16">
        <PageContainer>
          <div className="flex flex-col gap-0 md:gap-2 w-[100vw] max-w-[100vw] -mx-4 overflow-x-hidden sm:w-full sm:max-w-none sm:mx-0">
            {/* Tab */}
            <TabNavigation 
              tabs={tabs} 
              defaultActiveTab="전체"
              onTabChange={handleTabChange}
              className="w-full"
            />

            {/* FAQ List */}
            <FaqList 
              key={activeTab} // 탭 변경 시 컴포넌트 리마운트하여 열린 FAQ 초기화
              items={currentPageItems}
              onItemClick={handleFaqClick}
            />

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                pageNumbers={generatePageNumbers()}
                currentPage={activePage}
                onPageChange={(p) => setActivePage(p)}
              />
            )}
          </div>
        </PageContainer>
      </PageSection>

      <Navbar
        onMenuClick={(item) => console.log('Menu click:', item)}
        onActionClick={(item) => console.log('Action click:', item)}
        onApplyClick={() => console.log('GNB 이용 신청하기 클릭')}
      />
      {/* CTA Section - 원하는 답변을 찾지 못하셨나요? */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
          <PageContainer className="py-12 md:py-32">
            {/* Background Images */}
            <div className="absolute aspect-[1536/768] contents left-[-18.36%] right-[-18.36%] top-1/2 translate-y-[-50%]">
              <div
                className="absolute aspect-[1536/768] bg-center bg-cover bg-no-repeat left-[-18.36%] mix-blend-darken right-[-18.36%] top-1/2 translate-y-[-50%]"
                style={{ backgroundImage: `url('${imgImage8}')` }}
              />
              <div
                className="absolute aspect-[1536/768] bg-center bg-cover bg-no-repeat left-[-18.36%] mix-blend-darken right-[-18.36%] top-1/2 translate-y-[-50%]"
                style={{ backgroundImage: `url('${imgImage5}')` }}
              />
              <div
                className="absolute aspect-[1536/768] bg-center bg-cover bg-no-repeat left-[-18.36%] mix-blend-darken right-[-18.36%] top-1/2 translate-y-[-50%]"
                style={{ backgroundImage: `url('${imgImage6}')` }}
              />
              <div
                className="absolute aspect-[1536/768] bg-center bg-cover bg-no-repeat left-[-18.36%] mix-blend-darken right-[-18.36%] top-1/2 translate-y-[-50%]"
                style={{ backgroundImage: `url('${imgImage7}')` }}
              />
              <div
                className="absolute aspect-[1536/768] bg-center bg-cover bg-no-repeat left-[-18.36%] mix-blend-darken right-[-18.36%] top-1/2 translate-y-[-50%]"
                style={{ backgroundImage: `url('${imgImage9}')` }}
              />
            </div>

            {/* CTA Text */}
            <div className="flex flex-col gap-8 lg:gap-10 xl:gap-[40px] items-center justify-center text-center">
              <div className="flex flex-col font-bold gap-4 lg:gap-6 xl:gap-[24px] items-center justify-start">
                <div className="relative shrink-0 text-[#ffffff] text-2xl sm:text-[48px] px-4">
                  <p className="block leading-[1.3] whitespace-pre-wrap break-words">원하는 답변을 찾지 못하셨나요?</p>
                </div>
                <div className="relative shrink-0 text-[14px] sm:text-[24px] text-[rgba(253,253,255,0.75)] px-4">
                  <p className="block leading-[1.6] whitespace-pre-wrap break-words">채팅으로 문의주시면 빠르게 도와드릴게요!</p>
                </div>
              </div>
              <PrimaryButton onClick={handleQuickInquiryClick}>
                빠른 문의하기
              </PrimaryButton>
            </div>
          </PageContainer>
        </div>
      </div>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}