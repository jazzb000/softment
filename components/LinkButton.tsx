import { useState } from "react";
import svgPaths from "../imports/svg-7gar5fnxto";

interface LinkButtonProps {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
}

export function LinkButton({ children, disabled = false, onClick }: LinkButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getTextColor = () => {
    if (disabled) return "#90C2FF";
    if (isHovered) return "#1B64DA";
    return "#3182f6";
  };

  const getStrokeColor = () => {
    if (disabled) return "#90C2FF";
    if (isHovered) return "#1B64DA";
    return "#3182f6";
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => !disabled && setIsHovered(false)}
      className={`
        box-border content-stretch flex flex-row items-center justify-start p-[0px] relative shrink-0 transition-all duration-200 ease-in-out
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
      `}
      data-name="Text Button/s"
    >
      <div 
        className="font-medium not-italic relative shrink-0 text-[17px] text-left text-nowrap tracking-[-0.17px] transition-all duration-200 ease-in-out"
        style={{ color: getTextColor() }}
      >
        {children}
      </div>
      <div className="relative shrink-0 size-[16px] transition-all duration-200 ease-in-out" data-name="Icon/Chevron">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Icon/Chevron">
            <path 
              d={svgPaths.p33565300} 
              id="Vector" 
              stroke={getStrokeColor()}
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5"
              className="transition-all duration-200 ease-in-out"
            />
          </g>
        </svg>
      </div>
    </button>
  );
}