import { useState } from "react";
const imgReplaceImgFill = "/images/replaceimgfill.png";
const imgImage17 = "/images/quick_image_1.png";
const imgImage20 = "/images/quick_image_2.png";
const imgImage21 = "/images/quick_image_4.png";
const imgImage22 = "/images/quick_image_4.png";
const imgImage23 = "/images/quick_image_3.png";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import svgPaths from "../imports/svg-9geq74j6xd";
import { Checkbox } from "../components/Checkbox";
import { ExperienceButton } from "../components/ExperienceButton";
import { BrochureRequestButton } from "../components/BrochureRequestButton";
import { QnASection } from "../components/QnASection";

export default function App() {
  // Footer 내부에서 자체 관리로 전환됨
  // 각 입력 필드의 호버 및 포커스 상태 관리
  
  const [companyNameHover, setCompanyNameHover] =
    useState(false);
  const [companyNameFocus, setCompanyNameFocus] =
    useState(false);
  const [businessNumHover, setBusinessNumHover] =
    useState(false);
  const [businessNumFocus, setBusinessNumFocus] =
    useState(false);
  const [emailHover, setEmailHover] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneHover, setPhoneHover] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [transactionHover, setTransactionHover] =
    useState(false);
  const [transactionFocus, setTransactionFocus] =
    useState(false);
  const [websiteHover, setWebsiteHover] = useState(false);
  const [websiteFocus, setWebsiteFocus] = useState(false);
  const [messageHover, setMessageHover] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);
  const [agreeRequired, setAgreeRequired] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [isHoveredSubmit, setIsHoveredSubmit] = useState(false);
  const [isActiveSubmit, setIsActiveSubmit] = useState(false);

  // Calculator sliders state
  const [monthlyTxn, setMonthlyTxn] = useState<number>(10); // 억 단위 (1~50)
  const [cardFee, setCardFee] = useState<number>(2.5); // 2.0~3.5
  const [accountRatio, setAccountRatio] = useState<number>(0); // 0~100

  const getSubmitBackgroundColor = () => {
    if (isActiveSubmit) return '#1e5fd1';
    if (isHoveredSubmit) return '#2272EB';
    return '#3182f6';
  };

  // FAQ 아코디언 상태 관리
  const [faqStates, setFaqStates] = useState({
    faq1Open: false,
    faq2Open: false,
    faq3Open: false,
    faq4Open: false,
    faq5Open: false,
  });

  const [faqHovers, setFaqHovers] = useState({
    faq1Hover: false,
    faq2Hover: false,
    faq3Hover: false,
    faq4Hover: false,
    faq5Hover: false,
  });

  const toggleFaq = (faqKey: keyof typeof faqStates) => {
    setFaqStates((prev) => ({
      ...prev,
      [faqKey]: !prev[faqKey],
    }));
  };

  // Map quick page FAQ content to QnASection format (to keep content identical but UI unified)
  const quickFaqItems = [
    {
      question: "Q. 기존 계좌이체와 다른점이 뭔가요?",
      answer:
        "기존 계좌이체는 공인인증서나 앱설치를 해야해서 불편한 점이 많지만 퀵계좌이체는 휴대폰만 가지고 있으면 쉽게 결제할 수 있는 계좌이체 결제수단이에요.",
    },
    {
      question: "Q. 퀵계좌이체에는 최소 수수료가 있나요?",
      answer: "최소 수수료는 200원이에요.",
    },
    {
      question: "Q. 퀵계좌이체를 도입하고 싶어요. 어떻게 하면 되나요?",
      answer:
        "소프트먼트를 처음 사용하시는 가맹점이라면, ",
      linkText1: "이용 신청하기",
      linkSuffix1:
        "로 계약을 신청하면 바로 이용할 수 있어요. 소프트먼트를 기존에 사용하고 계신 가맹점이라면 계좌이체 결제수단을 추가로 연동해주시면 이용할 수 있어요.<br/>추가로 궁금하신 점이 있다면 ",
      linkText2: "퀵계좌이체 신청하기",
      linkSuffix2: "로 문의해주세요.",
    },
    {
      question: "Q. 퀵계좌이체 연동은 어떻게 하나요?",
      answer:
        "기존 계좌이체 연동과 같은 방식으로 연동하실 수 있어요.<br/>",
      linkText: "결제위젯으로 한 번에 연동하기 퀵계좌이체만 연동하기",
      linkSuffix: "",
    },
    {
      question:
        "Q. 광고메세지 수신 여부 변경, 등록된 계좌의 삭제, 회원 탈퇴는 어떻게 할 수 있나요?",
      answer:
        "아래 링크에서 마케팅 수신 동의를 변경하거나, 등록된 계좌를 삭제하고, 서비스에서 탈퇴할 수 있어요.<br/>",
      linkText: "퀵계좌이체 관리 페이지",
      linkSuffix:
        "<br/>퀵계좌이체는 토스앱을 운영하는 비바리퍼블리카에서 운영하고 있는 결제수단이에요. 1599-4905 혹은 토스 앱을 통해서 토스 고객센터로 문의해 주시면 도와드릴 수 있어요.",
    },
  ];

  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-start p-[0px] relative size-full">
      {/* Hero Section */}
      <div className="bg-[#191f28] relative shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center pb-0 pt-16 px-5 lg:px-[24px] [@media(min-width:1440px)]:px-[148.5px] relative w-full">
            <div className="box-border content-stretch flex flex-row h-[450px] lg:h-[680px] items-center  relative shrink-0 w-full max-w-[1143px]">
              {/* Hero Text */}
              <div className="box-border content-stretch flex flex-col gap-6 lg:gap-10  items-center lg:items-start justify-center p-0 relative shrink-0 w-full lg:max-w-[397px]">
                {/* Text Content */}
                <div className="box-border content-stretch flex flex-col gap-[16px] leading-[0] not-italic p-[0px] relative shrink-0 text-left text-nowrap">
                  {/* Title */}
                  <div className="box-border content-stretch flex flex-col text-center lg:text-left p-[0px] relative shrink-0">
                    <div className="font-medium relative shrink-0 text-[#d1d6db] text-base lg:text-lg">
                      <p className="block leading-[1.6] whitespace-pre-wrap break-words">
                        퀵계좌이체
                      </p>
                    </div>
                    <div className="font-bold relative shrink-0 text-[#ffffff] text-3xl lg:text-5xl">
                      <p className="block leading-[1.3] whitespace-pre-wrap break-words">
                        가장 쉽고 부담없는
                        <br aria-hidden="true" />
                        계좌이체 결제
                      </p>
                    </div>
                  </div>
                  {/* Description */}
                  <div className="font-medium relative shrink-0 text-[#ffffff] text-base text-center lg:text-left lg:text-lg tracking-[-0.2px]">
                    <p className="adjustLetterSpacing block leading-[1.6] whitespace-pre-wrap break-words">
                      고객과 사장님 모두 쓰기 쉬운 계좌이체
                      <br aria-hidden="true" />
                      결제로 낮은 수수료와 높은 매출을
                      <br aria-hidden="true" />
                      경험할 수 있어요.
                    </p>
                  </div>
                </div>
                {/* Buttons */}
                <div className="box-border content-stretch flex flex-row gap-4 lg:gap-6 items-start justify-start p-0 relative shrink-0">
                  <ExperienceButton onClick={() => console.log('도입 문의하기 클릭')}>
                    도입 문의하기
                  </ExperienceButton>
                  <BrochureRequestButton onClick={() => console.log('소개서 받기 클릭')}>
                    소개서 받기
                  </BrochureRequestButton>
                </div>
              </div>

              {/* Cards */}
              <div className="absolute bottom-[0px] box-border content-stretch hidden lg:flex flex-row gap-[24px] h-[460px] items-center justify-start left-[414px] pl-[129px] pr-0 py-0 right-[-112px]">
                {/* Card */}
                <div className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col gap-[8px] grow h-full items-center justify-center min-h-px min-w-px overflow-clip p-[0px] relative rounded-[20px] shrink-0">
                  <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#3182f6] text-[20px] text-left text-nowrap tracking-[-0.2px]">
                    <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
                      화면 디자인
                    </p>
                  </div>
                </div>

                {/* iPhone Mock */}
                <div className="hidden lg:contents absolute left-[0px] top-[114.34px]">
                  <div className="absolute bg-[#ffffff] h-[441.024px] left-[0px] rounded-[36.255px] top-[114.34px] w-[213.062px]">
                    <div
                      aria-hidden="true"
                      className="absolute border-[0.497px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[36.255px] shadow-[0px_49.665px_39.732px_0px_rgba(0,0,0,0.03),0px_18.129px_14.503px_0px_rgba(0,0,0,0.02),0px_8.801px_7.041px_0px_rgba(0,0,0,0.016),0px_4.314px_3.452px_0px_rgba(0,0,0,0.01),0px_1.706px_1.365px_0px_rgba(0,0,0,0.008)]"
                    />
                  </div>
                  <div className="absolute h-[423.146px] left-[8.94px] top-[123.28px] w-[195.184px]">
                    <img
                      className="block max-w-none size-full"
                      height="423.146"
                      src={imgReplaceImgFill}
                      width="195.184"
                    />
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

      {/* Body Section 1 */}
      <div className="bg-[#ffffff] relative shrink-0 w-full">
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-10 lg:gap-[56px] items-start justify-start px-5 lg:px-[188px] py-16 lg:py-[180px] relative w-full max-w-[1440px] mx-auto">
            <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#191f28] text-3xl lg:text-5xl text-left lg:text-center w-full">
              <p className="block leading-[1.3]">
                같은 계좌이체 결제여도
                <br aria-hidden="true" />더 높은 결제 성공률
              </p>
            </div>

            <div className="box-border content-stretch flex flex-col gap-[40px] items-start justify-start p-[0px] relative shrink-0 w-full">
              {/* Image placeholder */}
              <div className="bg-[#f2f4f6] h-60 lg:h-[460px] relative rounded-2xl shrink-0 w-full">
                <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
                  <div className="box-border content-stretch flex flex-col gap-6 lg:gap-12 h-full items-center justify-center px-6 lg:px-11 py-6 lg:py-9 relative w-full">
                    <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#3182f6] text-[20px] text-left text-nowrap tracking-[-0.2px]">
                      <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
                        화면 디자인
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="box-border content-stretch flex flex-col lg:flex-row gap-6 lg:gap-[24px] items-start justify-start p-0 relative shrink-0 w-full">
                {/* Stat 1 */}
                <div className="w-full lg:basis-0 box-border content-stretch flex flex-col gap-[4px] lg:grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left">
                  <div className="font-medium relative shrink-0 text-[#8b95a1] text-sm text-nowrap">
                    <p className="block leading-[1.6] whitespace-pre">
                      더 높은 이유
                    </p>
                  </div>
                  <div
                    className="font-bold min-w-full relative shrink-0 text-[#3182f6] text-[48px] lg:text-[56px] tracking-[-0.56px]"
                    style={{ width: "min-content" }}
                  >
                    <p className="block leading-[1.3]">
                      강력한 사용성
                      <br aria-hidden="true" />
                      쉬운 결제
                    </p>
                  </div>
                </div>

                {/* Stats 2 & 3 */}
                <div className="w-full lg:basis-0 box-border content-stretch flex flex-row gap-6 lg:gap-[24px] lg:grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                  <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left">
                    <div className="font-medium relative shrink-0 text-[#8b95a1] text-sm text-nowrap">
                      <p className="block leading-[1.6] whitespace-pre">
                        결제 성공률
                      </p>
                    </div>
                    <div className="font-bold relative shrink-0 text-[#3182f6] text-4xl lg:text-[56px] text-nowrap tracking-[-0.56px]">
                      <p className="adjustLetterSpacing block leading-[1.3] whitespace-pre">
                        87.2%
                      </p>
                    </div>
                    <div
                      className="font-medium min-w-full relative shrink-0 text-[#6b7684] text-base lg:text-[20px]"
                      style={{ width: "min-content" }}
                    >
                      <p className="block leading-[1.6]">
                        실시간 계좌이체보다 37.6% 더 높아요.
                      </p>
                    </div>
                  </div>

                  <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left">
                    <div className="font-medium relative shrink-0 text-[#8b95a1] text-sm text-nowrap">
                      <p className="block leading-[1.6] whitespace-pre">
                        재사용율
                      </p>
                    </div>
                    <div
                      className="font-bold min-w-full relative shrink-0 text-[#3182f6] text-4xl lg:text-[56px] tracking-[-0.56px]"
                      style={{ width: "min-content" }}
                    >
                      <p className="block leading-[1.3]">
                        84%
                      </p>
                    </div>
                    <div
                      className="font-medium min-w-full relative shrink-0 text-[#6b7684] text-base lg:text-[20px]"
                      style={{ width: "min-content" }}
                    >
                      <p className="block leading-[1.6]">
                        실시간 계좌이체보다 다시 사용할 확률이
                        높아요.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body Section 2 */}
      <div className="bg-[#ffffff] relative shrink-0 w-full">
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-10 lg:gap-[40px] items-start justify-start px-5 lg:px-[188px] py-16 lg:py-[180px] relative w-full max-w-[1440px] mx-auto">
            <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#191f28] text-3xl lg:text-5xl text-left lg:text-center w-full">
              <p className="block leading-[1.3]">
                매출이 오르는 이유,
                <br aria-hidden="true" />
                바로 모두에게 쉬운 사용성
              </p>
            </div>

            {/* Feature 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[24px] items-start lg:items-center w-full">
              <div className="aspect-[540/400] bg-[#f2f4f6] relative rounded-2xl w-full">
                <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
                  <div className="aspect-[540/400] flex flex-col gap-6 lg:gap-12 items-center justify-center px-6 lg:px-11 py-6 lg:py-9 relative size-full">
                    <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#3182f6] text-base lg:text-lg text-left tracking-[-0.2px]">
                      <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">화면 디자인</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col gap-4 lg:gap-6 items-start justify-start leading-[0] not-italic p-0 relative w-full text-left">
                <div className="font-bold relative shrink-0 text-[#191f28] text-2xl lg:text-3xl w-full">
                  <p className="block leading-[1.3]">
                    어디서나
                    <br aria-hidden="true" />
                    쾌적한 결제 경험
                  </p>
                </div>
                <div className="font-medium relative shrink-0 text-[#6b7684] text-base lg:text-lg w-full">
                  <p className="block leading-[1.6]">
                    소프트먼트의 탁월한 결제 경험은 그대로, UI는
                    가맹점의 브랜드이미지에 맞게 커스텀하여 제공할 수 있어요.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[24px] lg:items-center w-full">
              <div className="box-border content-stretch flex flex-col gap-4 lg:gap-6 items-start justify-start leading-[0] not-italic p-0 relative w-full text-left">
                <div className="font-bold relative shrink-0 text-[#191f28] text-2xl lg:text-3xl w-full">
                  <p className="block leading-[1.3]">비밀번호로 간편결제</p>
                </div>
                <div className="font-medium relative shrink-0 text-[#6b7684] text-base lg:text-lg w-full">
                  <p className="block leading-[1.6]">
                    한 번만 계좌를 등록하면 비밀번호로 쉽게 결제할 수 있어요.
                    <br aria-hidden="true" />
                    게다가 한 번 등록하면 소프트먼트의 어떤 가맹점이든 추가 등록없이 결제할 수 있어요.
                  </p>
                </div>
              </div>
              <div className="aspect-[540/400] bg-[#f2f4f6] relative rounded-2xl w-full">
                <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
                  <div className="aspect-[540/400] flex flex-col gap-6 lg:gap-12 items-center justify-center px-6 lg:px-11 py-6 lg:py-9 relative size-full">
                    <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#3182f6] text-base lg:text-lg text-left tracking-[-0.2px]">
                      <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">화면 디자인</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section 
      <div className="bg-[#ffffff] relative shrink-0 w-full">
        <div className="flex flex-col items-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-10 lg:gap-[40px] items-start lg:items-center justify-start px-5 lg:px-[188px] py-16 lg:py-[180px] relative w-full max-w-[1440px] mx-auto ">
            <div className="bg-[#f2f4f6] box-border content-stretch flex flex-col gap-6 lg:gap-[48px] h-64 lg:h-[724px] items-center justify-center overflow-clip px-6 lg:px-[44px] py-6 lg:py-[36px] relative rounded-2xl shrink-0 w-full lg:w-[512px]">
              <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#3182f6] text-[20px] text-left text-nowrap tracking-[-0.2px]">
                <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
                  화면 디자인
                </p>
              </div>
            </div>

            <div className="box-border content-stretch flex flex-col gap-6 lg:gap-[32px] items-center justify-center p-0 relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0 w-full">
                <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-xl lg:text-3xl text-left text-nowrap">
                  <p className="block leading-[1.6] whitespace-pre">
                    새로운 차원의 계좌이체 결제,
                  </p>
                </div>
                <div className="box-border content-stretch flex flex-row items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#4e5968] text-xl lg:text-3xl text-left text-nowrap">
                  <div className="font-semibold relative shrink-0">
                    <p className="block leading-[1.6] text-nowrap whitespace-pre">
                      퀵계좌이체
                    </p>
                  </div>
                  <div className="font-medium relative shrink-0">
                    <p className="block leading-[1.6] text-nowrap whitespace-pre">
                      를 지금 체험해 보세요
                    </p>
                  </div>
                </div>
              </div>
              <ExperienceButton onClick={() => console.log('데모 체험하기 클릭')}>
                데모 체험하기
              </ExperienceButton>
            </div>
          </div>
        </div>
      </div>*/}

      {/* Calculator Section */}
      <div className="bg-[rgba(2,32,71,0.05)] relative shrink-0 w-full">
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-8 lg:gap-[24px] items-start justify-start px-5 lg:px-[188px] py-16 lg:py-[180px] relative w-full max-w-[1440px] mx-auto">
            <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#191f28] text-3xl lg:text-5xl text-left lg:text-center w-full">
              <p className="block leading-[1.3]">
                매출은 늘리고
                <br aria-hidden="true" />
                수수료 부담은 줄이고
              </p>
            </div>

            <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-start justify-start p-0 relative shrink-0 w-full gap-6 lg:gap-10">
              {/* Left Controls */}
              <div className="basis-0 box-border content-stretch flex flex-col gap-10 lg:gap-[24px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full">
                  {/* Monthly Transaction */}
                <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-lg lg:text-2xl text-left text-nowrap">
                      <p className="block leading-[1.6] whitespace-pre">
                        월 거래액
                      </p>
                    </div>
                  {/* Slider */}
                  <div className="w-full">
                    <input
                      type="range"
                      min={1}
                      max={50}
                      step={1}
                      value={monthlyTxn}
                      onChange={(e) => setMonthlyTxn(parseInt(e.target.value, 10))}
                      className="w-full h-[6px] appearance-none bg-[#e9e9ee] rounded-[999px]"
                      style={{ background: `linear-gradient(to right, #3182f6 0%, #3182f6 ${(monthlyTxn-1)/(50-1)*100}%, #e9e9ee ${(monthlyTxn-1)/(50-1)*100}%)` }}
                    />
                  </div>
                  <div className="box-border content-stretch flex flex-row font-normal items-center justify-between leading-[0] not-italic p-0 relative shrink-0 text-[#4e5968] text-xs lg:text-[15px] text-left text-nowrap w-full">
                      <div className="relative shrink-0">
                        <p className="block leading-[1.6] text-nowrap whitespace-pre">
                          1억
                        </p>
                      </div>
                      <div className="relative shrink-0">
                        <p className="block leading-[1.6] text-nowrap whitespace-pre">
                          50억
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Fee */}
                <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-lg lg:text-2xl text-left text-nowrap">
                      <p className="block leading-[1.6] whitespace-pre">
                        카드결제 수수료
                      </p>
                    </div>
                  <div className="w-full">
                    <input
                      type="range"
                      min={2.0}
                      max={3.5}
                      step={0.1}
                      value={cardFee}
                      onChange={(e) => setCardFee(parseFloat(e.target.value))}
                      className="w-full h-[6px] appearance-none bg-[#e9e9ee] rounded-[999px]"
                      style={{ background: `linear-gradient(to right, #3182f6 0%, #3182f6 ${(cardFee-2.0)/(3.5-2.0)*100}%, #e9e9ee ${(cardFee-2.0)/(3.5-2.0)*100}%)` }}
                    />
                  </div>
                  <div className="box-border content-stretch flex flex-row font-normal items-center justify-between leading-[0] not-italic p-0 relative shrink-0 text-[#4e5968] text-xs lg:text-[15px] text-left text-nowrap w-full">
                      <div className="relative shrink-0">
                        <p className="block leading-[1.6] text-nowrap whitespace-pre">
                          2%
                        </p>
                      </div>
                      <div className="relative shrink-0">
                        <p className="block leading-[1.6] text-nowrap whitespace-pre">
                          3.5%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Account Payment Ratio */}
                <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-lg lg:text-2xl text-left text-nowrap">
                      <p className="block leading-[1.6] whitespace-pre">
                        계좌결제 비중
                      </p>
                    </div>
                  <div className="w-full">
                    <input
                      type="range"
                      min={0}
                      max={100}
                      step={1}
                      value={accountRatio}
                      onChange={(e) => setAccountRatio(parseInt(e.target.value, 10))}
                      className="w-full h-[6px] appearance-none bg-[#e9e9ee] rounded-[999px]"
                      style={{ background: `linear-gradient(to right, #3182f6 0%, #3182f6 ${accountRatio}%, #e9e9ee ${accountRatio}%)` }}
                    />
                  </div>
                  <div className="box-border content-stretch flex flex-row font-normal items-center justify-between leading-[0] not-italic p-0 relative shrink-0 text-[#4e5968] text-xs lg:text-[15px] text-left text-nowrap w-full">
                      <div className="relative shrink-0">
                        <p className="block leading-[1.6] text-nowrap whitespace-pre">
                          0%
                        </p>
                      </div>
                      <div className="relative shrink-0">
                        <p className="block leading-[1.6] text-nowrap whitespace-pre">
                          100%
                        </p>
                      </div>
                    </div>
                  <div className="font-normal leading-[0] relative shrink-0 text-[#8b95a1] text-[12px] text-left w-full">
                  <p className="block leading-[1.6]">
                  ✱ 수수료율은 계약에 따라 다를 수 있어요. 위 계산기는 도입 시 효익을 보증하지 않아요.
                  </p>
              </div>
                </div>
              </div>

            

              <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0">
                <div className="flex flex-row items-center relative size-full">
                  <div className="box-border content-stretch flex flex-row items-center justify-start lg:pl-[60px] pl-0 pr-0 py-0 relative size-full w-full">
                    <div className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-[260px] relative rounded-2xl shrink-0 w-full py-4 lg:py-0">
                      <div className="min-w-inherit overflow-clip relative size-full">
                        <div className="box-border content-stretch flex flex-col gap-4 lg:gap-[24px] items-start justify-start min-w-inherit p-6 lg:p-10 relative size-full">
                          <div className="box-border content-stretch flex flex-col font-bold gap-[4px] items-start justify-start leading-[0] not-italic p-[0px] relative shrink-0 text-left text-nowrap">
                            <div className="relative shrink-0 text-[#4e5968] text-lg lg:text-2xl tracking-[-0.24px]">
                              <p className="adjustLetterSpacing block leading-[1.6] text-nowrap whitespace-pre">
                                월 비용 절감 거래액
                              </p>
                            </div>
                            <div className="relative shrink-0 text-[#3182f6] text-3xl lg:text-5xl tracking-[-0.48px]">
                              <p className="adjustLetterSpacing block leading-[1.3] text-nowrap whitespace-pre">
                                150만원
                              </p>
                            </div>
                          </div>
                          <div className="box-border content-stretch flex flex-col font-bold gap-[4px] items-start justify-start leading-[0] not-italic p-[0px] relative shrink-0 text-left text-nowrap w-full">
                            <div className="relative shrink-0 text-[#4e5968] text-lg lg:text-2xl tracking-[-0.24px]">
                              <p className="adjustLetterSpacing block leading-[1.6] text-nowrap whitespace-pre">
                                연 비용 절감 거래액
                              </p>
                            </div>
                            <div className="relative shrink-0 text-[#3182f6] text-3xl lg:text-5xl tracking-[-0.48px]">
                              <p className="adjustLetterSpacing block leading-[1.3] text-nowrap whitespace-pre">
                                1,800만원
                              </p>
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
        </div>
      </div>

      {/* Security Features */}
      <div className="bg-[#191f28] relative shrink-0 w-full">
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-12 lg:gap-[120px] items-start justify-start px-5 lg:px-[188px] py-16 lg:py-[180px] relative w-full max-w-[1440px] mx-auto">
            <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-3xl lg:text-5xl text-left lg:text-center w-full">
              <p className="block leading-[1.3]">
                운영도 쉽고 안전하게
              </p>
            </div>

            <div className="box-border flex flex-col gap-[24px] items-start justify-start p-[0px] relative shrink-0 w-full">
              {/* Security Feature */}
              <div className="bg-[#e8f3ff] h-[280px] lg:h-[352px] relative rounded-2xl shrink-0 w-full overflow-hidden">
                <div className="flex flex-row items-center relative w-full">
                  <div className="box-border flex flex-col lg:flex-row h-auto lg:h-[352px] items-start lg:items-center justify-start p-6 lg:p-10 relative w-full">
                    <div
                      className="hidden lg:block absolute bg-center bg-no-repeat bg-contain blur-[50px] filter opacity-70 right-[-40.22px] size-[400px] top-[128px]"
                      style={{ backgroundImage: `url('${imgImage17}')` }}
                    />
                    <div
                      className="hidden lg:block absolute bg-center bg-no-repeat bg-contain opacity-100 right-[20px] size-[280px] top-[36px]"
                      style={{ backgroundImage: `url('${imgImage17}')` }}
                    />
                    <div className="box-border flex flex-col gap-4 lg:gap-6 items-start justify-center leading-[0] not-italic relative z-10 shrink-0 text-left w-full">
                      <div className="font-bold relative shrink-0 text-xl lg:text-2xl text-[rgba(2,9,19,0.91)]">
                        <p className="block leading-[1.3] whitespace-pre-wrap break-words">
                          빈틈 없는 보안 시스템으로 고객 피해 방지
                        </p>
                      </div>
                      <div className="font-medium relative shrink-0 text-[rgba(3,18,40,0.7)] text-base lg:text-lg">
                        <p className="block leading-[1.6] whitespace-pre-wrap break-words">
                          자체 부정 거래 탐지시스템 기술(FDS)로 해외 결제 발생 등<br className="hidden lg:block"/> 비정상적인 거래를 정확하게 탐지하고 예방해요.<br className="hidden lg:block"/> 고객과의 분쟁과 피해를 최소화할 수 있어요.
                        </p>
                      </div>
                      {/* Mobile icon inside flow */}
                      <div className="lg:hidden w-full flex justify-center">
                        <div
                          className="absolute  bg-cover bg-no-repeat bottom-[-250px] translate-x-[30%] z-[-1] size-[300px]"
                          style={{ backgroundImage: `url('${imgImage17}')` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start justify-start p-0 relative shrink-0 w-full">
                {/* Receipt Card */}
                <div className="bg-[#ffffff] relative rounded-2xl shrink-0 w-full h-[280px] lg:h-[380px]">
                  <div className="overflow-clip relative size-full">
                    <div className="box-border content-stretch flex flex-col h-full lg:h-[412px] items-start justify-start p-6 lg:p-10 pb-28 lg:pb-10 relative w-full">
                      <div
                        className="hidden lg:block absolute bg-center bg-cover bg-no-repeat blur-[14px] bottom-[-94.11px] filter opacity-20 size-[300px] translate-x-[-50%]"
                        style={{ left: "calc(50% - 0.001px)", backgroundImage: `url('${imgImage20}')` }}
                      />
                      <div
                        className="absolute bg-center bg-cover bg-no-repeat bottom-6 lg:bottom-[80px] translate-x-[-50%] left-1/2 size-[120px] lg:size-[150px]"
                        style={{ backgroundImage: `url('${imgImage20}')` }}
                      />
                      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full">
                        <div className="font-bold leading-[1.3] relative shrink-0 text-xl lg:text-2xl text-[rgba(2,9,19,0.91)]">
                          <p className="block mb-[0px]">
                            현금영수증
                          </p>
                          <p className="block">자동 발급</p>
                        </div>
                        <div className="font-medium relative shrink-0 text-[#4e5968] text-base lg:text-lg">
                          <p className="block leading-[1.6] whitespace-pre-wrap break-words">
                            등록된 휴대폰 번호로 현금영수증을
                            자동 발급해요.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Escrow Card */}
                 <div className="bg-[#ffffff] relative rounded-2xl shrink-0 w-full h-[280px] lg:h-[380px]">
                  <div className="overflow-clip relative size-full">
                     <div className="box-border content-stretch flex flex-col h-full lg:h-[412px] items-start justify-start p-6 lg:p-10 pb-28 lg:pb-10 relative w-full">
                       <div
                         className="hidden lg:block absolute bg-center bg-cover bg-no-repeat blur-[14px] bottom-[-88px] filter opacity-20 size-[300px] translate-x-[-50%]"
                         style={{ left: "calc(50% - 0.001px)", backgroundImage: `url('${imgImage21}')` }}
                      />
                      <div
                         className="absolute bg-center bg-cover bg-no-repeat bottom-6 lg:bottom-[80px] translate-x-[-50%] left-1/2 size-[120px] lg:size-[150px]"
                         style={{ backgroundImage: `url('${imgImage22}')` }}
                       />
                       <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full">
                         <div className="font-bold leading-[1.3] relative shrink-0 text-xl lg:text-2xl text-[rgba(2,9,19,0.91)]">
                          <p className="block mb-[0px]">
                            에스크로
                          </p>
                          <p className="block">서비스 지원</p>
                        </div>
                         <div className="font-medium relative shrink-0 text-[#4e5968] text-base lg:text-lg">
                           <p className="block leading-[1.6] whitespace-pre-wrap break-words">
                            고객에게 안전한 결제 경험을 줄 수
                            있어요.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Realtime Card */}
                 <div className="bg-[#ffffff] relative rounded-2xl shrink-0 w-full h-[280px] lg:h-[380px]">
                  <div className="overflow-clip relative size-full">
                     <div className="box-border content-stretch flex flex-col h-full lg:h-[412px] items-start justify-start p-6 lg:p-10 pb-28 lg:pb-10 relative w-full">
                       <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full">
                         <div className="font-bold leading-[1.3] relative shrink-0 text-xl lg:text-2xl text-[rgba(2,9,19,0.91)]">
                          <p className="block mb-[0px]">
                            실시간 결제
                          </p>
                          <p className="block">환불처리</p>
                        </div>
                         <div className="font-medium relative shrink-0 text-[#4e5968] text-base lg:text-lg">
                           <p className="block leading-[1.6] whitespace-pre-wrap break-words">
                            실시간 결제/환불처리로 고객 문의가
                            적어요.
                          </p>
                        </div>
                      </div>
                      <div
                         className="hidden lg:block absolute bg-center bg-cover bg-no-repeat blur-[14px] bottom-[-88px] filter opacity-20 size-[300px] translate-x-[-50%]"
                         style={{ left: "calc(50% - 0.001px)", backgroundImage: `url('${imgImage23}')` }}
                      />
                      <div
                         className="absolute bg-center bg-cover bg-no-repeat bottom-6 lg:bottom-[80px] translate-x-[-50%] left-1/2 size-[120px] lg:size-[150px]"
                         style={{ backgroundImage: `url('${imgImage23}')` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-[rgba(2,32,71,0.05)] relative shrink-0 w-full">
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[24px] items-start justify-start px-5 lg:px-[188px] py-16 lg:py-[180px] relative w-full max-w-[1440px] mx-auto">
            {/* Left Info */}
            <div className="basis-0 box-border content-stretch flex flex-col gap-6 lg:gap-[24px] items-start justify-start p-0 relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col gap-4 lg:gap-[16px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full">
                <div className="font-medium relative shrink-0 text-[#4e5968] text-lg lg:text-2xl text-nowrap">
                  <p className="block leading-[1.6] whitespace-pre">
                    도입 문의
                  </p>
                </div>
                <div className="font-bold relative shrink-0 text-[#191f28] text-3xl lg:text-5xl">
                  <p className="leading-[1.3] whitespace-pre-wrap break-words">
                    퀵계좌이체 지금
                    <br aria-hidden="true" />
                    신청하실 수 있어요
                  </p>
                </div>
              </div>

              <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-start p-[0px] relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-row gap-[4px] items-center justify-start p-[0px] relative shrink-0 w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d={svgPaths.p3a153700}
                        stroke="var(--stroke-0, #3182F6)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </div>
                  <div className="basis-0 font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333d4b] text-base lg:text-[17px] text-left">
                    <p className="block leading-[1.6]">
                      사업 유형에 맞는 결제서비스를 제안해
                      드려요.
                    </p>
                  </div>
                </div>

                <div className="box-border content-stretch flex flex-row gap-[4px] items-center justify-start p-[0px] relative shrink-0 w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d={svgPaths.p3a153700}
                        stroke="var(--stroke-0, #3182F6)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </div>
                  <div className="basis-0 font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333d4b] text-base lg:text-[17px] text-left">
                    <p className="leading-[1.6]">
                      <span>평균 2일 내, </span>
                      <span className="text-[#333d4b]">
                        1833-8540
                      </span>
                      <span> 번호로 연락드려요.</span>
                    </p>
                  </div>
                </div>

                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-start relative size-full">
                    <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
                      <div className="basis-0 font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#6b7684] text-sm lg:text-[14px] text-left">
                        <p className="block leading-[1.6]">
                          필요시 세일즈 팀에서 바로 연락드려요.
                          (사업 제휴, 솔루션 문의 등)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="box-border content-stretch flex flex-row gap-[4px] items-center justify-start p-[0px] relative shrink-0 w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d={svgPaths.p3a153700}
                        stroke="var(--stroke-0, #3182F6)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </div>
                  <div className="basis-0 font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333d4b] text-base lg:text-[17px] text-left">
                    <p className="leading-[1.6]">
                      <span>바로 상담을 원하시면 </span>
                      <span className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] text-[#3182f6]">
                        1:1 채팅문의
                      </span>
                      를 이용해주세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="basis-0 box-border content-stretch flex flex-col gap-4 lg:gap-[16px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col gap-[4px] items-start justify-start p-[0px] relative shrink-0 w-full">
                {/* Form Fields */}
                <div className="box-border content-stretch flex flex-col items-start justify-center p-[0px] relative shrink-0 w-full">
                  {/* Row 1 */}
                  <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[24px] items-start justify-start p-0 relative shrink-0 w-full">
                    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-[0px] relative shrink-0">
                      <div className="box-border content-stretch flex flex-row items-center justify-center px-[0px] py-[6px] relative shrink-0">
                        <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[15px] text-left text-nowrap">
                          <p className="block leading-[1.6] whitespace-pre">
                            회사 이름
                          </p>
                        </div>
                      </div>
                      <div
                        className={`bg-[#ffffff] h-[48px] relative rounded-[12px] shrink-0 w-full border-[2px] ${
                          companyNameFocus
                            ? "border-[#3182f6]"
                            : companyNameHover
                              ? "border-[#3182f6b2]"
                              : "border-[#e5e8eb]"
                        }`}
                        onMouseEnter={() =>
                          setCompanyNameHover(true)
                        }
                        onMouseLeave={() =>
                          setCompanyNameHover(false)
                        }
                      >
                        <div className="flex flex-row items-center overflow-clip relative size-full">
                          <div className="box-border content-stretch flex flex-row h-[48px] items-center justify-start px-[14px] py-[0px] w-full">
                            <input
                              type="text"
                              className="w-full bg-transparent border-none outline-none text-[15px] text-[#333d4b] placeholder:text-[rgba(3,24,50,0.46)] focus:placeholder-transparent"
                              placeholder=""
                              onFocus={() =>
                                setCompanyNameFocus(true)
                              }
                              onBlur={() =>
                                setCompanyNameFocus(false)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-[0px] relative shrink-0">
                      <div className="box-border content-stretch flex flex-row items-center justify-center px-[0px] py-[6px] relative shrink-0">
                        <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[15px] text-left text-nowrap">
                          <p className="block leading-[1.6] whitespace-pre">
                            사업자등록번호
                          </p>
                        </div>
                      </div>
                      <div
                        className={`bg-[#ffffff] h-[48px] relative rounded-[12px] shrink-0 w-full border-[2px] ${
                          businessNumFocus
                            ? "border-[#3182f6]"
                            : businessNumHover
                              ? "border-[#3182f6b2]"
                              : "border-[#e5e8eb]"
                        }`}
                        onMouseEnter={() =>
                          setBusinessNumHover(true)
                        }
                        onMouseLeave={() =>
                          setBusinessNumHover(false)
                        }
                      >
                        <div className="flex flex-row items-center overflow-clip relative size-full">
                          <div className="box-border content-stretch flex flex-row h-[48px] items-center justify-start px-[14px] py-[0px] w-full">
                            <input
                              type="text"
                              className="w-full bg-transparent border-none outline-none text-[15px] text-[#333d4b] placeholder:text-[rgba(3,24,50,0.46)] focus:placeholder-transparent"
                              placeholder=""
                              onFocus={() =>
                                setBusinessNumFocus(true)
                              }
                              onBlur={() =>
                                setBusinessNumFocus(false)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[24px] items-start justify-start p-[0px] relative shrink-0 w-full">
                     <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-[0px] relative shrink-0">
                       <div className="box-border content-stretch flex flex-row items-center justify-center px-[0px] py-[6px] relative shrink-0">
                         <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[15px] text-left text-nowrap">
                           <p className="block leading-[1.6] whitespace-pre">
                             이메일
                           </p>
                         </div>
                       </div>
                       <div
                         className={`bg-[#ffffff] h-[48px] relative rounded-[12px] shrink-0 w-full border-[2px] ${
                           emailFocus
                             ? "border-[#3182f6]"
                             : emailHover
                               ? "border-[#3182f6b2]"
                               : "border-[#e5e8eb]"
                         }`}
                         onMouseEnter={() => setEmailHover(true)}
                         onMouseLeave={() =>
                           setEmailHover(false)
                         }
                       >
                         <div className="flex flex-row items-center overflow-clip relative size-full">
                           <div className="box-border content-stretch flex flex-row h-[48px] items-center justify-start px-[14px] py-[0px] w-full">
                             <input
                               type="email"
                               className="w-full bg-transparent border-none outline-none text-[15px] text-[#333d4b] placeholder:text-[rgba(3,24,50,0.46)] focus:placeholder-transparent"
                               placeholder=""
                               onFocus={() =>
                                 setEmailFocus(true)
                               }
                               onBlur={() =>
                                 setEmailFocus(false)
                               }
                             />
                           </div>
                         </div>
                       </div>
                     </div>

                     <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-[0px] relative shrink-0">
                       <div className="box-border content-stretch flex flex-row items-center justify-center px-[0px] py-[6px] relative shrink-0">
                         <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[15px] text-left text-nowrap">
                           <p className="block leading-[1.6] whitespace-pre">
                             휴대전화 번호
                           </p>
                         </div>
                       </div>
                       <div
                         className={`bg-[#ffffff] h-[48px] relative rounded-[12px] shrink-0 w-full border-[2px] ${
                           phoneFocus
                             ? "border-[#3182f6]"
                             : phoneHover
                               ? "border-[#3182f6b2]"
                               : "border-[#e5e8eb]"
                         }`}
                         onMouseEnter={() => setPhoneHover(true)}
                         onMouseLeave={() =>
                           setPhoneHover(false)
                         }
                       >
                         <div className="flex flex-row items-center overflow-clip relative size-full">
                           <div className="box-border content-stretch flex flex-row h-[48px] items-center justify-start px-[14px] py-[0px] w-full">
                             <input
                               type="tel"
                               className="w-full bg-transparent border-none outline-none text-[15px] text-[#333d4b] placeholder:text-[rgba(3,24,50,0.46)] focus:placeholder-transparent"
                               placeholder=""
                               onFocus={() =>
                                 setPhoneFocus(true)
                               }
                               onBlur={() =>
                                 setPhoneFocus(false)
                               }
                             />
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>

                  {/* Row 3 */}
                  <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[24px] items-start justify-start p-[0px] relative shrink-0 w-full">
                     <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-[0px] relative shrink-0">
                       <div className="box-border content-stretch flex flex-row items-center justify-center px-[0px] py-[6px] relative shrink-0">
                         <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[15px] text-left text-nowrap">
                           <p className="block leading-[1.6] whitespace-pre">
                             온라인 월 거래액
                           </p>
                         </div>
                       </div>
                       <div
                         className={`bg-[#ffffff] h-[48px] relative rounded-[12px] shrink-0 w-full border-[2px] ${
                           transactionFocus
                             ? "border-[#3182f6]"
                             : transactionHover
                               ? "border-[#3182f6b2]"
                               : "border-[#e5e8eb]"
                         }`}
                         onMouseEnter={() =>
                           setTransactionHover(true)
                         }
                         onMouseLeave={() =>
                           setTransactionHover(false)
                         }
                       >
                         <div className="flex flex-row items-center overflow-clip relative size-full">
                           <div className="box-border content-stretch flex flex-row h-[48px] items-center justify-start px-[14px] py-[0px] relative w-full">
                             <input
                               type="text"
                               className="w-full bg-transparent border-none outline-none text-[15px] text-[#333d4b] placeholder:text-[rgba(3,24,50,0.46)] focus:placeholder-transparent"
                               placeholder="선택하세요"
                               onFocus={() =>
                                 setTransactionFocus(true)
                               }
                               onBlur={() =>
                                 setTransactionFocus(false)
                               }
                             />
                           </div>
                         </div>
                       </div>
                     </div>

                     <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-[0px] relative shrink-0">
                       <div className="box-border content-stretch flex flex-row items-center justify-center px-[0px] py-[6px] relative shrink-0">
                         <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[15px] text-left text-nowrap">
                           <p className="block leading-[1.6] whitespace-pre">
                             홈페이지 주소
                           </p>
                         </div>
                       </div>
                       <div
                         className={`bg-[#ffffff] h-[48px] relative rounded-[12px] shrink-0 w-full border-[2px] ${
                           websiteFocus
                             ? "border-[#3182f6]"
                             : websiteHover
                               ? "border-[#3182f6b2]"
                               : "border-[#e5e8eb]"
                         }`}
                         onMouseEnter={() =>
                           setWebsiteHover(true)
                         }
                         onMouseLeave={() =>
                           setWebsiteHover(false)
                         }
                       >
                         <div className="flex flex-row items-center overflow-clip relative size-full">
                           <div className="box-border content-stretch flex flex-row h-[48px] items-center justify-start px-[14px] py-[0px] relative w-full">
                             <input
                               type="url"
                               className="w-full bg-transparent border-none outline-none text-[15px] text-[#333d4b] placeholder:text-[rgba(3,24,50,0.46)] truncate focus:placeholder-transparent"
                               placeholder="준비중이라면 '없음'을 입력해주세요."
                               onFocus={() =>
                                 setWebsiteFocus(true)
                               }
                               onBlur={() =>
                                 setWebsiteFocus(false)
                               }
                             />
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                </div>

                {/* Message Field */}
                <div className="box-border content-stretch flex flex-col h-[120px] items-start justify-start p-[0px] relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row items-center justify-center px-[0px] py-[6px] relative shrink-0">
                    <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[15px] text-left text-nowrap">
                      <p className="block leading-[1.6] whitespace-pre">
                        문의 내용
                      </p>
                    </div>
                  </div>
                  <div
                    className={`basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-[12px] shrink-0 w-full border-[2px] ${
                      messageFocus
                        ? "border-[#3182f6]"
                        : messageHover
                          ? "border-[#3182f6b2]"
                          : "border-[#e5e8eb]"
                    }`}
                    onMouseEnter={() => setMessageHover(true)}
                    onMouseLeave={() => setMessageHover(false)}
                  >
                    <div className="overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-row items-start justify-start px-[12px] py-[9px] relative size-full">
                        <textarea
                          className="w-full h-full bg-transparent border-none outline-none resize-none text-[15px] text-[#333d4b] placeholder:text-[rgba(3,24,50,0.46)] break-keep focus:placeholder-transparent overflow-hidden"
                          placeholder="사업에 대해 자세히 설명해주시면 더 구체적인 상담과 제안을 받을 수 있어요."
                          onFocus={() => setMessageFocus(true)}
                          onBlur={() => setMessageFocus(false)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agreement & Submit */}
              <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-start p-[0px] relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-start p-[0px] relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row gap-[8px] items-center justify-start p-[0px] relative shrink-0 w-full">
                    <Checkbox
                      checked={agreeRequired}
                      onToggle={() => setAgreeRequired((v) => !v)}
                      className="size-[20px]"
                      size={20}
                      activeBackgroundColor="#3182f6"
                      activeBorderColor="#3182f6"
                      hoverBackgroundColor="#2272EB1F"
                      hoverBorderColor="#3182f6"
                      defaultBackgroundColor="#ffffff"
                      defaultBorderColor="#d1d6db"
                    />
                    <div className="basis-0 font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4e5968] text-[15px] text-left">
                      <p className="leading-[1.6]">
                        <span>[필수] </span>
                        <span className="text-[#3182f6]">
                          개인(신용)정보 수집·이용
                        </span>
                        에 동의합니다.
                      </p>
                    </div>
                  </div>

                  <div className="box-border content-stretch flex flex-row gap-[8px] items-start justify-start p-[0px] relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-row h-[24px] items-center justify-start p-[0px] relative shrink-0">
                      <Checkbox
                        checked={agreeMarketing}
                        onToggle={() => setAgreeMarketing((v) => !v)}
                        className="size-[20px]"
                        size={20}
                        activeBackgroundColor="#3182f6"
                        activeBorderColor="#3182f6"
                        hoverBackgroundColor="#2272EB1F"
                        hoverBorderColor="#3182f6"
                        defaultBackgroundColor="#ffffff"
                        defaultBorderColor="#d1d6db"
                      />
                    </div>
                    <div className="font-normal leading-[0] not-italic relative self-stretch shrink-0 text-[#4e5968] text-[15px] text-left w-[284px]">
                      <p className="leading-[1.6]">
                        <span>[선택] </span>
                        <span className="text-[#3182f6]">
                          서비스 제안 및 상담 목적의 정보 수신
                        </span>
                        에 동의합니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-[12px] shrink-0 w-full">
                  <button
                    type="button"
                    onMouseDown={() => setIsActiveSubmit(true)}
                    onMouseUp={() => setIsActiveSubmit(false)}
                    onMouseEnter={() => setIsHoveredSubmit(true)}
                    onMouseLeave={() => {
                      setIsHoveredSubmit(false);
                      setIsActiveSubmit(false);
                    }}
                    onClick={() => console.log('퀵계좌이체 신청하기 클릭')}
                    className={`relative rounded-[12px] shrink-0 w-full transition-all duration-200 ease-in-out cursor-pointer`}
                    style={{ backgroundColor: getSubmitBackgroundColor() }}
                  >
                    <div className="flex flex-row items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-row items-center justify-center px-[14px] py-[11px] relative w-full">
                        <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left text-nowrap">
                          <p className="block leading-[1.5] whitespace-pre">
                            퀵계좌이체 신청하기
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section (Reused component) */}
      <div className="bg-[#ffffff] relative shrink-0 w-full">
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex items-center justify-center px-5 lg:px-[188px] py-16 lg:py-[180px]relative w-full  mx-auto">
            <QnASection
              openQnAIndexes={Object.entries(faqStates)
                .filter(([k, v]) => v)
                .map(([k]) => parseInt(k.replace('faq', '').replace('Open', ''), 10) - 1)}
              toggleQnA={(index) => {
                const key = (`faq${index + 1}Open`) as keyof typeof faqStates;
                toggleFaq(key);
              }}
              items={quickFaqItems}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}