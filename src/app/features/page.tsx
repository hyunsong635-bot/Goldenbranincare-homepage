"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/animations/FadeInUp";

const features = [
  {
    title: "자가진단",
    desc: "언어·인지 상태를 스스로 확인하고 현재 수준을 파악합니다.\n사용자 친화적인 인터페이스로 누구나 쉽게 초기 평가를 수행할 수 있습니다.",
    image: "/images/feature-selftest.png",
    imageRight: true,
    bg: "#fffdf7",
    accent: "#fed65b",
    shadow: "0px 4px 40px 0px rgba(240,156,121,0.3)",
    crop: null,
  },
  {
    title: "언어재활 훈련",
    desc: "언어재활사의 임상 경험을 바탕으로 설계된 전문 콘텐츠를 제공합니다.\n검증된 커리큘럼을 통해 체계적이고 효과적인 훈련 환경을 선사합니다.",
    image: "/images/feature-speech.png",
    imageRight: false,
    bg: "#f7f9ff",
    accent: "#4e8df2",
    shadow: "0px 4px 40px 0px rgba(77,170,247,0.3)",
    crop: null,
  },
  {
    title: "노래 기반 발화 훈련",
    desc: "노래를 활용해 부담 없이 즐겁게 발화를 연습합니다.\n음악의 리듬과 멜로디를 통해 자연스러운 발화 유도를 돕고 정서적 즐거움을 제공합니다.",
    image: "/images/feature-song.png",
    imageRight: true,
    bg: "#fcfffa",
    accent: "#4cc6a7",
    shadow: "0px 4px 40px 0px rgba(86,210,139,0.3)",
    crop: null,
  },
  {
    title: "게임형 인지·언어 훈련",
    desc: "게임 형식으로 반복 훈련의 부담을 줄이고 참여를 높입니다.\n성취감을 자극하는 다양한 미션과 보상 체계로 매일 즐겁게 두뇌를 활성화합니다.",
    image: "/images/feature-game.png",
    imageRight: false,
    bg: "#fffafa",
    accent: "#f97782",
    shadow: "0px 4px 40px 0px rgba(249,113,128,0.3)",
    crop: null,
  },
  {
    title: "결과 기록 및 변화 확인",
    desc: "훈련 결과와 변화를 데이터로 기록하고 경과를 확인합니다.\n직관적인 그래프와 요약 리포트를 통해 한눈에 개선 과정을 파악할 수 있습니다.",
    image: "/images/feature-results.png",
    imageRight: true,
    bg: "#fdfaff",
    accent: "#8e29ff",
    shadow: "0px 4px 40px 0px rgba(142,44,255,0.3)",
    crop: { left: "-7.41%", width: "115.61%" },
  },
  {
    title: "기관·보호자 관리 기능",
    desc: "기관 담당자와 보호자가 훈련 결과를 함께 확인하고 관리합니다.\n원격 모니터링 및 소통 기능을 통해 더욱 촘촘한 케어 네트워크를 구축합니다.",
    image: "/images/feature-care.png",
    imageRight: false,
    bg: "#ffffff",
    accent: "#70747f",
    shadow: "0px 4px 40px 0px rgba(0,0,0,0.25)",
    crop: null,
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex flex-col w-full">

        {/* ── Hero ── */}
        <section
          className="w-full pt-[160px] lg:pt-[192px] pb-[80px] lg:pb-[128px] px-5 md:px-10 lg:px-[80px]"
          style={{ background: "linear-gradient(to bottom, #ffffff 0%, #fff9ee 100%)" }}
        >
          <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6 text-center">
            <FadeInUp>
              <span
                className="inline-block font-semibold text-[14px] px-4 py-1.5 rounded-full"
                style={{ backgroundColor: "#fed65b", color: "#745c00" }}
              >
                CORE FEATURES
              </span>
            </FadeInUp>
            <FadeInUp delay={0.08}>
              <h1 className="font-black text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.2] tracking-[-1.4px] text-[#000c26]">
                재활의 모든 과정을<br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(120deg, #000c26 0%, #485e8d 100%)" }}
                >
                  하나의 흐름으로
                </span>
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.16}>
              <p className="font-semibold text-[16px] lg:text-[20px] text-[#44474f] leading-[1.6] max-w-[768px]">
                브레인 프렌즈는 자가진단부터 결과 관리까지,<br className="hidden sm:block" />
                재활에 필요한 기능을 하나로 연결합니다.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* ── Feature Rows ── */}
        {features.map((feature) => (
          <section
            key={feature.title}
            className="w-full px-5 md:px-10 lg:px-[80px] py-14 lg:py-[64px]"
            style={{ backgroundColor: feature.bg }}
          >
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-[64px]">

              {/* Text */}
              <FadeInUp
                delay={0.05}
                className={`w-full lg:w-auto lg:flex-shrink-0 lg:max-w-[463px] ${feature.imageRight ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="flex flex-col gap-6">
                  <div className="w-12 h-1 rounded-full" style={{ backgroundColor: feature.accent }} />
                  <h2 className="font-bold text-[26px] lg:text-[32px] text-[#000c26] leading-[1.375] tracking-[-0.32px]">
                    {feature.title}
                  </h2>
                  <p className="font-semibold text-[16px] lg:text-[20px] text-[#44474f] leading-[1.6] whitespace-pre-line">
                    {feature.desc}
                  </p>
                </div>
              </FadeInUp>

              {/* Image */}
              <FadeInUp
                delay={0.12}
                className={`w-full lg:flex-1 ${feature.imageRight ? "lg:order-2" : "lg:order-1"}`}
              >
                <div
                  className="relative h-[240px] sm:h-[320px] lg:h-[400px] rounded-[20px] lg:rounded-[40px] overflow-hidden"
                  style={{ boxShadow: feature.shadow }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="absolute top-0 h-full max-w-none"
                    style={
                      feature.crop
                        ? { left: feature.crop.left, width: feature.crop.width }
                        : { left: 0, width: "100%", objectFit: "cover" }
                    }
                  />
                </div>
              </FadeInUp>

            </div>
          </section>
        ))}

        {/* ── CTA ── */}
        <section className="w-full bg-[#000c26] px-5 md:px-10 lg:px-[80px] py-14 lg:py-[64px]">
          <div className="max-w-[1200px] mx-auto py-12 flex flex-col items-center gap-10">
            <FadeInUp>
              <h2 className="font-bold text-[28px] lg:text-[40px] text-white text-center leading-[1.3] tracking-[-0.8px]">
                브레인 프렌즈를 직접 확인해보세요
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <Link
                href="/inquiry"
                className="inline-flex items-center justify-center font-semibold text-[16px] text-[#241a00] tracking-[0.32px] px-10 py-5 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
                style={{ backgroundColor: "#fed65b" }}
              >
                도입 문의하기
              </Link>
            </FadeInUp>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
