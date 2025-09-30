function Component() {
  return (
    <div
      className="box-border content-stretch flex h-full items-start justify-start px-4 py-5 relative shrink-0 w-[149px]"
      data-name="카테고리"
    >
      <div className="font-['Pretendard:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[17px] text-nowrap">
        <p className="block leading-[1.6] whitespace-pre">계약</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 w-full" data-name="질문">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-start pl-0 pr-4 py-5 relative w-full">
          <div className="font-['Pretendard:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[17px] text-nowrap">
            <p className="block leading-[1.6] whitespace-pre">Q. 정보 변경 신청 시 어떤 서류가 필요한가요?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 w-full" data-name="질문">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start leading-[0] not-italic pl-0 pr-4 py-5 relative text-[17px] w-full">
          <div
            className="font-['Pretendard:Regular',_sans-serif] min-w-full relative shrink-0 text-[#4e5968]"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[1.6]">
              서류는 공통서류와 사업자별 구비서류가 있으며, 모두 준비해 주셔야 해요.
            </p>
          </div>
          <div className="font-['Pretendard:Regular',_sans-serif] relative shrink-0 text-[#4e5968] text-nowrap">
            <p className="block leading-[1.6] whitespace-pre">자세한 내용은 아래 링크에서 확인해 주세요.</p>
          </div>
          <div className="font-['Pretendard:ExtraBold',_sans-serif] relative shrink-0 text-[#3182f6] text-nowrap">
            <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[1.6] whitespace-pre">
              확인하러 가기
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1363() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center pb-5 pl-0 pr-4 pt-0 relative w-full">
          <Component1 />
          <Component2 />
        </div>
      </div>
    </div>
  );
}

export default function Row() {
  return (
    <div
      className="bg-[#e5e8eb] box-border content-stretch flex gap-6 items-center justify-start p-0 relative rounded-2xl size-full"
      data-name="Row"
    >
      <div className="flex flex-row items-center self-stretch">
        <Component />
      </div>
      <Frame1363 />
    </div>
  );
}