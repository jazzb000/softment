"use client"
import { useState } from "react";
import { SoftmentLogo } from "./SoftmentLogo";
import { NavApplyButton } from "./NavApplyButton";
import Link from "next/link";
import type { Route } from "next";

interface NavbarProps {
  menuItems?: string[];
  actionItems?: string[];
  onMenuClick?: (item: string) => void;
  onActionClick?: (item: string) => void;
  onApplyClick?: () => void;
}

export function Navbar({
  menuItems = ['사업 시작', '결제 서비스', '이용요금', '고객센터', '개발가이드'],
  actionItems = ['결제내역 조회', '로그인'],
  onMenuClick,
  onActionClick,
  onApplyClick,
}: NavbarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuPath = {
    '결제 서비스': '/paymentservice',
    '이용요금': '/usingcost',
    '고객센터': '/customerservice',
  } as Record<string, Route>;

  const actionPath: Record<string, string> = {
    '결제내역 조회': 'https://pis.softment.co.kr/',
    '로그인': 'https://pis.softment.co.kr/',
  };

  const isExternalUrl = (url: string) => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  const handleNavigate = (item: string, type: 'menu' | 'action') => {
    if (type === 'menu') onMenuClick?.(item);
    if (type === 'action') onActionClick?.(item);
    setIsMobileOpen(false);
  };

  return (
    <div className="absolute bg-[#ffffff] h-[60px] left-0 overflow-visible right-0 top-0 z-40">
      <div className="flex items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between max-w-[1600px] p-[0px] px-[20px] md:px-[40px] xl:px-[148px] relative w-full">
          <div className="box-border content-stretch flex flex-row gap-[2px] items-center justify-start p-[0px] relative shrink-0">
            <div className="box-border content-stretch flex flex-col items-start justify-start pl-[0px] pr-[20px] py-[0px] relative shrink-0 w-[120px] md:w-[150px]">
              <SoftmentLogo className="w-full h-[20px]" width="100%" height="20px" />
            </div>
            {/* Navigation Menu Items - Hidden on mobile */}
            <div className="hidden md:flex flex-row gap-[2px] items-center">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={menuPath[item] ?? ('/' as Route)}
                  className="box-border content-stretch flex flex-row items-center justify-center px-[10px] py-[6px] relative shrink-0 cursor-pointer"
                  onClick={() => handleNavigate(item, 'menu')}
                >
                  <div className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(3,18,40,0.7)] text-left text-nowrap">
                    <p className="block leading-[1.5] whitespace-pre">{item}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="box-border content-stretch flex flex-row h-[33px] items-center justify-start p-[0px] relative shrink-0">
            {/* Desktop actions */}
            <div className="hidden md:flex flex-row">
              {actionItems.map((item) => {
                const href = actionPath[item] ?? '/';
                const isExternal = isExternalUrl(href);
                
                if (isExternal) {
                  return (
                    <a
                      key={item}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="box-border content-stretch flex flex-row items-center justify-center px-[10px] py-[6px] relative shrink-0 cursor-pointer"
                      onClick={() => handleNavigate(item, 'action')}
                    >
                      <div className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(3,18,40,0.7)] text-left text-nowrap">
                        <p className="block leading-[1.5] whitespace-pre">{item}</p>
                      </div>
                    </a>
                  );
                }
                
                return (
                  <Link
                    key={item}
                    href={href as Route}
                    className="box-border content-stretch flex flex-row items-center justify-center px-[10px] py-[6px] relative shrink-0 cursor-pointer"
                    onClick={() => handleNavigate(item, 'action')}
                  >
                    <div className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(3,18,40,0.7)] text-left text-nowrap">
                      <p className="block leading-[1.5] whitespace-pre">{item}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
            {/* Apply button only on desktop */}
            <div className="hidden md:block">
              <NavApplyButton onClick={onApplyClick} />
            </div>
            {/* Hamburger button on mobile */}
            <button
              aria-label="Open menu"
              className="md:hidden ml-2 p-2"
              onClick={() => setIsMobileOpen((v) => !v)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 6H20" stroke="#6B7684" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12H20" stroke="#6B7684" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 18H20" stroke="#6B7684" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {isMobileOpen && (
        <div className="md:hidden absolute left-0 right-0 top-[60px] bg-white border-t border-[#e5e8eb] z-40">
          <div className="flex flex-col px-5 py-3 gap-1">
            {menuItems.map((item) => (
              <Link
                key={`m-${item}`}
                href={menuPath[item] ?? ('/' as Route)}
                className="py-3 text-[15px] text-[#333d4b]"
                onClick={() => handleNavigate(item, 'menu')}
              >
                {item}
              </Link>
            ))}
            <div className="h-px bg-[#e5e8eb] my-2" />
            {actionItems.map((item) => {
              const href = actionPath[item] ?? '/';
              const isExternal = isExternalUrl(href);
              
              if (isExternal) {
                return (
                  <a
                    key={`a-${item}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 text-[15px] text-[#4e5968]"
                    onClick={() => handleNavigate(item, 'action')}
                  >
                    {item}
                  </a>
                );
              }
              
              return (
                <Link
                  key={`a-${item}`}
                  href={href as Route}
                  className="py-3 text-[15px] text-[#4e5968]"
                  onClick={() => handleNavigate(item, 'action')}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}


