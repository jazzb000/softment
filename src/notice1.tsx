"use client"
import { useState } from "react";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageContainer } from "../components/PageContainer";

export default function App() {
  const [isHovered, setIsHovered] = useState(false);
  // Footer 내부에서 자체 관리로 전환됨
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-start p-0 relative size-full"
      data-name="공지사항"
    >
      {/* Body */}
      <PageContainer className="pt-12 pb-8">
      <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Body">
        <div className="flex flex-col items-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-10 items-start justify-start px-5  py-24 lg:py-[138px] relative w-full">
            <div className="box-border content-stretch flex flex-col gap-10 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full">
                <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-0 pt-2 px-0 relative shrink-0 w-full">
                  <div
                    className="font-bold relative shrink-0 text-[#333d4b] text-3xl lg:text-[32px] tracking-[-0.32px]"
                  >
                    <p className="block leading-[1.3] whitespace-pre-wrap break-words">[공지] 전자결제 서비스 이용약관 개정에 대한 안내(25년 9월 1일 시행)</p>
                  </div>
                  <div className="font-normal relative shrink-0 text-[#8b95a1] text-xs lg:text-[15px]">
                    <p className="block leading-[1.6] whitespace-pre">2025.07.31</p>
                  </div>
                </div>
                <div className="font-normal relative shrink-0 text-[#4e5968] text-base lg:text-[17px] w-full whitespace-pre-wrap break-words">
                  <p className="leading-[1.7] mb-0">
                    <span>
                      안녕하세요, 소프트먼트입니다.
                      <br aria-hidden="true" />
                      2025년 9월 1일부로 전자결제 서비스 이용약관이 아래와 같이 개정되어 새롭게 적용됨을 공지 드립니다.
                      <br aria-hidden="true" />
                      주요 개정 사항은 아래와 같으며, 개정 약관의 전문은 첨부된 링크를 통해 확인이 가능합니다.
                      <br aria-hidden="true" />
                      <br aria-hidden="true" />
                    </span>
                    <span className="font-bold not-italic">{`<주요 개정사항>`}</span>
                  </p>
                  <ol className="list-decimal ml-6 lg:ml-8 space-y-1" start={1}>
                    <li className="whitespace-pre-wrap">
                      <span className="leading-[1.7]">{`제13조 (고객사의 책임과 의무) : 여신전문금융업법 및 신용카드 가맹점 표준약관상 가맹점의 준수사항 반영(제13조 제4항 제6호  및 제7호 추가)`}</span>
                    </li>
                    <li>
                      <span className="leading-[1.7]">
                        제16조 (개인정보, 거래정보 및 영업비밀 보호 등) : 서비스 관련 정보의 제3자 제공 관련 근거 및 범위 명확화
                        (제16조 제8항 수정)
                      </span>
                    </li>
                    <li>
                      <span className="leading-[1.7]">
                        제17조 (상품의 판매 제한・금지 등) : 판매금지 상품 목록 조정(제17조 제2항 수정)
                      </span>
                    </li>
                    <li>
                      <span className="leading-[1.7]">
                        제22조 (서비스 이용제한 등) : 서비스 이용제한 및 해지사유 보완(제22조 제1항 제2호 및 제10호 추가)
                      </span>
                    </li>
                    <li>
                      <span className="leading-[1.7]">
                        제28조 (지급보류) : 지급보류 사유 추가(제28조 제1항 제7호, 제8호, 제15호 추가, 제3호, 제9호, 제13호 수정)
                      </span>
                    </li>
                    <li>
                      <span className="leading-[1.7]">
                        제32조 (해외신용카드 서비스 특칙) : 사고결제 건 관련 손해 발생시 손해배상액 차감 지급 근거 마련(제32조
                        제3항 제2문 추가), 해외카드사의 사고결제 관련 정책 변경에 따른 수수료 부과 기준 조정(제32조 제13항 수정)
                      </span>
                    </li>
                    <li>
                      <span className="leading-[1.7]">
                        제34조 (계좌이체 서비스 특칙) : 가상계좌 제공 은행의 정책에 따른 무통장입금 사용목적 제한(제34조 제2항
                        제1호 추가)
                      </span>
                    </li>
                    <li className="whitespace-pre-wrap">
                      <span className="leading-[1.7]">{`제39조  (본인확인서비스(계좌유효성서비스) 특칙) 서비스 운영 내용과의 정합성 확보를 위한 문구 정비(제39조 제1항, 제2항 수정)`}</span>
                    </li>
                    <li>
                      <span className="leading-[1.7]">
                        제42조 (자동결제서비스 특칙) : 자동결제수단 추가에 따른 서비스 적용범위 확대(제42조 제2항, 제6항 수정)
                      </span>
                    </li>
                    <li>
                      <span className="leading-[1.7]">
                        제43조 (브랜드페이 서비스 특칙) : 브랜드페이 관련 조항 통합 및 간소화(제43조 제2항~제8항 신설,
                        제44조~제55조 삭제)
                      </span>
                    </li>
                    <li>
                      <span className="leading-[1.7]">기타 중복내용 삭제 및 표현, 오탈자 등 정비</span>
                    </li>
                  </ol>
                  <p className="leading-[1.7] mb-0">&nbsp;</p>
                  <p className="leading-[1.7] mb-0">
                    <span className="font-bold not-italic">{`<개정일자>`}</span>
                    <span>
                      <br aria-hidden="true" />
                      약관시행일 : 2025.9.1.
                      <br aria-hidden="true" />
                      고지기간: 2025.7.31.~2025.9.1.
                    </span>
                  </p>
                  <p className="leading-[1.7] mb-0">&nbsp;</p>
                  <p className="leading-[1.7]">
                    <span className="font-bold not-italic">
                      {`<이의제기 관련 사항>`}
                      <br aria-hidden="true" />
                    </span>
                    <span>
                      개정하고자 하는 전자결제서비스 이용약관과 관련하여 시행일 전까지 별도의 이의를 제기하지 않으실 경우, 본
                      내용에 동의하시는 것으로 간주 됨을 알려드립니다.
                      <br aria-hidden="true" />
                      이번 개정과 관련하여 궁금하신 사항은 고객센터(1544-7772)로 문의하여 주시기 바랍니다.
                      <br aria-hidden="true" />
                      감사합니다.
                    </span>
                  </p>
                </div>
              </div>
              <Link 
                href="/notice0"
                className={`box-border content-stretch flex flex-row items-center justify-center px-4 py-2 relative rounded-[10px] shrink-0 cursor-pointer transition-colors ${isHovered ? 'bg-[#001B371A]' : 'bg-[rgba(2,32,71,0.05)]'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="font-semibold leading-[0] not-italic relative shrink-0 text-sm lg:text-[15px] text-[rgba(3,18,40,0.7)] text-left">
                  <p className="block leading-[1.6] whitespace-pre">목록으로 돌아가기</p>
                </div>
              </Link>
            </div>
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