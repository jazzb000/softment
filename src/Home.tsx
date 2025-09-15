import { useState } from 'react';
import HeroSection from "../components/HomeHero";
import MainServicesSection from "../components/HomeMainServices";
import AllServicesSection from "../components/HomeAllServices";
import PricingSection from "../components/HomePricing";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import MerchantCard from "../components/Home5";
import DigitalContentDetailCard from "../components/Home6";
import CommerceDetailCard from "../components/Home7";
import LeisureDetailCard from "../components/Home8";
import PlatformDetailCard from "../components/Home9";
import OverseasDetailCard from "../components/Home10";
import SubscriptionDetailCard from "../components/Home11";
import { CheckboxIcon } from "../components/Home12";
import { ActionButton } from "../components/ActionButton";
import { MERCHANT_IMAGES, IMAGES } from "../imports/Home13";
import svgPaths from "../imports/svg-rr908iq9t3";


export default function App() {
  // Footer 내부에서 자체 관리로 전환됨
  // 개별 버튼 호버 상태 관리
  const [isArticleHovered, setIsArticleHovered] = useState(false);
  const [isInquiryHovered, setIsInquiryHovered] = useState(false);
  const [isApplyHovered, setIsApplyHovered] = useState(false);
  const [isCustomHovered, setIsCustomHovered] = useState(false);

  // FAQ 아코디언 상태 관리 - 다중 선택 지원
  const [openFaqIndexes, setOpenFaqIndexes] = useState<number[]>([]);
  
  // FAQ 질문 탭 호버 상태 관리
  const [hoveredFaqIndex, setHoveredFaqIndex] = useState<number | null>(null);

  // 가맹점 카드 선택 상태 관리
  const [selectedMerchantCards, setSelectedMerchantCards] = useState<string[]>([]);

  const faqData = [
    {
      question: "Q. 계약 신청 시 어떤 서류가 필요한가요?",
      answer: "필요한 서류는 사업자 유형에 따라 상이하며, 본인 유형에 맞는 서류를 모두 준비해주셔야해요<br/>자세한 내용은 아래 링크에서 확인해 주세요",
      linkText: "확인하러 가기"
    },
    {
      question: "Q. 전자결제 신청부터 정산금 지급까지 얼마나 걸리나요?",
      answer: "전자결제 서비스 계약은 아래 절차로 진행돼요.<br/><br/>계약절차 : 신규신청 - 계약담당자 배정 - 입점심사 - 미비사항 안내 - 계약조건 동의 - 계약완료 - 카드사심사<br/><br/>신규신청 이후, 입점 심사는 영업일 기준 1~2일, 카드사 심사는 7~10일 가량 소요되나 업종 및 서비스 유형 방식에 따라 심사 기간이 지연될 수 있어요.<br/>모든 카드사 심사 승인이 완료되면, 이때 모든 계약 절차가 완료되어 정산을 받을 수 있어요.",
      linkText: ["입점심사 한번에 통과하기"],
      linkText1: ["상점관리자 이용 가이드"]
    },
    {
      question: "Q. 총 등록비는 얼마인가요? (가입비, 연관리비, 보증보험료)",
      answer: "1. 신규 신청 시, 초기 가입비 33만원(부가세 포함)이 부과됩니다.<br/> • 초기 가입비 = 가입비 22만원 + 연관리비 11만원 (부가세 포함)<br/>\t • 가입비 22만원은 초기 1회만 납부하며, 연회비 11만원은 연 1회 납부 필요합니다.<br/><br/>2. 희망 월 정산한도가 1,000만원 이하인 경우 보증 보험료를 부담하지 않는 무담보 정책을 실시하고 있습니다.<br/>1,000만원을 초과하는 월 정산 한도를 희망하시는 경우 담보 가입은 필수이며, 가맹점의 취급 상품 및 업종 형태에 따라 무담보 정책이 적용되지 않을 수 있습니다.<br/><br/>* 호스팅 업체를 이용하는 경우, 업종 및 취급 상품에 따라 계약 조건은 상이할 수 있어요.",
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndexes(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)  // 이미 열려있으면 제거
        : [...prev, index]               // 없으면 추가
    );
  };

  const toggleMerchantCard = (cardTitle: string) => {
    setSelectedMerchantCards(prev => 
      prev.includes(cardTitle) 
        ? prev.filter(title => title !== cardTitle)  // 이미 선택되었으면 제거
        : [...prev, cardTitle]                       // 없으면 추가
    );
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-start relative size-full">
      <HeroSection />      
        <MainServicesSection />

      {/* Services Section */}
      <div className="bg-[#f2f4f6] relative shrink-0 w-full">
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-16 lg:gap-[180px] items-start justify-start px-5 lg:px-[188px] py-16 lg:py-[180px] relative w-full">
            <div className="content-stretch flex flex-col gap-[64px] items-start justify-start relative shrink-0 w-full">
              <div className="font-bold not-italic relative shrink-0 text-[#333d4b] text-3xl lg:text-[48px] text-left lg:text-center tracking-[-0.48px] w-full whitespace-pre-wrap break-words">
                <p className="leading-[1.3]">
                  결제서비스로
                  <br aria-hidden="true" />
                  새로운 사업 기회를 발굴해 보세요
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-6 lg:gap-[24px] items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-[24px] items-stretch justify-start relative shrink-0 w-full">
                  <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[20px] self-stretch shrink-0">
                    <div className="overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-col gap-6 lg:gap-[24px] items-start justify-start p-6 lg:p-[40px] relative size-full">
                        <div className="content-stretch flex flex-col gap-[8px] items-start justify-start not-italic relative shrink-0 w-full">
                          <div className="font-bold relative shrink-0 text-[#333d4b] text-xl lg:text-[24px] tracking-[-0.24px]">
                            <p className="leading-[1.6] whitespace-pre">해외결제</p>
                          </div>
                          <div className="font-medium relative shrink-0 text-[#4e5968] text-base lg:text-[17px] tracking-[-0.17px] whitespace-pre-wrap break-words">
                            <p className="leading-[1.6]">
                              해외카드, 페이팔, 중국 및 동남아 간편결제 등 다양한 해외결제수단을 개별로 계약/연동할 필요 없이,
                              <br aria-hidden="true" />
                              소프트먼트를 통해 한 번에 사용할 수 있어요.
                            </p>
                          </div>
                          <div className="font-normal relative shrink-0 text-[#6b7684] text-sm lg:text-[15px] tracking-[-0.15px] whitespace-pre-wrap break-words">
                            <p className="leading-[1.6]">중국/동남아 간편결제: 24년 1분기 중 지원 예정</p>
                          </div>
                        </div>
                        <ActionButton className="content-stretch relative shrink-0">결제내역 확인</ActionButton>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white box-border content-stretch flex flex-col gap-6 lg:gap-[24px] items-start justify-start overflow-clip p-6 lg:p-[40px] relative rounded-[20px] shrink-0 self-stretch w-full lg:w-[290px]">
                    <div className="content-stretch flex flex-col gap-[8px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full">
                      <div className="font-bold relative shrink-0 text-[#333d4b] text-xl lg:text-[24px] tracking-[-0.24px] w-full">
                        <p className="leading-[1.6]">현금영수증 무료 발급서비스</p>
                      </div>
                      <div className="font-medium relative shrink-0 text-[#4e5968] text-base lg:text-[17px] tracking-[-0.17px] w-full whitespace-pre-wrap break-words">
                        <p className="leading-[1.6]">홈택스 접속 없이 소프트먼트에서 제공하는 현금영수증 API로 현금영수증을 편리하게 발급해보세요.</p>
                      </div>
                    </div>
                    <ActionButton className="content-stretch relative shrink-0">서비스 사용하기</ActionButton>
                  </div>
                </div>
                <div className="content-stretch grid grid-cols-1 lg:grid-cols-[225px_1fr] gap-6 lg:gap-[24px] items-start justify-start relative shrink-0 w-full">
                  <div className="bg-white box-border content-stretch flex flex-col gap-6 lg:gap-[24px] items-start justify-start overflow-clip p-6 lg:p-[40px] relative rounded-[20px] self-stretch shrink-0 w-full lg:w-[225px]">
                    <div className="content-stretch flex flex-col gap-[8px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full">
                      <div className="font-bold relative shrink-0 text-[#333d4b] text-xl lg:text-[24px] tracking-[-0.24px] w-full">
                        <p className="leading-[1.6]">FDS</p>
                      </div>
                      <div className="font-medium relative shrink-0 text-[#4e5968] text-base lg:text-[17px] tracking-[-0.17px] w-full whitespace-pre-wrap break-words">
                        <p className="leading-[1.6]">계약된 상점에서 일어난 거래들을 분석하여 피싱, 도용과 같은 부정 결제와 유사수신행위와 같은 불법거래를 식별하고 차단하고 있어요.</p>
                      </div>
                    </div>
                  </div>
                  <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[20px] self-stretch shrink-0">
                    <div className="overflow-clip relative size-full h-[200px] lg:h-auto">
                      <div className="box-border content-stretch flex flex-col lg:flex-row gap-6 lg:gap-[24px] items-start justify-start p-6 lg:p-[40px] relative size-full ">
                        <div className="basis-0 content-stretch flex flex-col gap-6 lg:gap-[24px] grow items-start justify-start min-h-px min-w-0 not-italic relative shrink-0">
                          <div className="content-stretch flex flex-col gap-[8px] items-start justify-start relative shrink-0 w-full">
                            <div className="font-bold relative shrink-0 text-[#333d4b] text-xl lg:text-[24px] tracking-[-0.24px]">
                              <p className="leading-[1.6] whitespace-pre">정산지급대행 서비스</p>
                            </div>
                            <div className="font-medium relative shrink-0 text-[#4e5968] text-base lg:text-[17px] tracking-[-0.17px] whitespace-pre-wrap break-words">
                              <p className="leading-[1.6]">오픈마켓 형태의 쇼핑몰을 대상으로 전자금융사업자인 소프트먼트가 쇼핑몰 입점 판매자에게 대금지급을 대행해주는 서비스예요.</p>
                            </div>
                          </div>
                          <div className="font-normal relative shrink-0 text-[#6b7684] text-sm lg:text-[15px] tracking-[-0.15px] w-full whitespace-pre-wrap break-words">
                            <p className="leading-[1.6]">정산대금 실시간 지급: 24년 1분기 중 지원 예정</p>
                          </div>
                        </div>
                        <div className="basis-0 content-stretch flex flex-col h-full items-end justify-end relative shrink-0 grow min-w-0">
                          <div className="relative w-full hidden lg:block">
                            <img className="w-full h-auto object-contain max-h-[300px]" src={IMAGES.card1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* All Services Section */}
              <AllServicesSection />
            </div>
          </div>
        </div>
      </div>

      {/* Merchants Section */}
      <div className="bg-[#3182f6] relative shrink-0 w-full">
        <div className="flex flex-col items-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-16 lg:gap-[180px] items-center justify-start px-5 lg:px-[188px] py-16 lg:py-[180px] relative w-full">
            <div className="content-stretch flex flex-col gap-12 lg:gap-[48px] items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-4 lg:gap-[16px] items-start justify-start not-italic relative shrink-0 text-left lg:text-center text-white w-full">
                <div className="font-semibold relative shrink-0 text-base lg:text-[20px] tracking-[-0.2px] w-full">
                  <p className="leading-[1.6]">국내 PG 거래액 1위, 가맹점 수 100,000+</p>
                </div>
                <div className="font-bold relative shrink-0 text-3xl lg:text-[48px] tracking-[-0.48px] w-full whitespace-pre-wrap break-words">
                  <p className="leading-[1.3]">소프트먼트와 함께하는 가맹점</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-6 lg:gap-[24px] items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[24px] items-stretch justify-start relative shrink-0 w-full">
                  <div className="flex-1">
                    {selectedMerchantCards.includes("디지털 콘텐츠") ? (
                      <DigitalContentDetailCard onClick={() => toggleMerchantCard("디지털 콘텐츠")} />
                    ) : (
                      <div onClick={() => toggleMerchantCard("디지털 콘텐츠")} className="cursor-pointer">
                        <MerchantCard title="디지털 콘텐츠" images={MERCHANT_IMAGES.digitalContent} />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    {selectedMerchantCards.includes("커머스/소매") ? (
                      <CommerceDetailCard onClick={() => toggleMerchantCard("커머스/소매")} />
                    ) : (
                      <div onClick={() => toggleMerchantCard("커머스/소매")} className="cursor-pointer">
                        <MerchantCard title="커머스/소매" images={MERCHANT_IMAGES.commerce} />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    {selectedMerchantCards.includes("레저/호텔/항공") ? (
                      <LeisureDetailCard onClick={() => toggleMerchantCard("레저/호텔/항공")} />
                    ) : (
                      <div onClick={() => toggleMerchantCard("레저/호텔/항공")} className="cursor-pointer">
                        <MerchantCard title="레저/호텔/항공" images={MERCHANT_IMAGES.leisure} />
                      </div>
                    )}
                  </div>
                </div>
                <div className="content-stretch grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[24px] items-start justify-start relative shrink-0 w-full">
                  <div className="flex-1">
                    {selectedMerchantCards.includes("플랫폼") ? (
                      <PlatformDetailCard onClick={() => toggleMerchantCard("플랫폼")} />
                    ) : (
                      <div onClick={() => toggleMerchantCard("플랫폼")} className="cursor-pointer">
                        <MerchantCard title="플랫폼" images={MERCHANT_IMAGES.platform} />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    {selectedMerchantCards.includes("해외결제") ? (
                      <OverseasDetailCard onClick={() => toggleMerchantCard("해외결제")} />
                    ) : (
                      <div onClick={() => toggleMerchantCard("해외결제")} className="cursor-pointer">
                        <MerchantCard title="해외결제" images={MERCHANT_IMAGES.overseas} layout="wrap" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    {selectedMerchantCards.includes("구독, 자동결제") ? (
                      <SubscriptionDetailCard onClick={() => toggleMerchantCard("구독, 자동결제")} />
                    ) : (
                      <div onClick={() => toggleMerchantCard("구독, 자동결제")} className="cursor-pointer">
                        <MerchantCard title="구독, 자동결제" images={MERCHANT_IMAGES.subscription} layout="wrap" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="content-stretch flex flex-col gap-10 lg:gap-[40px] items-center justify-start relative shrink-0 w-full">
              <div className="font-bold not-italic relative shrink-0 text-2xl lg:text-[36px] text-center text-white tracking-[-0.36px] w-full">
                <p className="leading-[1.3]">소프트먼트 가맹점 성공 스토리</p>
              </div>
              <div className="content-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[24px] items-start justify-start relative shrink-0 w-full">
                {[
                  { title: "똑똑하게 일하고 싶다면 소프트먼트를 선택하세요.", badge: "고객인터뷰 5. 데이터리안" },
                  { title: "고객을 놓치고 싶지 않아서 소프트먼트를 선택했어요.", badge: "고객인터뷰 4. 커리어월렛" },
                  { title: "소프트먼트라면 혼자서도 스마트하게 일할 수 있어요.", badge: "고객인터뷰 3. 세탁특공대" }
                ].map((story, index) => (
                  <div key={index} className="basis-0 bg-white content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip relative rounded-[20px] self-stretch shrink-0">
                    <div className="aspect-[304/202] bg-[#f2f4f6] relative shrink-0 w-full">
                      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
                        <div className="aspect-[304/202] box-border content-stretch flex flex-col gap-[48px] items-center justify-center px-[44px] py-[36px] relative size-full">
                          <div className="font-bold not-italic relative shrink-0 text-[#3182f6] text-[20px] text-nowrap tracking-[-0.2px]">
                            <p className="leading-[1.5] whitespace-pre">사진</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full">
                      <div className="relative size-full">
                        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start pb-[28px] pt-[20px] px-[28px] relative w-full">
                          <div className="font-bold min-w-full not-italic relative shrink-0 text-[#333d4b] text-xl lg:text-[24px]">
                            <p className="leading-[1.6]">{story.title}</p>
                          </div>
                          <div className="bg-[rgba(49,130,246,0.16)] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[999px] shrink-0">
                            <div className="font-bold not-italic relative shrink-0 text-[#1b64da] text-[12px] text-nowrap">
                              <p className="leading-[1.6] whitespace-pre">{story.badge}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 아티클 더보기 버튼 - 인라인 구현 */}
              <div 
                className={`box-border content-stretch flex items-center justify-center relative shrink-0 cursor-pointer transition-colors duration-200 px-[16px] py-[13px] rounded-[14px] ${
                  isArticleHovered ? 'bg-[#2272EB] text-white' : 'bg-[#3182f6] text-white'
                }`}
                onMouseEnter={() => setIsArticleHovered(true)}
                onMouseLeave={() => setIsArticleHovered(false)}
              >
                <div className="font-semibold not-italic relative shrink-0 text-[19px] leading-[1.6] text-nowrap">
                  <p className="whitespace-pre">아티클 더보기</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PricingSection />

      {/* Process Section */}
      <div className="bg-[#f2f4f6] relative shrink-0 w-full">
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-16 lg:gap-[80px] items-start justify-start px-5 lg:px-[188px] py-16 lg:py-[180px] relative w-full">
            <div className="content-stretch flex flex-col gap-[40px] items-start justify-start relative shrink-0 w-full">
              <div className="font-bold not-italic relative shrink-0 text-[#333d4b] text-3xl lg:text-[36px] text-left lg:text-center tracking-[-0.36px] w-full">
                <p className="leading-[1.3]">PG 가입 절차</p>
              </div>
              <div className="bg-white relative rounded-[20px] shrink-0 w-full">
                <div className="overflow-clip relative size-full">
                  <div className="box-border content-stretch flex items-start justify-start p-4 lg:p-[24px] relative w-full">
                    <div className="basis-0 content-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[32px] grow items-start justify-start min-h-px min-w-px relative shrink-0">
                      {[
                        { step: "STEP 1", title: "소프트먼트 이용 신청" },
                        { step: "STEP 2", title: "가입비 결제" },
                        { step: "STEP 3", title: "계약(입점) 및 카드사 심사" },
                        { step: "STEP 4", title: "결제서비스 이용" }
                      ].map((item, index) => (
                        <div key={index} className="basis-0 flex flex-row grow items-start self-stretch shrink-0">
                          <div className="basis-0 content-stretch flex flex-col font-bold gap-2 lg:gap-[8px] grow h-full items-start justify-start min-h-px min-w-px not-italic relative shrink-0">
                            <div className="relative shrink-0 text-[#3182f6] text-sm lg:text-[17px] text-left tracking-[-0.17px]">
                              <p className="leading-[1.6]">{item.step}</p>
                            </div>
                            <div className="relative shrink-0 text-[#4e5968] text-lg lg:text-[24px] tracking-[-0.24px] whitespace-pre-wrap break-words w-full">
                              <p className="leading-[1.6]">{item.title}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section - 개선된 아코디언 */}
            <div className="content-stretch flex flex-col gap-[40px] items-start justify-start relative shrink-0 w-full">
              <div className="font-bold not-italic relative shrink-0 text-[#333d4b] text-2xl lg:text-[36px] text-left lg:text-center tracking-[-0.36px] w-full">
                <p className="leading-[1.3]">자주 묻는 질문</p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start justify-start relative shrink-0 w-full ">
                {faqData.map((faq, index) => (
                  <div key={index} className="content-stretch flex items-start justify-start overflow-clip relative rounded-[12px] shrink-0 w-full">
                    <div className="bg-white content-stretch flex flex-col items-start justify_center min-h-px min-w-px relative shrink-0 w-full">
                      {/* FAQ 질문 헤더 */}
                      <div 
                        className="relative shrink-0 w-full cursor-pointer transition-colors duration-200 rounded-[12px]"
                        style={{
                          backgroundColor: hoveredFaqIndex === index 
                            ? 'rgba(0, 27, 55, 0.1)' 
                            : '#FFFFFF'
                        }}
                        onClick={() => toggleFaq(index)}
                        onMouseEnter={() => setHoveredFaqIndex(index)}
                        onMouseLeave={() => setHoveredFaqIndex(null)}
                      >
                        <div className="flex flex-row items-center relative size-full">
                          <div className="box-border content-stretch flex items_center justify-between px-[14px] py-[9px] relative w-full">
                            <div className="font-semibold not-italic relative shrink-0 text-[#4e5968] text-base lg:text-[17px]">
                              <p className="leading-[1.6] whitespace-pre-wrap break-words max-w-[300px] lg:max-w-none">{faq.question}</p>
                            </div>
                            <div 
                              className={`relative shrink-0 size-5 transition-transform duration-200 ${
                                openFaqIndexes.includes(index) ? 'rotate-180' : ''
                              }`}
                            >
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                <g>
                                  <path 
                                    d="M13 9L10 12L7 9" 
                                    stroke="#B0B8C1" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="1.5" 
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* FAQ 답변 영역 */}
                      {openFaqIndexes.includes(index) && (
                        <div className="relative shrink-0 w-full">
                          <div className="relative size-full">
                            <div className="box-border content_stretch flex flex-col font-normal gap-4 items-start justify-start not-italic pb-6 pl-[14px] pr-[30px] pt-[10px] relative text-sm lg:text-[15px] w-full">
                              <div className="relative shrink-0 text-[#4e5968] w-full whitespace-pre-wrap break-words">
                                <p className="leading-[1.6]">
                                  {faq.answer.split('<br/>').map((line, lineIndex) => (
                                    <span key={lineIndex}>
                                      {line}
                                      {lineIndex < faq.answer.split('<br/>').length - 1 && <br />}
                                    </span>
                                  ))}
                                </p>
                              </div>
                              {Array.isArray(faq.linkText) ? (
                                <div className="relative shrink-0 text-[#3182f6] w-full cursor-pointer">
                                  <p className="[text-underline-position:from-font] decoration-solid leading-[1.6] underline">
                                    {faq.linkText.join(" · ")}
                                  </p>
                                </div>
                              ) : faq.linkText ? (
                                <div className="relative shrink-0 text-[#3182f6] w-full cursor-pointer">
                                  <p className="[text-underline-position:from-font] decoration-solid leading-[1.6] underline">
                                    {faq.linkText}
                                  </p>
                                </div>
                              ) : null}
                              {Array.isArray(faq.linkText1) ? (
                                <div className="relative shrink-0 text-[#3182f6] w_full cursor-pointer">
                                  <p className="[text-underline-position:from-font] decoration-solid leading-[1.6] underline">
                                    {faq.linkText1.join(" · ")}
                                  </p>
                                </div>
                              ) : faq.linkText1 ? (
                                <div className="relative shrink-0 text-[#3182f6] w-full cursor-pointer">
                                  <p className="[text-underline-position:from-font] decoration-solid leading-[1.6] underline">
                                    {faq.linkText1}
                                  </p>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center overflow-hidden relative size-full">
          <div className="box-border content-stretch flex items-center justify-center px-5 lg:px-[390px] py-16 lg:py-[160px] relative w-full">
            <div className="absolute lg:aspect-[1456/816] aspect-[600/600] bg-center bg-cover bg-no-repeat left-[-8px] right-[-8px] top-1/2 translate-y-[-50%]" style={{ backgroundImage: `url('${IMAGES.bgP31}')` }} />
            <div className="content-stretch flex flex-col gap-8 lg:gap-[40px] items-center justify-center relative shrink-0">
              <div className="content-stretch flex flex-col gap-6 lg:gap-[24px] items-center relative shrink-0 w-full">
                <div className="font-bold not-italic relative shrink-0 text-[#191f28] text-3xl lg:text-[48px] text-center whitespace-pre-wrap break-words">
                    전문가에게 무료로 <br/>
                    결제컨설팅 받아보세요

                </div>
                <div className="content-stretch flex flex-col gap-2 lg:gap-[8px] items-center justify-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[4px] text-center items-center justify-start relative shrink-0">
                    <CheckboxIcon path={svgPaths.p2d72800} />
                    <div className="font-medium not-italic relative shrink-0 text-[#4e5968] text-base lg:text-left lg:text-[20px]">
                      <p className="leading-[1.6] whitespace-pre-wrap break-words">사업 유형에 맞는 결제서비스를 제안해 드려요.</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center justify-start relative shrink-0">
                    <CheckboxIcon path={svgPaths.p3a153700} />
                    <div className="font-medium not-italic relative shrink-0 text-[#4e5968] text-base lg:text-[20px]">
                      <p className="leading-[1.6] whitespace-pre-wrap break-words">고객님이 원하는 일정에 맞춰 담당자가 연락드려요.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-start justify-start relative shrink-0">
                {/* 도입 문의하기 버튼 - 인라인 구현 */}
                <div 
                  className={`box-border content-stretch flex items-center justify-center relative shrink-0 cursor-pointer transition-colors duration-200 px-[14px] py-[11px] rounded-[12px] h-[49px] ${
                    isInquiryHovered ? 'bg-[#2272EB] text-white' : 'bg-[#3182f6] text-white'
                  }`}
                  onMouseEnter={() => setIsInquiryHovered(true)}
                  onMouseLeave={() => setIsInquiryHovered(false)}
                >
                  <div className="font-semibold not-italic relative shrink-0 text-[17px] leading-[1.5] text-nowrap">
                    <p className="whitespace-pre">도입 문의하기</p>
                  </div>
                </div>

                {/* 이용 신청하기 버튼 - 인라인 구현 (secondary) */}
                <div 
                  className={`box-border content-stretch flex items-center justify-center relative shrink-0 cursor-pointer transition-colors duration-200 px-[14px] py-[11px] rounded-[12px] h-[49px] ${
                    isApplyHovered ? 'bg-[rgba(100,168,255,0.34)] text-[#3182f6]' : 'bg-[rgba(100,168,255,0.15)] text-[#3182f6]'
                  }`}
                  onMouseEnter={() => setIsApplyHovered(true)}
                  onMouseLeave={() => setIsApplyHovered(false)}
                >
                  <div className="font-semibold not-italic relative shrink-0 text-[17px] leading-[1.5] text-nowrap">
                    <p className="whitespace-pre">이용 신청하기</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-[#191f28] relative shrink-0 w-full">
        <div className="flex flex-col items-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-10 lg:gap-[40px] items-center justify-start px-5 lg:px-[188px] py-16 lg:pb-[180px] lg:pt-[110px] relative w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-center justify-start relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col items-center justify-center p-[10px] relative shrink-0 w-[80.002px]">
                <div className="aspect-[80.002/80] bg-[55.43%_45.42%] bg-no-repeat bg-size-[135.64%_203.47%] shrink-0 w-full" style={{ backgroundImage: `url('${IMAGES.logo3D}')` }} />
              </div>
              <div className="font-bold relative shrink-0 text-xl lg:text-[24px] text-center text-white tracking-[-0.24px] w-full whitespace-pre-wrap break-words">
                <p className="leading-[1.3]">소프트먼트만이 드릴 수 있는 강력한 결제 경험</p>
              </div>
              <div className="font-semibold not-italic relative shrink-0 text-center text-white w-full">
                <p className="leading-[1.6] text-base lg:text-[17px]">
                  <span className="text-[#3182f6]">30초</span>만에 내 사업에 맞는 결제 서비스를 찾아드려요
                </p>
              </div>
            </div>
            
            {/* 맞춤 제안 받기 버튼 - 인라인 구현 */}
            <div 
              className={`box-border content-stretch flex items-center justify-center relative shrink-0 cursor-pointer transition-colors duration-200 px-[14px] py-[11px] rounded-[12px] h-[49px] ${
                isCustomHovered ? 'bg-[#2272EB] text-white' : 'bg-[#3182f6] text-white'
              }`}
              onMouseEnter={() => setIsCustomHovered(true)}
              onMouseLeave={() => setIsCustomHovered(false)}
            >
              <div className="font-semibold not-italic relative shrink-0 text-[17px] leading-[1.5] text-nowrap">
                <p className="whitespace-pre">맞춤 제안 받기</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navbar
        onMenuClick={(item) => console.log('Menu click:', item)}
        onActionClick={(item) => console.log('Action click:', item)}
        onApplyClick={() => console.log('GNB 이용 신청하기 클릭')}
      />

      <Footer />
    </div>
  );
}