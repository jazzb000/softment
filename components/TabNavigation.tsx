import { useEffect, useRef, useState } from "react";

interface TabNavigationProps {
  tabs: string[];
  defaultActiveTab?: string;
  onTabChange?: (tab: string) => void;
  className?: string;
}

export function TabNavigation({ 
  tabs, 
  defaultActiveTab, 
  onTabChange,
  className = ""
}: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  const handleTabMouseEnter = (tab: string) => {
    setHoveredTab(tab);
  };

  const handleTabMouseLeave = () => {
    setHoveredTab(null);
  };

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollButtons();
    const onResize = () => updateScrollButtons();
    const el = scrollRef.current;
    el?.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', onResize);
    return () => {
      el?.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const scrollByAmount = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.max(120, Math.floor(el.clientWidth * 0.6));
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div className={`relative shrink-0 w-full overflow-hidden ${className}`}>
      <div ref={scrollRef} className="box-border content-stretch flex flex-row items-center justify-start overflow-hidden p-0 relative w-full">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          const isHovered = hoveredTab === tab;
          const textColor = isActive || isHovered ? '#191f28' : '#4e5968';
          
          return (
            <div 
              key={tab}
              className="box-border content-stretch flex flex-row gap-[10px] items-center justify-center pr-[12px] pl-[12px] first:pl-2 sm:first:pl-0 last:pr-0 py-[9px] relative shrink-0 cursor-pointer"
              onClick={() => handleTabClick(tab)}
              onMouseEnter={() => handleTabMouseEnter(tab)}
              onMouseLeave={handleTabMouseLeave}
            >
              <div 
                className={`${isActive ? 'font-bold' : 'font-semibold'} leading-[0] not-italic relative shrink-0 text-[15px] text-left text-nowrap`}
                style={{ color: textColor }}
              >
                <p className="block leading-[1.45] whitespace-pre">{tab}</p>
              </div>
              {isActive && (
                <div className="absolute bg-[#191f28] bottom-px h-[2px] left-0 right-0 rounded" />
              )}
            </div>
          );
        })}
      </div>
      {/* Edge overlays to hide partially clipped text */}
      {canScrollLeft && (
        <div className="hidden sm:block pointer-events-none absolute left-0 top-0 bottom-0 w-4 bg-white" />
      )}
      {canScrollRight && (
        <div className="hidden sm:block pointer-events-none absolute right-0 top-0 bottom-0 w-4 bg-white" />
      )}
      {canScrollLeft && (
        <button
          type="button"
          aria-label="이전 탭"
          className="flex absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-sm rounded-full size-8 items-center justify-center cursor-pointer"
          onClick={() => scrollByAmount('left')}
        >
          <svg className="block size-5" viewBox="0 0 20 20" fill="none">
            <path d="M12 15L7 10L12 5" stroke="#8B95A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      {canScrollRight && (
        <button
          type="button"
          aria-label="다음 탭"
          className="flex absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-sm rounded-full size-8 items-center justify-center cursor-pointer"
          onClick={() => scrollByAmount('right')}
        >
          <svg className="block size-5" viewBox="0 0 20 20" fill="none">
            <path d="M8 5L13 10L8 15" stroke="#8B95A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 bottom-0 border-b border-[#f2f4f6] border-solid pointer-events-none"
      />
    </div>
  );
}