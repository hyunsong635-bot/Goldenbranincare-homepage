"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const reasons = [
  { num: "01", title: "임상 기반 콘텐츠", desc: "전문 재활사가 설계한 검증된 훈련 과정" },
  { num: "02", title: "데이터 기반 경과 관리", desc: "주관적 판단을 넘어선 정밀한 데이터 분석" },
  { num: "03", title: "AI 분석 및 맞춤형 확장", desc: "개개인의 성취도에 따른 유동적 훈련 설계" },
  { num: "04", title: "지속 가능한 재활 구조", desc: "기관과 가정을 긴밀하게 연결하는 시스템" },
];

export default function WhySection() {
  return (
    <section className="w-full">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-10 lg:py-[64px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[46px] items-start lg:items-center justify-center">
          {/* Left: numbered list */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8 lg:gap-[40px] items-start w-full lg:w-[473px] lg:flex-shrink-0"
          >
            <h2 className="font-semibold text-[20px] lg:text-[24px] text-[#000c26] leading-[1.4]">
              임상 전문성과
              <br />
              디지털 데이터의 결합.
            </h2>
            <div className="flex flex-col gap-5 lg:gap-[24px] items-start w-full">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="flex gap-5 lg:gap-[24px] items-start w-full"
                >
                  <span className="font-semibold text-[16px] lg:text-[18px] text-[#735c00] leading-[28px] whitespace-nowrap flex-shrink-0">
                    {reason.num}
                  </span>
                  <div className="flex flex-col gap-[4px] items-start">
                    <p className="font-bold text-[16px] lg:text-[20px] text-[#000c26] leading-[1.5]">
                      {reason.title}
                    </p>
                    <p className="font-normal text-[14px] lg:text-[18px] text-[#44474f] leading-[1.6]">
                      {reason.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: dark card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-[#000c26] flex flex-col items-start overflow-hidden p-6 lg:p-[40px] rounded-[20px] w-full lg:max-w-[574px] lg:flex-shrink-0"
          >
            <h3 className="font-bold text-[18px] lg:text-[24px] text-white leading-[1.4]">
              언어재활 전문성 위에 만들어졌습니다.
            </h3>
            <p className="font-medium text-[14px] lg:text-[18px] text-[#d8e2ff] leading-[1.65] mt-5 lg:mt-[24px] opacity-90 w-full">
              언어재활 전문성을 기반으로 한 설계, 디지털 헬스케어와 재활
              콘텐츠의 결합, 지역사회와 기관 중심의 확장 가능성을 약속합니다.
            </p>
            <div className="mt-5 lg:mt-[24px]">
              <Link
                href="/features"
                className="bg-[#fed65b] text-[#745c00] font-bold text-[15px] lg:text-[18px] text-center px-5 py-3 lg:px-[24px] lg:py-[12px] rounded-[12px] inline-block hover:bg-[#fdc93a] transition-colors whitespace-nowrap"
              >
                핵심기능 자세히 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
