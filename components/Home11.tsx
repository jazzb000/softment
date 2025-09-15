interface SubscriptionDetailCardProps {
  onClick: () => void;
}

export default function SubscriptionDetailCard({ onClick }: SubscriptionDetailCardProps) {
  return (
    <div className="w-full cursor-pointer" onClick={onClick}>
      <div className="bg-[#194aa6] h-[300px] w-full relative rounded-[20px]">
        <div className="flex flex-col items-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-4 h-[300px] items-center justify-start p-[24px] relative w-full">
            <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
              <div className="font-bold not-italic relative shrink-0 text-[24px] text-nowrap text-white">
                <p className="leading-[1.6] whitespace-pre">구독, 자동결제</p>
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
                <p className="leading-[1.6]">손쉬운 첫 결제가 가장 중요해요. 재결제 실패 시 자동으로 추가 결제수단을 통해 재시도하는 등의 방법으로 승인율을 극대화하는 방식의 해결책을 제공하고 있어요.</p>
              </div>
              <div className="relative shrink-0 text-[#3fd599] w-full">
                <p className="leading-[1.6]">빌링, 브랜드페이</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}