"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "브랜드 소개", href: "/brand" },
  { label: "브레인프렌즈", href: "/brand#brainfriends" },
  { label: "기관 도입", href: "/institution" },
  { label: "문의", href: "/contact" },
];

const therapistReservationUrl = "https://braintalktalk.goldenbraincare.com/";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[6px] bg-[rgba(250,248,247,0.95)] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-4 lg:py-[24px] flex items-center justify-between">
        <Link href="/" className="relative h-10 w-[110px] lg:h-[56px] lg:w-[155px] flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="골든브레인케어"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-[44px]">
          <div className="flex items-center gap-[44px]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-bold text-[18px] tracking-[0.32px] transition-colors whitespace-nowrap pb-[2px] bg-no-repeat [background-position:0_100%] ${
                    isActive
                      ? "text-[#000c26] bg-[linear-gradient(135deg,#fac06c,#f09b79)] [background-size:100%_2px]"
                      : "text-[#70747f] [background-size:0%_2px] hover:text-[#000c26] hover:bg-[linear-gradient(135deg,#fac06c,#f09b79)] hover:[background-size:100%_2px]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <a
            href={therapistReservationUrl}
            className="text-white font-bold text-[16px] tracking-[0.32px] px-[24px] py-[10px] rounded-[12px] whitespace-nowrap bg-[linear-gradient(135deg,#fac06c_0%,#f09b79_100%)]"
          >
            재활사 예약
          </a>
        </nav>

        {/* Mobile: CTA + hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href={therapistReservationUrl}
            className="text-white font-bold text-[13px] px-3.5 py-2 rounded-[12px] whitespace-nowrap bg-[linear-gradient(135deg,#fac06c_0%,#f09b79_100%)]"
          >
            재활사 예약
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-[5px] w-8 h-8 items-center justify-center flex-shrink-0"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          >
            <span className={`block w-5 h-0.5 bg-[#000c26] rounded-full transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#000c26] rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#000c26] rounded-full transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-[#ece9e7] bg-[rgba(250,248,247,0.98)]"
          >
            <div className="px-5 py-2 flex flex-col">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`font-semibold text-[16px] py-3.5 border-b border-[#f0e8d0] last:border-none transition-colors ${
                      isActive ? "text-[#f09b79]" : "text-[#000c26] hover:text-[#f09b79]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
