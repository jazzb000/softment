import { useState } from 'react';

export default function PricingSection() {
  // 맞춤 견적 문의하기 버튼 호버 상태 관리
  const [isCustomQuoteHovered, setIsCustomQuoteHovered] = useState(false);

  const pricingData = [
    { service: "신용∙체크카드", price: "일반 3.4%" },
    { service: "간편결제", price: "3.4%", note: "＊ 일부 간편결제 서비스 추가 수수료 부과" },
    { service: "계좌이체", price: "2.0% (최저 건당 200원)" },
    { service: "브랜드페이", price: "신용∙체크카드 4.3%" }
  ];

  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 lg:gap-[20px] items-start justify-start px-5 lg:px-[188px] py-16 lg:py-[180px] relative w-full">
          <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#333d4b] text-3xl lg:text-[48px] text-left lg:text-center tracking-[-0.48px] w-full">
            <p className="leading-[1.3]">PG 수수료</p>
          </div>
          <div className="bg-[rgba(2,32,71,0.05)] relative rounded-[20px] shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip relative size-full">
              <div className="box-border content-stretch flex gap-[16px] items-center justify-start p-4 lg:p-[40px] relative w-full">
                <div className="basis-0 font-semibold grow h-full leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4e5968] text-base lg:text-[20px] tracking-[-0.2px] whitespace-pre-wrap break-words">
                  <p className="leading-[1.6]">사업의 영・중소 등급과 간편결제 이용 여부에 따라 수수료가 달라져요.</p>
                </div>
                
                {/* 맞춤 견적 문의하기 버튼 - 인라인 구현 (size="m") */}
                <div 
                  className={`box-border content-stretch flex items-center justify-center relative shrink-0 cursor-pointer transition-colors duration-200 px-[14px] py-[11px] rounded-[12px] h-[49px] ${
                    isCustomQuoteHovered ? 'bg-[#2272EB] text-white' : 'bg-[#3182f6] text-white'
                  }`}
                  onMouseEnter={() => setIsCustomQuoteHovered(true)}
                  onMouseLeave={() => setIsCustomQuoteHovered(false)}
                >
                  <div className="font-semibold not-italic relative shrink-0 text-[17px] leading-[1.5] text-nowrap">
                    <p className="whitespace-pre">맞춤 견적 문의하기</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e5e8eb] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
            {pricingData.map((item, index) => (
              <div key={index} className="box-border content-stretch flex items-start justify-start px-0 py-[24px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#e5e8eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                <div className="basis-0 grow max-w-[248px] min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-row items-center max-w-inherit relative size-full">
                    <div className="box-border content-stretch flex items-center justify-start max-w-inherit pl-0 pr-[24px] py-0 relative w-full">
                      <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#4e5968] text-base lg:text-[20px]">
                        <p className="leading-[1.6] whitespace-pre-wrap break-words">{item.service}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-row items-center relative size-full">
                    <div className="box-border content-stretch flex items-center justify-start pl-0 pr-[24px] py-0 relative w-full">
                      <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
                        <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#4e5968] text-base lg:text-[20px]">
                          <p className="leading-[1.6] whitespace-pre-wrap break-words">{item.price}</p>
                        </div>
                        {item.note && (
                          <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#6b7684] text-sm lg:text-[17px]">
                            <p className="leading-[1.6] whitespace-pre-wrap break-words">{item.note}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}