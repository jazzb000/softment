import { slideTexts } from "../imports/data";
const imgImage20 = "/images/imgImage20.png";
const imgImage21 = "/images/imgImage21.png";
const imgImage23 = "/images/imgImage23.png";

interface SlideSectionProps {
  currentSlideIndex: number;
}

export function SlideSection({ currentSlideIndex }: SlideSectionProps) {
  return (
    <div className="box-border content-stretch flex flex-col lg:gap-[24px] gap-[24px] items-start justify-start p-0 relative w-full">
      {/* 인라인 슬라이드 */}
      <div className="bg-[#ffffff] box-border content-stretch flex flex-col lg:h-[350px] h-[350px] items-start justify-start lg:max-h-[350px] max-h-[350px] overflow-hidden p-0 relative rounded-[20px] shrink-0 w-full">
        {/* Slides Container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ 
            transform: `translateX(-${currentSlideIndex * 100}%)`,
            width: "100%"
          }}
        >
          {/* Slide 1 */}
          <div className="flex-shrink-0 w-full h-full flex items-center justify-center">
            <div className="bg-[#ffffff] box-border content-stretch flex flex-col h-full items-start justify-start overflow-clip lg:p-[40px] p-[40px] relative rounded-[20px] shrink-0 w-full">
              <div className="absolute lg:bottom-[-80px] bottom-[-80px] contents lg:right-[-61px] right-[-61px]">
                <div
                  className="absolute bg-center bg-cover bg-no-repeat blur-lg lg:bottom-[-80px] bottom-[-80px] filter opacity-50 lg:right-[-21px] right-[-21px] lg:size-60 size-60"
                  style={{ backgroundImage: `url('${imgImage20}')` }}
                />
                <div
                  className="absolute bg-center bg-cover bg-no-repeat lg:bottom-[-40px] bottom-[-40px] lg:right-[-61px] right-[-61px] lg:size-60 size-60"
                  style={{ backgroundImage: `url('${imgImage20}')` }}
                />
              </div>
              <div className="box-border content-stretch flex flex-col lg:gap-2 gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 w-full z-10">
                <div className="font-bold leading-[1.3] relative shrink-0 lg:text-[32px] text-[32px] text-[rgba(2,9,19,0.91)] lg:text-nowrap lg:whitespace-pre">
                  <p className="block mb-0">현금영수증</p>
                  <p className="block">자동 발급</p>
                </div>
                <div
                  className="font-semibold min-w-full relative shrink-0 text-[#4e5968] lg:text-[20px] text-[20px] tracking-[-0.2px]"
                  style={{ width: "min-content" }}
                >
                  <p className="block leading-[1.6]">등록된 휴대폰 번호로 현금영수증을 자동 발급해요.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="flex-shrink-0 w-full h-full flex items-center justify-center">
            <div className="bg-[#ffffff] box-border content-stretch flex flex-col h-full items-start justify-start overflow-clip lg:p-[40px] p-[40px] relative rounded-[20px] shrink-0 w-full">
              <div className="absolute lg:bottom-[-80px] bottom-[-80px] contents lg:right-[-61.5px] right-[-61.5px]">
                <div
                  className="absolute bg-center bg-cover bg-no-repeat blur-lg lg:bottom-[-80px] bottom-[-80px] filter opacity-50 lg:right-[-21.5px] right-[-21.5px] lg:size-60 size-60"
                  style={{ backgroundImage: `url('${imgImage21}')` }}
                />
                <div
                  className="absolute bg-center bg-cover bg-no-repeat lg:bottom-[-40px] bottom-[-40px] lg:right-[-61.5px] right-[-61.5px] lg:size-60 size-60"
                  style={{ backgroundImage: `url('${imgImage21}')` }}
                />
              </div>
              <div className="box-border content-stretch flex flex-col lg:gap-2 gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 w-full z-10">
                <div className="font-bold leading-[1.3] relative shrink-0 lg:text-[32px] text-[32px] text-[rgba(2,9,19,0.91)] lg:text-nowrap lg:whitespace-pre">
                  <p className="block mb-0">에스크로</p>
                  <p className="block">서비스 지원</p>
                </div>
                <div
                  className="font-semibold min-w-full relative shrink-0 text-[#4e5968] lg:text-[20px] text-[20px] tracking-[-0.2px]"
                  style={{ width: "min-content" }}
                >
                  <p className="block leading-[1.6]">고객에게 안전한 결제 경험을 줄 수 있어요.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="flex-shrink-0 w-full h-full flex items-center justify-center">
            <div className="bg-[#ffffff] box-border content-stretch flex flex-col h-full items-start justify-start overflow-clip lg:p-[40px] p-[40px] relative rounded-[20px] shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col lg:gap-2 gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 w-full z-10">
                <div className="font-bold leading-[1.3] relative shrink-0 lg:text-[32px] text-[32px] text-[rgba(2,9,19,0.91)] lg:text-nowrap lg:whitespace-pre">
                  <p className="block mb-0">실시간 결제</p>
                  <p className="block">환불처리</p>
                </div>
                <div
                  className="font-semibold min-w-full relative shrink-0 text-[#4e5968] lg:text-[20px] text-[20px] tracking-[-0.2px]"
                  style={{ width: "min-content" }}
                >
                  <p className="block leading-[1.6]">실시간 결제/환불처리로 고객 문의가 적어요.</p>
                </div>
              </div>
              <div className="absolute lg:bottom-[-80px] bottom-[-80px] contents lg:right-[-61.84px] right-[-61.84px]">
                <div
                  className="absolute bg-center bg-cover bg-no-repeat blur-lg lg:bottom-[-80px] bottom-[-80px] filter opacity-50 lg:right-[-21.84px] right-[-21.84px] lg:size-60 size-60"
                  style={{ backgroundImage: `url('${imgImage23}')` }}
                />
                <div
                  className="absolute bg-center bg-cover bg-no-repeat lg:bottom-[-40px] bottom-[-40px] lg:right-[-61.84px] right-[-61.84px] lg:size-60 size-60"
                  style={{ backgroundImage: `url('${imgImage23}')` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="box-border content-stretch flex lg:gap-[24px] gap-[24px] items-center justify-start p-0 relative shrink-0 w-full">
        {slideTexts.map((text: string, i: number) => (
          <div key={i} className="basis-0 box-border content-stretch flex flex-col lg:gap-[14px] gap-[14px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
            <div className={`lg:h-[2px] h-[2px] shrink-0 w-full transition-colors duration-300 ${i === currentSlideIndex ? 'bg-[#3182f6]' : 'bg-[#d1d6db]'}`} />
            <div className="box-border content-stretch flex items-center justify-center lg:pb-[4px] pb-[4px] pt-0 px-0 relative shrink-0">
              <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#4e5968] lg:text-[14px] text-[14px] lg:text-nowrap tracking-[-0.14px]">
                <p className="adjustLetterSpacing block leading-[1.5] lg:whitespace-pre">{text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}