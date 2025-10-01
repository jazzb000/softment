import { LinkButton } from "../components/LinkButton";
import { HeroApplyButton } from "../components/HeroApplyButton";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageContainer } from "../components/PageContainer";
import Link from "next/link";

// 아이콘 이미지
const iconCreditCard = "/icon/신용카드.png";
const iconBankTransfer = "/icon/계좌이체.png";
const iconSimplePay = "/icon/간편결제.png";
const iconVirtualAccount = "/icon/가상계좌.png";
const iconBilling = "/icon/빌링(자동결제).png";
const iconKeyIn = "/icon/키인결제.png";
const iconPaypal = "/icon/해외간편결제(페이팔).png";
const iconForeignCard = "/icon/해외카드.png";
const iconInstallment = "/icon/무이자 할부.png";
const iconSettlement = "/icon/정산지급대행 서비스.png";
const iconAccountVerification = "/icon/계좌 유효성 인증.png";
const iconStoreManager = "/icon/상점관리자.png";

export default function Paymentservice() {
  // Footer 내부에서 자체 관리로 전환됨
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-start p-[0px] relative size-full">
      {/* Hero Section */}
      <div className="bg-[#194aa6] relative shrink-0 w-full" data-name="Hero Section">
        <div className="flex flex-row items-center justify-center relative size-full">
          <PageContainer className="pt-[60px]">
            <div className="box-border content-stretch flex flex-col gap-[32px] h-[300px] md:h-[400px] items-center justify-center p-[0px] relative shrink-0" data-name="Hero Text">
              <div className="box-border content-stretch flex flex-col font-bold items-center justify-start leading-[0] not-italic p-[0px] relative shrink-0 text-[#ffffff] text-[28px] md:text-[48px] text-left text-nowrap">
                <div className="relative shrink-0">
                  <p className="block leading-[1.3] text-nowrap whitespace-pre">온라인 비즈니스에 필요한</p>
                </div>
                <div className="relative shrink-0">
                  <p className="block leading-[1.3] text-nowrap whitespace-pre">모든 결제 서비스</p>
                </div>
              </div>
              <HeroApplyButton onClick={() => console.log('Hero 이용 신청하기 클릭')} />
            </div>
          </PageContainer>
        </div>
      </div>

      {/* Body */}
      <PageContainer className="pb-[120px] md:pb-[140px] xl:pb-[160px] pt-[80px] md:pt-[100px] xl:pt-[120px]">
        <div className="flex flex-col gap-[72px] md:gap-[90px] xl:gap-[108px] items-start justify-start w-full" data-name="Contents">
          
          {/* 기본 결제서비스 */}
          <div className="box-border content-stretch flex flex-col gap-[32px] md:gap-[40px] xl:gap-[48px] items-start justify-start relative shrink-0 w-full" data-name="기본 결제서비스">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-[0px] relative shrink-0 w-full" data-name="Title">
              <div className="h-[35px] md:h-[41px] xl:h-[47px] relative shrink-0 w-full" data-name="Section Title">
                <div className="absolute font-semibold inset-0 leading-[0] not-italic text-[#333d4b] text-[30px] lg:text-[36px] text-left">
                  <p className="block md:leading-[1.3]">기본 결제서비스</p>
                </div>
              </div>
              <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[17px] text-left text-nowrap">
                <p className="leading-[1.6] whitespace-pre">
                  <span>전자결제 신청 한 번으로 이용 가능한 기본 결제 서비스 입니다.<br aria-hidden="true" /></span>
                  <span className="text-[#1b64da]">결제위젯</span>으로 쉽게 연동하고 운영할 수 있습니다.
                </p>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col gap-[32px] md:gap-[40px] xl:gap-[48px] items-start justify-start p-[0px] relative shrink-0 w-full" data-name="Contents">
              <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-[24px] lg:gap-[32px] xl:gap-[48px] items-start justify-start p-[0px] relative shrink-0 w-full" data-name="1">
                <div className="basis-0 box-border content-stretch flex flex-col md:flex-row gap-3 md:gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left" data-name="신용카드">
                  <img src={iconCreditCard} alt="신용카드" className="w-12 h-12 md:w-14 md:h-14 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold relative shrink-0 text-[#333d4b] text-[20px]">
                      <p className="block leading-[1.6] whitespace-pre">신용카드</p>
                    </div>
                    <div className="font-medium relative shrink-0 text-[#6b7684] text-[17px] tracking-[-0.17px]">
                      <p className="block leading-[1.6] whitespace-pre-wrap break-words">국내 모든 카드사와 VISA, MASTER 같은 해외 주요 카드사를 다양하게 지원합니다.</p>
                    </div>
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col md:flex-row gap-3 md:gap-4 grow items-start justify-start min-h-px min-w-px p-[0px] relative shrink-0" data-name="계좌이체">
                  <img src={iconBankTransfer} alt="계좌이체" className="w-12 h-12 md:w-14 md:h-14 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#333d4b] text-[20px] text-left">
                      <p className="block leading-[1.6] whitespace-pre">계좌이체</p>
                    </div>
                    <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[17px] text-left tracking-[-0.17px]">
                      <p className="block leading-[1.6] whitespace-pre-wrap break-words">복잡한 공동인증서, 프로그램 설치 없이 퀵계좌이체, 뱅크페이로 간편하게 계좌이체할 수 있습니다.</p>
                    </div>
                    <Link href="/quick">
                      <LinkButton>자세히보기</LinkButton>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-[24px] lg:gap-[32px] xl:gap-[48px] items-start justify-start p-[0px] relative shrink-0 w-full" data-name="2">
                <div className="basis-0 box-border content-stretch flex flex-col md:flex-row gap-3 md:gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left" data-name="간편결제">
                  <img src={iconSimplePay} alt="간편결제" className="w-12 h-12 md:w-14 md:h-14 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <div className="font-['PretendARD'] font-semibold relative shrink-0 text-[#333d4b] text-[20px]">
                      <p className="block leading-[1.6] whitespace-pre">간편결제</p>
                    </div>
                    <div className="font-medium relative shrink-0 text-[#6b7684] text-[17px] tracking-[-0.17px]">
                      <p className="block leading-[1.6] whitespace-pre-wrap break-words">토스페이, 네이버페이, 카카오페이, 애플페이, 삼성페이, 페이코, SSG페이, L.pay 등 다양한 간편결제 수단을 제공합니다. 각 간편결제사와 따로 계약을 하지 않고, 소프트먼트를 통해서 신청 후 이용할 수 있습니다.</p>
                    </div>
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col md:flex-row gap-3 md:gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left" data-name="가상계좌">
                  <img src={iconVirtualAccount} alt="가상계좌" className="w-12 h-12 md:w-14 md:h-14 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold relative shrink-0 text-[#333d4b] text-[20px]">
                      <p className="block leading-[1.6] whitespace-pre">가상계좌</p>
                    </div>
                    <div className="font-medium relative shrink-0 text-[#6b7684] text-[17px] tracking-[-0.17px]">
                      <p className="block leading-[1.6] whitespace-pre-wrap break-words">고객이 가상계좌 결제를 요청하면, 고객의 이름으로 임시 계좌가 발급됩니다. 고객은 해당 계좌에 주문 금액을 정확히 입금하면 결제가 완료됩니다. 다른 이름으로 '무통장입금' 이라고 불리기도 합니다.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 상품권 결제, 휴대폰 결제 - 숨김 처리 */}
              {/* <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-[24px] lg:gap-[32px] xl:gap-[48px] items-start justify-start p-[0px] relative shrink-0 w-full" data-name="3">
                <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left" data-name="상품권 결제">
                  <div className="font-semibold relative shrink-0 text-[#333d4b] text-[20px]">
                    <p className="block leading-[1.6] whitespace-pre">상품권 결제</p>
                  </div>
                  <div className="font-medium relative shrink-0 text-[#6b7684] text-[17px] tracking-[-0.17px]">
                    <p className="block leading-[1.6] whitespace-pre-wrap break-words">문화상품권, 게임상품권, 도서문화상품권을 온라인에서 사용 가능하도록 해주는 서비스로 신용카드 이용이 어려운 고객에게 유용합니다.</p>
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left" data-name="휴대폰 결제">
                  <div className="font-semibold relative shrink-0 text-[#333d4b] text-[20px]">
                    <p className="block leading-[1.6] whitespace-pre">휴대폰 결제</p>
                  </div>
                  <div className="font-medium relative shrink-0 text-[#6b7684] text-[17px] tracking-[-0.17px]">
                    <p className="block leading-[1.6] whitespace-pre-wrap break-words">SKT, KT, LG U+ 등 국내 모든 통신사를 지원하며 신용카드나 계좌이체로 결제가 힘든 고객에게 유용한 서비스입니다.</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* 맞춤 결제서비스 */}
          <div className="box-border content-stretch flex flex-col gap-[32px] md:gap-[40px] xl:gap-[48px] items-start justify-start p-[0px] relative shrink-0 w-full" data-name="맞춤 결제서비스">
            <div className="h-[35px] md:h-[41px] xl:h-[47px] relative shrink-0 w-full" data-name="Section Title">
              <div className="absolute font-semibold inset-0 leading-[0] not-italic text-[#333d4b] text-[30px] lg:text-[36px] text-left">
                <p className="block leading-[1.3]">맞춤 결제서비스</p>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col gap-[32px] md:gap-[40px] xl:gap-[48px] items-start justify-start p-[0px] relative shrink-0 w-full" data-name="Contents">
              {/* 브랜드페이, 안심키인 - 숨김 처리, 빌링과 키인결제를 row로 배치 */}
              <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-[24px] lg:gap-[32px] xl:gap-[48px] items-start justify-start p-[0px] relative shrink-0 w-full" data-name="1">
                {/* <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-[0px] relative shrink-0" data-name="브랜드페이">
                  <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#333d4b] text-[20px] text-left">
                    <p className="block leading-[1.6] whitespace-pre">브랜드페이 (자체 간편결제)</p>
                  </div>
                  <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[17px] text-left tracking-[-0.17px]">
                    <p className="block leading-[1.6] whitespace-pre-wrap break-words">결제 전환율, 브랜딩, 편리함까지 한 번에 얻을 수 있는 가맹점 전용 간편결제 서비스 입니다. 간단한 연동으로 자체 OO페이를 만들 수 있습니다.</p>
                  </div>
                  <LinkButton>자세히보기</LinkButton>
                </div> */}
                <div className="basis-0 box-border content-stretch flex flex-col md:flex-row gap-3 md:gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left" data-name="빌링">
                  <img src={iconBilling} alt="빌링(자동결제)" className="w-12 h-12 md:w-14 md:h-14 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold relative shrink-0 text-[#333d4b] text-[20px] text-nowrap">
                      <p className="block leading-[1.6] whitespace-pre">빌링 (자동결제)</p>
                    </div>
                    <div className="font-medium relative shrink-0 text-[#6b7684] text-[17px] tracking-[-0.17px]">
                      <p className="block leading-[1.6] whitespace-pre-wrap break-words">원하는 때에 고객이 등록한 수단으로 자동 결제하는 서비스입니다. 주기에 따라 반복해서 결제할 수도, 한 번만 결제할 수도 있습니다. 구독형 서비스에서 주로 사용합니다.</p>
                    </div>
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col md:flex-row gap-3 md:gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left" data-name="키인결제">
                  <img src={iconKeyIn} alt="키인결제" className="w-12 h-12 md:w-14 md:h-14 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold relative shrink-0 text-[#333d4b] text-[20px]">
                      <p className="block leading-[1.6] whitespace-pre">키인결제</p>
                    </div>
                    <div className="font-medium relative shrink-0 text-[#6b7684] text-[17px] tracking-[-0.17px]">
                      <p className="block leading-[1.6] whitespace-pre-wrap break-words">소프트먼트는 카드 비인증 결제를 지원해요. 카드 번호 결제 API를 사용하면 제한적인 업종에 한해서 엄중한 심사를 통해 카드 정보로 결제를 요청할 수 있어요. 카드 정보를 입력해서 결제하는 방식으로 '수기 결제', '키인(Key-in) 결제'라고 불리기도 해요.</p>
                    </div>
                  </div>
                </div>
                {/* <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left" data-name="안심키인">
                  <div className="font-semibold relative shrink-0 text-[#333d4b] text-[20px]">
                    <p className="block leading-[1.6] whitespace-pre">안심키인</p>
                  </div>
                  <div className="font-medium relative shrink-0 text-[#6b7684] text-[17px] tracking-[-0.17px]">
                    <p className="block leading-[1.6] whitespace-pre-wrap break-words">안심키인은 구매자가 상담원과 상품 및 서비스에 대한 안내를 받고, 상담원에게 카드번호와 유효기간을 전달해서 결제하는 방법이에요. 기본적으로 고객이 직접 결제하는 것이 아닌, 상담원이나 콜센터 등에서 전화를 통해 결제해요. 결제하는 상담원은 법인 인증서로 로그인하고 결제를 하기 때문에 안심할 수 있어요.</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* 외화 결제서비스 */}
          <div className="box-border content-stretch flex flex-col gap-[32px] lg:gap-[40px] xl:gap-[48px] items-start justify-start p-[0px] relative shrink-0 w-full" data-name="외화 결제서비스">
            <div className="h-[35px] lg:h-[41px] xl:h-[47px] relative shrink-0 w-full" data-name="Section Title">
              <div className="absolute font-semibold inset-0 leading-[0] not-italic text-[#333d4b] text-[30px] lg:text-[36px] text-left">
                <p className="block leading-[1.3]">외화 결제서비스</p>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col gap-[32px] lg:gap-[40px] xl:gap-[48px] items-start justify-start p-[0px] relative shrink-0 w-full" data-name="Contents">
              <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-[24px] lg:gap-[32px] xl:gap-[48px] items-start justify-start p-[0px] relative shrink-0 w-full" data-name="1">
                <div className="basis-0 box-border content-stretch flex flex-col md:flex-row gap-3 md:gap-4 grow items-start justify-start min-h-px min-w-px p-[0px] relative shrink-0" data-name="해외간편결제">
                  <img src={iconPaypal} alt="해외간편결제" className="w-12 h-12 md:w-14 md:h-14 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#333d4b] text-[20px] text-left">
                      <p className="block leading-[1.6] whitespace-pre">해외간편결제</p>
                    </div>
                    <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[17px] text-left tracking-[-0.17px]">
                      <p className="block leading-[1.6] whitespace-pre-wrap break-words">해외간편결제 서비스는 해외 온·오프라인 가맹점에서 해외의 간편결제(페이팔,알리페이,위챗페이,라인페이 등) 방식을 이용하여 결제할 수 있는 서비스를 제공합니다.</p>
                    </div>
                    {/* <div className="box-border content-stretch flex flex-row gap-[4px] items-start justify-start p-[0px] relative shrink-0" data-name="Buttons">
                      <LinkButton>소개서보기</LinkButton>
                      <LinkButton>신청하기</LinkButton>
                    </div> */}
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col md:flex-row gap-3 md:gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left" data-name="해외카드">
                  <img src={iconForeignCard} alt="해외카드" className="w-12 h-12 md:w-14 md:h-14 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold relative shrink-0 text-[#333d4b] text-[20px] text-nowrap">
                      <p className="block leading-[1.6] whitespace-pre">해외카드</p>
                    </div>
                    <div className="font-medium leading-[1.6] relative shrink-0 text-[#6b7684] text-[17px] tracking-[-0.17px]">
                      <p className="block mb-0 whitespace-pre-wrap break-words">소프트먼트의 해외카드결제 서비스는 해외 발행 카드(VISA, MASTER, JCB)를 통해 해외 고객이 국내 가맹점에서 USD, KRW, JPY 로 결제할 수 있도록 지원합니다. 사전에 등록된 비밀번호를 입력하여 인증하는 3D 인증 절차를 통해 안전한 결제를 제공합니다.</p>
                      <p className="block ">오프라인 결제서비스</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 오프라인 결제서비스
          <div className="box-border content-stretch flex flex-col gap-[32px] lg:gap-[40px] xl:gap-[48px] items-start justify-start p-[0px] relative shrink-0 w-full" data-name="오프라인 결제서비스">
            <div className="h-[35px] lg:h-[41px] xl:h-[47px] relative shrink-0 w-full" data-name="Section Title">
              <div className="absolute font-semibold inset-0 leading-[0] not-italic text-[#333d4b]text-[30px] lg:text-[36px] text-left">
                <p className="block leading-[1.3]">오프라인 결제서비스</p>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col gap-[32px] lg:gap-[40px] xl:gap-[48px] items-start justify-start p-[0px] relative shrink-0 w-full" data-name="Contents">
              {/* 오프라인 단말 결제, 오프라인 결제(페이나우비즈) - 숨김 처리 */}
              {/* <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-[24px] lg:gap-[32px] xl:gap-[48px] items-start justify-start p-[0px] relative shrink-0 w-full" data-name="1">
                <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left" data-name="오프라인 단말 결제">
                  <div className="font-semibold relative shrink-0 text-[#333d4b] text-[20px]">
                    <p className="block leading-[1.6] whitespace-pre">오프라인 단말 결제</p>
                  </div>
                  <div className="font-medium relative shrink-0 text-[#6b7684] text-[17px] tracking-[-0.17px]">
                    <p className="block leading-[1.6] whitespace-pre-wrap break-words">1) POS 리더기 및 키오스크 결제<br/>오프라인 매장의 현장결제를 위한 키오스크/POS 리더기 결제 서비스를 제공해요. 이용 중인 키오스크/POS 기기에 agent 설치 후, 리더기를 연결하면 소프트먼트의 PG 결제를 사용할 수 있어요.<br/>2) BA(백업) 단말기 결제<br/>오프라인 매장의 현장결제를 위한 IC인증 단말결제를 제공해요.</p>
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-[0px] relative shrink-0" data-name="오프라인 결제">
                  <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#333d4b] text-[20px] text-left">
                    <p className="block leading-[1.6] whitespace-pre">오프라인 결제 (페이나우비즈)</p>
                  </div>
                  <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[17px] text-left tracking-[-0.17px]">
                    <p className="block leading-[1.6] whitespace-pre-wrap break-words">스마트폰을 통한 카드리더기 결제, 수기입력 결제, NFC 태그 결제를 지원합니다.</p>
                  </div>
                  <LinkButton>소개서보기</LinkButton>
                </div>
              </div>
            </div>
          </div>
          */}

          {/* 부가서비스 */}
          <div className="box-border content-stretch flex flex-col gap-[32px] lg:gap-[40px] xl:gap-[48px] items-start justify-start p-[0px] relative shrink-0 w-full" data-name="부가서비스">
            <div className="h-[35px] lg:h-[41px] xl:h-[47px] relative shrink-0 w-full" data-name="Section Title">
              <div className="absolute font-semibold inset-0 leading-[0] not-italic text-[#333d4b] text-[30px] lg:text-[36px] text-left">
                <p className="block leading-[1.3]">부가서비스</p>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col gap-[32px] lg:gap-[40px] xl:gap-[48px] items-start justify-start p-[0px] relative shrink-0 w-full" data-name="Contents">
              {/* 법인카드 결제, 지역화폐 결제, VAN, 에스크로, 자금관리서비스, 현금영수증 - 숨김 처리 */}
              <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-[24px] lg:gap-[32px] xl:gap-[48px] items-start justify-start p-[0px] relative shrink-0 w-full" data-name="1">
                {/* <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left" data-name="법인카드 결제">
                  <div className="font-semibold relative shrink-0 text-[#333d4b] text-[20px]">
                    <p className="block leading-[1.6] whitespace-pre">법인카드 결제</p>
                  </div>
                  <div className="font-medium relative shrink-0 text-[#6b7684] text-[17px] tracking-[-0.17px]">
                    <p className="block leading-[1.6] whitespace-pre-wrap break-words">법인카드로 결제할 수 있어요. 다만 토스페이, 브랜드페이 등 본인인증 후 결제수단을 등록하는 간편결제 서비스의 경우 정책상 본인 소유임을 검증할 수 있는 기명 법인카드만 이용할 수 있어요.</p>
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left" data-name="지역화폐 결제">
                  <div className="font-semibold relative shrink-0 text-[#333d4b] text-[20px]">
                    <p className="block leading-[1.6] whitespace-pre">지역화폐 결제</p>
                  </div>
                  <div className="font-medium relative shrink-0 text-[#6b7684] text-[17px] tracking-[-0.17px]">
                    <p className="block leading-[1.6] whitespace-pre-wrap break-words">여러 지역화폐로 결제가 가능하며 업종에 따라 문화비 소득공제가 적용돼요. 상황에 따라 일부 지역화폐는 문화비 소득공제 적용이 어려울 수 있어요.</p>
                  </div>
                </div> */}
                {/* <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left" data-name="VAN">
                  <div className="font-semibold relative shrink-0 text-[#333d4b] text-[20px]">
                    <p className="block leading-[1.6] whitespace-pre">VAN</p>
                  </div>
                  <div className="font-medium relative shrink-0 text-[#6b7684] text-[17px] tracking-[-0.17px]">
                    <p className="block leading-[1.6] whitespace-pre-wrap break-words">VAN은 상점과 카드사 사이에서 거래 정보를 주고받는 통신망이에요. 온라인 사업자라면, PG가 VAN·카드사 대신 통신해요.</p>
                  </div>
                </div> */}
                <div className="basis-0 box-border content-stretch flex flex-col md:flex-row gap-3 md:gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left" data-name="무이자 할부">
                  <img src={iconInstallment} alt="무이자 할부" className="w-12 h-12 md:w-14 md:h-14 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold relative shrink-0 text-[#333d4b] text-[20px]">
                      <p className="block leading-[1.6] whitespace-pre">무이자 할부</p>
                    </div>
                    <div className="font-medium relative shrink-0 text-[#6b7684] text-[17px] tracking-[-0.17px]">
                      <p className="block leading-[1.6] whitespace-pre-wrap break-words">무이자 할부는 고객이 이자를 내지 않고 무료로 신용카드 할부를 사용하는 것을 의미해요. 카드사 또는 상점에서 고객 대신 이자를 부담하는 방식으로, 이자를 부담하는 주최에 따라 4가지 분류로 나뉘어요. (카드사 부담 무이자 할부, 카드사 부분 무이자 할부, 상점 부담 무이자 할부, 특별 분담 무이자 할부) 전 카드사 대상 장기할부를 경쟁력 있는 수수료로 제공해요.</p>
                    </div>
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col md:flex-row gap-3 md:gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left" data-name="정산지급대행 서비스">
                  <img src={iconSettlement} alt="정산지급대행 서비스" className="w-12 h-12 md:w-14 md:h-14 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold relative shrink-0 text-[#333d4b] text-[20px]">
                      <p className="block leading-[1.6] whitespace-pre">정산지급대행 서비스</p>
                    </div>
                    <div className="font-medium relative shrink-0 text-[#6b7684] text-[17px] tracking-[-0.17px]">
                      <p className="block leading-[1.6] whitespace-pre-wrap break-words">오픈마켓 형태의 쇼핑몰을 대상으로 전자금융사업자인 소프트먼트가 쇼핑몰 입점 판매자에게 대금지급을 대행해주는 서비스입니다.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-[24px] lg:gap-[32px] xl:gap-[48px] items-start justify-start p-[0px] relative shrink-0 w-full" data-name="2">
                {/* <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left" data-name="에스크로">
                  <div className="font-semibold relative shrink-0 text-[#333d4b] text-[20px]">
                    <p className="block leading-[1.6] whitespace-pre">에스크로</p>
                  </div>
                  <div className="font-medium relative shrink-0 text-[#6b7684] text-[17px] tracking-[-0.17px]">
                    <p className="block leading-[1.6] whitespace-pre-wrap break-words">고객이 구매확정을 해야 결제 대금이 지급되는 구매자 보호 서비스입니다.</p>
                  </div>
                </div> */}
                <div className="basis-0 box-border content-stretch flex flex-col md:flex-row gap-3 md:gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left" data-name="계좌 유효성 인증">
                  <img src={iconAccountVerification} alt="계좌 유효성 인증" className="w-12 h-12 md:w-14 md:h-14 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold relative shrink-0 text-[#333d4b] text-[20px]">
                      <p className="block leading-[1.6] whitespace-pre">계좌 유효성 인증</p>
                    </div>
                    <div className="font-medium relative shrink-0 text-[#6b7684] text-[17px] tracking-[-0.17px]">
                      <p className="block leading-[1.6] whitespace-pre-wrap break-words">계좌 정보와 예금주 일치 여부를 확인하는 서비스예요.</p>
                    </div>
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col md:flex-row gap-3 md:gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-[0px] relative shrink-0 text-left" data-name="상점관리자">
                  <img src={iconStoreManager} alt="상점관리자" className="w-12 h-12 md:w-14 md:h-14 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold relative shrink-0 text-[#333d4b] text-[20px]">
                      <p className="block leading-[1.6] whitespace-pre">상점관리자</p>
                    </div>
                    <div className="font-medium relative shrink-0 text-[#6b7684] text-[17px] tracking-[-0.17px]">
                      <p className="block leading-[1.6] whitespace-pre-wrap break-words">소프트먼트 상점관리자는 내 상점의 정산, 결제 조회, 계약 정보, 부가세 신고 자료를 모두 관리할 수 있는 서비스예요.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="box-border content-stretch grid grid-cols-1 lg:grid-cols-2 gap-[24px] lg:gap-[32px] xl:gap-[48px] items-start justify-start p-[0px] relative shrink-0 w-full" data-name="6">
                <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-[0px] relative shrink-0" data-name="자금관리서비스">
                  <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#333d4b] text-[20px] text-left">
                    <p className="block leading-[1.6] whitespace-pre">자금관리서비스 (CMS)</p>
                  </div>
                  <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[17px] text-left tracking-[-0.17px]">
                    <p className="block leading-[1.6] whitespace-pre-wrap break-words">자금관리서비스(CMS)는 기업이 은행에 가지 않고도 자금을 관리할 수 있는 전자금융서비스예요. 안정적인 시스템에서 입출금 내역을 확인하고, 자금의 흐름을 실시간으로 파악할 수 있어 편리하고 효율적으로 자금을 관리할 수 있어요.</p>
                  </div>
                  <LinkButton>서비스 사용하기</LinkButton>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-[0px] relative shrink-0" data-name="현금영수증서비스">
                  <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#333d4b] text-[20px] text-left">
                    <p className="block leading-[1.6] whitespace-pre">현금영수증 무료 발급 서비스</p>
                  </div>
                  <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[17px] text-left tracking-[-0.17px]">
                    <p className="block leading-[1.6] whitespace-pre-wrap break-words">국세청 현금영수증 발급 프로세스를 대행하여 제공하는 무료 서비스로, 소프트먼트 가맹점이 아닌 고객도 무료 회원가입 후 이용가능한 서비스 입니다.</p>
                  </div>
                  <LinkButton>서비스 사용하기</LinkButton>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </PageContainer>
     {/* 네비게이션 바 */}
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