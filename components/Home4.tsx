import { useState } from 'react';
import { SoftmentLogo } from "./SoftmentLogo";

export default function Navigation() {
  // 이용 신청하기 버튼 호버 상태 관리
  const [isApplyHovered, setIsApplyHovered] = useState(false);
  
  const leftMenuItems = ["사업 시작", "결제 서비스", "이용요금", "고객센터", "개발가이드"];
  const rightMenuItems = ["결제내역 조회", "로그인"];

  return (
    <div className="absolute bg-white h-[60px] left-0 overflow-clip right-0 top-0">
      <div className="absolute content-stretch flex items-center justify-between top-[13.5px] w-[1144px]" style={{ left: "calc(8.333% + 28px)" }}>
        <div className="content-stretch flex gap-[2px] items-center justify-start relative shrink-0">
          <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-[20px] py-0 relative shrink-0 w-[150px]">
            <div className="box-border content-stretch flex h-[20px] items-center justify-center overflow-clip pb-[1px] pt-0 px-0 relative shrink-0">
              <SoftmentLogo />
            </div>
          </div>
          {leftMenuItems.map((item, index) => (
            <div key={index} className="box-border content-stretch flex items-center justify_center px-[10px] py-[6px] relative shrink-0">
              <div className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(3,18,40,0.7)] text-nowrap">
                <p className="leading-[1.5] whitespace-pre">{item}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="content-stretch flex h-[33px] items-center justify-start relative shrink-0">
          {rightMenuItems.map((item, index) => (
            <div key={index} className="box-border content-stretch flex items-center justify_center px-[10px] py-[6px] relative shrink-0">
              <div className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(3,18,40,0.7)] text-nowrap">
                <p className="leading-[1.5] whitespace-pre">{item}</p>
              </div>
            </div>
          ))}
          
          {/* 이용 신청하기 버튼 - 인라인 구현 (size="xs") */}
          <div 
            className={`box-border content-stretch flex items-center justify-center relative shrink-0 cursor-pointer transition-colors duration-200 px-[10px] py-[6px] rounded-[8px] w-[96px] ${
              isApplyHovered ? 'bg-[#2272EB] text-white' : 'bg-[#3182f6] text-white'
            }`}
            onMouseEnter={() => setIsApplyHovered(true)}
            onMouseLeave={() => setIsApplyHovered(false)}
          >
            <div className="font-semibold not-italic relative shrink-0 text-[14px] leading-[1.4] text-nowrap">
              <p className="whitespace-pre">이용 신청하기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}