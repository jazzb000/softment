import { useState } from "react";

interface ActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function ActionButton({ 
  children, 
  onClick, 
  disabled = false, 
  className = "" 
}: ActionButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const getStrokeColor = () => {
    if (disabled) return '#90C2FF';
    if (isHovered) return '#1B64DA';
    return '#3182F6';
  };

  const getTextColor = () => {
    if (disabled) return '#90C2FF';
    if (isHovered) return '#1B64DA';
    return '#3182f6';
  };

  return (
    <div 
      className={`box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 transition-colors duration-200 ease-in-out ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div 
        className="font-normal not-italic relative shrink-0 Action-[20px] Action-left text-nowrap tracking-[-0.2px] transition-colors duration-200 ease-in-out"
        style={{ color: getTextColor() }}
      >
        {children}
      </div>
      <div className="relative shrink-0 size-[20px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g>
            <path
              d="M7.5 5L12.5 10L7.5 15"
              stroke={getStrokeColor()}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}