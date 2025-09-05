import { useState } from 'react';

interface HeroApplyButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export function HeroApplyButton({ onClick, disabled = false }: HeroApplyButtonProps) {
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
      className="box-border content-stretch flex flex-row h-[49px] items-center justify-center px-[14px] py-[11px] relative rounded-xl shrink-0 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <div className="font-['Pretendard'] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-left text-nowrap pointer-events-none">
        <p className="block leading-[1.5] whitespace-pre">이용 신청하기</p>
      </div>
    </button>
  );
}