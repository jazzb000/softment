import { useState } from "react";
import svgPaths from "../imports/svg-ntinw6tyna";
import searchSvgPaths from "../imports/svg-sy2kf54r0x";

interface SearchBoxProps {
  placeholder?: string;
  onSearchChange?: (value: string) => void;
  className?: string;
}

export function SearchBox({ 
  placeholder = "검색어를 입력해 주세요.", 
  onSearchChange,
  className = ""
}: SearchBoxProps) {
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [hoveredClear, setHoveredClear] = useState(false);

  const handleSearchMouseEnter = () => {
    setIsSearchHovered(true);
  };

  const handleSearchMouseLeave = () => {
    setIsSearchHovered(false);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange?.(value);
  };

  const handleClearSearch = () => {
    setSearchValue('');
    onSearchChange?.('');
  };

  const handleClearMouseEnter = () => {
    setHoveredClear(true);
  };

  const handleClearMouseLeave = () => {
    setHoveredClear(false);
  };

  // Determine search box styles - always 2px border to prevent layout shift
  const getSearchBorderStyle = () => {
    if (isSearchFocused) return '2px solid #3182F6';
    if (isSearchHovered) return '2px solid rgba(49, 130, 246, 0.7)';
    return '2px solid #e5e8eb';
  };

  const getSearchTextColor = () => {
    // Use strong color when user has typed text; lighter color otherwise
    return searchValue ? '#000C1ECC' : 'rgba(3, 24, 50, 0.46)';
  };

  return (
    <div 
      className={`bg-[#ffffff] h-[56px] relative rounded-[12px] w-full transition-all duration-200 ease-in-out ${className}`}
      style={{
        border: getSearchBorderStyle()
      }}
      onMouseEnter={handleSearchMouseEnter}
      onMouseLeave={handleSearchMouseLeave}
    >
      <div className="box-border content-stretch flex flex-row gap-[8px] h-[52px] items-center justify-start overflow-clip px-[16px] py-0 relative w-full">
        <div className="relative shrink-0 size-[20px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <g>
              <path
                d={svgPaths.p11655bf0}
                stroke="var(--stroke-0, #B0B8C1)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                d={svgPaths.p17e1580}
                stroke="var(--stroke-0, #B0B8C1)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </div>
        <input
          className="basis-0 font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[17px] text-left bg-transparent border-none outline-none transition-colors duration-100 ease-in-out"
          style={{ color: getSearchTextColor() }}
          placeholder={placeholder}
          value={searchValue}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
        {searchValue && (
          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-[5px] pr-0 py-0 relative shrink-0">
            <div 
              className="overflow-clip relative shrink-0 size-[18px] cursor-pointer transition-colors duration-200 ease-in-out" 
              onClick={handleClearSearch}
              onMouseEnter={handleClearMouseEnter}
              onMouseLeave={handleClearMouseLeave}
            >
              <div 
                className="absolute aspect-[16/16] left-[5%] overflow-clip right-[5%] rounded-[100px] top-1/2 translate-y-[-50%] transition-colors duration-200 ease-in-out"
                style={{
                  backgroundColor: hoveredClear ? '#8B95A1' : '#b0b8c1'
                }}
              >
                <div className="absolute left-1/2 size-[5px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <div className="absolute inset-[-14%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 7 7">
                      <path
                        d={searchSvgPaths.p1d09a740}
                        stroke="var(--stroke-0, white)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}