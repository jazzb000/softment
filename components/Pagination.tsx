import { useState } from "react";
import svgPaths0 from "../imports/svg-ntinw6tyna";

interface PaginationProps {
  pageNumbers: number[];
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  pageNumbers,
  currentPage,
  onPageChange,
  className = "",
}: PaginationProps) {
  const [hoveredPage, setHoveredPage] = useState<number | null>(null);
  const [hoveredPrev, setHoveredPrev] = useState(false);
  const [hoveredNext, setHoveredNext] = useState(false);

  const getPaginationStyles = (page: number) => {
    const isActive = currentPage === page;
    const isHovered = hoveredPage === page;

    if (isActive) {
      return {
        backgroundColor: "rgba(0, 0, 0, 0.03)",
        color: "#333d4b",
      } as const;
    }

    if (isHovered) {
      return {
        backgroundColor: "rgba(2, 32, 71, 0.05)",
        color: "#6b7684",
      } as const;
    }

    return {
      backgroundColor: "transparent",
      color: "#6b7684",
    } as const;
  };

  const maxPage = Math.max(...pageNumbers.filter(n => n > 0));

  return (
    <div className={`box-border content-stretch flex flex-row items-center justify-center overflow-clip pb-16 lg:pb-20 xl:pb-[80px] pt-6 lg:pt-8 xl:pt-[32px] px-0 relative shrink-0 w-full ${className}`}>
      <div className="box-border content-stretch flex flex-row gap-[2px] items-center justify-start p-0 relative shrink-0">
        {/* Previous Button */}
        <div
          className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[100px] shrink-0 size-[28px] cursor-pointer transition-colors duration-200 ease-in-out"
          style={{ 
            backgroundColor: hoveredPrev ? "rgba(2, 32, 71, 0.05)" : "transparent",
            opacity: currentPage === 1 ? 0.3 : 1,
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
          }}
          onMouseEnter={() => setHoveredPrev(true)}
          onMouseLeave={() => setHoveredPrev(false)}
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        >
          <div className="relative shrink-0 size-[24px]">
            <div className="absolute flex inset-0 items-center justify-center">
              <div className="flex-none rotate-[180deg] scale-y-[-100%] size-[24px]">
                <div className="overflow-clip relative size-full">
                  <div className="absolute h-[10px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[5px]">
                    <div className="absolute inset-[-7.5%_-15%]" style={{ "--stroke-0": "rgba(139, 149, 161, 1)" } as React.CSSProperties}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 7 12">
                        <path d="M1 1L6 6L1 11" stroke="var(--stroke-0, #8B95A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Numbers */}
        {pageNumbers.map((page, index) => {
          if (page === -1) {
            // Render dots
            return (
              <div
                key={`dots-${index}`}
                className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[100px] shrink-0 size-[28px]"
              >
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g>
                      <g>
                        <path d={svgPaths0.p1b5fb80} stroke="var(--stroke-0, #8B95A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths0.pa2bd700} stroke="var(--stroke-0, #8B95A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths0.p3ab54540} stroke="var(--stroke-0, #8B95A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            );
          }

          return (
            <div
              key={page}
              className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[100px] shrink-0 size-[28px] cursor-pointer transition-colors duration-200 ease-in-out"
              style={getPaginationStyles(page)}
              onClick={() => onPageChange(page)}
              onMouseEnter={() => setHoveredPage(page)}
              onMouseLeave={() => setHoveredPage(null)}
            >
              <div className="relative shrink-0 size-[24px]">
                <div
                  className="absolute font-semibold inset-0 leading-[0] not-italic text-[15px] text-center"
                  style={{ color: getPaginationStyles(page).color }}
                >
                  <p className="block leading-[1.6]">{page}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Next Button */}
        <div
          className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[100px] shrink-0 size-[28px] cursor-pointer transition-colors duration-200 ease-in-out"
          style={{ 
            backgroundColor: hoveredNext ? "rgba(2, 32, 71, 0.05)" : "transparent",
            opacity: currentPage === maxPage ? 0.3 : 1,
            cursor: currentPage === maxPage ? 'not-allowed' : 'pointer'
          }}
          onMouseEnter={() => setHoveredNext(true)}
          onMouseLeave={() => setHoveredNext(false)}
          onClick={() => currentPage < maxPage && onPageChange(currentPage + 1)}
        >
          <div className="relative shrink-0 size-[24px]">
            <div className="absolute inset-0 overflow-clip">
              <div className="absolute h-[10px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[5px]">
                <div className="absolute inset-[-7.5%_-15%]" style={{ "--stroke-0": "rgba(139, 149, 161, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 7 12">
                    <path d="M1 1L6 6L1 11" stroke="var(--stroke-0, #8B95A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

