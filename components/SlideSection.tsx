import { slideTexts } from "../imports/data";
const imgImage20 = "/images/step1.png";
const imgImage21 = "/images/step2.png";
const imgImage23 = "/images/step3.png";

interface SlideSectionProps {
  currentSlideIndex: number;
}

export function SlideSection({ currentSlideIndex }: SlideSectionProps) {
  return (
    <div className="box-border content-stretch flex flex-col lg:gap-[24px] gap-[24px] items-start justify-start p-0 relative w-full">
      {/* 인라인 슬라이드 */}
      <div className="bg-[#1F304A] box-border content-stretch flex flex-col lg:h-[350px] h-[350px] items-start justify-start lg:max-h-[350px] max-h-[350px] overflow-hidden p-0 relative rounded-[20px] shrink-0 w-full">
        {/* Slides Container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ 
            transform: `translateX(-${currentSlideIndex * 100}%)`,
            width: "100%"
          }}
        >
          {/* Slide 1 */}
          <div className="flex-shrink-0 w-full h-full flex items-center justify-center bg-[#1F304A]">
            <img 
              src={imgImage20} 
              alt="Step 1" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Slide 2 */}
          <div className="flex-shrink-0 w-full h-full flex items-center justify-center bg-[#1F304A]">
            <img 
              src={imgImage21} 
              alt="Step 2" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Slide 3 */}
          <div className="flex-shrink-0 w-full h-full flex items-center justify-center bg-[#1F304A]">
            <img 
              src={imgImage23} 
              alt="Step 3" 
              className="w-full h-full object-contain"
            />
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