import svgPaths from "../imports/svg-rr908iq9t3";

export function ChevronIcon({ size = 20 }: { size?: number }) {
  return (
    <div className={`relative shrink-0`} style={{ width: size, height: size }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d="M7.5 5L12.5 10L7.5 15" stroke="var(--stroke-0, #3182F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export function ChevronDownIcon({ size = 20 }: { size?: number }) {
  return (
    <div className={`relative shrink-0`} style={{ width: size, height: size }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d="M13 9L10 12L7 9" stroke="var(--stroke-0, #B0B8C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export function ChevronIcon24({ color = "#6B7684" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d="M9 6L15 12L9 18" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

export function CheckboxIcon({ path }: { path: string }) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={path} stroke="var(--stroke-0, #3182F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

export function PlusIcon() {
  return (
    <div className="bg-[rgba(49,130,246,0.2)] overflow-clip relative rounded-[100px] shrink-0 size-[24px]">
      <div className="absolute bg-[#3182f6] h-[12px] left-[11px] rounded-[999px] top-[6px] w-[2px]" />
      <div className="absolute flex h-[2px] items-center justify-center left-[6px] top-[11px] w-[12px]">
        <div className="flex-none rotate-[90deg]">
          <div className="bg-[#3182f6] h-[12px] rounded-[999px] w-[2px]" />
        </div>
      </div>
    </div>
  );
}

export function SoftmentLogo() {
  return (
    <div className="aspect-[85.04/13.95] h-full overflow-clip relative shrink-0">
      <div className="absolute bottom-[-0.06%] contents left-0 right-0 top-0">
        <div className="absolute bottom-[34.98%] left-0 right-[87.47%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
            <path d={svgPaths.p13efaa80} fill="var(--fill-0, #5A8CDC)" />
          </svg>
        </div>
        <div className="absolute bottom-[-0.07%] left-0 right-[87.46%] top-[35.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
            <path d={svgPaths.p306154f0} fill="var(--fill-0, #5A8CDC)" />
          </svg>
        </div>
        <div className="absolute inset-[9.96%_68.73%_10.11%_21.91%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 16">
            <path d={svgPaths.p28ca7b00} fill="var(--fill-0, white)" />
          </svg>
        </div>
        <div className="absolute inset-[31.54%_58%_9.96%_32.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.pe2cf900} fill="var(--fill-0, white)" />
          </svg>
        </div>
      </div>
    </div>
  );
}