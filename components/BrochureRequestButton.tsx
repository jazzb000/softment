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
      className={`bg-[#3C3C47] relative rounded-[12px] shrink-0 w-[121px] cursor-pointer transition-all duration-200 ease-in-out ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 bg-[rgba(224,224,255,0.27)] transition-opacity duration-200 ease-in-out rounded-[12px]" 
        style={{ opacity: isHovered ? 0.27 : 0 }}
      />
      <div className="flex items-center justify-center relative w-full px-[14px] py-[10px]" onClick={onClick}>
        <div className="font-semibold  text-[#FDFFFEE3] text-[17px] text-nowrap">
          {children}
        </div>
      </div>
    </div>
  );
}