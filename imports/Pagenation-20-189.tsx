function PagenationNumNIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="Pagenation/Num n Icon">
      <div className="absolute font-['Pretendard:SemiBold',_sans-serif] inset-0 leading-[0] not-italic text-[#6b7684] text-[15px] text-center">
        <p className="block leading-[1.6]">1</p>
      </div>
    </div>
  );
}

export default function Pagenation() {
  return (
    <div
      className="bg-[rgba(2,32,71,0.05)] box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[100px] size-full"
      data-name="Pagenation"
    >
      <PagenationNumNIcon />
    </div>
  );
}