import svgPaths from "../imports/svg-9geq74j6xd";
import svgPathsNewFeatures from "../imports/svg-3akt56lr7i";
import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { SlideSection } from "../components/SlideSection";
import { QnASection } from "../components/QnASection";
import { UnderHeroButton } from "../components/UnderHeroButton";
import { LoginButton } from "../components/LoginButton";
import { PageContainer } from "../components/PageContainer";
const imgImage11 = "/images/image_33.png";
const imgGraphIcon = "/images/imgGraphIcon.png";
const imgImage8 = "/images/image 8.png";
const imgImage5 = "/images/image 5.png";
const imgImage6 = "/images/image 6.png";
const imgImage7 = "/images/image 7.png";
const imgImage9 = "/images/image 9.png";
import { 
  widgetFeatures, 
  costSavingsData, 
  basicPlanFeatures, 
  proPlanFeatures 
} from "../imports/data";
export default function App() {
  // Footer 내부에서 자체 관리로 전환됨
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [openQnAIndexes, setOpenQnAIndexes] = useState<number[]>([]);
  
  // 버튼 호버 상태 관리
  const [integrationDocHovered, setIntegrationDocHovered] = useState(false);
  const [freeStartHovered, setFreeStartHovered] = useState(false);
  const [pricingInquiryHovered, setPricingInquiryHovered] = useState(false);
  // Hover states integrated into UnderHeroButton; keeping local handlers if needed later

  // 슬라이드 자동 전환
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex(prev => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const toggleQnA = (index: number) => {
    setOpenQnAIndexes(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // 인라인 operationFeatures 데이터
  const operationFeatures = [
    {
      title: [
        { text: "주요 간편결제까지 ", color: "#333d4b" },
        { text: "한 번에 연동하고 운영", color: "#3182f6" }
      ],
      desc: "모두 연동 후, 사용할 수 있는 모든 수단을\n어드민에서 쉽게 켜고 끌 수 있어요."
    },
    {
      title: [
        { text: "우리 브랜드에 맞는 ", color: "#333d4b" },
        { text: "UI 스타일", color: "#3182f6" },
        { text: "로 커스텀", color: "#333d4b" }
      ],
      desc: "코드나 개발자의 도움 없이\n어드민으로 쉽게 커스텀 할 수 있어요."
    },
    {
      title: [
        { text: "모바일 웹, PC, 네이티브 앱까지 ", color: "#333d4b" },
        { text: "환경에 맞는 결제 경험", color: "#3182f6" },
        { text: " 제공", color: "#333d4b" }
      ],
      desc: "유저의 환경에 최적화된 결제 경험을 제공할 수 있어요."
    },
    {
      title: [
        { text: "프로모션을 강조하여 ", color: "#333d4b" },
        { text: "결제 전환율", color: "#3182f6" },
        { text: " 개선", color: "#333d4b" }
      ],
      desc: "뱃지 스타일 커스텀은 물론,\n프로모션 기간에 따라 자동으로 노출돼요."
    }
  ];

  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-start p-0 relative w-full min-h-screen">
      <HeroSection />
      <Navbar
        onMenuClick={(item) => console.log('Menu click:', item)}
        onActionClick={(item) => console.log('Action click:', item)}
        onApplyClick={() => console.log('GNB 이용 신청하기 클릭')}
      />

      <div className="w-full relative">
        {/* Body Section 1 */}
        <div className="bg-[rgba(2,32,71,0.05)] relative shrink-0 w-full">
          <PageContainer className="py-[80px] lg:py-[160px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
              <div className="aspect-[1695/1256] bg-center bg-cover bg-no-repeat w-full" style={{ backgroundImage: `url('${imgImage11}')` }} />
              <div className="w-full">
                <div className="flex flex-col gap-4 lg:gap-6">
                  <div className="font-bold text-[#191f28] text-2xl lg:text-3xl">
                    <p className="leading-[1.3] whitespace-pre-wrap break-words">그동안의 결제 고민들</p>
                  </div>
                  <div className="flex flex-col w-full gap-4 lg:gap-6">
                    <div className="font-medium text-[#4e5968] text-base lg:text-lg w-full">
                      <p className="leading-[1.6] whitespace-pre-wrap break-words">
                        {`'직접 개발하면, 6개월이나 걸린다는데...'`}<br/>{`'간편결제, 하나씩 직접 연동하느라 몇 달을 고생했어요.'`}<br/>{`'결제 영역은 함부로 코드를 건드리기 무서워요.'`}<br/>{`'프로모션 운영에 개발 리소스가 너무 많이 들어요.'`}<br/>{`'갑자기 튀어나오는 PG사 결제창, 브랜드 이미지와 부딪혀요.'`}<br/>.<br/>.<br/>.
                      </p>
                    </div>
                    <div className="font-bold text-[#191f28] text-2xl lg:text-3xl">
                      <p className="leading-[1.3] whitespace-pre-wrap break-words">위젯으로 모두 해결!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </div>

        {/* Body Section 2 - 위젯 어드민 */}
        <div className="bg-[#ffffff] relative shrink-0 w-full">
          <PageContainer className="py-20 lg:py-32">
            <div className="flex flex-col gap-10 lg:gap-16 justify-start w-full">
              <div className="flex flex-col gap-4 lg:gap-6 items-start text-left lg:items-center lg:text-center">
                <div className="font-medium text-[#4e5968] text-xl lg:text-2xl">
                  <p className="leading-[1.6] whitespace-pre-wrap break-words">위젯 어드민</p>
                </div>
                <div className="font-bold text-[#191f28] text-3xl lg:text-5xl">
                  <p className="leading-[1.3] whitespace-pre-wrap break-words">5분만에 만드는 최적의 결제 경험</p>
                </div>
              </div>
              <div className="aspect-[540/400] bg-[#f2f4f6] relative rounded-[20px] shrink-0 w-full">
                <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
                  <div className="aspect-[540/400] box-border content-stretch flex flex-col gap-12 items-center justify-center px-11 py-9 relative size-full">
                    <div className="font-normal text-[#3182f6] text-lg lg:text-xl tracking-[-0.2px]">
                      <p className="leading-[1.5] whitespace-pre">화면 디자인</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start w-full">
                {widgetFeatures.map((item, i) => (
                  <div key={i} className="w-full">
                    <div className="flex flex-col gap-4 lg:gap-6 w-full">
                      <div className="font-bold text-[#333d4b] text-xl lg:text-2xl">
                        <p className="leading-[1.6] whitespace-pre-wrap break-words">{item.title}</p>
                      </div>
                      <div className="font-medium text-[#4e5968] text-base lg:text-lg">
                        <p className="leading-[1.6] whitespace-pre-wrap break-words">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PageContainer>
        </div>

        {/* Body Section 3 - 쉬운 운영 */}
        <div className="bg-[#ffffff] relative shrink-0 w-full">
          <PageContainer className="py-20 lg:py-32">
            <div className="flex flex-col gap-10 lg:gap-16 items-start justify-start w-full">
              <div className="flex flex-col gap-4 lg:gap-6 items-start text-left lg:items-center lg:text-center justify-start w-full">
                <div className="font-medium text-[#4e5968] text-xl lg:text-2xl">
                  <p className="leading-[1.6] whitespace-pre-wrap break-words">쉬운 운영</p>
                </div>
                <div className="font-bold text-[#191f28] text-3xl lg:text-5xl">
                  <p className="leading-[1.3] whitespace-pre-wrap break-words">이 모든 기능을 어드민으로 쉽게</p>
                </div>
              </div>
              
              {/* Features Grid */}
              <div className="flex flex-col gap-16 lg:gap-20 items-start justify-start w-full">
                {operationFeatures.map((feature, i) => (
                  <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center w-full">
                    <div className="aspect-[540/400] bg-[#f2f4f6] relative rounded-[20px] w-full">
                      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
                        <div className="aspect-[540/400] flex flex-col gap-12 items-center justify-center px-11 py-9 relative size-full">
                          <div className="font-normal text-[#3182f6] text-lg lg:text-xl tracking-[-0.2px]">
                            <p className="leading-[1.5] whitespace-pre">화면 디자인</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="flex flex-col gap-4 lg:gap-6 w-full">
                        <div className="font-bold text-2xl lg:text-3xl">
                          <p className="leading-[1.6]">
                            {feature.title.map((part, j) => (
                              <span key={j}>
                                {j === 1 && <br />}
                                <span style={{ color: part.color }}>
                                  {part.text}
                                </span>
                              </span>
                            ))}
                          </p>
                        </div>
                        <div className="font-medium text-[#4e5968] text-base lg:text-lg w-full">
                          <p className="leading-[1.6] whitespace-pre-wrap break-words">{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PageContainer>
        </div>

        {/* Body Section 4 - 쉬운 연동 */}
        <div className="bg-[#ffffff] relative shrink-0 w-full">
          <PageContainer className="py-20 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start w-full">
              <div className="flex flex-col gap-10 lg:gap-16 items-start w-full">
                <div className="flex flex-col gap-4 lg:gap-6 items-start">
                  <div className="font-medium text-[#4e5968] text-xl lg:text-2xl">
                    <p className="leading-[1.6] whitespace-pre-wrap break-words">쉬운 연동</p>
                  </div>
                  <div className="font-bold text-[#191f28] text-3xl lg:text-5xl">
                    <p className="leading-[1.3] whitespace-pre-wrap break-words">
                      개발자의 시간을
                      <br aria-hidden="true" />
                      아껴드려요
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 lg:gap-8 items-start w-full">
                  <div className="font-medium text-[#4e5968] text-base lg:text-lg w-full">
                    <p className="leading-[1.6] whitespace-pre-wrap break-words">
                      쉽고 직관적인 API/SDK로 30분만에 끝,
                      <br aria-hidden="true" />
                      코드 몇 줄로 연동할 수 있어요
                    </p>
                  </div>
                  {/* Outline Button - 연동 문서 보기 */}
                  <div 
                    className="relative rounded-xl cursor-pointer transition-all duration-200 ease-in-out h-12 lg:h-14 w-auto"
                    style={{ 
                      backgroundColor: integrationDocHovered 
                        ? 'rgba(0,27,55,0.1)' 
                        : 'rgba(2,32,71,0.05)' 
                    }}
                    onMouseEnter={() => setIntegrationDocHovered(true)}
                    onMouseLeave={() => setIntegrationDocHovered(false)}
                  >
                    <div className="flex items-center justify-center relative size-full px-4 lg:px-6 py-3">
                      <div className="font-semibold text-[rgba(3,18,40,0.7)] text-base lg:text-lg">
                        <p className="leading-[1.5] whitespace-pre">연동 문서 보기</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 데스크톱용 슬라이드 섹션 - 반응형 너비 */}
              <div className="lg:block hidden">
                <SlideSection currentSlideIndex={currentSlideIndex} />
              </div>
              {/* 모바일용 슬라이드 섹션 - 데스크톱과 동일 컨텐츠 */}
              <div className="lg:hidden block w-full">
                <SlideSection currentSlideIndex={currentSlideIndex} />
              </div>
            </div>
          </PageContainer>
        </div>

        {/* Body Section 5 - 비용 절감 */}
        <div className="bg-[#ffffff] relative shrink-0 w-full">
          <PageContainer className="py-[160px]">
            <div className="flex flex-col gap-12 lg:gap-16 items-center justify-start w-full">
              <div className="flex flex-col gap-6 lg:gap-8 items-start text-left lg:items-center lg:text-center justify-start w-full">
                <div className="font-bold text-[#191f28] text-3xl lg:text-5xl">
                  <p className="leading-[1.3] whitespace-pre-wrap break-words">
                    결제위젯을 사용하면
                    <br aria-hidden="true" />
                    1년에 얼마를 아낄 수 있을까요?
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-start w-full">
                  {costSavingsData.map((item, i) => (
                    <div key={i} className="bg-[#f2f4f6] relative rounded-2xl cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#e8eaed] w-full h-full">
                      <div className="flex flex-col items-center justify-center overflow-clip relative h-full">
                        <div className="flex flex-col gap-6 lg:gap-8 items-center justify-center p-6 lg:p-8 relative w-full h-full">
                          <div className="flex flex-col gap-3 lg:gap-4 items-center justify-start">
                            <div className="font-semibold text-[#333d4b] text-lg lg:text-xl text-center">
                              <p className="leading-[1.6] whitespace-pre-wrap break-words">{item.title}</p>
                            </div>
                            <div className="flex flex-col items-center justify-start text-center">
                              <div className="font-bold text-[#333d4b] text-2xl lg:text-3xl">
                                <p className="leading-[1.3] whitespace-pre-wrap break-words">{item.cost}</p>
                              </div>
                              <div className="font-medium text-[#4e5968] text-sm lg:text-base">
                                <p className="leading-[1.6] whitespace-pre-wrap break-words">{item.period}</p>
                              </div>
                            </div>
                          </div>
                          <div className="font-semibold text-[#3182f6] text-base lg:text-lg text-center">
                            <p className="leading-[1.6] whitespace-pre-wrap break-words">{item.action}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:gap-3 items-center justify-start text-center">
                <div className="font-bold text-[#3182f6] text-xl lg:text-2xl">
                  <p className="leading-[1.3] whitespace-pre-wrap break-words">연 3,500만원 이상의 운영비용 절감</p>
                </div>
                <div className="font-medium text-[#6b7684] text-sm lg:text-base">
                  <p className="leading-[1.6] whitespace-pre-wrap break-words">{`(* '개발자의 인건비'만 산정 / 주니어 개발자 평균연봉 약 5,000만원 기준)`}</p>
                </div>
              </div>
            </div>
          </PageContainer>
        </div>

        {/* Body Section 6 - 플랜 */}
        <div className="bg-gray-50 relative shrink-0 w-full">
          <PageContainer className="py-[160px]">
            <div className="flex flex-col gap-12 lg:gap-16 justify-start w-full">
              <div className="flex flex-col gap-4 lg:gap-6 items-start text-left lg:items-center lg:text-center">
                <div className="font-bold text-[#191f28] text-3xl lg:text-5xl ">
                  <p className="leading-[1.3] whitespace-pre-wrap break-words">두 가지 플랜으로 만나보세요</p>
                </div>
                <div className="font-medium text-[#4e5968] text-lg lg:text-xl">
                  <p className="leading-[1.6] whitespace-pre-wrap break-words">
                    무료로도 충분한 기능, 부담없이 시작할 수 있어요.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:gap-4 lg:items-end items-center justify-start w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-stretch w-full">
                  {/* Basic Plan */}
                  <div className="bg-[#ffffff] relative rounded-2xl shadow-[0px_4px_25px_0px_rgba(2,32,71,0.05)] cursor-pointer transition-all duration-200 ease-in-out hover:shadow-[0px_8px_35px_0px_rgba(2,32,71,0.08)] w-full h-full">
                    <div className="overflow-clip relative h-full">
                      <div className="flex flex-col items-start justify-between p-6 lg:p-8 relative h-full min-h-[300px] lg:min-h-[400px]">
                        <div className="flex flex-col gap-6 lg:gap-8 items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="font-medium text-[#2272eb] text-2xl lg:text-3xl">
                              <p className="leading-[1.6] whitespace-pre-wrap break-words">Basic</p>
                            </div>
                            <div className="font-semibold text-[#4e5968] text-lg lg:text-xl w-full">
                              <p className="leading-[1.3] whitespace-pre-wrap break-words">모두에게 무료, 하지만 충분한 기능</p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 lg:gap-3 items-start justify-start w-full">
                            {basicPlanFeatures.map((feature, i) => (
                              <div key={i} className="flex gap-2 lg:gap-3 items-center justify-start w-full">
                                <div className="relative shrink-0 size-5 lg:size-6">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                    <path d={svgPaths.p3a153700} stroke="var(--stroke-0, #3182F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                                  </svg>
                                </div>
                                <div className="font-medium text-[#333d4b] text-sm lg:text-base flex-1">
                                  <p className="leading-[1.6] whitespace-pre-wrap break-words">{feature}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <LoginButton
                          className="relative rounded-xl shrink-0 w-full h-12 lg:h-14"
                          backgroundColor="#3182f6"
                          hoverBackgroundColor="#2272EB"
                          textColor="#ffffff"
                          hoverTextColor="#ffffff"
                          useExternalHover
                          hovered={freeStartHovered}
                          onMouseEnter={() => setFreeStartHovered(true)}
                          onMouseLeave={() => setFreeStartHovered(false)}
                        >
                          무료로 시작하기
                        </LoginButton>
                      </div>
                    </div>
                  </div>

                  {/* Pro Plan */}
                  <div className="bg-[#ffffff] relative rounded-2xl shadow-[0px_4px_25px_0px_rgba(2,32,71,0.05)] cursor-pointer transition-all duration-200 ease-in-out hover:shadow-[0px_8px_35px_0px_rgba(2,32,71,0.08)] w-full h-full">
                    <div className="overflow-clip relative h-full">
                      <div className="flex flex-col items-start justify-between p-6 lg:p-8 relative h-full min-h-[300px] lg:min-h-[400px]">
                        <div className="flex flex-col gap-6 lg:gap-8 items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="font-medium text-[#2272eb] text-2xl lg:text-3xl">
                              <p className="leading-[1.6] whitespace-pre-wrap break-words">Pro</p>
                            </div>
                            <div className="font-semibold text-[#4e5968] text-lg lg:text-xl w-full">
                              <p className="leading-[1.3] whitespace-pre-wrap break-words">고급 커스텀과 데이터로 결제 경험 최적화</p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 lg:gap-3 items-start justify-start w-full">
                            {proPlanFeatures.map((feature, i) => (
                              <div key={i} className="flex gap-2 lg:gap-3 items-center justify-start w-full">
                                <div className="relative shrink-0 size-5 lg:size-6">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                    <path d={svgPaths.p3a153700} stroke="var(--stroke-0, #3182F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                                  </svg>
                                </div>
                                <div className="font-medium text-[#333d4b] text-sm lg:text-base flex-1">
                                  <p className="leading-[1.6] whitespace-pre-wrap break-words">{feature}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <LoginButton
                          className="relative rounded-xl shrink-0 w-full h-12 lg:h-14"
                          backgroundColor="rgba(100,168,255,0.15)"
                          hoverBackgroundColor="rgba(100,168,255,0.25)"
                          textColor="#3182f6"
                          hoverTextColor="#3182f6"
                          useExternalHover
                          hovered={pricingInquiryHovered}
                          onMouseEnter={() => setPricingInquiryHovered(true)}
                          onMouseLeave={() => setPricingInquiryHovered(false)}
                        >
                          요금 문의하기
                        </LoginButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="font-medium text-[#6b7684] text-sm lg:text-base lg:text-right text-center">
                  <p className="leading-[1.6] whitespace-pre-wrap break-words">* 결제 수수료는 별도로 부과됩니다.</p>
                </div>
              </div>
            </div>
          </PageContainer>
        </div>

        {/* Body Section 7 - 플랜별 지원 기능 테이블 */}
        <div className="bg-[#ffffff] relative shrink-0 w-full">
          <PageContainer className="py-[160px]">
            <div className="box-border content-stretch flex flex-col lg:gap-[32px] gap-[32px] items-center justify-start relative size-full">
              {/* 테이블 헤더 */}
              <div className="content-stretch flex font-medium items-center leading-[0] not-italic relative shrink-0 lg:text-[24px] text-[24px] w-full">
                <div className="flex-1 lg:grow-[2] relative shrink-0 text-[#333d4b]">
                  <p className="leading-[1.3]">플랜별 지원 기능</p>
                </div>
                <div className="w-20 lg:flex-1 relative shrink-0 text-[#2272eb] text-center">
                  <p className="leading-[1.6]">Basic</p>
                </div>
                <div className="w-20 lg:flex-1 relative shrink-0 text-[#2272eb] text-center">
                  <p className="leading-[1.6]">Pro</p>
                </div>
              </div>

              {/* 테이블 본체 */}
              <div className="content-stretch flex flex-col lg:gap-[40px] gap-[40px] items-start justify-start relative shrink-0 w-full">
                {/* 결제수단 섹션 */}
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                  {/* 결제수단 헤더 */}
                  <div className="box-border content-stretch flex items-start justify-start px-0 py-3 relative shrink-0 w-full">
                    <div className="absolute border-[#e5e8eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                    <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px relative shrink-0">
                      <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#b0b8c1] lg:text-[16px] text-[16px] lg:text-nowrap">
                        <p className="leading-[1.6] lg:whitespace-pre">결제수단</p>
                      </div>
                    </div>
                  </div>

                  {/* 결제수단 행들 */}
                  {[
                    "결제수단 노출 설정",
                    "레이아웃, UI 스타일 설정", 
                    "PC에서 모바일 뷰 사용",
                    "가상계좌 입금기한 설정, 환불계좌 입력",
                    "멀티 결제 UI 추가 사용",
                    "결제수단 순서 변경"
                  ].map((feature, i) => (
                    <div key={i} className="box-border content-stretch flex items-start justify-start px-0 py-4 relative shrink-0 w-full">
                      <div className="absolute border-[#e5e8eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="flex-1 lg:grow-[2] content-stretch flex items-center justify-start min-h-px relative shrink-0">
                        <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] lg:text-[20px] text-[18px] lg:text-nowrap">
                          <p className="leading-[1.6] max-w-[230px] lg:max-w-none lg:whitespace-pre">{feature}</p>
                        </div>
                      </div>
                      <div className="w-20 lg:flex-1 content-stretch flex items-center justify-center min-h-px min-w-px relative shrink-0">
                        <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] lg:text-[20px] text-[18px] lg:text-nowrap">
                          <p className="leading-[1.6] lg:whitespace-pre">O</p>
                        </div>
                      </div>
                      <div className="w-20 lg:flex-1 content-stretch flex items-center justify-center min-h-px min-w-px relative shrink-0">
                        <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] lg:text-[20px] text-[18px] lg:text-nowrap">
                          <p className="leading-[1.6] lg:whitespace-pre">O</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Pro 전용 기능들 */}
                  {[
                    "결제수단별 상세 설명 추가 및 변경",
                    "간편결제 직연동 사용",
                    "PG 미지원 결제수단 (바우처 등) 사용"
                  ].map((feature, i) => (
                    <div key={i} className="box-border content-stretch flex items-start justify-start px-0 py-4 relative shrink-0 w-full">
                      <div className="absolute border-[#e5e8eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="flex-1 lg:grow-[2] content-stretch flex items-center justify-start min-h-px relative shrink-0">
                        <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] lg:text-[20px] text-[18px] lg:text-nowrap">
                          <p className="leading-[1.6] max-w-[230px] lg:max-w-none lg:whitespace-pre">{feature}</p>
                        </div>
                      </div>
                      <div className="w-20 lg:flex-1 grow lg:h-8 h-6 min-h-px min-w-px shrink-0" />
                      <div className="w-20 lg:flex-1 content-stretch flex items-center justify-center min-h-px min-w-px relative shrink-0">
                        <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] lg:text-[20px] text-[18px] lg:text-nowrap">
                          <p className="leading-[1.6] lg:whitespace-pre">O</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 프로모션 섹션 */}
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                  {/* 프로모션 헤더 */}
                  <div className="box-border content-stretch flex items-start justify-start px-0 py-3 relative shrink-0 w-full">
                    <div className="absolute border-[#e5e8eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                    <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px relative shrink-0">
                      <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#b0b8c1] lg:text-[16px] text-[16px] lg:text-nowrap">
                        <p className="leading-[1.6] lg:whitespace-pre">프로모션</p>
                      </div>
                    </div>
                  </div>

                  {/* 프로모션 행들 */}
                  {[
                    "프로모션 배지 노출 (수동, 자동)",
                    "프로모션 배지 스타일 설정"
                  ].map((feature, i) => (
                    <div key={i} className="box-border content-stretch flex items-start justify-start px-0 py-4 relative shrink-0 w-full">
                      <div className="absolute border-[#e5e8eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="flex-1 lg:grow-[2] content-stretch flex items-center justify-start min-h-px relative shrink-0">
                        <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] lg:text-[20px] text-[18px] lg:text-nowrap">
                          <p className="leading-[1.6] lg:whitespace-pre">{feature}</p>
                        </div>
                      </div>
                      <div className="w-20 lg:flex-1 content-stretch flex items-center justify-center min-h-px min-w-px relative shrink-0">
                        <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] lg:text-[20px] text-[18px] lg:text-nowrap">
                          <p className="leading-[1.6] lg:whitespace-pre">O</p>
                        </div>
                      </div>
                      <div className="w-20 lg:flex-1 content-stretch flex items-center justify-center min-h-px min-w-px relative shrink-0">
                        <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] lg:text-[20px] text-[18px] lg:text-nowrap">
                          <p className="leading-[1.6] lg:whitespace-pre">O</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Pro 전용 프로모션 기능들 */}
                  {[
                    "프로모션 텍스트 추가 노출",
                    "특정 카드사 추가 강조"
                  ].map((feature, i) => (
                    <div key={i} className="box-border content-stretch flex items-start justify-start px-0 py-4 relative shrink-0 w-full">
                      <div className="absolute border-[#e5e8eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="flex-1 lg:grow-[2] content-stretch flex items-center justify-start min-h-px relative shrink-0">
                        <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] lg:text-[20px] text-[18px] lg:text-nowrap">
                          <p className="leading-[1.6] lg:whitespace-pre">{feature}</p>
                        </div>
                      </div>
                      <div className="w-20 lg:flex-1 grow lg:h-8 h-6 min-h-px min-w-px shrink-0" />
                      <div className="w-20 lg:flex-1 content-stretch flex items-center justify-center min-h-px min-w-px relative shrink-0">
                        <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] lg:text-[20px] text-[18px] lg:text-nowrap">
                          <p className="leading-[1.6] lg:whitespace-pre">O</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 브랜드페이 섹션 */}
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                  {/* 브랜드페이 헤더 */}
                  <div className="box-border content-stretch flex items-start justify-start px-0 py-3 relative shrink-0 w-full">
                    <div className="absolute border-[#e5e8eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                    <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px relative shrink-0">
                      <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#b0b8c1] lg:text-[16px] text-[16px] lg:text-nowrap">
                        <p className="leading-[1.6] lg:whitespace-pre">브랜드페이</p>
                      </div>
                    </div>
                  </div>

                  {/* 브랜드페이 행들 */}
                  {[
                    "브랜드페이 위젯 사용",
                    "브랜드페이 스타일 설정"
                  ].map((feature, i) => (
                    <div key={i} className="box-border content-stretch flex items-start justify-start px-0 py-4 relative shrink-0 w-full">
                      <div className="absolute border-[#e5e8eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="flex-1 lg:grow-[2] content-stretch flex items-center justify-start min-h-px relative shrink-0">
                        <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] lg:text-[20px] text-[18px] lg:text-nowrap">
                          <p className="leading-[1.6] lg:whitespace-pre">{feature}</p>
                        </div>
                      </div>
                      <div className="w-20 lg:flex-1 content-stretch flex items-center justify-center min-h-px min-w-px relative shrink-0">
                        <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] lg:text-[20px] text-[18px] lg:text-nowrap">
                          <p className="leading-[1.6] lg:whitespace-pre">O</p>
                        </div>
                      </div>
                      <div className="w-20 lg:flex-1 content-stretch flex items-center justify-center min-h-px min-w-px relative shrink-0">
                        <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] lg:text-[20px] text-[18px] lg:text-nowrap">
                          <p className="leading-[1.6] lg:whitespace-pre">O</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 지원 예정 섹션 */}
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                  {/* 지원 예정 헤더 */}
                  <div className="box-border content-stretch flex items-start justify-start px-0 py-3 relative shrink-0 w-full">
                    <div className="absolute border-[#e5e8eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                    <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px relative shrink-0">
                      <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#b0b8c1] lg:text-[16px] text-[16px] lg:text-nowrap">
                        <p className="leading-[1.6] lg:whitespace-pre">프로모션</p>
                      </div>
                    </div>
                  </div>

                  {/* 지원 예정 행들 */}
                  {[
                    { text: "데이터 리포트", showBadge: true },
                    { text: "결제영역 A/B테스트", showBadge: true }
                  ].map((item, i) => (
                    <div key={i} className="box-border content-stretch flex items-start justify-start px-0 py-4 relative shrink-0 w-full">
                      <div className="absolute border-[#e5e8eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="flex-1 lg:grow-[2] content-stretch flex lg:gap-2 gap-1 items-center justify-start min-h-px relative shrink-0">
                        <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] lg:text-[20px] text-[18px] lg:text-nowrap">
                          <p className="leading-[1.6] lg:whitespace-pre">{item.text}</p>
                        </div>
                        {item.showBadge && (
                          <div className="bg-[#fdf2e1] box-border content-stretch flex gap-2.5 items-center justify-center lg:px-2 px-1 py-0.5 relative rounded-[999px] shrink-0">
                            <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#db953e] lg:text-[12px] text-[10px] lg:text-nowrap">
                              <p className="leading-[1.6] lg:whitespace-pre">지원 예정</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="w-20 lg:flex-1 grow lg:h-8 h-6 min-h-px min-w-px shrink-0" />
                      <div className="w-20 lg:flex-1 content-stretch flex items-center justify-center min-h-px min-w-px relative shrink-0">
                        <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] lg:text-[20px] text-[18px] lg:text-nowrap">
                          <p className="leading-[1.6] lg:whitespace-pre">O</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PageContainer>
        </div>

        {/* NEW Features Section */}
        <div className="bg-[rgba(2,32,71,0.05)] relative shrink-0 w-full">
          <PageContainer className="py-16 lg:py-24">
            <div className="flex flex-col gap-12 lg:gap-16 justify-start w-full">
              <div className="flex flex-col gap-4 lg:gap-6 items-start text-left lg:items-center lg:text-center">
                <div className="font-medium text-[#4e5968] text-lg lg:text-xl">
                  <p className="leading-[1.6] whitespace-pre-wrap break-words">NEW</p>
                </div>
                <div className="font-bold text-[#191f28] text-3xl lg:text-5xl">
                  <p className="leading-[1.3] whitespace-pre-wrap break-words">곧 출시될 새로운 기능</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start w-full">
                {/* A/B 테스트로 전환율 최적화 */}
                <div className="bg-white relative rounded-2xl cursor-pointer transition-all duration-200 ease-in-out hover:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] w-full h-full">
                  <div className="overflow-clip relative h-full">
                    <div className="flex flex-col gap-6 lg:gap-8 items-start justify-start p-6 lg:p-8 relative w-full h-full">
                      <div className="flex gap-3 lg:gap-4 items-center justify-start w-full">
                        <div className="bg-center bg-cover bg-no-repeat shrink-0 size-8 lg:size-10" style={{ backgroundImage: `url('${imgGraphIcon}')` }} />
                        <div className="font-semibold text-[rgba(2,9,19,0.91)] text-xl lg:text-2xl flex-1">
                          <p className="leading-[1.3] whitespace-pre-wrap break-words">A/B 테스트로 전환율 최적화</p>
                        </div>
                      </div>
                      <div className="font-medium text-[#4e5968] text-base lg:text-lg w-full">
                        <p className="leading-[1.6] whitespace-pre-wrap break-words">결제 UI에 따른 전환율 차이를 실험하고, 가장 효율적인 디자인을 적용할 수 있어요.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 결제 데이터 리포트 */}
                <div className="bg-white relative rounded-2xl cursor-pointer transition-all duration-200 ease-in-out hover:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] w-full h-full">
                  <div className="overflow-clip relative h-full">
                    <div className="flex flex-col gap-6 lg:gap-8 items-start justify-start p-6 lg:p-8 relative w-full h-full">
                      <div className="flex gap-3 lg:gap-4 items-center justify-start w-full">
                        <div className="overflow-clip relative shrink-0 size-8 lg:size-10">
                          <div className="absolute inset-[6.25%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                              <path clipRule="evenodd" d={svgPathsNewFeatures.p21264170} fill="var(--fill-0, #1DB07E)" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPathsNewFeatures.p3268d800} fill="var(--fill-0, #1A7AF9)" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPathsNewFeatures.p1ef96d00} fill="var(--fill-0, #FFBB29)" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="font-semibold text-[rgba(2,9,19,0.91)] text-xl lg:text-2xl flex-1">
                          <p className="leading-[1.3] whitespace-pre-wrap break-words">결제 데이터 리포트</p>
                        </div>
                      </div>
                      <div className="font-medium text-[#4e5968] text-base lg:text-lg w-full">
                        <p className="leading-[1.6] whitespace-pre-wrap break-words">결제수단별 거래액, 결제 전환율 등 데이터 기반의 의사결정을 할 수 있는 인사이트를 제공해 드려요.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 글로벌 결제수단 지원 */}
                <div className="bg-white relative rounded-2xl cursor-pointer transition-all duration-200 ease-in-out hover:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] w-full h-full">
                  <div className="overflow-clip relative h-full">
                    <div className="flex flex-col gap-6 lg:gap-8 items-start justify-start p-6 lg:p-8 relative w-full h-full">
                      <div className="flex gap-3 lg:gap-4 items-center justify-start w-full">
                        <div className="relative shrink-0 size-8 lg:size-10">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                            <g>
                              <g>
                                <path d={svgPathsNewFeatures.p5baf200} fill="var(--fill-0, #68CFCF)" />
                                <path d={svgPathsNewFeatures.p2e958000} fill="var(--fill-0, #68CFCF)" />
                                <path d={svgPathsNewFeatures.p45ad180} fill="var(--fill-0, #68CFCF)" />
                                <path d={svgPathsNewFeatures.p2c032e00} fill="var(--fill-0, #68CFCF)" />
                                <path d={svgPathsNewFeatures.p18acd640} fill="var(--fill-0, #68CFCF)" />
                                <path d={svgPathsNewFeatures.p14519180} fill="var(--fill-0, #68CFCF)" />
                                <path d={svgPathsNewFeatures.p3d51f280} fill="var(--fill-0, #68CFCF)" />
                                <path d={svgPathsNewFeatures.p244f8e00} fill="var(--fill-0, #68CFCF)" />
                                <path d={svgPathsNewFeatures.ped07e00} fill="var(--fill-0, #68CFCF)" />
                                <path d={svgPathsNewFeatures.p25081c00} fill="var(--fill-0, #68CFCF)" />
                                <path d={svgPathsNewFeatures.pf58e400} fill="var(--fill-0, #68CFCF)" />
                                <path d={svgPathsNewFeatures.p27d7c080} fill="var(--fill-0, #68CFCF)" />
                              </g>
                              <path d={svgPathsNewFeatures.p3aa47880} fill="var(--fill-0, #26A5A5)" />
                            </g>
                          </svg>
                        </div>
                        <div className="font-semibold text-[rgba(2,9,19,0.91)] text-xl lg:text-2xl flex-1">
                          <p className="leading-[1.3] whitespace-pre-wrap break-words">글로벌 결제수단 지원</p>
                        </div>
                      </div>
                      <div className="font-medium text-[#4e5968] text-base lg:text-lg w-full">
                        <p className="leading-[1.6] whitespace-pre-wrap break-words">해외카드, 해외 간편결제(페이팔)를 별도 개발이나 연동 없이 클릭 한 번으로 쉽게 사용할 수 있어요.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 조건별 결제창 노출 기능 */}
                <div className="bg-white relative rounded-2xl cursor-pointer transition-all duration-200 ease-in-out hover:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] w-full h-full">
                  <div className="overflow-clip relative h-full">
                    <div className="flex flex-col gap-6 lg:gap-8 items-start justify-start p-6 lg:p-8 relative w-full h-full">
                      <div className="flex gap-3 lg:gap-4 items-center justify-start w-full">
                        <div className="overflow-clip relative shrink-0 size-8 lg:size-10">
                          <div className="absolute inset-[7.24%_9.31%_7.23%_9.31%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 35">
                              <g>
                                <path clipRule="evenodd" d={svgPathsNewFeatures.p29629280} fill="var(--fill-0, #76E0B4)" fillRule="evenodd" />
                                <path clipRule="evenodd" d={svgPathsNewFeatures.p205d800} fill="var(--fill-0, #15C07E)" fillRule="evenodd" />
                                <path clipRule="evenodd" d={svgPathsNewFeatures.p3cf15000} fill="var(--fill-0, #029E62)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="font-semibold text-[rgba(2,9,19,0.91)] text-xl lg:text-2xl flex-1">
                          <p className="leading-[1.3] whitespace-pre-wrap break-words">조건별 결제창 노출 기능</p>
                        </div>
                      </div>
                      <div className="font-medium text-[#4e5968] text-base lg:text-lg w-full">
                        <p className="leading-[1.6] whitespace-pre-wrap break-words">국가/상품/고객 등 특정 노출 조건이나 상황에 따라, 각각 다른 결제창 UI를 노출하도록 설정할 수 있어요.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </div>

        <div className="bg-gray-50 relative shrink-0 w-full">
          <PageContainer>
            <QnASection openQnAIndexes={openQnAIndexes} toggleQnA={toggleQnA} />
          </PageContainer>
        </div>
      </div>

      {/* Final CTA Section - Background spans full width */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
          <PageContainer className="box-border content-stretch flex items-center justify-center lg:py-[160px] py-20 relative w-full">
            {/* Background Images */}
            <div className="absolute aspect-[1536/768] contents left-[-18.36%] right-[-18.36%] translate-y-[-50%]" style={{ top: "calc(50% + 0.5px)" }}>
              {[imgImage8, imgImage5, imgImage6, imgImage7, imgImage9].map((img, i) => (
                <div key={i} className="absolute aspect-[1536/768] bg-center bg-cover bg-no-repeat left-[-18.36%] mix-blend-darken right-[-18.36%] translate-y-[-50%]" style={{ top: "calc(50% + 0.5px)", backgroundImage: `url('${img}')` }} />
              ))}
            </div>
            
            <div className="box-border content-stretch flex flex-col lg:gap-[56px] gap-[24px] items-center justify-center p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col lg:gap-[24px] gap-[12px] items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#ffffff] text-center lg:text-nowrap">
                <div className="font-bold relative shrink-0 text-3xl lg:text-5xl">
                  <p className="block leading-[1.3] lg:text-nowrap lg:whitespace-pre">
                    결제, 소프트먼트에 맡기고
                    <br aria-hidden="true" />
                    사업에만 집중하세요
                  </p>
                </div>
                <div className="font-semibold relative shrink-0 lg:text-[17px] text-[15px]">
                  <p className="block leading-[1.6] lg:text-nowrap lg:whitespace-pre">
                    온라인 사업을 시작하고 운영하는 어려운 과정에서
                    <br aria-hidden="true" />
                    {`'결제'에 대한 고민까지 할 필요 없도록`}
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0">
                <UnderHeroButton
                  variant="primary"
                  className="lg:text-[17px] text-[17px]"
                >
                  연동 문서 보기
                </UnderHeroButton>
                <UnderHeroButton
                  variant="white"
                  className="lg:text-[17px] text-[17px]"
                >
                  이용 신청하기
                </UnderHeroButton>
              </div>
            </div>
          </PageContainer>
        </div>
      </div>

      <Footer />
    </div>
  );
}