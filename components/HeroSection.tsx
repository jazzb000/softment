import { ExperienceButton } from "./ExperienceButton";
import { BrochureRequestButton } from "./BrochureRequestButton";
import { useEffect, useState } from "react";

export function HeroSection() {
  const phrases = ["클릭 몇 번으로", "내 사업에 맞는", "누구나 쉽게", "코드 없이"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let canceled = false;
    let t1: ReturnType<typeof setTimeout> | undefined;
    let t2: ReturnType<typeof setTimeout> | undefined;

    const loop = () => {
      t1 = setTimeout(() => {
        if (canceled) return;
        setIsFading(true);
        t2 = setTimeout(() => {
          if (canceled) return;
          setPhraseIndex((i) => (i + 1) % phrases.length);
          setIsFading(false);
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
  return (
    <div className="bg-[#191f28] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="max-w-[1800px] w-full mx-auto relative">
          <div className="box-border content-stretch flex items-center justify-between pt-[30px] md:pt-[60px] xl:px-[148px] sm:px-[24px] px-[12px] relative w-full">
            <div className="box-border content-stretch flex
            md:h-[780px] h-[380px] items-center justify-between p-0 relative shrink-0 w-full md:w-[1144px]">
              {/* Hero Text */}
              <div className="box-border content-stretch flex flex-col lg:gap-[60px] gap-[30px] h-[380px] md:h-[400px] items-center md:items-start justify-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col gap-[16px] items-center md:items-start justify-center md:justify-start leading-[0] not-italic p-0 relative shrink-0 text-nowrap">
                  <div className="font-medium relative shrink-0 text-[#d1d6db] text-[20px]">
                    <p className="leading-[1.6] text-nowrap whitespace-pre hidden md:block">결제위젯</p>
                  </div>
                  <div className="font-bold leading-[1.3] relative shrink-0 text-[#ffffff] md:text-[48px] text-[28px] text-center md:text-left whitespace-pre">
                    <p className="block mb-0">
                      <span
                        style={{ opacity: isFading ? 0 : 1, transition: "opacity 400ms ease" }}
                      >
                        {phrases[phraseIndex]}
                      </span>
                    </p>
                    <p className="block">
                      최적의 결제 경험을
                      <br aria-hidden="true" />
                      만들 수 있어요
                    </p>
                  </div>
                </div>
                <div className="box-border content-stretch flex gap-[20px] items-start justify-start p-0 relative shrink-0">
                  <ExperienceButton className="hidden md:block">체험하기</ExperienceButton>
                  <BrochureRequestButton>소개서 받기</BrochureRequestButton>
                </div>
              </div>
              {/* Cards */}
              <div className="absolute box-border content-stretch flex gap-[24px] h-[780px] items-center justify-start left-[497px] p-0 top-[180px] w-[879px]">
                <div className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col grow h-full items-center justify-center min-h-px min-w-px overflow-clip p-0 relative rounded-[20px] shrink-0">
                  <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#3182f6] text-[20px] text-nowrap tracking-[-0.2px]">
                    <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">화면 디자인</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}