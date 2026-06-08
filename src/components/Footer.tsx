"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuLinks = [
  { label: "브랜드 소개", href: "/brand" },
  { label: "브레인 프렌즈", href: "/brain-friends" },
  { label: "핵심 기능", href: "/features" },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.origin;
    if (navigator.share) {
      try {
        await navigator.share({ title: "골든브레인케어", url });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  return (
    <footer className="bg-[#000c26] w-full">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-10 lg:py-[64px]">
        {/* Top row */}
        <div className="border-b border-[rgba(255,255,255,0.1)] flex flex-col lg:flex-row items-start gap-10 lg:gap-0 lg:justify-between pb-8 lg:pb-[41px] w-full">
          {/* Brand */}
          <div className="flex flex-col gap-5 lg:gap-[24px] items-start max-w-full lg:max-w-[384px]">
            <p className="font-semibold text-[20px] lg:text-[24px] text-[#fed65b] leading-[32px]">
              골든브레인케어
            </p>
            <p className="font-normal text-[14px] lg:text-[18px] text-[rgba(255,255,255,0.7)] leading-[1.7]">
              AI 기반 언어·인지 재활 솔루션으로 의사소통 회복과 지속 가능한
              재활 관리를 돕습니다.
            </p>
            <div className="flex gap-[12px] items-center">
              <Link href="/" className="relative w-[20px] h-[20px] flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/icon-globe.svg"
                  alt="홈페이지"
                  fill
                  className="object-contain"
                />
              </Link>
              <div className="relative flex-shrink-0">
                <button
                  onClick={handleShare}
                  className="relative w-[18px] h-[20px] block opacity-70 hover:opacity-100 transition-opacity"
                  aria-label="링크 공유"
                >
                  <Image
                    src="/images/icon-share.svg"
                    alt="공유"
                    fill
                    className="object-contain"
                  />
                </button>
                {copied && (
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded-md text-[12px] font-medium text-white whitespace-nowrap" style={{ backgroundColor: "rgba(0,0,0,0.75)" }}>
                    링크 복사됨
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="w-full lg:w-[524px] grid grid-cols-2 gap-x-[40px]">
            <div className="flex flex-col gap-3 lg:gap-[12px] items-start">
              <h4 className="font-semibold text-[15px] lg:text-[18px] text-[#fed65b] leading-[28px]">
                메뉴
              </h4>
              <div className="flex flex-col gap-[4px] items-start">
                {menuLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-normal text-[14px] lg:text-[18px] text-[rgba(255,255,255,0.7)] leading-[28px] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:gap-[12px] items-start">
              <h4 className="font-semibold text-[15px] lg:text-[18px] text-[#fed65b] leading-[28px]">
                연락처
              </h4>
              <p className="font-normal text-[13px] lg:text-[16px] text-[#b2b6be] leading-[1.5]">
                부산 진구 동천로 116, 한신밴빌딩 5F
              </p>
              <p className="font-normal text-[14px] lg:text-[18px] text-[rgba(255,255,255,0.7)] leading-[28px]">
                brain_care@naver.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 pt-6 lg:pt-[40px] w-full">
          <p className="font-normal text-[12px] lg:text-[18px] text-[rgba(255,255,255,0.5)] leading-[28px]">
            © 2026 Golden Brain Care. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 lg:gap-[24px] items-center">
            <div className="flex gap-[10px] items-center">
              <div className="relative w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] flex-shrink-0">
                <Image
                  src="/images/icon-phone.svg"
                  alt="전화"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-[13px] lg:text-[18px] text-[rgba(255,255,255,0.5)] leading-[28px]">
                0507-1379-3759
              </span>
            </div>
            <p className="font-medium text-[13px] lg:text-[18px] text-[rgba(255,255,255,0.5)] leading-[28px]">
              대표자 : 이현송
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
