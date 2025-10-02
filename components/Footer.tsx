import Link from "next/link";
import svgPaths from "../imports/svg-kw64d5cn6e";

export function Footer() {
  const termsItems = [
    { text: "서비스 이용약관" },
    {
      text: "개인정보 처리방침",
      href: "https://www.notion.so/1f9b808c23f38015a216f0d8866e2aca?source=copy_link",
    },
    {
      text: "전자금융거래 기본약관",
      href: "https://www.notion.so/1f9b808c23f3801fbf73ed05c1e6ab76?source=copy_link",
    },
    { text: "이용자 유의사항" },
    { text: "통신과금 이용약관" },
  ];
  return (
    <div
      className="bg-[#f9fafb] box-border content-stretch flex flex-col items-center justify-start overflow-clip pb-[80px] pt-[60px] px-[16px] sm:pb-[80px] sm:pt-[60px] sm:px-[40px] md:pb-[100px] md:pt-[50px] md:px-[67px] relative shrink-0 w-full"
      data-name="푸터"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start relative shrink-0 w-full max-w-[400px] sm:max-w-[448px] md:max-w-[890px] xl:max-w-[890px] min-w-0">
        <div
          className="box-border content-stretch flex flex-col md:flex-row md:flex-nowrap items-start justify-start pb-[30px] md:pb-[50px] pt-[0px] px-[0px] relative shrink-0 w-full gap-[40px] md:gap-[0px]"
          data-name="푸터 메뉴"
        >
          <div
            className="box-border content-stretch flex flex-col items-start justify-start p-[0px] relative md:shrink-0 w-full md:w-[170px] min-w-0"
            data-name="안내"
          >
            <div
              className="box-border content-stretch flex flex-row items-center justify-center pb-[5px] pt-[0px] px-[0px] relative shrink-0"
              data-name="카테고리"
            >
              <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#333d4b] text-[15px] text-left md:text-nowrap">
                <p className="block leading-[30px] whitespace-pre-wrap">안내</p>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-row h-[30px] items-center justify-center p-[0px] relative shrink-0"
              data-name="목록"
            >
              <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[15px] text-left md:text-nowrap">
                <Link href="/notice0">
                  <p className="block leading-[1.5] whitespace-pre-wrap">공지사항</p>
                </Link>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-row h-[30px] items-center justify-center p-[0px] relative shrink-0"
              data-name="목록"
            >
              <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[15px] text-left md:text-nowrap">
                <Link href="/customerservice">
                  <p className="block leading-[1.5] whitespace-pre-wrap">자주 묻는 질문</p>
                </Link>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-row h-[30px] items-center justify-center p-[0px] relative shrink-0"
              data-name="목록"
            >
              <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[15px] text-left md:text-nowrap">
                <p className="block leading-[1.5] whitespace-pre-wrap">구매안전서비스 이용 조회</p>
              </div>
            </div>
          </div>

          <div
            className="box-border content-stretch flex flex-col items-start justify-start p-[0px] relative md:shrink-0 w-full md:w-[170px] min-w-0"
            data-name="팀"
          >
            <div
              className="box-border content-stretch flex flex-row items-center justify-center pb-[5px] pt-[0px] px-[0px] relative shrink-0"
              data-name="카테고리"
            >
              <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#333d4b] text-[15px] text-left md:text-nowrap">
                <p className="block leading-[30px] whitespace-pre-wrap">팀</p>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-row h-[30px] items-center justify-center p-[0px] relative shrink-0"
              data-name="목록"
            >
              <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[15px] text-left md:text-nowrap">
                <p className="block leading-[1.5] whitespace-pre-wrap">회사소개</p>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-row h-[30px] items-center justify-center p-[0px] relative shrink-0"
              data-name="목록"
            >
              <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[15px] text-left md:text-nowrap">
                <p className="block leading-[1.5] whitespace-pre-wrap">블로그</p>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-row h-[30px] items-center justify-center p-[0px] relative shrink-0"
              data-name="목록"
            >
              <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[15px] text-left md:text-nowrap">
                <p className="block leading-[1.5] whitespace-pre-wrap">채용</p>
              </div>
            </div>
          </div>

          <div
            className="box-border content-stretch flex flex-col items-start justify-start p-[0px] relative w-full md:flex-1 min-w-0"
            data-name="고객센터"
          >
            <div
              className="box-border content-stretch flex flex-row items-center justify-center pb-[5px] pt-[0px] px-[0px] relative shrink-0"
              data-name="카테고리"
            >
              <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#333d4b] text-[15px] text-left md:text-nowrap">
                <p className="block leading-[30px] whitespace-pre-wrap">고객센터</p>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-row h-auto items-center justify-start p-[0px] relative w-full min-w-0"
              data-name="목록"
            >
              <div className="font-normal leading-[0] not-italic relative min-w-[0px] w-full text-[#6b7684] text-[15px] text-left break-words">
                <p className="block leading-[1.5] whitespace-pre-wrap">
                  운영시간: 10:00 ~ 19:00 (점심시간 13:00 ~ 14:00 미운영 / 주말 및 공휴일 휴무)
                </p>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-row h-auto md:h-[30px] items-center justify-start p-[0px] relative shrink-0 w-full"
              data-name="목록"
            >
              <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[15px] text-left md:text-nowrap">
                <p className="block leading-[1.5] whitespace-pre-wrap md:whitespace-pre">전화: 1833-8540</p>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-row h-auto md:h-[30px] items-center justify-start p-[0px] relative shrink-0 w-full"
              data-name="목록"
            >
              <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[15px] text-left md:text-nowrap">
                <p className="block leading-[1.5] whitespace-pre-wrap md:whitespace-pre">이메일: pg.cs@softment.co.kr</p>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-row h-auto md:h-[30px] items-center justify-start p-[0px] relative shrink-0 w-full"
              data-name="목록"
            >
              <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[15px] text-left md:text-nowrap">
                <p className="block leading-[1.5] whitespace-pre-wrap md:whitespace-pre">결제오류 지원 바로가기</p>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-row h-auto md:h-[30px] items-center justify-start p-[0px] relative shrink-0 w-full"
              data-name="목록"
            >
              <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[15px] text-left md:text-nowrap">
                <p className="block leading-[1.5] whitespace-pre-wrap md:whitespace-pre">1:1 채팅상담</p>
              </div>
            </div>
          </div>
        </div>

        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[16px] pt-[0px] px-[0px] relative shrink-0 w-full">
          <div
            className="box-border content-stretch flex flex-row items-center justify-start pb-[16px] pt-[0px] px-[0px] relative shrink-0 w-full"
            data-name="Copyright"
          >
            <div className="font-normal leading-[0] relative shrink-0 text-[#000000] text-[15px] text-left md:text-nowrap [font-variation-settings:'CTGR'_0,_'wdth'_100,_'wght'_400]">
              <p className="block leading-[1.6] whitespace-pre-wrap">Copyright ⓒ Softment. All Rights Reserved</p>
            </div>
          </div>
          <div className="box-border content-stretch flex flex-row gap-[2px] items-center justify-start p-[0px] relative shrink-0 w-full">
            <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#8b95a1] text-[13px] text-left">
              <p className="block leading-[1.6] whitespace-pre-wrap sm:whitespace-pre">
                사업자등록번호 : 704-87-01591 | 대표 : 장하일, 정재훈
                <br className="block" />
                주소: 서울시 금천구 가산디지털1로 145 에이스하이엔드타워3차 905호
              </p>
            </div>
          </div>
        </div>

        {Array.isArray(termsItems) && termsItems.length > 0 && (
          <div
            className="box-border content-stretch flex flex-col items-start justify-start pb-[0px] pt-[24px] px-[0px] relative shrink-0 w-full"
            data-name="약관"
          >
            <div
              className="box-border content-stretch flex flex-row items-center justify-start p-[0px] relative shrink-0"
              data-name="기본약관"
            >
              
              <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#333d4b] text-[15px] text-left md:text-nowrap">
                <p className="block leading-[1.6] whitespace-pre-wrap">소프트먼트 기본약관</p>
              </div>
            </div>
            <div
              className="box-border content-stretch grid grid-cols-2 md:flex md:flex-row items-start md:items-center justify-start pb-[30px] pt-[16px] px-[0px] relative shrink-0 w-full gap-x-[12px] gap-y-[8px] md:gap-[0px] pr-[0px] pl-[0px]"
              data-name="약관"
            >
              {termsItems.map((term, i) => (
                <div
                  key={i}
                  className="box-border content-stretch flex flex-row h-[32px] items-start justify-start pl-[0px] pr-[0px] md:pr-[24px] pb-[0px] relative"
                  data-name="약관"
                >
                  <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#6b7684] text-[13px] text-left md:text-nowrap">
                    {term.href ? (
                      <a href={term.href} target="_blank" rel="noopener noreferrer">
                        <p className="block leading-[18px] whitespace-pre-wrap">{term.text}</p>
                      </a>
                    ) : (
                      <p className="block leading-[18px] whitespace-pre-wrap">{term.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          className="box-border content-stretch flex flex-row gap-[8px] items-center justify-start pb-[16px] pt-[0px] px-[0px] relative shrink-0 w-full max-w-[360px] sm:max-w-[720px] md:max-w-[930px] xl:max-w-[930px]"
          data-name="Icon/SNS"
        >
          <div className="relative shrink-0 size-[36px]" data-name="Icon/SNS">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
              <g clipPath="url(#clip0_41_442)">
                <g opacity="0.7">
                  <path clipRule="evenodd" d={svgPaths.p64b4300} fill="var(--fill-0, #8B95A1)" fillRule="evenodd" />
                </g>
                <path d={svgPaths.p298fab80} fill="var(--fill-0, #F2F4F6)" />
              </g>
              <defs>
                <clipPath id="clip0_41_442">
                  <rect fill="white" height="36" width="36" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="box-border content-stretch flex flex-row gap-[10px] items-center justify-start overflow-clip p-[0px] relative shrink-0" data-name="Icon/SNS">
            <div className="relative shrink-0 size-[36px]" data-name="Group">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                <g opacity="0.7">
                  <path clipRule="evenodd" d={svgPaths.p22c98680} fill="var(--fill-0, #8B95A1)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pea04180} fill="var(--fill-0, #F2F4F6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>

          <div className="box-border content-stretch flex flex-row gap-[10px] items-center justify-start overflow-clip p-[0px] relative shrink-0" data-name="Icon/SNS">
            <div className="relative shrink-0 size-[36px]" data-name="Group">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                <g opacity="0.7">
                  <path clipRule="evenodd" d={svgPaths.p22c98680} fill="var(--fill-0, #8B95A1)" fillRule="evenodd" />
                  <g>
                    <path clipRule="evenodd" d={svgPaths.p203fc00} fill="var(--fill-0, #F2F4F6)" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p3b4d6570} fill="var(--fill-0, #F2F4F6)" fillRule="evenodd" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

