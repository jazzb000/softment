import { useState, type ReactNode } from 'react';

interface ExperienceButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function ExperienceButton({ 
  children, 
  onClick,
  className = '',
  disabled = false
}: ExperienceButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const getBackgroundColor = () => {
    if (disabled) return '#3182F6B2';
    if (isActive) return '#1e5fd1';
    if (isHovered) return '#2272EB';
    return '#3182f6';
  };

  return (
    <div 
      className={`relative rounded-[12px] shrink-0 w-[121px] transition-all duration-200 ease-in-out${
        disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
      } ${className}`}
      style={{ backgroundColor: getBackgroundColor() }}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => !disabled && setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      <div className="flex items-center justify-center relative w-full px-[14px] py-[10px]" onClick={disabled ? undefined : onClick}>
        <div className="font-semibold not-italic relative shrink-0 text-[#ffffff] text-[17px] text-nowrap">
          {children}
        </div>
      </div>
    </div>
  );
}