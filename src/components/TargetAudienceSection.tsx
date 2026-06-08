"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const audiences = [
  {
    title: "사용자",
    items: ["뇌졸중·뇌손상 이후", "실어증, 마비말장애", "인지 저하, 치매 위험군"],
  },
  {
    title: "기관",
    items: ["언어재활센터, 복지관", "치매안심센터, 요양기관", "재활·돌봄 관련 전문 기관"],
  },
  {
    title: "보호자",
    items: ["가정 내 반복 훈련 필요 가족", "객관적 경과 확인이 필요한 가족", "지속적 케어가 필요한 모든 환경"],
  },
];

export default function TargetAudienceSection() {
  return (
    <section className="bg-[#faf3e5] w-full">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-10 lg:py-[64px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-[40px]">
          {audiences.map((audience, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col gap-5 lg:gap-[24px] items-start"
            >
              <div className="bg-[#735c00] h-[4px] w-[48px] rounded-full" />
              <p className="font-bold text-[20px] lg:text-[24px] text-[#000c26] leading-[28px]">
                {audience.title}
              </p>
              <div className="flex flex-col gap-[10px] lg:gap-[11.5px] items-start w-full">
                {audience.items.map((item, j) => (
                  <div key={j} className="flex gap-[8px] items-center">
                    <div className="relative flex-shrink-0 w-[11px] h-[11px] lg:w-[11.667px] lg:h-[11.667px]">
                      <Image src="/images/icon-bullet.svg" alt="" fill className="object-contain" />
                    </div>
                    <p className="font-medium text-[14px] sm:text-[15px] lg:text-[18px] text-[#44474f] leading-[1.6]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
