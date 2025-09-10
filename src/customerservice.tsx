import { useState } from "react";
import svgPaths0 from "../imports/svg-ntinw6tyna";
const imgImage8 = "/images/image 8.png";
const imgImage5 = "/images/image 5.png";
const imgImage6 = "/images/image 6.png";
const imgImage7 = "/images/image 7.png";
const imgImage9 = "/images/image 9.png";
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
    '전체', '질문Top', '국내결제', '해외결제', '정산', '계약', 
    '지급대행', '카드사 심사', '서류안내', '상점관리자', '부가세 신고', 
    '기술지원', '통신판매업 바로신청'
  ];

  // FAQ items data with answers
  const faqItems = [
    { 
      id: 1, 
      category: '계약', 
      question: 'Q. 정보 변경 신청 시 어떤 서류가 필요한가요?',
      answer: {
        text1: '서류는 공통서류와 사업자별 구비서류가 있으며, 모두 준비해 주셔야 해요.',
        text2: '자세한 내용은 아래 링크에서 확인해 주세요.',
        link: '확인하러 가기'
      }
    },
    { 
      id: 2, 
      category: '카드사 심사', 
      question: 'Q. 정보 변경 신청 시 어떤 서류가 필요한가요?',
      answer: {
        text1: '서류는 공통서류와 사업자별 구비서류가 있으며, 모두 준비해 주셔야 해요.',
        text2: '자세한 내용은 아래 링크에서 확인해 주세요.',
        link: '확인하러 가기'
      }
    },
    { 
      id: 3, 
      category: '국내결제', 
      question: 'Q. 정보 변경 신청 시 어떤 서류가 필요한가요?',
      answer: {
        text1: '서류는 공통서류와 사업자별 구비서류가 있으며, 모두 준비해 주셔야 해요.',
        text2: '자세한 내용은 아래 링크에서 확인해 주세요.',
        link: '확인하러 가기'
      }
    },
    { 
      id: 4, 
      category: '정산', 
      question: 'Q. 정보 변경 신청 시 어떤 서류가 필요한가요?',
      answer: {
        text1: '서류는 공통서류와 사업자별 구비서류가 있으며, 모두 준비해 주셔야 해요.',
        text2: '자세한 내용은 아래 링크에서 확인해 주세요.',
        link: '확인하러 가기'
      }
    },
    { 
      id: 5, 
      category: '계약', 
      question: 'Q. 정보 변경 신청 시 어떤 서류가 필요한가요?',
      answer: {
        text1: '서류는 공통서류와 사업자별 구비서류가 있으며, 모두 준비해 주셔야 해요.',
        text2: '자세한 내용은 아래 링크에서 확인해 주세요.',
        link: '확인하러 가기'
      }
    },
    { 
      id: 6, 
      category: '계약', 
      question: 'Q. 정보 변경 신청 시 어떤 서류가 필요한가요?',
      answer: {
        text1: '서류는 공통서류와 사업자별 구비서류가 있으며, 모두 준비해 주셔야 해요.',
        text2: '자세한 내용은 아래 링크에서 확인해 주세요.',
        link: '확인하러 가기'
      }
    },
    { 
      id: 7, 
      category: '계약', 
      question: 'Q. 정보 변경 신청 시 어떤 서류가 필요한가요?',
      answer: {
        text1: '서류는 공통서류와 사업자별 구비서류가 있으며, 모두 준비해 주셔야 해요.',
        text2: '자세한 내용은 아래 링크에서 확인해 주세요.',
        link: '확인하러 가기'
      }
    },
    { 
      id: 8, 
      category: '계약', 
      question: 'Q. 정보 변경 신청 시 어떤 서류가 필요한가요?',
      answer: {
        text1: '서류는 공통서류와 사업자별 구비서류가 있으며, 모두 준비해 주셔야 해요.',
        text2: '자세한 내용은 아래 링크에서 확인해 주세요.',
        link: '확인하러 가기'
      }
    }
  ];

  // Pagination state
  const [activePage, setActivePage] = useState(1);

  const handleSearchChange = (value: string) => {
    console.log('Search value:', value);
  };

  const handleTabChange = (tab: string) => {
    console.log('Active tab:', tab);
  };

  const handleFaqClick = (id: number) => {
    console.log('FAQ clicked:', id);
  };

  const handlePaymentHistoryClick = () => {
    console.log('결제내역 확인 clicked');
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
          <PageContainer className="pt-24 pb-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-8 lg:gap-0">
              {/* Hero Text */}
              <div className="box-border content-stretch flex flex-col gap-5 md:gap-6 lg:gap-[24px] h-auto md:h-auto lg:h-[400px] items-start justify-center p-0 relative shrink-0 text-left w-full md:w-auto">
                <div className="box-border content-stretch flex flex-col gap-2 md:gap-2 lg:gap-[6px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0">
                  <div className="font-['Pretendard'] font-medium relative shrink-0 text-[#6b7684] text-base md:text-lg lg:text-xl">
                    <p className="block leading-[1.6] text-nowrap whitespace-pre">고객센터</p>
                  </div>
                  <div className="font-['Pretendard'] font-bold relative shrink-0 text-[#333d4b] text-[28px] md:text-[36px] lg:text-[48px]">
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
                    <div className="absolute contents left-[7.5px] top-[5.69px]">
                      <div className="absolute h-[54.31px] left-[7.5px] top-[5.69px] w-[45px]">
                        <div className="absolute bottom-[7.49%] left-0 right-0 top-0">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 51">
                            <path d={svgPaths0.p3e5e8d40} fill="var(--fill-0, #4396FB)" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute h-[31.689px] left-[17px] top-[13.69px] w-[26.002px]">
                        <div className="absolute bottom-[15.29%] left-0 right-0 top-[15.28%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 23">
                            <path d={svgPaths0.p3da7e780} fill="var(--fill-0, #EBF4FF)" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute h-0 left-[16px] top-[29.54px] w-[28px]">
                        <div className="absolute inset-[-2px_-7.14%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 4">
                            <g>
                              <path d="M2 2H6" stroke="var(--stroke-0, #EBF4FF)" strokeLinecap="round" strokeWidth="4" />
                              <path d="M26 2H30" stroke="var(--stroke-0, #EBF4FF)" strokeLinecap="round" strokeWidth="4" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Text Button */}
                  <ActionButton onClick={handlePaymentHistoryClick}>
                    결제내역 확인
                  </ActionButton>
                </div>

                {/* Card 2 - 1:1 채팅상담 */}
                <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2 md:gap-2 lg:gap-[8px] h-[140px] md:h-[140px] lg:h-[160px] items-center justify-center overflow-clip p-0 relative rounded-[20px] shrink-0 w-full max-w-[300px] md:max-w-[300px] lg:max-w-none md:w-full lg:w-[200px]">
                  {/* Graphic Face */}
                  <div className="overflow-clip relative shrink-0 size-[50px] md:size-[50px] lg:size-[60px]">
                    <div className="absolute h-[61.999px] left-[-0.41px] top-[-8px] w-[60.816px]">
                      <div className="absolute bg-[#ffd3bb] inset-[29.29%_21.69%_6.2%_19.12%] rounded-[17px]" />
                      {/* Eyes */}
                      <div className="absolute box-border content-stretch flex flex-row gap-[6px] inset-[61.55%_39.77%_28.78%_37.21%] items-center justify-start p-0">
                        <div className="bg-[#4e5968] h-[6px] rounded-[100px] shrink-0 w-[4px]" />
                        <div className="bg-[#4e5968] h-[6px] rounded-[100px] shrink-0 w-[4px]" />
                      </div>
                      {/* Mask Group */}
                      <div className="absolute bottom-[33.5%] contents left-0 right-0 top-0">
                        <div
                          className="absolute bg-[#4e5968] inset-[23.89%_19.81%_6.2%_17.24%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.486px_-14.81px] mask-size-[60.816px_41.229px] rounded-[17px]"
                          style={{ maskImage: `url('${imgRectangle4}')` }}
                        />
                      </div>
                      {/* Component */}
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
                  {/* Text Button */}
                  <ActionButton onClick={handleChatClick}>
                    1:1 채팅상담
                  </ActionButton>
                </div>
              </div>
            </div>
          </PageContainer>
        </div>
      </div>

      {/* Body */}
      <PageSection spacing="md" id="faq">
        <PageContainer>
          <div className="flex flex-col gap-2 w-full">
            {/* Tab */}
            <TabNavigation 
              tabs={tabs} 
              defaultActiveTab="전체"
              onTabChange={handleTabChange}
              className="w-full overflow-x-auto"
            />

            {/* FAQ List */}
            <FaqList 
              items={faqItems}
              onItemClick={handleFaqClick}
            />

            {/* Pagination */}
            <Pagination
              pageNumbers={[1, 2, 3, 4, 5, 22]}
              currentPage={activePage}
              onPageChange={(p) => setActivePage(p)}
            />
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
              <div className="flex flex-col font-['Pretendard'] font-bold gap-4 lg:gap-6 xl:gap-[24px] items-center justify-start">
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