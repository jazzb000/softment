import { ChevronIcon24 } from "./Home12";

type Item = { title: string; subtitle?: string };

function ServiceItemCard({ title, subtitle }: Item) {
  return (
    <div className="w-full rounded-[20px] bg-white">
      <div className="flex flex-row items-center justify-between px-5 py-4">
        <div className="flex min-w-0 flex-col">
          <p className="font-bold text-[#333d4b] text-base lg:text-[20px] leading-[1.6] break-words">{title}</p>
          {subtitle ? (
            <p className="text-[#6b7684] text-sm lg:text-[14px] leading-[1.6] break-words">{subtitle}</p>
          ) : null}
        </div>
        <div className="ml-3 flex-shrink-0">
          <ChevronIcon24 />
        </div>
      </div>
    </div>
  );
}

function ServiceCategory({ title, items }: { title: string; items: Item[] }) {
  return (
    <section className="w-full">
      <h3 className="font-bold text-[#333d4b] text-lg lg:text-[24px] leading-[1.6] mb-4 lg:mb-[16px] break-words">
        {title}
      </h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[16px]">
        {items.map((it, idx) => (
          <ServiceItemCard key={`${title}-${idx}`} title={it.title} subtitle={it.subtitle} />
        ))}
      </div>
    </section>
  );
}

export default function AllServicesSection() {
  return (
    <div className="w-full flex flex-col gap-10 lg:gap-[64px]">
      <div className="w-full">
        <h2 className="font-bold text-[#333d4b] text-3xl lg:text-[48px] leading-[1.3] text-left lg:text-center break-words">
          소프트먼트
          <br aria-hidden="true" />
          전체 서비스 모아보기
        </h2>
      </div>

      <ServiceCategory
        title="기본 결제서비스"
        items={[
          { title: "신용카드" },
          { title: "계좌이체" },
          { title: "간편결제" },
          { title: "가상계좌" },
          { title: "상품권 결제" },
          { title: "휴대폰 결제" },
        ]}
      />

      <ServiceCategory
        title="맞춤 결제서비스"
        items={[
          { title: "브랜드페이", subtitle: "(자체 간편결제)" },
          { title: "빌링", subtitle: "(자동결제)" },
          { title: "키인결제" },
          { title: "안심키인" },
        ]}
      />

      <ServiceCategory
        title="외화 결제서비스"
        items={[
          { title: "해외간편결제", subtitle: "(페이팔)" },
          { title: "해외카드" },
        ]}
      />

      <ServiceCategory
        title="오프라인 결제서비스"
        items={[
          { title: "오프라인 단말 결제" },
          { title: "오프라인 결제", subtitle: "(페이나우비즈)" },
        ]}
      />

      <ServiceCategory
        title="부가서비스"
        items={[
          { title: "법인카드 결제" },
          { title: "지역화폐 결제" },
          { title: "VAN" },
          { title: "무이자 할부" },
          { title: "정산지급대행 서비스" },
          { title: "에스크로" },
          { title: "계좌 유효성 인증" },
          { title: "상점관리자" },
          { title: "자금관리서비스", subtitle: "(CMS)" },
          { title: "현금영수증 무료 발급 서비스" },
        ]}
      />
    </div>
  );
}