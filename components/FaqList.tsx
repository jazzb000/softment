import { useState } from "react";

interface FaqAnswer {
  text1: string;
  text2: string;
  link: string;
}

interface FaqItem {
  id: number;
  category: string;
  question: string;
  answer: FaqAnswer;
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
              className="box-border content-stretch flex flex-col w-full rounded-2xl cursor-pointer transition-colors duration-200 ease-in-out"
              style={{ backgroundColor: shouldShowBackground ? '#e5e8eb' : 'transparent' }}
              onMouseEnter={() => handleFaqMouseEnter(item.id)}
              onMouseLeave={handleFaqMouseLeave}
              onClick={() => handleFaqClick(item.id)}
            >
              {/* Question Row */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center w-full">
                <div className="px-4 lg:px-[16px] py-2 lg:py-[20px] w-full lg:w-[149px]">
                  <p className="font-['Pretendard'] text-[14px] lg:text-[17px] text-[#4e5968] leading-[1.6] whitespace-pre-wrap">
                    {item.category}
                  </p>
                </div>
                <div className="px-4 lg:pr-[16px] py-3 lg:py-[16px]">
                  <p className="font-['Pretendard'] font-bold text-[16px] lg:text-[17px] text-[#4e5968] leading-[1.6] whitespace-pre-wrap break-words">
                    {item.question}
                  </p>
                </div>
              </div>

              {/* Answer - Only show when expanded */}
              {isExpanded && (
                <div className="flex flex-col lg:flex-row items-start w-full">
                  <div className="hidden lg:block lg:w-[149px]" />
                  <div className="px-4 lg:pr-[16px] py-3 lg:py-[16px] w-full">
                    <p className="font-['Pretendard'] text-[15px] lg:text-[17px] text-[#4e5968] leading-[1.6] whitespace-pre-wrap break-words">
                      {item.answer.text1}
                    </p>
                    <p className="mt-2 font-['Pretendard'] text-[15px] lg:text-[17px] text-[#4e5968] leading-[1.6] whitespace-pre-wrap break-words">
                      {item.answer.text2}
                    </p>
                    <p className="mt-1 font-['Pretendard'] font-extrabold text-[#3182f6] underline leading-[1.6]">
                      {item.answer.link}
                    </p>
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