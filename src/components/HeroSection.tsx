"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[calc(100svh-72px)] lg:min-h-[819px] flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-8 lg:py-[48px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[40px] items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-5 lg:gap-[24px] items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col"
            >
              <p className="font-semibold text-[26px] sm:text-[28px] lg:text-[32px] leading-[1.4] text-[#000c26]">
                말하고, 기억하고,
              </p>
              <p className="text-[#000c26] text-[26px] sm:text-[28px] lg:text-[32px] font-semibold leading-[1.4]">
                <span className="font-bold text-[28px] sm:text-[30px] lg:text-[34px] text-[#735c00]">
                  다시 연결되는 삶
                </span>
                을 돕습니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-[512px]"
            >
              <p className="font-semibold text-[15px] sm:text-[17px] lg:text-[20px] text-[#44474f] leading-[1.7]">
                골든브레인케어는 AI 기반 언어·인지 재활 솔루션을 통해
                <br className="hidden sm:block" />
                재활의 지속성과 회복 가능성을 높이는 디지털 헬스케어 기업입니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-wrap gap-3 items-center pt-2 lg:pt-[16px]"
            >
              <Link
                href="/brand#brainfriends"
                className="bg-[#fed65b] text-[#745c00] font-semibold text-[14px] lg:text-[16px] tracking-[0.32px] px-6 py-3.5 lg:px-[32px] lg:py-[18px] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#fdc93a] transition-colors whitespace-nowrap"
              >
                브레인 프렌즈 알아보기
              </Link>
              <Link
                href="/inquiry"
                className="border-2 border-[#000c26] text-[#000c26] font-bold text-[14px] lg:text-[16px] tracking-[0.32px] px-6 py-3.5 lg:px-[34px] lg:py-[18px] rounded-[12px] hover:bg-[#000c26] hover:text-white transition-colors whitespace-nowrap"
              >
                도입 문의하기
              </Link>
            </motion.div>
          </div>

          {/* Right: Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex items-center"
          >
            <div className="absolute inset-[-16px] bg-[rgba(254,214,91,0.2)] rounded-[20px] blur-[20px]" />
            <div className="relative w-full border-4 border-white rounded-[20px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden p-[4px] bg-white">
              <div className="relative h-[240px] sm:h-[340px] lg:h-[426px] w-full rounded-[16px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/home-hero.png"
                  alt="언어·인지 재활 케어"
                  className="absolute max-w-none h-full top-0"
                  style={{ left: "-11.09%", width: "122.1%" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
