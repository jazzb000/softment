import Link from "next/link";
import type { Route } from "next";

function PrimaryButton({ href, children }: { href: Route; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="box-border content-stretch flex items-center justify-center px-[12px] py-[9px] rounded-[10px] bg-[#3182f6] text-white font-semibold text-[16px] lg:text-[18px] leading-[1.5] cursor-pointer transition-colors duration-200 hover:bg-[#2272EB]"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ href, children }: { href: Route; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="box-border content-stretch flex items-center justify-center px-[12px] py-[9px] rounded-[10px] bg-[rgba(100,168,255,0.15)] text-[#3182f6] font-semibold text-[16px] lg:text-[18px] leading-[1.5] cursor-pointer transition-colors duration-200 hover:bg-[rgba(100,168,255,0.34)]"
    >
      {children}
    </Link>
  );
}

function DeviceMockup() {
  return (
    <div className="w-full flex justify-center lg:justify-end">
      <div className="relative w-[240px] h-[498px] hidden lg:block">
        <div className="absolute inset-0 bg-white rounded-[36.26px]" />
        <div aria-hidden className="absolute inset-0 border-[0.662px] border-[rgba(0,0,0,0.15)] border-solid rounded-[36.26px] pointer-events-none shadow-[0px_30px_24px_rgba(0,0,0,0.05)]" />
        <img className="absolute inset-[10px] w-[calc(100%-20px)] h-[calc(100%-20px)] rounded-[28px] object-cover" src="/images/replaceimgfill.png" />
      </div>
      <div className="relative w-full max-w-[280px] lg:hidden">
        <div className="w-full rounded-[32px] bg-white p-2 shadow-[0px_24px_20px_rgba(0,0,0,0.05)]">
          <img className="block w-full h-auto rounded-[28px]" src="/images/replaceimgfill.png" />
        </div>
      </div>
    </div>
  );
}

export default function MainServicesSection() {
  return (
    <div className="bg-[#191f28] relative shrink-0 w-full">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-16 lg:gap-[96px] items-start justify-between px-5 lg:px-[188px] py-16 lg:py-[180px] relative w-full">
          {/* Card 1 */}
          
            <div className="bg-white rounded-[20px] w-full overflow-hidde grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[24px] p-6 lg:p-[40px]">
              <div className="flex flex-col gap-6 h-auto lg:h-[500px] lg:gap-[24px]">
                <div className="flex flex-col gap-[10px]">
                  <div className="bg-[rgba(78,89,104,0.16)] w-11 inline-flex items-center justify-center px-[8px] py-[4px] rounded-[10px]">
                    <span className="font-bold text-[12px] text-[#4e5968]">기본</span>
                  </div>
                  <h3 className="font-bold text-[#333d4b] text-2xl lg:text-[32px] leading-[1.3]">
                    개발자 없이 운영하는<br />결제 관리
                  </h3>
                </div>
                <p className="text-[#4e5968] text-base lg:text-[20px] leading-[1.6]">
                  구매자가 보는 주문서 화면에 결제위젯으로<br className="hidden lg:block"/> 결제수단 관리와 프로모션, 혜택 노출 여부 등 <br className="hidden lg:block"/> 개발자 없이도 어드민에서 쉽게 설정할 수 있어요.
                </p>
                <div className="flex gap-3">
                  <PrimaryButton href="/paymentwidget">결제위젯 알아보기</PrimaryButton>
                  <SecondaryButton href="/paymentwidget">체험하기</SecondaryButton>
                </div>
              </div>
              {/* visual (hidden on desktop for first card) */}
              <div className="w-full rounded-[20px] bg-[rgba(0,23,51,0.02)] flex items-center justify-center py-10">
                <span className="text-[#3182f6] font-['Pretendard']">화면 디자인</span>
              </div>
            </div>
          
          {/* Card 2 */}
          <div className="bg-white rounded-[20px] w-full overflow-hidden h-[500px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[24px] p-6 lg:p-[40px] items-start">
              <div className="flex flex-col gap-6 lg:gap-[24px]">
                <h3 className="font-bold text-[#333d4b] text-2xl lg:text-[32px] leading-[1.3]">
                  3주 만에 만드는<br />우리 회사 간편결제
                </h3>
                <p className="text-[#4e5968] text-base lg:text-[20px] leading-[1.6]">
                  6개월 이상 걸리는 개발을 단 3주 만에! 우리 회사에 최적화된 간편결제로 편리한 재구매와 높은 결제 전환율을 만들어보세요.
                </p>
                <div className="flex gap-3">
                  <PrimaryButton href="/brandpay">브랜드페이 알아보기</PrimaryButton>
                  <SecondaryButton href="/brandpay">체험하기</SecondaryButton>
                </div>
                {/* mobile mockup */}
                <div className="lg:hidden"><DeviceMockup /></div>
              </div>
              {/* desktop mockup */}
              <div className="hidden lg:block mt-20 mr-20"><DeviceMockup /></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[20px] w-full overflow-hidden h-[500px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[24px] p-6 lg:p-[40px] items-start">
              <div className="flex flex-col gap-6 lg:gap-[24px]">
                <h3 className="font-bold text-[#333d4b] text-2xl lg:text-[32px] leading-[1.3]">
                  계좌 등록 한 번이면 끝나는<br />빠른 계좌이체
                </h3>
                <p className="text-[#4e5968] text-base lg:text-[20px] leading-[1.6]">
                  한 번 계좌를 등록하면 비밀번호로 결제가 가능한 퀵계좌이체로 낮은 수수료와 높은 매출을 경험해 보세요.
                </p>
                <div className="flex gap-3">
                  <PrimaryButton href="/quick">퀵계좌이체 알아보기</PrimaryButton>
                  <SecondaryButton href="/quick">체험하기</SecondaryButton>
                </div>
                {/* mobile mockup */}
                <div className="lg:hidden"><DeviceMockup /></div>
              </div>
              {/* desktop mockup */}
              <div className="hidden lg:block mt-20 mr-20"><DeviceMockup /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}