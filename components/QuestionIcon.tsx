import { useState } from 'react';
import svgPaths from "../imports/svg-2guc1i6qig";
import svgTooltipPaths from "../imports/svg-4zd8ny01fs";

interface QuestionIconProps {
  tooltipText: string;
}

export function QuestionIcon({ tooltipText }: QuestionIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-[0px] relative rounded-[100px] shrink-0 size-[20px] cursor-pointer">
        <div className="relative shrink-0 size-[16px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 16 16">
            <g id="Circle">
              <rect fill="var(--fill-0, #D1D6DB)" height="16" rx="8" width="16" />
              <path
                d={svgPaths.pa9de980}
                id="Vector"
                stroke="var(--stroke-0, white)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </div>
      </div>
      
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute left-1/2 top-[30px] z-50 transform -translate-x-1/2">
          <div className="bg-[#17171c] rounded-2xl shadow-[4px_4px_24px_0px_rgba(0,0,0,0.12)] px-[16px] py-[10px] relative w-[260px]">
            <span className="font-normal leading-[1.6] not-italic text-[#ffffff] text-[15px] text-left tracking-[-0.15px] block" style={{ wordBreak: 'keep-all' }}>
              {tooltipText}
            </span>
            {/* Arrow pointing up */}
            <div className="absolute h-[16px] left-1/2 top-[-8px] transform -translate-x-1/2 w-[22px]">
              <div className="absolute bottom-1/4 left-[16.41%] right-[16.41%] top-[7.6%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
                  <path d={svgTooltipPaths.p2a1a3380} fill="var(--fill-0, #17171C)" id="Polygon 1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}