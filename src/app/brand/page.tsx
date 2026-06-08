"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/animations/FadeInUp";

const values = [
  {
    icon: "/images/icon-value-expertise.svg",
    title: "임상 전문성",
    desc: "10년 이상의 언어재활 임상 경험을 기반으로, 검증된 콘텐츠와 훈련 구조를 설계합니다.",
  },
  {
    icon: "/images/icon-value-sustain.svg",
    title: "지속 가능성",
    desc: "진료실 밖에서도 이어지는 재활. 일상 속 반복 훈련이 가능한 디지털 환경을 만듭니다.",
  },
  {
    icon: "/images/icon-value-access.svg",
    title: "접근성",
    desc: "지역과 비용의 격차 없이, 누구나 전문적인 재활을 경험할 수 있어야 합니다.",
  },
  {
    icon: "/images/icon-value-warmth.svg",
    title: "따뜻한 기술",
    desc: "데이터와 AI는 사람을 위한 도구입니다. 회복하는 사람 곁에 함께하는 기술을 지향합니다.",
  },
];

const milestones = [
  { year: "2025", label: "골든브레인케어 설립" },
  { year: "", label: "부산 예비창업패키지 선정" },
  { year: "", label: "부산은행 SUM 인큐베이팅" },
  { year: "", label: "의료기관 20곳+ MOU 체결" },
  { year: "2026", label: "(주) 골든브레인케어 법인 설립" },
  { year: "", label: "GBC 기업부설연구소 설립" },
  { year: "", label: "건양대학병원 의료AI 임상실증" },
  { year: "", label: "혁신의료기기 안전관리 기술지원 선정" },
];

const stats = [
  { value: "10년+", label: "임상 경험" },
  { value: "44.1%", label: "뇌졸중 환자 중 언어장애 동반" },
  { value: "117만", label: "연간 뇌혈관질환 환자 (2022)" },
];

export default function BrandPage() {
  return (
    <div className="flex flex-col items-start min-h-screen bg-[#fff9ee]">
      <Header />
      <main className="flex flex-col w-full pt-[72px] lg:pt-[104px]">

        {/* ── Hero ── */}
        <section className="w-full bg-[#000c26] overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.06]">
            <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full bg-[#fed65b] blur-[120px]" />
            <div className="absolute bottom-[-60px] left-[-60px] w-[360px] h-[360px] rounded-full bg-[#4f8ef5] blur-[100px]" />
          </div>
          <div className="relative max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-16 lg:py-[96px]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-semibold text-[13px] lg:text-[15px] text-[#fed65b] tracking-[2px] uppercase mb-4"
            >
              Brand Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bold text-[28px] sm:text-[36px] lg:text-[52px] text-white leading-[1.3] max-w-[720px] mb-6"
            >
              말하고, 기억하고,<br />
              <span className="text-[#fed65b]">다시 연결되는 삶</span>을 돕습니다.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-medium text-[15px] lg:text-[20px] text-[rgba(255,255,255,0.7)] leading-[1.8] max-w-[600px]"
            >
              골든브레인케어는 AI 기반 언어·인지 재활 솔루션을 통해
              재활의 지속성과 회복 가능성을 높이는 디지털 헬스케어 기업입니다.
            </motion.p>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="w-full bg-[#faf3e5] border-b border-[#ecdcc0]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-10 lg:py-[56px]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-0 lg:divide-x divide-[#d4c4a0]">
              {stats.map((s, i) => (
                <FadeInUp key={s.label} delay={i * 0.1} className="flex flex-col items-center text-center px-6">
                  <p className="font-black text-[40px] lg:text-[52px] text-[#735c00] leading-none mb-2">
                    {s.value}
                  </p>
                  <p className="font-medium text-[13px] lg:text-[16px] text-[#44474f] leading-[1.6]">
                    {s.label}
                  </p>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission / Vision ── */}
        <section className="w-full">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-14 lg:py-[96px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] items-center">
              <FadeInUp>
                <p className="font-semibold text-[13px] text-[#735c00] uppercase tracking-[2px] mb-4">
                  Mission
                </p>
                <h2 className="font-bold text-[24px] lg:text-[36px] text-[#000c26] leading-[1.4] mb-6">
                  진료실 밖에서도<br />
                  지속 가능한 재활 경험
                </h2>
                <p className="font-medium text-[15px] lg:text-[18px] text-[#44474f] leading-[1.8] mb-5">
                  뇌질환 이후 의사소통에 어려움을 겪는 사용자가 일상 속에서 반복적으로
                  언어재활을 수행할 수 있도록, 임상 경험 기반의 맞춤형 디지털 훈련 콘텐츠를 제공합니다.
                </p>
                <p className="font-medium text-[15px] lg:text-[18px] text-[#44474f] leading-[1.8]">
                  음성·반응·수행 데이터를 축적하여 개인별 회복 과정을 확인하고,
                  치료사와 보호자가 함께 활용할 수 있는 디지털 언어재활 솔루션으로 확장합니다.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.15}>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: "🎯", title: "Check", desc: "현재 상태를 먼저 확인하고 개인별 훈련 방향을 설정" },
                    { icon: "💪", title: "Train", desc: "언어·노래·게임형 모드로 부족한 영역을 반복 강화" },
                    { icon: "📈", title: "Track", desc: "누적 기록 기반으로 재활 경과를 관리하고 지속성을 높임" },
                  ].map((step) => (
                    <div
                      key={step.title}
                      className="flex items-start gap-4 lg:gap-5 p-5 lg:p-[24px] rounded-[16px] bg-[#faf3e5] border border-[#ecdcc0]"
                    >
                      <span className="text-2xl flex-shrink-0">{step.icon}</span>
                      <div>
                        <p className="font-bold text-[16px] lg:text-[18px] text-[#000c26] mb-1">{step.title}</p>
                        <p className="font-medium text-[13px] lg:text-[16px] text-[#44474f] leading-[1.6]">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* ── Core Values ── */}
        <section className="w-full bg-[#faf3e5]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-14 lg:py-[96px]">
            <FadeInUp className="mb-12 lg:mb-[64px]">
              <p className="font-semibold text-[13px] text-[#735c00] uppercase tracking-[2px] mb-3">
                Core Values
              </p>
              <h2 className="font-bold text-[24px] lg:text-[36px] text-[#000c26] leading-[1.4]">
                우리가 지키는 가치
              </h2>
            </FadeInUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[24px]">
              {values.map((v, i) => (
                <FadeInUp key={v.title} delay={i * 0.1}>
                  <div className="bg-[#fffcf4] rounded-[20px] p-6 lg:p-[32px] shadow-[0_4px_24px_rgba(115,92,0,0.07)] h-full flex flex-col gap-4">
                    <div className="relative w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0">
                      <Image src={v.icon} alt={v.title} fill className="object-contain" />
                    </div>
                    <p className="font-bold text-[16px] lg:text-[20px] text-[#000c26]">{v.title}</p>
                    <p className="font-medium text-[13px] lg:text-[16px] text-[#44474f] leading-[1.7]">{v.desc}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── Brand Image ── */}
        <section className="w-full">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-14 lg:py-[96px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] items-center">
              <FadeInUp delay={0.1}>
                <div className="relative rounded-[20px] overflow-hidden border-4 border-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.18)]">
                  <div className="absolute inset-0 bg-[rgba(254,214,91,0.15)] rounded-[20px] blur-[24px] -z-10" />
                  <div className="relative h-[260px] sm:h-[360px] lg:h-[480px] w-full">
                    <Image
                      src="/images/brand-hero.png"
                      alt="골든브레인케어 브랜드"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <p className="font-semibold text-[13px] text-[#735c00] uppercase tracking-[2px] mb-4">
                  Our Story
                </p>
                <h2 className="font-bold text-[24px] lg:text-[36px] text-[#000c26] leading-[1.4] mb-6">
                  임상 현장에서<br />시작된 질문
                </h2>
                <p className="font-medium text-[15px] lg:text-[18px] text-[#44474f] leading-[1.8] mb-8">
                  2025년 설립 이후 부산을 중심으로 의료기관·복지시설과 협력을 넓혀왔습니다.
                  예비창업패키지, 청년창업사관학교 등 다수 지원사업에 선정되고,
                  건양대학병원 임상실증을 거쳐 2026년 법인으로 성장했습니다.
                </p>
                <div className="flex flex-col gap-2.5">
                  {milestones.map((m, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className={`font-bold text-[13px] lg:text-[15px] w-[44px] flex-shrink-0 ${m.year ? "text-[#735c00]" : "text-transparent"}`}>
                        {m.year || "0000"}
                      </span>
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${m.year ? "bg-[#000c26]" : "bg-[#d4c4a0]"}`} />
                      <span className="font-medium text-[14px] lg:text-[16px] text-[#44474f]">{m.label}</span>
                    </div>
                  ))}
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* ── Product Teaser ── */}
        <section className="w-full bg-[#000c26]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-14 lg:py-[96px]">
            <FadeInUp className="text-center mb-12 lg:mb-[64px]">
              <p className="font-semibold text-[13px] text-[#fed65b] uppercase tracking-[2px] mb-3">
                Our Product
              </p>
              <h2 className="font-bold text-[24px] lg:text-[36px] text-white leading-[1.4]">
                브레인프렌즈
              </h2>
              <p className="font-medium text-[15px] lg:text-[18px] text-[rgba(255,255,255,0.65)] leading-[1.8] mt-4 max-w-[600px] mx-auto">
                자가진단부터 반복 훈련까지,<br />
                일상 속 디지털 언어재활 솔루션
              </p>
            </FadeInUp>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-10 lg:mb-[56px]">
              {[
                { icon: "/images/icon-selftest.svg", label: "자가점검", sub: "Self Assessment" },
                { icon: "/images/icon-speech.svg", label: "언어 재활", sub: "Speech Rehab" },
                { icon: "/images/icon-song.svg", label: "노래 훈련", sub: "Song Training" },
                { icon: "/images/icon-game.svg", label: "게임 모드", sub: "Game Mode" },
              ].map((item, i) => (
                <FadeInUp key={item.label} delay={i * 0.1}>
                  <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[16px] p-5 lg:p-[28px] flex flex-col items-center text-center gap-3">
                    <div className="relative w-8 h-8 lg:w-9 lg:h-9">
                      <Image src={item.icon} alt={item.label} fill className="object-contain brightness-0 invert" />
                    </div>
                    <div>
                      <p className="font-bold text-[15px] lg:text-[18px] text-white">{item.label}</p>
                      <p className="font-medium text-[11px] lg:text-[13px] text-[rgba(255,255,255,0.45)] mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>

            <FadeInUp className="flex justify-center">
              <Link
                href="/brain-friends"
                className="bg-[#fed65b] text-[#745c00] font-bold text-[15px] lg:text-[18px] px-8 py-4 lg:px-[40px] lg:py-[18px] rounded-[12px] inline-block hover:bg-[#fdc93a] transition-colors"
              >
                브레인프렌즈 자세히 보기
              </Link>
            </FadeInUp>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
