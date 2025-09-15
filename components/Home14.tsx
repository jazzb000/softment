import { useState } from 'react';
import Link from 'next/link';
import type { Route } from 'next';
import { IMAGES } from "../imports/Home13";

interface ServiceCardProps {
  badge?: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  showMockup?: boolean;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryHref?: Route;
  secondaryHref?: Route;
}

export default function ServiceCard({ 
  badge, 
  title, 
  description, 
  primaryButtonText, 
  secondaryButtonText, 
  showMockup = false, 
  onPrimaryClick,
  onSecondaryClick,
  primaryHref,
  secondaryHref,
}: ServiceCardProps) {
  // 개별 버튼 호버 상태 관리
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);

  // 텍스트 래핑을 위한 설명 텍스트 처리
  const processDescription = (text: string) => {
    return text
      .replace('결제가 가능한', '결제가 가능한<br />')
      .replace('높은 매출을 경험해', '높은 매출을 경험해<br />');
  };

  // 특별한 호버 색상이 필요한 버튼들 (#2272EB)
  const specialHoverButtons = [
    '결제위젯 알아보기',
    '브랜드페이 알아보기', 
    '퀵계좌이체 알아보기'
  ];

  const shouldUseSpecialHover = specialHoverButtons.includes(primaryButtonText);

  return (
    <div className="bg-white h-auto lg:h-[550px] relative rounded-[20px] shrink-0 w-full overflow-hidden">
      <div className="overflow-hidden relative size-full">
        <div className="box-border content-stretch flex-col lg:flex-row flex gap-6 lg:gap-[24px] h-auto lg:h-[550px] items-start justify-start p-6 lg:p-[40px] relative w-full">
          {/* Left: text area */}
          <div className="basis-0 content-stretch flex flex-col gap-6 lg:gap-[24px] grow items-start justify-start min-h-px min-w-px relative shrink-0 lg:max-w-[calc(100%-340px)]">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[10px] items-start justify-start relative shrink-0">
                {badge && (
                  <div className="bg-[rgba(78,89,104,0.16)] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[10px] shrink-0">
                    <div className="font-bold not-italic relative shrink-0 text-[#4e5968] text-[12px] text-nowrap tracking-[-0.12px]">
                      <p className="leading-[1.33] whitespace-pre">{badge}</p>
                    </div>
                  </div>
                )}
                <div className="font-bold not-italic relative shrink-0 text-[#333d4b] text-2xl lg:text-[32px] tracking-[-0.32px] w-full">
                  <p className="leading-[1.3]" dangerouslySetInnerHTML={{ __html: title }} />
                </div>
              </div>
              <div className="font-medium not-italic relative shrink-0 text-[#4e5968] text-base lg:text-[20px] tracking-[-0.2px] w-full whitespace-pre-wrap break-words">
                <div className="leading-[1.6]" dangerouslySetInnerHTML={{ __html: processDescription(description) }} />
              </div>
            </div>
            <div className="content-stretch flex gap-3 lg:gap-[12px] items-start justify-start relative shrink-0">
              {/* Primary 버튼 - 인라인 구현 (size="s") */}
              <div 
                className={`box-border content-stretch flex items-center justify-center relative shrink-0 cursor-pointer transition-colors duration-200 px-[12px] py-[9px] rounded-[10px] ${
                  shouldUseSpecialHover && isPrimaryHovered ? 'bg-[#2272EB] text-white' : 'bg-[#3182f6] text-white'
                }`}
                onMouseEnter={() => setIsPrimaryHovered(true)}
                onMouseLeave={() => setIsPrimaryHovered(false)}
                onClick={onPrimaryClick}
              >
                <div className="font-semibold not-italic relative shrink-0 text-[16px] lg:text-[18px] leading-[1.5] text-nowrap">
                  {primaryHref ? (
                    <Link href={primaryHref} className="whitespace-pre">{primaryButtonText}</Link>
                  ) : (
                    <p className="whitespace-pre">{primaryButtonText}</p>
                  )}
                </div>
              </div>

              {/* Secondary 버튼 - 인라인 구현 (variant="secondary", size="s") */}
              <div 
                className={`box-border content-stretch flex items-center justify-center relative shrink-0 cursor-pointer transition-colors duration-200 px-[12px] py-[9px] rounded-[10px] ${
                  isSecondaryHovered ? 'bg-[rgba(100,168,255,0.34)] text-[#3182f6]' : 'bg-[rgba(100,168,255,0.15)] text-[#3182f6]'
                }`}
                onMouseEnter={() => setIsSecondaryHovered(true)}
                onMouseLeave={() => setIsSecondaryHovered(false)}
                onClick={onSecondaryClick}
              >
                <div className="font-semibold not-italic relative shrink-0 text-[16px] lg:text-[18px] leading-[1.5] text-nowrap">
                  {secondaryHref ? (
                    <Link href={secondaryHref} className="whitespace-pre">{secondaryButtonText}</Link>
                  ) : (
                    <p className="whitespace-pre">{secondaryButtonText}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile mockup below content (flow-based) */}
            {showMockup && (
              <div className="lg:hidden w-full flex justify-center mt-4">
                <div className="relative w-full max-w-[280px]">
                  <div className="w-full rounded-[32px] bg-white p-2 shadow-[0px_24px_20px_rgba(0,0,0,0.05)]">
                    <img className="block w-full h-auto rounded-[28px]" src={IMAGES.replaceImgFill} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: desktop mockup column */}
          {showMockup && (
            <div className="hidden lg:flex flex-1 items-end justify-end min-w-[240px]">
              <div className="relative w-[240px] h-[498px]">
                <div className="absolute inset-0 bg-white rounded-[36.26px]" />
                <div aria-hidden className="absolute inset-0 border-[0.662px] border-[rgba(0,0,0,0.15)] border-solid rounded-[36.26px] pointer-events-none shadow-[0px_30px_24px_rgba(0,0,0,0.05)]" />
                <img className="absolute inset-[10px] w-[calc(100%-20px)] h-[calc(100%-20px)] rounded-[28px] object-cover" src={IMAGES.replaceImgFill} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}