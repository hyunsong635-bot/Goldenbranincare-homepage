"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="bg-[#faf3e5] w-full">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[192px] py-10 lg:py-[64px]">
        <div className="flex flex-col gap-[24px] items-center w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="font-medium text-[15px] sm:text-[16px] lg:text-[18px] text-[#000c26] text-center leading-[28px]"
          >
            언어와 인지 회복, 꾸준히 이어가기 어렵습니다.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#735c00] h-[4px] w-[64px] rounded-full origin-left"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-semibold text-[14px] sm:text-[15px] lg:text-[18px] text-[#44474f] text-center leading-[1.8] max-w-[896px]"
          >
            언어와 인지 기능의 저하는 일상생활과 사회적 연결을 어렵게 만듭니다.
            재활은 꾸준한 반복과 정확한 경과 확인이 중요하지만,
            기존 환경에서는 시간·장소·비용의 한계가 존재합니다.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
