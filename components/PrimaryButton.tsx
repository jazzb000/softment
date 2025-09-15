import { useState } from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function PrimaryButton({ 
  children, 
  onClick, 
  disabled = false, 
  className = "" 
}: PrimaryButtonProps) {
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

  // Determine background color based on state
  const getBackgroundColor = () => {
    if (disabled) return 'rgba(49, 130, 246, 0.7)'; // #3182F6 with 70% opacity (#3182F6B2)
    if (isHovered) return '#2272EB';
    return '#3182f6'; // Default state
  };

  return (
    <div 
      className={`box-border content-stretch flex flex-row items-center justify-center px-[16px] py-[10px] relative rounded-[14px] shrink-0 transition-colors duration-200 ease-in-out ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      style={{ backgroundColor: getBackgroundColor() }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="font-semibold  not-italic relative shrink-0 text-[#ffffff] text-[19px] text-left ">
        {children}
      </div>
    </div>
  );
}