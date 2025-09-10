function Component() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start px-4 py-5 relative shrink-0 w-[149px]"
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
    <div
      className="box-border content-stretch flex items-start justify-start pl-0 pr-4 py-5 relative shrink-0"
      data-name="질문"
    >
      <div className="font-['Pretendard:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[17px] text-nowrap">
        <p className="block leading-[1.6] whitespace-pre">Q. 정보 변경 신청 시 어떤 서류가 필요한가요?</p>
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
      <Component />
      <Component1 />
    </div>
  );
}