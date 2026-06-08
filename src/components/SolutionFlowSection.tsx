"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "1", title: "자가진단", desc: "현재 상태 확인" },
  { num: "2", title: "언어재활", desc: "임상 기반 훈련" },
  { num: "3", title: "노래 훈련", desc: "즐거운 발화 유도" },
  { num: "4", title: "게임형 훈련", desc: "부담 없는 반복" },
  { num: "5", title: "결과 관리", desc: "데이터 시각화" },
];

export default function SolutionFlowSection() {
  return (
    <section className="w-full">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-10 lg:py-[64px] flex flex-col gap-8 lg:gap-[64px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-[12px] items-center w-full"
        >
          <p className="font-medium text-[15px] sm:text-[16px] lg:text-[18px] text-[#000c26] text-center leading-[28px]">
            재활의 모든 과정을 하나의 흐름으로.
          </p>
          <p className="font-medium text-[14px] sm:text-[15px] lg:text-[18px] text-[#44474f] text-center leading-[1.7]">
            브레인 프렌즈는 자가진단부터 결과 관리까지 끊김 없는 디지털 재활
            경험을 제공합니다.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative w-full">
          {/* Connector line — 데스크탑 전용 */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
            className="hidden lg:block absolute top-[48px] left-[12%] right-[12%] h-[2px] bg-[rgba(254,214,91,0.6)] -translate-y-1/2 origin-left"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-[24px] relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group bg-white/55 backdrop-blur-sm border border-white/80 hover:border-[#fed65b] flex flex-col gap-[10px] items-center px-4 lg:px-[24px] pt-[20px] lg:pt-[24px] pb-5 lg:pb-[28px] rounded-[16px] lg:rounded-[20px] shadow-[0px_8px_24px_rgba(0,12,38,0.07)] hover:shadow-[0px_12px_32px_rgba(0,12,38,0.12)] transition-all duration-300"
              >
                <div className="bg-[#000c26] group-hover:bg-[#735c00] flex items-center justify-center rounded-full w-10 h-10 lg:w-[48px] lg:h-[48px] flex-shrink-0 transition-colors duration-300">
                  <span className="font-bold text-[15px] lg:text-[18px] text-white leading-none">
                    {step.num}
                  </span>
                </div>
                <p className="font-bold text-[14px] lg:text-[18px] text-[#000c26] text-center leading-[1.4]">
                  {step.title}
                </p>
                <p className="font-normal text-[12px] lg:text-[14px] text-[#44474f] text-center leading-[1.5] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
