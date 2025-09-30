import { useState } from "react";
import { qnaData } from "../imports/data";

interface QnASectionProps {
  openQnAIndexes: number[];
  toggleQnA: (index: number) => void;
  items?: QnaItem[];
}

interface QnaItem {
  question: string;
  answer?: string;
  linkText?: string;
  linkSuffix?: string;
  linkText1?: string;
  linkSuffix1?: string;
  linkText2?: string;
  linkSuffix2?: string;
}

export function QnASection({ openQnAIndexes, toggleQnA, items }: QnASectionProps) {
  // 각 QnA 항목의 호버 상태 관리
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const itemsToRender = items && items.length > 0 ? items : (qnaData as unknown as QnaItem[]);
  return (
    <div className=" relative shrink-0 w-full">
      <div className="py-[80px] lg:py-[160px] w-full">
        <div className="box-border content-stretch flex flex-col lg:gap-[80px] gap-[40px] items-start justify-start relative w-full">
          <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#191f28] lg:text-[48px] text-[32px] text-start md:text-center w-full">
            <p className="block leading-[1.3] whitespace-pre-wrap break-words">자주 묻는 질문</p>
          </div>
          <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-start p-0 relative shrink-0 w-full">
            {itemsToRender.map((qna, i) => (
              <div 
                key={i} 
                className={"relative rounded-[12px] shrink-0 w-full overflow-hidden bg-[#ffffff]"}
              >
                {/* Question Header */}
                <div className="flex flex-row items-center relative w-full">
                  <div
                    className={`box-border content-stretch flex items-center justify-between lg:px-[14px] px-[16px] lg:py-[9px] py-[12px] relative w-full cursor-pointer transition-colors ${openQnAIndexes.includes(i) ? 'duration-0' : 'duration-200'} overflow-hidden ${openQnAIndexes.includes(i) ? (hoveredIndex === i ? 'rounded-[12px]' : 'rounded-t-[12px]') : 'rounded-[12px]'}`}
                    style={{ backgroundColor: hoveredIndex === i ? 'rgba(2,32,71,0.05)' : 'transparent' }}
                    onClick={() => toggleQnA(i)}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="font-semibold leading-[0] not-italic relative flex-1 text-[#4e5968] lg:text-[17px] text-[16px] pr-4">
                      <p className="block leading-[1.6] whitespace-pre-wrap break-words">{qna.question}</p>
                    </div>
                    <div className="relative shrink-0 size-[20px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path 
                          d={openQnAIndexes.includes(i) ? "M13 12L10 9L7 12" : "M13 9L10 12L7 9"} 
                          stroke="var(--stroke-0, #B0B8C1)" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="1.5" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Answer Content */}
                {openQnAIndexes.includes(i) && (
                  <div className="relative w-full">
                    <div className="relative w-full">
                      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start lg:pb-6 pb-5 lg:pl-[14px] pl-[16px] lg:pr-[30px] pr-[16px] pt-2.5 relative w-full bg-transparent rounded-b-[12px]">
                        <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#4e5968] lg:text-[15px] text-[14px] w-full">
                          <p className="leading-[1.6] whitespace-pre-wrap break-words">
                            <span dangerouslySetInnerHTML={{ __html: qna.answer || '' }} />
                            {(qna.linkText1 || qna.linkText) ? (
                              qna.linkText1 ? (
                                <>
                                  <a 
                                    href="#" 
                                    className="text-[#3182f6] cursor-pointer transition-all duration-150 ease-in-out"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    {qna.linkText1}
                                  </a>
                                  <span dangerouslySetInnerHTML={{ __html: qna.linkSuffix1 || '' }} />
                                  {qna.linkText2 && (
                                    <>
                                      <a 
                                        href="#" 
                                        className="text-[#3182f6] cursor-pointer transition-all duration-150 ease-in-out"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        {qna.linkText2}
                                      </a>
                                      <span dangerouslySetInnerHTML={{ __html: qna.linkSuffix2 || '' }} />
                                    </>
                                  )}
                                </>
                              ) : (
                                qna.linkText && (
                                  <>
                                    <a 
                                      href="#" 
                                      className="text-[#3182f6] cursor-pointer transition-all duration-150 ease-in-out"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      {qna.linkText}
                                    </a>
                                    <span dangerouslySetInnerHTML={{ __html: qna.linkSuffix || '' }} />
                                  </>
                                )
                              )
                            ) : null}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}