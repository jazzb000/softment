import svgPaths from "./svg-sy2kf54r0x";

function IconSearch() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon/Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon/Search">
          <path
            d={svgPaths.p11655bf0}
            id="Vector"
            stroke="var(--stroke-0, #B0B8C1)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p17e1580}
            id="Vector_2"
            stroke="var(--stroke-0, #B0B8C1)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame1360() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <div className="h-[18px] relative shrink-0 w-0" data-name="Caret">
        <div
          className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0"
          style={{ "--stroke-0": "rgba(51, 61, 75, 1)" } as React.CSSProperties}
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            role="presentation"
            viewBox="0 0 2 18"
          >
            <path d="M1 0V18" id="Caret" stroke="var(--stroke-0, #333D4B)" />
          </svg>
        </div>
      </div>
      <div className="basis-0 font-['Pretendard:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-[rgba(3,24,50,0.46)] text-left">
        <p className="block leading-[1.6]">검색어를 입력해 주세요.</p>
      </div>
      <div className="basis-0 font-['Pretendard:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-[rgba(0,12,30,0.8)] text-left">
        <p className="block leading-[1.6]">검색어를 입력해 주세요.</p>
      </div>
    </div>
  );
}

function Frame1361() {
  return (
    <div className="absolute aspect-[16/16] bg-[#b0b8c1] left-[5.56%] overflow-clip right-[5.56%] rounded-[100px] top-1/2 translate-y-[-50%]">
      <div className="absolute left-1/2 size-[5px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Vector">
        <div
          className="absolute inset-[-14%]"
          style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 7 7">
            <path
              d={svgPaths.p1d09a740}
              id="Vector"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
      <Frame1361 />
    </div>
  );
}

function Frame1362() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-[5px] pr-0 py-0 relative shrink-0">
      <Icon />
    </div>
  );
}

export default function SearchBox() {
  return (
    <div className="bg-[#ffffff] relative rounded-xl size-full" data-name="Search Box">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start overflow-clip px-3.5 py-0 relative size-full">
          <IconSearch />
          <Frame1360 />
          <Frame1362 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#3182f6] border-solid inset-0 pointer-events-none rounded-xl"
      />
    </div>
  );
}