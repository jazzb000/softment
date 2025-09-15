interface CommerceDetailCardProps {
  onClick: () => void;
}

export default function CommerceDetailCard({ onClick }: CommerceDetailCardProps) {
  return (
    <div className="w-full cursor-pointer" onClick={onClick}>
      <div className="bg-[#194aa6] h-[300px] w-full relative rounded-[20px]">
        <div className="flex flex-col items-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-4 h-[300px] items-center justify-start p-[24px] relative w-full">
            <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
              <div className="font-bold not-italic relative shrink-0 text-[24px] text-nowrap text-white">
                <p className="leading-[1.6] whitespace-pre">커머스/소매</p>
              </div>
              <div className="bg-[rgba(49,130,246,0.2)] relative rounded-[100px] shrink-0 size-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#3182f6] h-3 w-0.5 rounded-[999px]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#3182f6] w-3 h-0.5 rounded-[999px]" />
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col font-medium gap-4 grow items-center justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-center w-full">
              <div className="relative shrink-0 text-white w-full">
                <p className="leading-[1.6]">다양한 고객의 요구가 반영된 결제수단을 제공하는 것이 중요해요. 단골 관리, 결제 전환율 분석 등 데이터 기반의 의사결정이 필요해요.</p>
              </div>
              <div className="relative shrink-0 text-[#3fd599] w-full">
                <p className="leading-[1.6]">오프라인 결제 경험, 데이터 리포트</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}