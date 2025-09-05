import { useState, type ReactNode } from 'react';

interface BrochureRequestButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function BrochureRequestButton({ 
  children, 
  onClick,
  className = '' 
}: BrochureRequestButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-[#3C3C47] relative rounded-[12px] shrink-0 w-[121px] h-[49px] cursor-pointer transition-all duration-200 ease-in-out ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 bg-[rgba(224,224,255,0.27)] transition-opacity duration-200 ease-in-out rounded-[12px]" 
        style={{ opacity: isHovered ? 0.27 : 0 }}
      />
      <div className="flex items-center justify-center relative size-full px-[14px] py-[11px]" onClick={onClick}>
        <div className="font-['Pretendard'] font-semibold leading-[0] not-italic relative shrink-0 text-[#FDFFFEE3] text-[17px] text-nowrap">
          <p className="block leading-[1.5] whitespace-pre">{children}</p>
        </div>
      </div>
    </div>
  );
}