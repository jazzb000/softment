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
      // 탭에서 이모티콘 제거 (이모티콘은 대부분 1-2바이트이지만, 이모티콘과 공백을 제거)
      const normalizedTab = activeTab.replace(/[\u{1F000}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\uFE0F]/gu, '').trim();
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