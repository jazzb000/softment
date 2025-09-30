import { useState } from 'react';

export default function HeroSection() {
  // 개별 버튼 호버 상태 관리
  const [isApplyHovered, setIsApplyHovered] = useState(false);
  const [isInquiryHovered, setIsInquiryHovered] = useState(false);

  return (
    <div className="bg-[#f2f4f6] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-between px-5 lg:px-[188px] pt-30 lg:pt-[60px] pb-16 relative w-full">
          <div className="content-stretch flex gap-6 lg:gap-[24px] h-auto lg:h-[680px] items-center justify-start relative shrink-0 w-full lg:w-[976px]">
            <div className="basis-0 content-stretch flex flex-col gap-[40px] grow h-full items-center lg:items-start justify-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col gap-[24px] items-start text-center lg:text-left justify-start leading-[0] not-italic relative shrink-0">
                <div className="font-bold relative shrink-0 text-[#191f28] text-3xl lg:text-[48px]">
                  <p className="leading-[1.3] whitespace-pre-wrap break-words">
                    쉽고 빠른 PG 연동
                    <br aria-hidden="true" />
                    소프트먼트
                  </p>
                </div>
                <div className="font-medium relative shrink-0 text-[#6b7684] text-base lg:text-[20px] tracking-[-0.2px]">
                  <p className="leading-[1.6] whitespace-pre-wrap break-words">
                    고객이 원했던 온라인 결제의 모든 것.
                    <br aria-hidden="true" />
                    연동부터 운영까지 고민 끝!
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-4 lg:gap-[20px] items-start justify-start relative shrink-0">
                {/* 이용 신청하기 버튼 - 인라인 구현 (size="s") */}
                <div 
                  className={`box-border content-stretch flex items-center justify-center relative shrink-0 cursor-pointer transition-colors duration-200 px-[12px] py-[9px] rounded-[10px] ${
                    isApplyHovered ? 'bg-[#2272EB] text-white' : 'bg-[#3182f6] text-white'
                  }`}
                  onMouseEnter={() => setIsApplyHovered(true)}
                  onMouseLeave={() => setIsApplyHovered(false)}
                >
                  <div className="font-semibold not-italic relative shrink-0 text-[18px] leading-[1.5] text-nowrap">
                    <p className="whitespace-pre">이용 신청하기</p>
                  </div>
                </div>

                {/* 도입 문의 버튼 - 인라인 구현 (variant="secondary", size="s") */}
                <div 
                  className={`box-border content-stretch flex items-center justify-center relative shrink-0 cursor-pointer transition-colors duration-200 px-[12px] py-[9px] rounded-[10px] ${
                    isInquiryHovered ? 'bg-[rgba(100,168,255,0.34)] text-[#3182f6]' : 'bg-[rgba(100,168,255,0.15)] text-[#3182f6]'
                  }`}
                  onMouseEnter={() => setIsInquiryHovered(true)}
                  onMouseLeave={() => setIsInquiryHovered(false)}
                >
                  <div className="font-semibold not-italic relative shrink-0 text-[18px] leading-[1.5] text-nowrap">
                    <p className="whitespace-pre">도입 문의</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute hidden lg:flex content-stretch gap-[24px] h-[780px] items-center justify-start left-[497.5px] top-[180px] w-[879px]">
              <div className="basis-0 bg-white content-stretch flex flex-col grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[20px] shrink-0">
                <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#3182f6] text-[20px] text-nowrap tracking-[-0.2px]">
                  <p className="leading-[1.5] whitespace-pre">화면 디자인</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}