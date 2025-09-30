import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-urk5owc2id";
const imgReplaceImgFill = "/images/brandpay0.png";
import { UnderHeroButton } from "../components/UnderHeroButton";
const img11 = "/images/brandpay1.png";
const img21 = "/images/brandpay2.png";
const imgBarChart1 = "/images/brandpay3.png";
const imgImage8 = "/images/brandpay4.png";
const imgImage5 = "/images/brandpay5.png";
const imgImage6 = "/images/brandpay6.png";
const imgImage7 = "/images/brandpay7.png";
const imgImage9 = "/images/brandpay8.png";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ExperienceButton } from "../components/ExperienceButton";
import { BrochureRequestButton } from "../components/BrochureRequestButton";
import { ActionButton } from "../components/ActionButton";
import { QnASection } from "../components/QnASection";

export default function App() {
  // Footer 내부에서 자체 관리로 전환됨
  const [activeTab, setActiveTab] = useState("hpoint");
  const [openedFaq, setOpenedFaq] = useState<number[]>([]);
  const brands = ["무신사페이", "H.point페이", "퀸잇페이"];
  const [brandIndex, setBrandIndex] = useState(0);
  const [brandFading, setBrandFading] = useState(false);
  const [isUnderWhiteHovered, setIsUnderWhiteHovered] = useState(false);
  const [isUnderPrimaryHovered, setIsUnderPrimaryHovered] = useState(false);

  const faqData = [
    {
      question: "Q. 브랜드페이가 간편결제인가요?",
      answer:
        "브랜드페이는 누구나 간편결제를 쉽게 만들 수 있도록 돕는 솔루션이에요. 고객의 첫 결제수단 등록부터 결제까지 구현할 수 있고, 브랜드에 맞는 맞춤형 UI를 적용할 수 있어요.",
    },
    {
      question:
        "Q. 사업 규모가 작아서 아직 개발자가 없는데, 자체 간편결제를 만들 수 있을까요?",
      answer:
        "브랜드페이는 일반 PG연동만큼 간단히 연동할 수 있어서, 사업 규모와 상관없이 자체 간편결제를 만들 수 있어요. 하지만 직접 개발 연동을 할 수 있는 개발자가 필요해요.",
    },
    {
      question:
        "Q. 브랜드페이는 어떤 결제수단을 지원하고 있나요?",
      answer:
        "카드를 등록해 결제할 수 있어요. 사용자 본인 명의의 결제 수단만 사용할 수 있어요.",
    },
    {
      question: "Q. 브랜드페이 수수료는 어떻게 되나요?",
      answer: "신용∙체크카드 계좌이체 ",
      linkText: "결제수수료",
      linkSuffix: "에 +1.0%가 부과돼요.",
    },
    {
      question: "Q. 브랜드페이를 해지하고 싶어요.",
      answer: "아래 링크에서 브랜드페이를 해지할 수 있어요.",
      linkText: "브랜드페이 해지 페이지",
      linkSuffix: "",
    },
  ];

  // QnASection을 위한 아이템
  const brandFaqItems = faqData as unknown as {
    question: string;
    answer?: string;
    linkText?: string;
    linkSuffix?: string;
    linkText1?: string;
    linkSuffix1?: string;
    linkText2?: string;
    linkSuffix2?: string;
  }[];

  useEffect(() => {
    let canceled = false;
    let t1: ReturnType<typeof setTimeout> | undefined;
    let t2: ReturnType<typeof setTimeout> | undefined;

    const loop = () => {
      t1 = setTimeout(() => {
        if (canceled) return;
        setBrandFading(true);
        t2 = setTimeout(() => {
          if (canceled) return;
          setBrandIndex((i) => (i + 1) % brands.length);
          setBrandFading(false);
          loop();
        }, 400); // fade duration
      }, 1600); // visible duration
    };

    loop();
    return () => {
      canceled = true;
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
    };
  }, []);

  const handleFaqClick = (index: number) => {
    setOpenedFaq((prev) => {
      if (prev.includes(index)) {
        // 이미 열려있으면 제거
        return prev.filter((i) => i !== index);
      } else {
        // 열려있지 않으면 추가
        return [...prev, index];
      }
    });
  };

  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-start relative size-full">
      {/* Hero Section */}
      <div className="bg-[#191f28] relative shrink-0 w-full">
        <div className="flex lg:flex-row flex-col items-center overflow-visible relative size-full">
          <div className="max-w-[1800px] w-full mx-auto relative">
            <div className="box-border content-stretch flex flex-row items-center justify-between pt-16 lg:pt-[60px] px-5 lg:xl:px-[148.5px] md:px-[24px] relative w-full">
              <div className="box-border content-stretch flex flex-col lg:flex-row lg:gap-[24px] gap-[10px] lg:h-[680px] h-[600px] items-center justify-start  relative shrink-0 w-full">
                {/* Hero Text */}
                <div className="basis-0 box-border content-stretch flex flex-col lg:gap-[40px] gap-[20px] grow h-full lg:items-start items-center justify-center min-h-px min-w-px  relative shrink-0">
                  <div className="box-border content-stretch flex flex-col gap-[24px] items-center lg:items-start justify-start leading-[0] not-italic relative shrink-0 text-left">
                    {/* Frame1417 */}
                    <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-start relative shrink-0">
                      <div className="font-medium relative shrink-0 text-[#d1d6db] text-base lg:text-[20px]">
                        <p className="hidden lg:block leading-[1.6] whitespace-pre">
                          브랜드페이
                        </p>
                      </div>
                      <div className="text-center lg:text-left font-bold leading-[1.3] relative shrink-0 text-[#ffffff] text-3xl lg:text-[48px] whitespace-pre-wrap break-words">
                        <p className="block mb-0">
                          <span
                            style={{
                              opacity: brandFading ? 0 : 1,
                              transition: "opacity 400ms ease",
                            }}
                          >
                            {`'${brands[brandIndex]}'도`}
                          </span>
                        </p>
                        <p className="block">
                          브랜드페이로 만들었어요
                        </p>
                      </div>
                    </div>
                    <div className="font-medium relative shrink-0 text-[#ffffff] text-base lg:text-[20px] tracking-[-0.2px] text-center lg:text-left">
                      <p className="adjustLetterSpacing block leading-[1.6] whitespace-pre-wrap break-words">
                        간단한 API 연동으로 만드는
                        <br aria-hidden="true" />
                        우리 회사만의 자체 간편결제
                      </p>
                    </div>
                  </div>
                  {/* Frame1368 */}
                  <div className="box-border content-stretch flex flex-row gap-4 lg:gap-[20px] items-start justify-center lg:justify-start p-[0px] relative shrink-0">
                    <ExperienceButton
                      onClick={() => console.log('브랜드페이 신청하기 클릭')}
                      className="rounded-xl w-auto h-auto"
                    >
                      신청하기
                    </ExperienceButton>
                    <BrochureRequestButton
                      onClick={() => console.log('브랜드페이 소개서 받기 클릭')}
                      className="rounded-xl w-auto h-auto"
                    >
                      소개서 받기
                    </BrochureRequestButton>
                  </div>
                </div>
                {/* Frame1462 */}
                <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-row items-center relative size-full">
                    <div className="box-border content-stretch flex flex-row items-center justify-center px-6 lg:pl-[120px] lg:pr-[48px] lg:py-[120px] relative size-full">
                      {/* iPhone 14 Pro Light */}
                      <div className="grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid leading-[0] place-items-start relative shrink-0">
                        <div className="[grid-area:1_/_1] bg-[#ffffff] h-[420px] lg:h-[440px] ml-[0px] mt-[0px] relative rounded-[36.255px] w-[200px] lg:w-[212.568px]">
                          <div
                            aria-hidden="true"
                            className="absolute border-[0.497px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[36.255px] shadow-[0px_49.665px_39.732px_0px_rgba(0,0,0,0.03),0px_18.129px_14.503px_0px_rgba(0,0,0,0.02),0px_8.801px_7.041px_0px_rgba(0,0,0,0.016),0px_4.314px_3.452px_0px_rgba(0,0,0,0.01),0px_1.706px_1.365px_0px_rgba(0,0,0,0.008)]"
                          />
                        </div>
                        <div className="[grid-area:1_/_1] h-[402px] lg:h-[422.162px] ml-[8.916px] mt-[8.919px] relative w-[186px] lg:w-[194.729px]">
                          <img
                            className="block max-w-none size-full"
                            height="402"
                            src={imgReplaceImgFill}
                            width="186"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-[#ffffff] relative shrink-0 w-full">
        <div className="overflow-visible relative size-full">
          <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[24px] items-start justify-start px-5 lg:px-[188px] py-16 lg:py-[180px] relative w-full max-w-[1440px] mx-auto">
            <div className="basis-0 font-bold grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#333d4b] text-3xl lg:text-5xl text-left tracking-[-0.36px]">
              <p className="block mb-0">우리 회사만의 간편결제,</p>
              <p className="block">
                쉽게 만들고
                <br className="" />
                매출도 올리세요
              </p>
            </div>
            {/* Frame1459 */}
            <div className="basis-0 box-border content-stretch flex flex-col gap-6 lg:gap-[24px] grow items-start justify-start min-h-px min-w-px p-[0px] relative shrink-0">
              <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#333d4b] text-lg lg:text-2xl text-left w-full">
                <p className="block leading-[1.6]">
                  실제 가맹점 브랜드페이 연동 전후 데이터 비교
                </p>
              </div>
              {/* Frame1398 */}
              <div className="box-border content-stretch flex flex-col gap-2 lg:gap-[4px] items-start justify-start p-[0px] relative shrink-0 w-full">
                {/* Frame1393 */}
                <div className="box-border content-stretch flex flex-row gap-3 lg:gap-[8px] items-center justify-start p-[0px] relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row gap-[10px] items-center justify-start pb-[0px] pt-[4px] px-[0px] relative shrink-0">
                    <div className="relative shrink-0 size-6 lg:size-8">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 32 32"
                      >
                        <g id="Icon/Check Box">
                          <path
                            d={svgPaths.p17903080}
                            id="Vector"
                            stroke="var(--stroke-0, #3182F6)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.4"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="basis-0 font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333d4b] text-lg lg:text-2xl text-left">
                    <p className="leading-[1.6] font-semibold">
                      <span>{`3개월 내 재구매율 `}</span>
                      <span className="text-[#3182f6]">
                        2.8배
                      </span>
                      <span>{` 상승`}</span>
                    </p>
                  </div>
                </div>
                {/* Frame1396 */}
                <div className="box-border content-stretch flex flex-row gap-3 lg:gap-[8px] items-center justify-start p-[0px] relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row gap-[10px] items-center justify-start pb-[0px] pt-[4px] px-[0px] relative shrink-0">
                    <div className="relative shrink-0 size-6 lg:size-8">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 32 32"
                      >
                        <g id="Icon/Check Box">
                          <path
                            d={svgPaths.p17903080}
                            id="Vector"
                            stroke="var(--stroke-0, #3182F6)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.4"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="basis-0 font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333d4b] text-lg lg:text-2xl text-left">
                    <p className="leading-[1.6] font-semibold">
                      <span>{`일반결제 대비 구매 빈도 약 `}</span>
                      <span className="text-[#3182f6]">
                        2배
                      </span>
                      <span>{` 상승`}</span>
                    </p>
                  </div>
                </div>
                {/* Frame1397 */}
                <div className="box-border content-stretch flex flex-row gap-3 lg:gap-[8px] items-center justify-start p-[0px] relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row gap-[10px] items-center justify-start pb-[0px] pt-[4px] px-[0px] relative shrink-0">
                    <div className="relative shrink-0 size-6 lg:size-8">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 32 32"
                      >
                        <g id="Icon/Check Box">
                          <path
                            d={svgPaths.p17903080}
                            id="Vector"
                            stroke="var(--stroke-0, #3182F6)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.4"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="basis-0 font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333d4b] text-lg lg:text-2xl text-left">
                    <p className="leading-[1.6] font-semibold">
                      <span>{`동일 고객의 월 거래액 `}</span>
                      <span className="text-[#3182f6]">
                        1.4배
                      </span>
                      <span>{` 상승`}</span>
                    </p>
                  </div>
                </div>
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

      {/* Body1 */}
      <div className="bg-[rgba(2,32,71,0.05)] relative z-10 shrink-0 w-full">
        <div className="overflow-visible relative size-full">
          <div className="box-border content-stretch flex flex-col gap-12 lg:gap-20 items-start justify-start px-5 lg:px-[188px] py-16 lg:py-[180px] relative w-full max-w-[1440px] mx-auto">
            <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#191f28] text-3xl lg:text-5xl text-left">
              <p className="block leading-[1.3] whitespace-pre">
                어떻게 매출이 상승하나요?
              </p>
            </div>
            {/* Frame1461 */}
            <div className="box-border content-stretch flex flex-col gap-12 lg:gap-[120px] items-start  justify-start lg:justify-center p-[0px] relative shrink-0 w-full">
              {/* Frame1425 */}
              <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start lg:items-center justify-start p-[0px] relative shrink-0 w-full">
                <div className="aspect-[340/252] basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-2xl shrink-0 w-full">
                  <div className="flex flex-col items-center justify-center overflow-visible relative size-full">
                    <div className="aspect-[340/252] box-border content-stretch flex flex-col gap-6 lg:gap-12 items-center justify-center px-6 lg:px-11 py-6 lg:py-9 relative size-full">
                      <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#3182f6] text-base lg:text-lg text-left text-nowrap tracking-[-0.2px]">
                        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
                          화면 디자인
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col gap-4 lg:gap-6 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left">
                  <div className="font-bold relative shrink-0 text-[#333d4b]  w-full">
                    <p className="leading-[1.3] text-2xl lg:text-4xl">
                      <span>{`고객의 `}</span>
                      <span className="text-[#3182f6]">
                        이탈을 방지하는
                      </span>
                      <span>
                        <br aria-hidden="true" />
                        쉬운 등록, 결제 경험을 제공해요
                      </span>
                    </p>
                  </div>
                  <div className="font-medium relative shrink-0 text-[#4e5968] text-base lg:text-lg w-full">
                    <p className="block leading-[1.6]">
                      카드나 계좌 정보를 한 번만 등록하면
                      <br aria-hidden="true" />
                      다음부터는 원터치 결제가 가능해요.
                    </p>
                  </div>
                </div>
              </div>
              {/* Frame1426 */}
              <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start lg:items-center justify-start p-[0px] relative shrink-0 w-full">
                <div className="aspect-[340/252] basis-0 bg-[#ffffff] box-border content-stretch flex flex-col gap-6 lg:gap-12 grow items-center justify-center min-h-px min-w-px overflow-visible p-[0px] relative rounded-2xl shrink-0 w-full">
                  <div
                    className="aspect-[1884/1455] basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px shrink-0"
                    style={{
                      backgroundImage: `url('${img11}')`,
                    }}
                  />
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col gap-4 lg:gap-6 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left">
                  <div className="font-bold relative shrink-0 text-[#333d4b] text-2xl lg:text-3xl w-full">
                    <p className="leading-[1.3] text-2xl lg:text-4xl">
                      <span>{`쉽고 빠른 결제를 경험한 고객은 `}</span>
                      <span className="text-[#3182f6]">
                        재구매율
                      </span>
                      이 상승해요
                    </p>
                  </div>
                  <div className="font-medium relative shrink-0 text-[#4e5968] text-base lg:text-lg w-full">
                    <p className="leading-[1.6]">
                      <span>{`브랜드페이로 최초 결제 후, 동일카드 재구매한 고객이 일반결제에 비해 `}</span>
                      <span className="font-semibold not-italic">
                        2.8배
                      </span>
                      <span>{` 늘었어요.`}</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Frame1427 */}
              <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start lg:items-center justify-start p-[0px] relative shrink-0 w-full">
                <div className="aspect-[340/252] basis-0 bg-[#ffffff] box-border content-stretch flex flex-col gap-6 lg:gap-12 grow items-center justify-center min-h-px min-w-px overflow-visible p-[0px] relative rounded-2xl shrink-0 w/full">
                  <div
                    className="aspect-[1884/1455] basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px shrink-0"
                    style={{
                      backgroundImage: `url('${img21}')`,
                    }}
                  />
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col gap-4 lg:gap-6 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left">
                  <div className="font-bold relative shrink-0 text-[#333d4b] text-2xl lg:text-3xl w/full">
                    <p className="leading-[1.3] text-2xl lg:text-4xl">
                      <span>
                        가장 많이 쓰는 앱카드보다
                        <br aria-hidden="true" />
                        {`결제전환율이 `}
                      </span>
                      <span className="text-[#3182f6]">
                        17%p
                      </span>
                      <span>{` 더 높아요`}</span>
                    </p>
                  </div>
                  <div className="font-medium relative shrink-0 text-[#4e5968] text-base lg:text-lg w/full">
                    <p className="leading-[1.6]">
                      고객이 자주 쓰는 앱카드보다 전환율이 높아요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body2 */}
      <div className="bg-[#ffffff] relative shrink-0 w-full">
        <div className="overflow-visible relative size-full">
          <div className="box-border content-stretch flex flex-col gap-12 lg:gap-20 items-start justify-start px-5 lg:px-[188px] py-16 lg:py-[180px] relative w-full max-w-[1440px] mx-auto">
            <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#191f28] text-3xl lg:text-5xl text-left">
              <p className="block leading-[1.3] whitespace-pre">
                개발 연동도 쉽고 빠르게
              </p>
            </div>
            {/* Contents */}
            <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start lg:items-center justify-start p-[0px] relative shrink-0 w-full">
              <div className="aspect-[340/252] basis-0 bg-gray-50 box-border content-stretch flex flex-col gap-6 lg:gap-12 grow items-center justify-center min-h-px min-w-px overflow-clip p-[0px] relative rounded-2xl shrink-0 w-full">
                <div
                  className="aspect-[1582/1225] basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px shrink-0"
                  style={{
                    backgroundImage: `url('${imgBarChart1}')`,
                  }}
                />
              </div>
              {/* Right */}
              <div className="basis-0 box-border content-stretch flex flex-col gap-4 lg:gap-6 grow items-start justify-start min-h-px min-w-px p-[0px] relative shrink-0">
                {/* Text */}
                <div className="box-border content-stretch flex flex-col gap-4 lg:gap-6 items-start justify-start leading-[0] not-italic p-[0px] relative shrink-0 text-left w/full">
                  <div className="font-bold relative shrink-0 text-[#333d4b] text-2xl lg:text-3xl w/full">
                    <p className="leading-[1.3]">
                      개발 연동부터 런칭까지 단 3주!
                      <br aria-hidden="true" />
                      vs. 가맹점 자체 개발 시 6개월
                    </p>
                  </div>
                  <div className="font-medium relative shrink-0 text-[#4e5968] text-base lg:text-lg w/full">
                    <p className="leading-[1.6]">
                      {`실제 가맹점 '엔픽셀페이' 개발 연동 3주 소요,`}
                      <br aria-hidden="true" />
                      업종과 규모에 따라 연동 기간은 달라질 수
                      있어요.
                    </p>
                  </div>
                </div>
                {/* TextButtonM → ActionButton */}
                <div className="box-border content-stretch flex flex-row items-center justify-start p-[0px] relative shrink-0">
                  <ActionButton onClick={() => console.log('개발 가이드 보기 클릭')}>
                    개발 가이드 보기
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body3 */}
      <div className="bg-[#ffffff] relative shrink-0 w-full">
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-12 lg:gap-20 items-start justify-start px-5 lg:px-[188px] py-16 lg:py-[180px] relative w-full max-w-[1440px] mx-auto">
            <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#191f28] text-3xl lg:text-5xl text-left">
              <p className="block leading-[1.3] whitespace-pre">
                가맹점 사례
              </p>
            </div>
            {/* Contents1 */}
            <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start justify-start p-[0px] relative shrink-0 w-full">
              <div className="aspect-[340/428] basis-0 bg-gray-50 grow min-h-px min-w-px relative rounded-2xl shrink-0 w/full">
                <div className="flex flex-col items-center justify-center overflow-visible relative size-full">
                  <div className="aspect-[340/428] box-border content-stretch flex flex-col gap-6 lg:gap-12 items-center justify-center px-6 lg:px-11 py-6 lg:py-9 relative size-full">
                    <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#3182f6] text-base lg:text-lg text-left text-nowrap tracking-[-0.2px]">
                      <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
                        목업
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right1 */}
              <div className="basis-0 box-border content-stretch flex flex-col gap-6 lg:gap-10 grow items-start justify-start min-h-px min-w-px p-[0px] relative shrink-0">
                {/* Frame1473 */}
                <div className="box-border content-stretch flex flex-row gap-2 lg:gap-[4px] items-start justify-start p-[0px] relative shrink-0 flex-wrap">
                  <div
                    className={`box-border content-stretch flex flex-row gap-[10px] items-center justify-center px-4 py-2 lg:px-[16px] lg:py-[11px] relative rounded-[999px] shrink-0 cursor-pointer ${
                      activeTab === "hpoint"
                        ? "bg-[rgba(2,32,71,0.05)]"
                        : ""
                    }`}
                    onClick={() => setActiveTab("hpoint")}
                  >
                    <div
                      className={`font-semibold leading-[0] not-italic relative shrink-0 text-sm lg:text-[17px] text-left text-nowrap ${
                        activeTab === "hpoint"
                          ? "text-[rgba(2,9,19,0.91)]"
                          : "text-[rgba(0,19,43,0.58)]"
                      }`}
                    >
                      <p className="block leading-[1.6] whitespace-pre">
                        H.point페이
                      </p>
                    </div>
                  </div>
                  <div
                    className={`box-border content-stretch flex flex-row gap-[10px] items-center justify-center px-4 py-2 lg:px-[16px] lg:py-[11px] relative rounded-[999px] shrink-0 cursor-pointer ${
                      activeTab === "musinsa"
                        ? "bg-[rgba(2,32,71,0.05)]"
                        : ""
                    }`}
                    onClick={() => setActiveTab("musinsa")}
                  >
                    <div
                      className={`font-semibold leading-[0] not-italic relative shrink-0 text-sm lg:text-[17px] text-left text-nowrap ${
                        activeTab === "musinsa"
                          ? "text-[rgba(2,9,19,0.91)]"
                          : "text-[rgba(0,19,43,0.58)]"
                      }`}
                    >
                      <p className="block leading-[1.6] whitespace-pre">
                        무신사페이
                      </p>
                    </div>
                  </div>
                </div>
                {/* Frame1474 */}
                <div className="box-border content-stretch flex flex-col gap-6 lg:gap-10 items-start justify-start p-[0px] relative shrink-0 w/full">
                  {activeTab === "hpoint" ? (
                    <>
                      <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#333d4b]   text-left w/full">
                        <p className="block font-semibold leading-[1.6] mb-0 text-xl lg:text-2xl">
                          현대백화점그룹은 브랜드페이 연동으로
                        </p>
                        <p className="font-semibold leading-[1.6] text-xl lg:text-2xl">
                          <span className="text-[#3182f6]">
                            50여개 계열사의 결제수단 공유
                          </span>
                          가 가능해졌어요.
                        </p>
                      </div>
                      {/* Frame1475 */}
                      <div className="box-border content-stretch flex flex-col gap-1 lg:gap-[4px] items-start justify-start leading-[0] not-italic p/[0px] relative shrink-0 text-[#4e5968] text-left w/full">
                        <div className="font-bold relative shrink-0 text-sm lg:text-[15px] w/full">
                          <p className="block leading-[1.6]">
                            문제
                          </p>
                        </div>
                        <div className="font-medium relative shrink-0 text-base lg:text-[17px] w/full">
                          <p className="block leading-[1.6]">
                            고객이 한 계열사에서 카드나 계좌를
                            등록하는 경우, 다른 계열사의
                            쇼핑몰에서도 즉시 사용 가능하도록
                            결제수단 통합 관리가 필요했어요.
                          </p>
                        </div>
                      </div>
                      {/* Frame1476 */}
                      <div className="box-border content-stretch flex flex-col gap-1 lg:gap-[4px] items-start justify-start leading/[0] not-italic p/[0px] relative shrink-0 text-[#4e5968] text-left w/full">
                        <div className="font-bold relative shrink-0 text-sm lg:text-[15px] w/full">
                          <p className="block leading-[1.6]">
                            해결책
                          </p>
                        </div>
                        <div className="font-medium relative shrink-0 text-base lg:text-[17px] w/full">
                          <p className="block leading-[1.6]">
                            브랜드페이 연동으로 결제수단 통합
                            관리는 물론, 가맹점 전용
                            커스터마이징을 통한 제휴카드(PLCC)
                            지원으로 고객에게 탁월한 결제 경험을
                            선사하고 있어요.
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#333d4b]   text-left w/full">
                        <p className="block font-semibold leading-[1.6] mb-0 text-xl lg:text-2xl">
                        무신사는 브랜드페이 연동으로
                        </p>
                        <p className="font-semibold leading-[1.6] text-xl lg:text-2xl">
                          <span className="text-[#3182f6]">
                          재구매율이 2.8배 상승
                          </span>
                          했어요<div className=""></div>
                        </p>
                      </div>
                      {/* Frame1475 */}
                      <div className="content-stretch flex flex-col gap-1 lg:gap-[4px] items-start justify-start leading/[0] not-italic relative shrink-0 text-[#4e5968] w/full">
                        <div className="font-bold relative shrink-0 text-sm lg:text-[15px] w/full">
                          <p className="leading-[1.6]">문제</p>
                        </div>
                        <div className="font-medium relative shrink-0 text-base lg:text-[17px] w/full">
                          <p className="leading/[1.6]">
                            무신사는 온라인 패션 커머스로,
                            <br aria-hidden="true" />
                            고객에게 쉬운 결제 경험을 줄 수 있는
                            솔루션을
                            <br aria-hidden="true" />
                            가장 빠르게 구축할 방법이
                            필요했어요.
                          </p>
                        </div>
                      </div>
                      {/* Frame1476 */}
                      <div className="content-stretch flex flex-col gap-1 lg:gap-[4px] items-start justify-start leading/[0] not-italic relative shrink-0 text-[#4e5968] w/full">
                        <div className="font-bold relative shrink-0 text-sm lg:text-[15px] w/full">
                          <p className="leading/[1.6]">
                            해결책
                          </p>
                        </div>
                        <div className="font-medium relative shrink-0 text-base lg:text-[17px] w/full">
                          <p className="leading/[1.6]">
                            쉬운 개발 연동, 탁월한 결제 경험을
                            위해
                            <br aria-hidden="true" />
                            소프트먼트의 브랜드페이를
                            선택했어요.
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body4 - FAQ (QnASection 재사용) */}
      <div className="bg-[#F9FAFB] relative z-20 shrink-0 w-full">
        <div className="overflow-visible relative size-full">
          <div className="box-border content-stretch flex items-center justify-center px-5 lg:px-[188px] py-16 lg:py-[180px] relative w/full max-w/[1440px] mx/auto">
            <QnASection
              openQnAIndexes={openedFaq}
              toggleQnA={(index) => handleFaqClick(index)}
              items={brandFaqItems}
            />
          </div>
        </div>
      </div>

      {/* HeroSection1 */}
      <div className="relative z-0 shrink-0 w-full">
        <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center px-5 lg:px-[390px] py-16 lg:py-[160px] relative w-full max-w-[1440px] mx-auto">
            {/* Group6 */}
            <div
              className="absolute z-0 aspect-[1536/768] contents left-[-18.36%] right-[-18.36%] translate-y-[-50%] pointer-events-none"
              style={{ top: "calc(50% + 0.5px)" }}
            >
              <div
                className="absolute aspect-[1536/768] bg-center bg-cover bg-no-repeat left-[-18.36%] mix-blend-darken right-[-18.36%] translate-y-[-50%]"
                style={{
                  top: "calc(50% + 0.5px)",
                  backgroundImage: `url('${imgImage8}')`,
                }}
              />
              <div
                className="absolute aspect-[1536/768] bg-center bg-cover bg-no-repeat left-[-18.36%] mix-blend-darken right-[-18.36%] translate-y-[-50%]"
                style={{
                  top: "calc(50% + 0.5px)",
                  backgroundImage: `url('${imgImage5}')`,
                }}
              />
              <div
                className="absolute aspect-[1536/768] bg-center bg-cover bg-no-repeat left-[-18.36%] mix-blend-darken right-[-18.36%] translate-y-[-50%]"
                style={{
                  top: "calc(50% + 0.5px)",
                  backgroundImage: `url('${imgImage6}')`,
                }}
              />
              <div
                className="absolute aspect-[1536/768] bg-center bg-cover bg-no-repeat left-[-18.36%] mix-blend-darken right-[-18.36%] translate-y-[-50%]"
                style={{
                  top: "calc(50% + 0.5px)",
                  backgroundImage: `url('${imgImage7}')`,
                }}
              />
              <div
                className="absolute aspect-[1536/768] bg-center bg-cover bg-no-repeat left-[-18.36%] mix-blend-darken right-[-18.36%] translate-y-[-50%]"
                style={{
                  top: "calc(50% + 0.5px)",
                  backgroundImage: `url('${imgImage9}')`,
                }}
              />
            </div>
            {/* HeroText1 */}
            <div className="box-border content-stretch flex flex-col lg:gap-[46px] gap-[24px] items-center justify-center p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col lg:gap-[24px] gap-[12px] items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#ffffff] text-center lg:text-nowrap">
                <div className="font-bold relative shrink-0 text-3xl lg:text-[48px]">
                  <p className="block leading-[1.3] lg:text-nowrap lg:whitespace-pre">
                    자체 간편결제,
                    <br aria-hidden="true" />
                    브랜드페이로 지금 시작해보세요
                  </p>
                </div>
                
              </div>
              <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0">
                <UnderHeroButton
                  variant="white"
                  className="lg:text-[17px] text-[17px]"
                >
                  신청하기
                </UnderHeroButton>
                <UnderHeroButton
                  variant="primary"
                  className="lg:text-[17px] text-[17px]"
                >
                  소개서 받기
                </UnderHeroButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}