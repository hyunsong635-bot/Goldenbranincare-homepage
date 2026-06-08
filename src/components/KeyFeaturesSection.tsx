"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import StepHoverModal from "./StepHoverModal";

const features = [
  {
    icon: "/images/icon-selftest.svg",
    iconW: 30,
    iconH: 30,
    title: "자가진단",
    desc: "언어·인지 상태를 스스로 확인합니다.",
  },
  {
    icon: "/images/icon-speech.svg",
    iconW: 33,
    iconH: 28,
    title: "언어재활 훈련",
    desc: "임상 기반 언어재활 콘텐츠를 제공합니다.",
  },
  {
    icon: "/images/icon-song.svg",
    iconW: 18,
    iconH: 27,
    title: "노래 기반 발화 훈련",
    desc: "노래로 즐겁게 발화를 연습합니다.",
  },
  {
    icon: "/images/icon-game.svg",
    iconW: 30,
    iconH: 21,
    title: "게임형 인지·언어 훈련",
    desc: "게임으로 부담 없이 훈련합니다.",
  },
  {
    icon: "/images/icon-record.svg",
    iconW: 27,
    iconH: 27,
    title: "결과 기록 및 변화 확인",
    desc: "훈련 결과와 변화를 기록하고 확인합니다.",
  },
  {
    icon: "/images/icon-institution.svg",
    iconW: 36,
    iconH: 18,
    title: "기관·보호자 관리 기능",
    desc: "기관과 보호자가 함께 관리합니다.",
  },
];

export default function KeyFeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  return (
    <section className="w-full">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] pt-10 pb-12 lg:pt-[64px] lg:pb-[104px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center w-full mb-8 lg:mb-[40px]"
        >
          <h2 className="font-black text-[20px] lg:text-[24px] text-[#000c26] text-center leading-[28px]">
            브레인 프렌즈 핵심 기능
          </h2>
        </motion.div>

        {/* 3×2 Stagger grid */}
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[24px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-gradient-to-br from-white to-[#fffdf5] border border-[#ede8dc] flex flex-col gap-[4px] items-start rounded-[16px] lg:rounded-[20px] shadow-[0px_6px_20px_rgba(0,12,38,0.07)] cursor-default transition-all duration-200 p-6 lg:p-[40px] hover:border-[#fed65b] hover:shadow-[0px_16px_40px_rgba(0,12,38,0.12)]"
            >
              <div className="bg-[#fed65b]/25 rounded-[12px] lg:rounded-[14px] flex items-center justify-center w-[46px] h-[46px] lg:w-[52px] lg:h-[52px] flex-shrink-0 mb-1">
                <div
                  className="relative flex-shrink-0"
                  style={{ width: feature.iconW, height: feature.iconH }}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="font-bold text-[16px] lg:text-[18px] text-[#000c26] leading-[28px] mt-3 lg:mt-[16px]">
                {feature.title}
              </p>
              <p className="font-normal text-[14px] lg:text-[16px] text-[#44474f] leading-[1.7]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <StepHoverModal stepIndex={hoveredCard} />
    </section>
  );
}
