import { useState } from 'react';

interface NavApplyButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export function NavApplyButton({ onClick, disabled = false }: NavApplyButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getBackgroundColor = () => {
    if (disabled) return '#3182f6b2';
    if (isHovered) return '#2272eb';
    return '#3182f6';
  };

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="box-border content-stretch flex flex-row items-center justify-center px-[8px] lg:px-[10px] py-[6px] relative rounded-lg shrink-0 w-[80px] lg:w-[96px] transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <div className="font-semibold not-italic relative shrink-0 text-[#ffffff] text-[12px] lg:text-[14px] text-center lg:text-left text-nowrap pointer-events-none">
        이용 신청하기
      </div>
    </button>
  );
}