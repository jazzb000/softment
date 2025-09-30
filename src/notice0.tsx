import { useState } from "react";
import Link from "next/link";
import type { Route } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SearchBox } from "../components/SearchBox";
import { TabNavigation } from "../components/TabNavigation";
import { Pagination } from "../components/Pagination";
import { PageContainer } from "../components/PageContainer";

export default function App() {
  // Footer 내부에서 자체 관리로 전환됨
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const notices: Array<{ type: string; title: string; date: string; href?: Route } > = [
    { type: "공지", title: "[공지] 전자결제 서비스 이용약관 개정에 대한 안내(25년 9월 1일 시행)", date: "2025.07.31", href: "/notice1" as Route },
    { type: "공고", title: "2024년 제4기 소프트먼트 주식회사 결산 공고", date: "2025.07.24" },
    { type: "공지", title: "서울보증보험 시스템 장애로 인한 서비스 지연 안내", date: "2025.07.15" },
    { type: "공지", title: "[작업] 퀵계좌이체 서비스 일시 중지 안내 (6월 30일 23시 ~ 7월 1일 06시)", date: "2025.07.10" },
    { type: "공지", title: "KB국민카드 금융상품 판매대리·중개업자 증서 게시", date: "2025.07.08" },
    { type: "공지", title: "퀵계좌이체 서비스 양도에 따른 개인(신용)정보 이전 및 이용약관 개정 통지", date: "2025.07.01" },
    { type: "공지", title: "간편결제 결제수수료율 공시", date: "2025.06.19" },
    { type: "공지", title: "소프트먼트 개인정보처리방침 개정 안내(2025년 7월 6일 시행)", date: "2025.06.15" },
    { type: "공지", title: "[공지] 통신과금 서비스 이용약관 변경에 대한 안내", date: "2025.06.08" },
  ];

  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-start p-0 relative size-full"
      data-name="공지사항"
    >
      {/* Body */}
      <PageContainer className="pt-24 pb-8">
      <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Body">
        <div className="flex flex-col items-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-10 lg:gap-[40px] items-start justify-start  py-12 relative w-full">
            <div
              className="font-bold  max-w-[1144px] w-full not-italic relative shrink-0 text-[#333d4b] text-3xl lg:text-[32px] text-left tracking-[-0.32px]"
            >
              <p className="block leading-[1.3]">공지사항</p>
            </div>
            
            {/* Frame1477 */}
            <div className="box-border content-stretch flex flex-col gap-6 lg:gap-[30px] items-start justify-start p-0 relative shrink-0 w-full">
              {/* SearchBox */}
              <SearchBox className="w-full" />

              {/* Table28 */}
              <div
                className="box-border content-stretch flex flex-col gap-3 lg:gap-[20px] items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Table"
              >
                <TabNavigation tabs={["전체", "공지", "공고"]} className="w-full" />

                {/* Notice Rows */}
                <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                  {notices.map((row, i) => (
                    <div
                      key={i}
                      className={`box-border content-stretch rounded-2xl w-full cursor-pointer transition-colors ${hoveredRow === i ? 'bg-[#f2f4f6]' : ''}`}
                      onMouseEnter={() => setHoveredRow(i)}
                      onMouseLeave={() => setHoveredRow(null)}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-[100px_1fr_216px] items-start lg:items-center w-full px-4 lg:px-[20px] py-3 lg:py-[16px] gap-1 lg:gap-0">
                        {/* Type */}
                        <div className="hidden lg:flex font-medium text-[#6b7684] text-[17px]">{row.type}</div>
                        <div className="lg:hidden font-medium text-[#6b7684] text-sm">{row.type}</div>
                        {/* Title */}
                        <div className="font-medium text-[#6b7684] text-base lg:text-[17px]">
                          {row.href ? (
                            <Link href={row.href} className="block leading-[1.6]">
                              {row.title}
                            </Link>
                          ) : (
                            <p className="block leading-[1.6]">{row.title}</p>
                          )}
                        </div>
                        {/* Date */}
                        <div className="hidden lg:flex items-center justify-end font-medium text-[#8b95a1] text-[15px]">{row.date}</div>
                        <div className="lg:hidden font-medium text-[#8b95a1] text-xs mt-1">{row.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Frame1366 - Pagination */}
            <Pagination
              pageNumbers={[1, 2, 3, 4, 5, 16]}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              showDots={true}
              showPrevNext={true}
            />
          </div>
        </div>
      </div>
      </PageContainer>

      <Navbar
        onMenuClick={(item) => console.log('Menu click:', item)}
        onActionClick={(item) => console.log('Action click:', item)}
        onApplyClick={() => console.log('GNB 이용 신청하기 클릭')}
      />

      <Footer />
    </div>
  );
}
