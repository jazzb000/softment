import { useState } from "react";

interface FaqAnswer {
  text1?: string;
  text2?: string;
  link?: string;
  html?: string;  // HTML 형식의 답변을 지원
}

interface FaqItem {
  id: number;
  category: string;
  question: string;
  answer: FaqAnswer;
  isTop?: boolean;  // 질문 Top 여부
}

interface FaqListProps {
  items: FaqItem[];
  onItemClick?: (id: number) => void;
  className?: string;
}

export function FaqList({ items, onItemClick, className = "" }: FaqListProps) {
  const [hoveredFaqId, setHoveredFaqId] = useState<number | null>(null);
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const handleFaqMouseEnter = (id: number) => {
    setHoveredFaqId(id);
  };

  const handleFaqMouseLeave = () => {
    setHoveredFaqId(null);
  };

  const handleFaqClick = (id: number) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
    onItemClick?.(id);
  };

  return (
    <div className={`box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full ${className}`}>
      {items.map((item) => {
        const isHovered = hoveredFaqId === item.id;
        const isExpanded = expandedIds.has(item.id);
        const shouldShowBackground = isHovered || isExpanded;
        
        return (
          <div key={item.id} className="box-border content-stretch flex flex-row items-stretch justify-start w-full">
            <div 
              className="box-border content-stretch flex flex-col w-full rounded-none lg:rounded-2xl cursor-pointer transition-colors duration-200 ease-in-out"
              style={{ backgroundColor: shouldShowBackground ? '#e5e8eb' : 'transparent' }}
              onMouseEnter={() => handleFaqMouseEnter(item.id)}
              onMouseLeave={handleFaqMouseLeave}
              onClick={() => handleFaqClick(item.id)}
            >
              {/* Question Row */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center w-full">
                <div className="px-4 lg:px-[16px] py-0 lg:py-[20px] w-full lg:w-[149px] shrink-0">
                  <p className="text-[14px] pt-[20px] lg:pt-0 lg:text-[17px] text-[#4e5968] leading-[1.6] whitespace-nowrap">
                    {item.category}
                  </p>
                </div>
                <div className="px-4 lg:pr-[16px] py-0 pb-5 lg:pb-0">
                  <p className="font-bold text-[16px] lg:text-[17px] text-[#4e5968] leading-[1.6] whitespace-pre-wrap break-words">
                    {item.question}
                  </p>
                </div>
              </div>

              {/* Answer - Only show when expanded */}
              {isExpanded && (
                <div className="flex flex-col lg:flex-row items-start w-full pb-[20px] lg:pb-0 lg:pl-7 pl-0">
                  <div className="hidden lg:block lg:w-[149px]" />
                  <div className="px-4 lg:pr-[16px] py-3 lg:py-[16px] w-full">
                    {item.answer.html ? (
                      <div 
                        className="text-[15px] lg:text-[17px] text-[#4e5968] leading-[1.6] faq-answer"
                        dangerouslySetInnerHTML={{ __html: item.answer.html }}
                        style={{
                          wordBreak: 'break-word'
                        }}
                      />
                    ) : (
                      <>
                        <p className="text-[15px] lg:text-[17px] text-[#4e5968] leading-[1.6] whitespace-pre-wrap break-words">
                          {item.answer.text1}
                        </p>
                        <p className="mt-2 text-[15px] lg:text-[17px] text-[#4e5968] leading-[1.6] whitespace-pre-wrap break-words">
                          {item.answer.text2}
                        </p>
                        {item.answer.link && (
                          <p className="mt-1 font-extrabold text-[#3182f6] underline leading-[1.6]">
                            {item.answer.link}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}