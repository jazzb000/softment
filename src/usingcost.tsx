import { HeroApplyButton } from "../components/HeroApplyButton";
import { QuestionIcon } from "../components/QuestionIcon";
import { useState } from 'react';
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageContainer } from "../components/PageContainer";
import { PageSection } from "../components/PageSection";
import { FeatureGrid } from "../components/FeatureGrid";

export default function Usingcost() {
  // Footer 내부에서 자체 관리로 전환됨
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-start p-[0px] relative size-full">
      {/* Hero Section */}
      <div className="bg-[#194aa6] relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center pb-[0px] pt-[60px] px-[20px] md:px-[100px] xl:px-[390px] relative w-full">
            <div className="box-border content-stretch flex flex-col gap-[32px] h-[300px] md:h-[400px] items-center justify-center p-[0px] relative shrink-0 w-full md:w-[260px]">
              <div className="font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[28px] md:text-[48px] text-center md:text-left" style={{ width: "min-content" }}>
                <p className="block leading-[1.3] whitespace-pre">이용요금 안내</p>
              </div>
              <HeroApplyButton onClick={() => console.log('Hero 이용 신청하기 클릭')} />
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <PageContainer className="pb-[160px]">
        {/* Section 1: Key Features */}
        <PageSection spacing="lg" id="key-features">
          <FeatureGrid columns={2} gap="lg">
            {/* Left - 보증보험 면제 */}
            <div className="box-border content-stretch flex flex-col gap-[60px] md:gap-[90px] items-start justify-start p-[0px] relative w-full">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-[0px] relative shrink-0">
                <div className="font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#2272eb] text-[28px] md:text-[48px] text-left">
                  <p className="block leading-[1.5]">보증보험 면제</p>
                </div>
                <div className="box-border content-stretch flex flex-row gap-[8px] items-center justify-center pb-[0px] pt-[8px] px-[0px] relative shrink-0">
                  <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[16px] md:text-[20px] text-left">
                    <p className="block leading-[1.5] whitespace-pre-wrap lg:whitespace-pre">정산한도 1,000만원까지 <br className="lg:hidden"/>보증보험 면제 혜택</p>
                  </div>
                  <QuestionIcon tooltipText="보증보험 금액은 업종, 판매 물품에 따라 변동가능합니다" />
                </div>  
              </div>
              <div className="box-border content-stretch flex flex-row gap-[12px] items-center justify-start p-[0px] relative shrink-0">
                <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#d1d6db] text-[28px] md:text-[48px] text-left text-nowrap">
                  <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[1.5] whitespace-pre">
                    5,000,000원
                  </p>
                </div>
                <div className="bg-[rgba(49,130,246,0.16)] box-border content-stretch flex flex-row items-center justify-center px-[8px] py-[0px] relative rounded-[100px] shrink-0">
                  <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#1b64da] text-[12px] text-left text-nowrap">
                    <p className="block leading-[22px] whitespace-pre">면제</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - 평균 5일 이내 정산 */}
            <div className="box-border content-stretch flex flex-col gap-[32px] items-start justify-start p-[0px] relative w-full">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-[0px] relative shrink-0">
                <div className="font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#2272eb] text-[28px] md:text-[48px] text-left">
                  <p className="block leading-[1.5]">평균 5일 이내 정산</p>
                </div>
                <div className="box-border content-stretch flex flex-row gap-[8px] items-center justify-center pb-[0px] pt-[8px] px-[0px] relative shrink-0">
                  <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[16px] md:text-[20px] text-left">
                    <p className="block leading-[1.5] whitespace-pre-wrap lg:whitespace-pre">가맹점의 원활한 현금 흐름을 위한 <br className="lg:hidden"/>짧은 정산주기</p>
                  </div>
                  <QuestionIcon tooltipText="영업일 기준, 업종과 판매물품에 따라 변동가능하며 국내 결제서비스만 해당합니다" />
                </div>
              </div>
              <div className="box-border content-stretch flex flex-row gap-[16px] items-end justify-start p-[0px] relative shrink-0">
                <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-start overflow-clip p-[0px] relative shrink-0 w-[120px]">
                  <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[17px] text-left text-nowrap">
                    <p className="block leading-[1.6] whitespace-pre">15일</p>
                  </div>
                  <div className="bg-[#d1d6db] h-[80px] lg:h-[100px] xl:h-[120px] rounded-lg shrink-0 w-[60px]" />
                  <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[15px] text-left text-nowrap">
                    <p className="block leading-[1.6] whitespace-pre">PG 업계 평균</p>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-start overflow-clip p-[0px] relative shrink-0 w-[120px]">
                  <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#3182f6] text-[17px] text-left text-nowrap">
                    <p className="block leading-[1.6] whitespace-pre">5일 이내</p>
                  </div>
                  <div className="bg-[#3182f6] h-[26px] lg:h-[33px] xl:h-[40px] rounded-lg shrink-0 w-[60px]" />
                  <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[15px] text-left text-nowrap">
                    <p className="block leading-[1.6] whitespace-pre">소프트먼트 평균</p>
                  </div>
                </div>
              </div>
            </div>
          </FeatureGrid>
        </PageSection>

        {/* Section 2: Pricing */}
        <PageSection spacing="lg" id="pricing">
          <div className="flex flex-col gap-[24px] w-full">
            <div className="h-[47px] relative shrink-0 w-full">
              <div 
                className="absolute font-semibold inset-0 leading-[0] not-italic text-[24px] md:text-[36px] text-left cursor-pointer transition-colors duration-200"
                style={{ color: hoveredSection === 'usage' ? '#0056b3' : '#333d4b' }}
                onMouseEnter={() => setHoveredSection('usage')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <p className="block leading-[1.3]">이용 요금</p>
              </div>
            </div>
            <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-[16px] items-stretch w-full">
              <div className="relative rounded-2xl border border-[#d1d6db]">
                <div className="flex flex-col lg:flex-row gap-[12px] lg:gap-[32px] items-start lg:items-center p-[16px] lg:p-[32px] w-full">
                  <div className="font-bold leading-[0] not-italic text-[#3182f6] text-[20px] lg:text-[22px] xl:text-[24px] text-left text-nowrap">
                    <p className="block leading-[1.6] whitespace-pre">가입비</p>
                  </div>
                  <div className="flex flex-row gap-[8px] items-center text-[20px] lg:text-[22px] xl:text-[24px] text-left">
                    <div className="font-bold text-[#333d4b]">
                      <p className="block leading-[1.6] text-nowrap whitespace-pre">220,000원</p>
                    </div>
                    <div className="font-semibold text-[#6b7684]">
                      <p className="block leading-[1.6] text-nowrap whitespace-pre">최초 1회</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl border border-[#d1d6db]">
                <div className="flex flex-col lg:flex-row gap-[12px] lg:gap-[32px] items-start lg:items-center p-[16px] lg:p-[32px] w-full">
                  <div className="font-bold leading-[0] not-italic text-[#3182f6] text-[20px] lg:text-[22px] xl:text-[24px] text-left text-nowrap">
                    <p className="block leading-[1.6] whitespace-pre">연관리비</p>
                  </div>
                  <div className="flex flex-row gap-[8px] items-center text-[20px] lg:text-[22px] xl:text-[24px] text-left">
                    <div className="font-bold text-[#333d4b]">
                      <p className="block leading-[1.6] text-nowrap whitespace-pre">110,000원</p>
                    </div>
                    <div className="font-semibold text-[#6b7684]">
                      <p className="block leading-[1.6] text-nowrap whitespace-pre">연 1회</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="font-normal leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[16px] lg:text-[18px] xl:text-[20px] text-left space-y-[4px]">
              <li className="relative pl-[18px]">
                <span className="absolute left-0 top-[1em]">＊</span>
                <span className="leading-[1.6]">가입비와 연관리비는 가맹점의 계약형태에 <br className="lg:hidden"/>따라 상이할 수 있습니다</span>
              </li>
            </ul>
          </div>
        </PageSection>

        {/* Section 3: Payment Fees */}
        <PageSection spacing="lg" id="payment-fees">
          <div className="flex flex-col gap-[40px] w-full">
            <div className="h-[47px] relative shrink-0 w-full">
              <div 
                className="absolute font-semibold inset-0 leading-[0] not-italic text-[24px] md:text-[36px] text-left cursor-pointer transition-colors duration-200"
                style={{ color: hoveredSection === 'payment' ? '#0056b3' : '#333d4b' }}
                onMouseEnter={() => setHoveredSection('payment')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <p className="block leading-[1.3]">결제 수수료</p>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col items-start justify-start w-full border-t border-[#e5e8eb]">
              {/* 신용카드 */}
              <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[248px_1fr] gap-[8px] py-[20px] lg:py-[24px] w-full border-b border-[#e5e8eb]">
                <div className="font-normal leading-[0] not-italic text-[#4e5968] text-[20px] text-left text-nowrap pr-[24px]"> 
                  <p className="block leading-[1.6] whitespace-pre">신용∙체크카드</p>
                </div>
                <div className="font-semibold leading-[0] not-italic text-[#4e5968] text-[20px] text-right lg:text-left">
                  <p className="block leading-[1.6] whitespace-pre">일반 3.4%</p>
                </div>
              </div>

              {/* 가상계좌 */}
              <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[248px_1fr] gap-[8px] py-[20px] lg:py-[24px] w-full border-b border-[#e5e8eb]">
                <div className="font-normal leading-[0] not-italic text-[#4e5968] text-[20px] text-left text-nowrap pr-[24px]">
                  <p className="block leading-[1.6] whitespace-pre">가상계좌</p>
                </div>
                <div className="font-semibold leading-[0] not-italic text-[#4e5968] text-[20px] text-right lg:text-left">
                  <p className="block leading-[1.6] whitespace-pre">건당 400원</p>
                </div>
              </div>

              {/* 간편결제 */}
              <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[248px_1fr] gap-[8px] py-[20px] lg:py-[24px] w-full border-b border-[#e5e8eb]">
                <div className="font-normal leading-[0] not-italic text-[#4e5968] text-[20px] text-left text-nowrap pr-[24px]">
                  <p className="block leading-[1.6] whitespace-pre">간편결제</p>
                </div>
                <div className="text-right lg:text-left">
                  <div className="font-semibold leading-[0] not-italic text-[#4e5968] text-[20px]">
                    <p className="block leading-[1.6] whitespace-pre">3.4%</p>
                  </div>
                  <div className="mt-[4px] font-normal leading-[0] not-italic text-[#6b7684] text-[17px]">
                    <p className="block leading-[1.6] whitespace-pre-wrap lg:whitespace-pre">＊ 일부 간편결제 서비스 추가 수수료 부과</p>
                  </div>
                </div>
              </div>

              {/* 상품권 결제 */}
              <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[248px_1fr] gap-[8px] py-[20px] lg:py-[24px] w-full border-b border-[#e5e8eb]">
                <div className="font-normal leading-[0] not-italic text-[#4e5968] text-[20px] text-left text-nowrap pr-[24px]">
                  <p className="block leading-[1.6] whitespace-pre">상품권 결제</p>
                </div>
                <div className="font-semibold leading-[0] not-italic text-[#4e5968] text-[20px] text-right lg:text-left">
                  <p className="block leading-[1.6] whitespace-pre">9.0%</p>
                </div>
              </div>

              {/* 휴대폰 결제 */}
              <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[248px_1fr] gap-[8px] py-[20px] lg:py-[24px] w-full border-b border-[#e5e8eb]">
                <div className="font-normal leading-[0] not-italic text-[#4e5968] text-[20px] text-left text-nowrap pr-[24px]">
                  <p className="block leading-[1.6] whitespace-pre">휴대폰 결제</p>
                </div>
                <div className="font-semibold leading-[0] not-italic text-[#4e5968] text-[20px] text-right lg:text-left">
                  <p className="block leading-[1.6] whitespace-pre-wrap lg:whitespace-pre">실물상품 3.5%, <br className="block lg:hidden"/>디지털 상품 (콘텐츠 7.0%,<br className="block lg:hidden"/> 애플리케이션 전용 8.0%)</p>
                </div>
              </div>

              {/* 계좌이체 */}
              <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[248px_1fr] gap-[8px] py-[20px] lg:py-[24px] w-full border-b border-[#e5e8eb]">
                <div className="font-normal leading-[0] not-italic text-[#4e5968] text-[20px] text-left text-nowrap pr-[24px]">
                  <p className="block leading-[1.6] whitespace-pre">계좌이체 </p>
                </div>
                <div className="font-semibold leading-[0] not-italic text-[#4e5968] text-[20px] text-right lg:text-left">
                  <p className="block leading-[1.6] whitespace-pre">2.0% (최저 건당 200원)</p>
                </div>
              </div>

              {/* 에스크로 */}
              <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[248px_1fr] gap-[8px] py-[20px] lg:py-[24px] w-full border-b border-[#e5e8eb]">
                <div className="font-normal leading-[0] not-italic text-[#4e5968] text-[20px] text-left text-nowrap pr-[24px]">
                  <p className="block leading-[1.6] whitespace-pre">에스크로</p>
                </div>
                <div className="font-semibold leading-[0] not-italic text-[#4e5968] text-[20px] text-right lg:text-left">
                  <p className="block leading-[1.6] whitespace-pre-wrap lg:whitespace-pre">신용∙체크카드 0.2%,<br className="block lg:hidden"/> 계좌이체 0.2%,<br className="block lg:hidden"/> 가상계좌 건당 200원</p>
                </div>
              </div>

              {/* CMS */}
              <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[248px_1fr] gap-[8px] py-[20px] lg:py-[24px] w-full border-b border-[#e5e8eb]">
                <div className="font-normal leading-[0] not-italic text-[#4e5968] text-[20px] text-left text-nowrap pr-[24px]">
                  <p className="block leading-[1.6] whitespace-pre">CMS(계좌 유효성 인증)</p>
                </div>
                <div className="font-semibold leading-[0] not-italic text-[#4e5968] text-[20px] text-right lg:text-left">
                  <p className="block leading-[1.6] whitespace-pre">건당 50원</p>
                </div>
              </div>

              {/* 브랜드페이 */}
              <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[248px_1fr] gap-[8px] py-[20px] lg:py-[24px] w-full border-b border-[#e5e8eb]">
                <div className="font-normal leading-[0] not-italic text-[#4e5968] text-[20px] text-left text-nowrap pr-[24px]">
                  <p className="block leading-[1.6] whitespace-pre">브랜드페이</p>
                </div>
                <div className="font-semibold leading-[0] not-italic text-[#4e5968] text-[20px] text-right lg:text-left">
                  <p className="block leading-[1.6] whitespace-pre">신용∙체크카드 4.3%</p>
                </div>
              </div>
            </div>
            <ul className="box-border content-stretch flex flex-col font-normal items-start justify-start leading-[0] not-italic p-[0px] relative shrink-0 text-[#6b7684] text-[17px] text-left w-full lg:w-[959px] space-y-[6px]">
              <li className="relative pl-[18px]"><span className="absolute left-0 top-[1em]">＊</span><span className="leading-[1.6]">부가세(VAT) 10% 별도</span></li>
              <li className="relative pl-[18px]"><span className="absolute left-0 top-[1em]">＊</span><span className="leading-[1.6]">호스팅사를 통해 가입할 경우, 호스팅사 정책에 따라 적용돼요.</span></li>
              <li className="relative pl-[18px]"><span className="absolute left-0 top-[1em]">＊</span><span className="leading-[1.6]">간편결제 서비스 추가수수료는 각 간편결제사의 정책에 따라 달라질 수 있어요.</span></li>
              <li className="relative pl-[18px]"><span className="absolute left-0 top-[1em]">＊</span><span className="leading-[1.6] break-words">영 · 중소 카드 수수료율 우대 혜택 : 신규 사업자는 가입 시 '일반' 등급으로 적용되고, 매년 1・7월 국세청에서 명단을 받아 자동으로 반영, 환급해드려요.</span></li>
            </ul>
          </div>
        </PageSection>

        {/* Section 4: International Payment Fees */}
        <PageSection spacing="lg" id="international-fees">
          <div className="flex flex-col gap-[40px] w-full">
            <div className="h-[31px] lg:h-[39px] xl:h-[47px] relative shrink-0 w-full">
              <div 
                className="absolute font-semibold inset-0 leading-[0] not-italic text-[24px] md:text-[36px] text-left cursor-pointer transition-colors duration-200"
                style={{ color: hoveredSection === 'international' ? '#0056b3' : '#333d4b' }}
                onMouseEnter={() => setHoveredSection('international')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <p className="block leading-[1.3]">해외 결제 수수료</p>
              </div>
            </div>
            <div className="w-full border-t border-[#e5e8eb]">
              {/* 헤더 - 데스크탑에서만 표시 */}
              <div className="hidden lg:grid grid-cols-[248px_248px_248px_1fr] gap-[8px] py-[24px] w-full border-b border-[#e5e8eb]">
                <div></div>
                <div className="font-medium leading-[0] not-italic text-[#8b95a1] text-[17px] text-left text-nowrap pr-[24px]">
                  <p className="block leading-[1.6] whitespace-pre">기본 수수료</p>
                </div>
                <div className="flex flex-row gap-[8px] items-center pr-[24px]">
                  <div className="font-medium leading-[0] not-italic text-[#8b95a1] text-[17px] text-left text-nowrap">
                    <p className="block leading-[1.6] whitespace-pre">고정 수수료</p>
                  </div>
                  <QuestionIcon tooltipText="결제 건당 고정으로 부과되는 수수료입니다" />
                </div>
                <div className="flex flex-row gap-[8px] items-center pr-[24px]">
                  <div className="font-medium leading-[0] not-italic text-[#8b95a1] text-[17px] text-left text-nowrap">
                    <p className="block leading-[1.6] whitespace-pre">환전・인출 수수료</p>
                  </div>
                  <QuestionIcon tooltipText="해외 결제 수익금을 원화로 환전하거나 인출할 때 부과되는 수수료입니다" />
                </div>
              </div>

              {/* 페이팔 */}
              <div className="grid grid-cols-1 lg:grid-cols-[248px_248px_248px_1fr] gap-[8px] py-[20px] lg:py-[24px] w-full border-b border-[#e5e8eb]">
                <div className="font-semibold leading-[0] not-italic text-[#4e5968] text-[20px] text-left text-nowrap pr-[24px]">
                  <p className="block leading-[1.6] whitespace-pre">페이팔</p>
                </div>
                
                {/* 모바일: 세로 배치, 데스크탑: 가로 배치 */}
                <div className="lg:hidden grid grid-cols-[1fr_auto] gap-[8px] mb-[8px]">
                  <div className="font-medium text-[#8b95a1] text-[17px] text-left">기본 수수료</div>
                  <div className="font-semibold text-[#4e5968] text-[20px] text-right">4.0%</div>
                </div>
                <div className="lg:hidden grid grid-cols-[1fr_auto] gap-[8px] mb-[8px]">
                  <div className="flex gap-[8px] items-center">
                    <div className="font-medium text-[#8b95a1] text-[17px] text-left">고정 수수료</div>
                    <QuestionIcon tooltipText="결제 건당 고정으로 부과되는 수수료입니다" />
                  </div>
                  <div className="font-semibold text-[#4e5968] text-[20px] text-right">+ 건당 0.3 USD</div>
                </div>
                <div className="lg:hidden grid grid-cols-[1fr_auto] gap-[8px]">
                  <div className="flex gap-[8px] items-center">
                    <div className="font-medium text-[#8b95a1] text-[17px] text-left">환전・인출 수수료</div>
                    <QuestionIcon tooltipText="해외 결제 수익금을 원화로 환전하거나 인출할 때 부과되는 수수료입니다" />
                  </div>
                  <div className="font-semibold text-[#4e5968] text-[20px] text-right">+ 1.94%</div>
                </div>

                {/* 데스크탑: 가로 배치 */}
                <div className="hidden lg:block font-semibold leading-[0] not-italic text-[#4e5968] text-[20px] text-left pr-[24px]">
                  <p className="block leading-[1.6] whitespace-pre">4.0%</p>
                </div>
                <div className="hidden lg:block font-semibold leading-[0] not-italic text-[#4e5968] text-[20px] text-left pr-[24px]">
                  <p className="block leading-[1.6] whitespace-pre">+ 건당 0.3 USD</p>
                </div>
                <div className="hidden lg:block font-semibold leading-[0] not-italic text-[#4e5968] text-[20px] text-left pr-[24px]">
                  <p className="block leading-[1.6] whitespace-pre">+ 1.94%</p>
                </div>
              </div>
            </div>
            <ul className="box-border content-stretch flex flex-col font-normal items-start justify-start leading-[0] not-italic p-[0px] relative shrink-0 text-[#6b7684] text-[17px] text-left w-full lg:w-[959px] space-y-[6px]">
              <li className="relative pl-[18px]"><span className="absolute left-0 top-[1em]">＊</span><span className="leading-[1.6]">부가세(VAT) 10% 별도</span></li>
              <li className="relative pl-[18px]"><span className="absolute left-0 top-[1em]">＊</span><span className="leading-[1.6]">상점 결제통화 : USD (EUR, JPY, HKD, GBP, AUD, SGD 지원예정)</span></li>
              <li className="relative pl-[18px]"><span className="absolute left-0 top-[1em]">＊</span><span className="leading-[1.6]">정산통화 : KRW (USD 지원 예정)</span></li>
              <li className="relative pl-[18px]"><span className="absolute left-0 top-[1em]">＊</span><span className="leading-[1.6]">정산주기 : 기본 주정산 + 4일 (일요일 기준으로 4영업일 뒤 지급)</span></li>
              <li className="relative pl-[18px]"><span className="absolute left-0 top-[1em]">＊</span><span className="leading-[1.6]">페이팔은 결제취소 발생 시 원 거래수수료가 반환되지 않아요.</span></li>
            </ul>
          </div>
        </PageSection>
      </PageContainer>

      {/* GNB */}
      <Navbar
        onMenuClick={(item) => console.log('Menu click:', item)}
        onActionClick={(item) => console.log('Action click:', item)}
        onApplyClick={() => console.log('GNB 이용 신청하기 클릭')}
      />
      {/* 푸터 */}
      <Footer />
    </div>
  );
}