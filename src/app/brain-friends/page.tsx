"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useInView, animate as fmAnimate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/animations/FadeInUp";

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="font-bold text-[12px] lg:text-[14px] text-[#ac3045] tracking-[2px] uppercase mb-3">
      {text}
    </p>
  );
}

const gradientPink = "linear-gradient(135deg, #f5ab9b 0%, #f96a7c 100%)";
const gradientBlue = "linear-gradient(135deg, #4db3f9 0%, #4e85f1 100%)";
const gradientGreen = "linear-gradient(135deg, #59d682 0%, #49c2ae 100%)";
const gradientYellow = "linear-gradient(135deg, #fac06c 0%, #f09b79 100%)";

const CIRCUMFERENCE = 2 * Math.PI * 28;

const SLIDE_DURATION = 3800;

const screenSlides = [
  { src: "/images/bf-screen-main.png",      label: "사용자 메인 화면",   color: "#f5ab9b" },
  { src: "/images/bf-screen-selftest.png",  label: "자가진단",    color: "#fac06c" },
  { src: "/images/bf-screen-speech.png",    label: "언어 재활",   color: "#4db3f9" },
  { src: "/images/bf-screen-song.png",      label: "노래 훈련",   color: "#59d682" },
  { src: "/images/bf-screen-game.png",      label: "게임 모드",   color: "#f96a7c" },
  { src: "/images/bf-screen-therapist.png", label: "치료사 화면", color: "#4e85f1" },
];

const slideVariants = {
  enter: (d: number) => ({ x: d > 0 ? 56 : -56, opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (d: number) => ({ x: d > 0 ? -56 : 56, opacity: 0, scale: 0.96 }),
};

function HeroSlideshow() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const goTo = (next: number) => {
    setDir(next >= idx ? 1 : -1);
    setIdx(next);
  };

  useEffect(() => {
    const t = setTimeout(() => {
      setDir(1);
      setIdx((prev) => (prev + 1) % screenSlides.length);
    }, SLIDE_DURATION);
    return () => clearTimeout(t);
  }, [idx]);

  const slide = screenSlides[idx];

  return (
    <div className="relative w-full select-none">
      {/* Animated glow */}
      <motion.div
        animate={{ backgroundColor: slide.color }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="absolute -inset-8 blur-[56px] opacity-25 rounded-[48px] pointer-events-none"
      />

      {/* Image frame */}
      <div
        className="relative rounded-[20px] overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.22)] border border-white/40"
        style={{ aspectRatio: "1250 / 740" }}
      >
        <AnimatePresence initial={false} custom={dir} mode="sync">
          <motion.div
            key={idx}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.52, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={slide.label}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay + label */}
        <div
          className="absolute bottom-0 inset-x-0 h-16 flex items-end pb-3 px-4 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)" }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="text-white text-[13px] font-semibold tracking-wide"
            >
              {slide.label}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {screenSlides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={s.label}
            className="relative h-[6px] rounded-full overflow-hidden transition-all duration-300"
            style={{
              width: i === idx ? 28 : 6,
              backgroundColor: i === idx ? s.color : "rgba(0,0,0,0.15)",
            }}
          >
            {i === idx && (
              <motion.div
                key={`prog-${idx}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                className="absolute inset-0 origin-left rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function BrainFriendsPage() {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: false, margin: "-80px" });
  const [displayCount, setDisplayCount] = useState("0.0");

  useEffect(() => {
    if (isInView) {
      const controls = fmAnimate(0, 44.1, {
        duration: 1.0,
        ease: "easeOut",
        delay: 0.3,
        onUpdate: (v) => setDisplayCount(v.toFixed(1)),
      });
      return () => controls.stop();
    } else {
      setDisplayCount("0.0");
    }
  }, [isInView]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex flex-col w-full pt-[72px] lg:pt-[104px]">

        {/* ── 1. Hero ── */}
        <section className="w-full bg-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-16 lg:py-[80px]">
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-x-[60px] lg:gap-y-4">

              {/* 라벨 + 제목 — 모바일 1순위 */}
              <div className="order-1 lg:order-none">
                <FadeInUp>
                  <p className="font-bold text-[13px] lg:text-[14px] text-[#ac3045] mb-3">
                    뇌질환 환자 대상 의사소통장애 재활·언어재활
                  </p>
                  <span
                    className="inline-block font-semibold text-[13px] lg:text-[14px] px-4 py-1.5 rounded-full mb-6"
                    style={{ color: "#ac3045", backgroundColor: "rgba(172,48,69,0.1)" }}
                  >
                    디지털의료제품(DTx)
                  </span>
                </FadeInUp>
                <FadeInUp delay={0.08}>
                  <h1 className="font-bold text-[28px] sm:text-[36px] lg:text-[48px] text-[#1b1c1c] leading-[1.25] tracking-[-0.96px]">
                    일상의 대화를 되찾아주는<br />
                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: gradientPink }}>
                      브레인프렌즈
                    </span>
                  </h1>
                </FadeInUp>
              </div>

              {/* 슬라이드쇼 — 모바일 2순위 / 데스크탑 우측 2행 span */}
              <FadeInUp delay={0.2} className="order-2 lg:order-none lg:row-span-2 lg:self-center w-full max-w-[520px] mx-auto lg:mx-0 lg:max-w-none">
                <HeroSlideshow />
              </FadeInUp>

              {/* 버튼 — 모바일 3순위 */}
              <div className="order-3 lg:order-none lg:self-start">
                <FadeInUp delay={0.16}>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/inquiry"
                      className="text-white font-semibold text-[15px] lg:text-[16px] px-8 py-[18px] rounded-full shadow-[0px_20px_25px_-5px_rgba(245,171,155,0.3)] inline-flex items-center justify-center"
                      style={{ backgroundImage: gradientPink }}
                    >
                      도입 문의하기
                    </Link>
                  </div>
                </FadeInUp>
              </div>

            </div>
          </div>
        </section>

        {/* ── 2. Overview 01 ── */}
        <section className="w-full bg-white border-t border-[#f0eded]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-14 lg:py-[80px]">
            <FadeInUp>
              <SectionLabel text="OVERVIEW 01" />
              <h2 className="font-bold text-[22px] lg:text-[32px] text-[#1b1c1c] leading-[1.4] tracking-[-0.32px] mb-5">
                10년 이상 임상 경험,<br />전문 언어 재활 콘텐츠 개발
              </h2>
              <p className="font-normal text-[14px] lg:text-[16px] text-[#584142] leading-[1.8] max-w-[680px]">
                뇌질환 이후 의사소통에 어려움을 겪는 사용자가 일상 속에서 반복적으로 언어재활을 수행할 수 있도록,
                임상 경험 기반의 맞춤형 디지털 훈련 콘텐츠를 제공합니다. 음성·반응·수행 데이터를 축적하여
                개인별 회복 과정을 확인하고, 치료사와 보호자가 함께 활용할 수 있는 디지털 언어재활 솔루션으로 확장합니다.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* ── 3. Background 02 ── */}
        <section className="w-full" style={{ backgroundColor: "rgba(217,226,255,0.3)" }}>
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-14 lg:py-[80px]">
            <FadeInUp className="text-center mb-10 lg:mb-[56px]">
              <SectionLabel text="BACKGROUND 02" />
              <h2 className="font-bold text-[22px] lg:text-[32px] text-[#1b1c1c] leading-[1.4] tracking-[-0.32px]">
                실제 임상 현장에서 경험한<br />&apos;영구적 언어장애&apos;의 심각성
              </h2>
            </FadeInUp>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 lg:items-stretch">
              {/* Bar chart card */}
              <FadeInUp delay={0.05} className="h-full">
                <div ref={chartRef} className="bg-white rounded-[24px] p-6 lg:p-[32px] shadow-[0px_4px_24px_rgba(0,0,0,0.06)] h-full flex flex-col">
                  <p className="font-bold text-[16px] lg:text-[18px] text-[#1b1c1c] mb-2">
                    Q. 왜 초기 언어재활 개입이 중요한가?
                  </p>
                  <p className="font-bold text-[13px] text-[#584142] mb-6">
                    의사소통장애 환자 수 추이 (2018–2022)
                  </p>

                  {/* Bar chart */}
                  <div className="flex-1 flex flex-col justify-end mb-4">
                    <div className="flex items-end gap-2 lg:gap-3" style={{ height: 148 }}>
                      {[38, 52, 65, 78, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t-[6px]"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: isInView ? 1 : 0 }}
                          transition={{
                            duration: 0.7,
                            delay: i * 0.08,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          style={{
                            height: Math.round(h * 1.48),
                            transformOrigin: "bottom center",
                            background: i === 4 ? gradientPink : "#eae8e7",
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2 lg:gap-3 border-t border-[#eae8e7] pt-2">
                      {[2018, 2019, 2020, 2021, 2022].map((year) => (
                        <div key={year} className="flex-1 text-center">
                          <span className="text-[10px] lg:text-[11px] text-[#584142] font-medium">{year}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 도넛 차트 + 설명 */}
                  <div className="border-t border-[#f0eded] pt-5 flex items-center gap-5">
                    <svg width="72" height="72" viewBox="0 0 72 72" className="flex-shrink-0">
                      <defs>
                        <linearGradient id="donutGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f5ab9b"/>
                          <stop offset="100%" stopColor="#f96a7c"/>
                        </linearGradient>
                      </defs>
                      <circle cx="36" cy="36" r="28" fill="none" stroke="#eae8e7" strokeWidth="9"/>
                      <motion.circle
                        cx="36" cy="36" r="28"
                        fill="none"
                        stroke="url(#donutGrad)"
                        strokeWidth="9"
                        strokeLinecap="round"
                        strokeDasharray={CIRCUMFERENCE}
                        initial={{ strokeDashoffset: CIRCUMFERENCE }}
                        animate={{ strokeDashoffset: isInView ? CIRCUMFERENCE * (1 - 0.441) : CIRCUMFERENCE }}
                        transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
                        transform="rotate(-90 36 36)"
                      />
                      <text x="36" y="40" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1b1c1c">
                        {displayCount}%
                      </text>
                    </svg>
                    <p className="font-normal text-[13px] lg:text-[14px] text-[#584142] leading-[1.6]">
                      뇌졸중 이후 실어증 동반 비율: 발병 초기 집중 치료 부재 시 영구적 장애로 고착
                    </p>
                  </div>
                </div>
              </FadeInUp>

              {/* Problem cards */}
              <div className="flex flex-col gap-4 h-full">
                {[
                  { border: "#f5ab9b", title: "Subjectivity", desc: "치료사 주관에 의존한 평가 및 기록의 한계" },
                  { border: "#fac06c", title: "Inefficiency", desc: "높은 비용과 공간적 제약으로 인한 훈련 공백" },
                  { border: "#4db3f9", title: "Accessibility", desc: "지속 가능한 자가 훈련 콘텐츠의 부족" },
                ].map((item, i) => (
                  <FadeInUp key={item.title} delay={0.1 + i * 0.08} className="flex-1 flex flex-col">
                    <div
                      className="bg-white rounded-[20px] p-5 lg:p-6 shadow-[0px_4px_16px_rgba(0,0,0,0.05)] border-l-[6px] h-full flex flex-col justify-center"
                      style={{ borderLeftColor: item.border }}
                    >
                      <p className="font-bold text-[16px] lg:text-[18px] text-[#1b1c1c] mb-1">{item.title}</p>
                      <p className="font-normal text-[13px] lg:text-[15px] text-[#584142]">{item.desc}</p>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Solution Hypothesis 03 ── */}
        <section className="w-full bg-white">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-14 lg:py-[80px]">
            <FadeInUp className="mb-10 lg:mb-[56px]">
              <SectionLabel text="SOLUTION HYPOTHESIS 03" />
            </FadeInUp>
            <div className="flex flex-col gap-8 lg:gap-[48px]">
              {[
                { label: "Check", gradient: gradientPink, question: "환자 스스로 일상에서 발화 상태를 점검할 수 있는가?" },
                { label: "Train", gradient: gradientBlue, question: "임상적 근거를 기반으로 흥미로운 반복 훈련이 가능한가?" },
                { label: "Track", gradient: gradientGreen, question: "객관적인 데이터로 회복 과정을 가시화할 수 있는가?" },
              ].map((item, i) => (
                <FadeInUp key={item.label} delay={i * 0.1}>
                  <div className="flex items-center gap-6 lg:gap-8">
                    <span
                      className="text-white font-bold text-[14px] lg:text-[16px] px-5 py-2 rounded-full flex-shrink-0 shadow-[0px_8px_16px_rgba(0,0,0,0.12)]"
                      style={{ backgroundImage: item.gradient }}
                    >
                      {item.label}
                    </span>
                    <p className="font-bold text-[18px] lg:text-[28px] text-[#1b1c1c] leading-[1.4] tracking-[-0.32px]">
                      {item.question}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. Solution 04 ── */}
        <section className="w-full bg-[#f6f3f2]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-14 lg:py-[80px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] lg:items-stretch">

              {/* Left */}
              <FadeInUp className="h-full">
                <div className="h-full flex flex-col">
                  <SectionLabel text="SOLUTION 04" />
                  <h2 className="font-bold text-[22px] lg:text-[32px] text-[#1b1c1c] leading-[1.4] tracking-[-0.32px] mb-4">
                    자가진단부터 반복 훈련까지,<br />일상 속 디지털 언어재활 솔루션
                  </h2>
                  <p className="font-normal text-[14px] lg:text-[16px] text-[#584142] leading-[1.7] mb-6 flex-1">
                    브레인프렌즈는 환자가 병원 밖에서도 스스로를 진단하고 즐겁게 재활할 수 있는 올인원 에코시스템을 구축합니다.
                  </p>
                  <div
                    className="bg-white rounded-[20px] px-6 py-5 border text-[13px] lg:text-[15px] font-bold leading-[1.6]"
                    style={{ color: "#ac3045", borderColor: "#debfc0" }}
                  >
                    &quot;진료실 밖에서도 지속 가능한 언어재활 경험을 제공하는 디지털 재활 플랫폼&quot;
                  </div>
                </div>
              </FadeInUp>

              {/* Right: 2x2 cards */}
              <div className="grid grid-cols-2 gap-4 content-start">
                {[
                  { label: "자가점검", sub: "생활 공간 기반 맞춤 진단", gradient: gradientYellow, icon: "/images/icon-selftest.svg" },
                  { label: "언어 재활", sub: "단계별 집중 영역 훈련", gradient: gradientBlue, icon: "/images/icon-speech.svg" },
                  { label: "노래 훈련", sub: "리듬을 활용한 발화 유도", gradient: gradientGreen, icon: "/images/icon-song.svg" },
                  { label: "게임 모드", sub: "시나리오 기반 인지 강화", gradient: gradientPink, icon: "/images/icon-game.svg" },
                ].map((item, i) => (
                  <FadeInUp key={item.label} delay={i * 0.08}>
                    <div className="bg-white rounded-[20px] p-5 lg:p-7 shadow-[0px_4px_20px_rgba(0,0,0,0.07)] flex flex-col items-center text-center gap-4">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{ backgroundImage: item.gradient }}
                      >
                        <Image src={item.icon} alt={item.label} width={28} height={28} className="brightness-0 invert" />
                      </div>
                      <div>
                        <p className="font-bold text-[15px] lg:text-[17px] text-[#1b1c1c] mb-1">{item.label}</p>
                        <p className="font-normal text-[11px] lg:text-[13px] text-[#584142]">{item.sub}</p>
                      </div>
                    </div>
                  </FadeInUp>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── 6. Self Assessment 05 ── */}
        <section className="w-full bg-white">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-14 lg:py-[80px]">
            <FadeInUp className="text-center mb-10 lg:mb-[56px]">
              <SectionLabel text="SELF ASSESSMENT 05" />
              <h2 className="font-bold text-[22px] lg:text-[32px] text-[#1b1c1c] leading-[1.4] tracking-[-0.32px]">
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: gradientYellow }}>생활 공간 기반</span>
                {" "}자가진단
              </h2>
            </FadeInUp>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Location grid */}
              <FadeInUp delay={0.05}>
                <div className="bg-[#f0eded] rounded-[24px] p-6 lg:p-[32px]">
                  <p className="font-bold text-[14px] text-[#584142] mb-5">훈련 공간 선택</p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "집", active: false },
                      { label: "병원", active: false },
                      { label: "카페", active: true },
                      { label: "마트", active: false },
                      { label: "버스", active: false },
                      { label: "공원", active: false },
                    ].map((place) => (
                      <div
                        key={place.label}
                        className="rounded-[14px] py-4 flex flex-col items-center gap-2 text-center"
                        style={place.active ? {
                          background: "white",
                          border: "3px solid #fac06c",
                          boxShadow: "0px 4px 12px rgba(250,192,108,0.2)",
                        } : { background: "white", border: "2px solid #e8e4e3" }}
                      >
                        <span className="text-2xl">
                          {place.label === "집" ? "🏠" : place.label === "병원" ? "🏥" : place.label === "카페" ? "☕" : place.label === "마트" ? "🛒" : place.label === "버스" ? "🚌" : "🌳"}
                        </span>
                        <span className={`font-semibold text-[13px] ${place.active ? "text-[#f09b79]" : "text-[#584142]"}`}>
                          {place.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>

              {/* Feature cards */}
              <div className="flex flex-col gap-4">
                {[
                  { title: "맞춤형 환경 설정", desc: "사용자가 가장 많이 활동하는 일상 공간 선택" },
                  { title: "AI 기반 분석", desc: "발화 패턴과 정확도를 실시간으로 자동 분석" },
                  { title: "주기적 리포트", desc: "진단 결과를 바탕으로 최적의 훈련 코스 추천" },
                ].map((item, i) => (
                  <FadeInUp key={item.title} delay={0.1 + i * 0.08}>
                    <div
                      className="bg-white rounded-[20px] p-5 lg:p-6 shadow-[0px_4px_16px_rgba(0,0,0,0.05)] border-l-[6px]"
                      style={{ borderLeftColor: "#fac06c" }}
                    >
                      <p className="font-bold text-[15px] lg:text-[17px] text-[#1b1c1c] mb-1">{item.title}</p>
                      <p className="font-normal text-[13px] lg:text-[15px] text-[#584142]">{item.desc}</p>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>

            {/* Banner */}
            <FadeInUp delay={0.2}>
              <div
                className="rounded-[24px] py-8 lg:py-[36px] px-6 lg:px-[48px] text-center shadow-[0px_8px_32px_rgba(250,192,108,0.25)]"
                style={{ backgroundImage: gradientYellow }}
              >
                <p className="font-bold text-[18px] lg:text-[26px] text-white leading-[1.5]">
                  &quot;언제 어디서나 객관적으로 확인하는 나의 언어 회복 상태&quot;
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* ── 7. Speech Rehab 06 ── */}
        <section className="w-full" style={{ backgroundColor: "rgba(217,226,255,0.2)" }}>
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-14 lg:py-[80px]">
            <FadeInUp className="text-center mb-10 lg:mb-[56px]">
              <SectionLabel text="SPEECH REHAB 06" />
              <h2 className="font-bold text-[22px] lg:text-[32px] text-[#1b1c1c] leading-[1.4] tracking-[-0.32px]">
                부족한 언어 영역을 단계별로 집중 훈련하는{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: gradientBlue }}>언어재활</span>
              </h2>
            </FadeInUp>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 lg:items-stretch">
              {/* Training type cards */}
              <div className="flex flex-col gap-4 h-full">
                {[
                  { title: "의미·음운 훈련", desc: "단어의 의미적 연결과 소리의 구성을 강화합니다." },
                  { title: "문장 산출 훈련", desc: "구조화된 문장 만들기 활동을 통해 표현력을 높입니다." },
                  { title: "담화 구성 훈련", desc: "실제 대화와 유사한 맥락에서 의사소통을 연습합니다." },
                ].map((item, i) => (
                  <FadeInUp key={item.title} delay={i * 0.08} className="flex-1 flex flex-col">
                    <div
                      className="bg-white rounded-[20px] p-5 lg:p-6 shadow-[0px_4px_16px_rgba(0,0,0,0.05)] border-l-[6px] h-full flex flex-col justify-center"
                      style={{ borderLeftColor: "#4db3f9" }}
                    >
                      <p className="font-bold text-[15px] lg:text-[17px] text-[#1b1c1c] mb-1">{item.title}</p>
                      <p className="font-normal text-[13px] lg:text-[15px] text-[#584142]">{item.desc}</p>
                    </div>
                  </FadeInUp>
                ))}
              </div>

              {/* Step list */}
              <FadeInUp delay={0.1} className="h-full">
                <div className="bg-white rounded-[24px] p-6 lg:p-[32px] shadow-[0px_4px_24px_rgba(0,0,0,0.06)] h-full">
                  <p className="font-bold text-[14px] text-[#584142] mb-5">단계별 훈련 구성</p>
                  <div className="flex flex-col gap-3">
                    {[
                      { step: 1, label: "단어 명명하기", active: true },
                      { step: 2, label: "단어 조합하기", active: false },
                      { step: 3, label: "조사 선택하기", active: false },
                      { step: 4, label: "동사 활용하기", active: false },
                      { step: 5, label: "짧은 문장 말하기", active: false },
                      { step: 6, label: "장면 묘사하기", active: false },
                    ].map((s) => (
                      <div
                        key={s.step}
                        className="flex items-center gap-3 px-4 py-3 rounded-[12px]"
                        style={s.active ? {
                          background: "rgba(77,179,249,0.08)",
                          border: "1.5px solid rgba(77,179,249,0.3)",
                        } : {
                          background: "#f9f8f7",
                          border: "1.5px solid #f0eded",
                        }}
                      >
                        <span
                          className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0"
                          style={s.active ? {
                            background: "#4db3f9",
                            color: "white",
                          } : {
                            background: "rgba(77,179,249,0.3)",
                            color: "#1b1c1c",
                          }}
                        >
                          {s.step}
                        </span>
                        <span
                          className="font-semibold text-[14px] lg:text-[15px]"
                          style={{ color: s.active ? "#4db3f9" : "#1b1c1c" }}
                        >
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>
            </div>

            {/* Banner */}
            <FadeInUp delay={0.2}>
              <div
                className="rounded-[24px] py-8 lg:py-[36px] px-6 lg:px-[48px] text-center shadow-[0px_8px_32px_rgba(77,179,249,0.25)]"
                style={{ backgroundImage: gradientBlue }}
              >
                <p className="font-bold text-[18px] lg:text-[26px] text-white leading-[1.5]">
                  &quot;데이터 기반의 정교한 훈련 설계로 회복의 속도를 높입니다&quot;
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* ── 8. Song Training 07 ── */}
        <section className="w-full bg-white">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-14 lg:py-[80px]">
            <FadeInUp className="text-center mb-10 lg:mb-[56px]">
              <SectionLabel text="SONG TRAINING 07" />
              <h2 className="font-bold text-[22px] lg:text-[32px] text-[#1b1c1c] leading-[1.4] tracking-[-0.32px]">
                좋아하는 곡으로 리듬과 발화 반응을 훈련하는{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: gradientGreen }}>노래훈련</span>
              </h2>
            </FadeInUp>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Song player */}
              <FadeInUp delay={0.05}>
                <div className="bg-[#fbf9f8] rounded-[24px] p-6 lg:p-[32px] border-2 border-[#debfc0]">
                  <p className="font-bold text-[14px] text-[#584142] mb-5">훈련 곡 선택</p>
                  <div className="flex flex-col gap-3">
                    {[
                      { title: "과수원 길", genre: "동요 · 02:30", active: true },
                      { title: "아리랑", genre: "민요 · 03:15", active: false },
                      { title: "고향의 봄", genre: "동요 · 02:45", active: false },
                    ].map((song) => (
                      <div
                        key={song.title}
                        className="flex items-center gap-4 p-4 rounded-[16px]"
                        style={song.active ? {
                          background: "rgba(89,214,130,0.1)",
                          border: "1.5px solid rgba(89,214,130,0.3)",
                        } : {
                          background: "#e4e2e1",
                          border: "1.5px solid transparent",
                        }}
                      >
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-white flex-shrink-0"
                          style={{ background: song.active ? "#59d682" : "#b0adac" }}
                        >
                          ▶
                        </div>
                        <div>
                          <p className="font-bold text-[14px] lg:text-[15px] text-[#1b1c1c]">{song.title}</p>
                          <p className="font-normal text-[12px] text-[#584142]">{song.genre}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>

              {/* Feature cards */}
              <div className="flex flex-col gap-4">
                {[
                  { title: "MIT 멜로디 억양 치료법", desc: "음악적 요소를 활용하여 좌뇌 손상 환자의 우뇌 발화 기능을 자극합니다." },
                  { title: "리듬 기반 발음 교정", desc: "정확한 박자에 맞춘 발성으로 조음 정확도를 향상시킵니다." },
                  { title: "정서적 유대감 형성", desc: "익숙한 선율을 통해 재활 훈련의 스트레스를 낮추고 즐거움을 더합니다." },
                ].map((item, i) => (
                  <FadeInUp key={item.title} delay={0.1 + i * 0.08}>
                    <div
                      className="bg-white rounded-[20px] p-5 lg:p-6 shadow-[0px_4px_16px_rgba(0,0,0,0.05)] border-l-[6px]"
                      style={{ borderLeftColor: "#59d682" }}
                    >
                      <p className="font-bold text-[15px] lg:text-[17px] text-[#1b1c1c] mb-1">{item.title}</p>
                      <p className="font-normal text-[13px] lg:text-[15px] text-[#584142] leading-[1.6]">{item.desc}</p>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>

            {/* Banner */}
            <FadeInUp delay={0.2}>
              <div
                className="rounded-[24px] py-8 lg:py-[36px] px-6 lg:px-[48px] text-center shadow-[0px_8px_32px_rgba(89,214,130,0.25)]"
                style={{ backgroundImage: gradientGreen }}
              >
                <p className="font-bold text-[18px] lg:text-[26px] text-white leading-[1.5]">
                  &quot;음악의 힘으로 더 자연스럽고 리드미컬한 발화를 이끌어냅니다&quot;
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* ── 9. Game Mode 08 ── */}
        <section className="w-full bg-[#303030]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-14 lg:py-[80px]">
            <FadeInUp className="text-center mb-10 lg:mb-[56px]">
              <SectionLabel text="GAME MODE 08" />
              <h2 className="font-bold text-[22px] lg:text-[32px] leading-[1.4] tracking-[-0.32px] text-white">
                가상 시나리오와 언어·인지 훈련을 결합한{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: gradientPink }}>게임모드</span>
              </h2>
            </FadeInUp>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 lg:gap-8">
              {/* Left */}
              <FadeInUp delay={0.05}>
                {/* Room image */}
                <div className="relative rounded-[20px] overflow-hidden border-2 border-[#334155] mb-4">
                  <Image
                    src="/images/game-mode-room.jpg"
                    alt="360° 몰입형 가상 생활 공간 시나리오"
                    width={625}
                    height={352}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-5 py-4"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)" }}>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">↩</div>
                      <p className="font-bold text-[14px] lg:text-[15px] text-white">360° 몰입형 가상 생활 공간 시나리오</p>
                    </div>
                  </div>
                </div>
                {/* Mini cards */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { title: "360° 생활공간 시나리오", sub: "실제 일상 환경 재현" },
                    { title: "언어 게임", sub: "재미있는 어휘 확장" },
                    { title: "손모션 게임", sub: "인지-반응 협응력 훈련" },
                    { title: "인지 게임", sub: "기억력 및 주의력 강화" },
                  ].map((item) => (
                    <div key={item.title} className="rounded-[14px] p-4"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <p className="font-bold text-[13px] lg:text-[14px] text-white mb-0.5">{item.title}</p>
                      <p className="font-normal text-[11px] lg:text-[12px] text-[#94a3b8]">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </FadeInUp>

              {/* Right: feature cards + quote banner */}
              <div className="flex flex-col gap-4">
                {[
                  { title: "몰입형 360° 시나리오", desc: "사용자가 실제 거주하는 환경이나 방문할 장소를 가상으로 체험하며 실전 대화 역량을 기릅니다." },
                  { title: "다영역 게임 구성", desc: "언어 재활 뿐만 아니라 실행 기능, 기억력, 시지각 등 다각도 인지 훈련 콘텐츠를 포함합니다." },
                  { title: "확장형 콘텐츠", desc: "사용자의 수행 능력에 따라 난이도가 자동으로 조절되며 새로운 시나리오가 지속적으로 업데이트됩니다." },
                ].map((item, i) => (
                  <FadeInUp key={item.title} delay={0.1 + i * 0.1}>
                    <div className="rounded-[18px] p-5 lg:p-6 border-l-[6px]"
                      style={{ background: "rgba(255,255,255,0.08)", borderLeftColor: "#f5ab9b" }}>
                      <p className="font-bold text-[15px] lg:text-[17px] text-white mb-1">{item.title}</p>
                      <p className="font-normal text-[13px] lg:text-[14px] text-[#cbd5e1] leading-[1.6]">{item.desc}</p>
                    </div>
                  </FadeInUp>
                ))}
                {/* Quote banner */}
                <FadeInUp delay={0.4}>
                  <div className="rounded-[18px] p-5 lg:p-6 flex items-center justify-center text-center"
                    style={{ backgroundImage: gradientPink }}>
                    <p className="font-bold text-[16px] lg:text-[20px] text-white leading-[1.5]">
                      &quot;재활이 지루하지 않게,<br />매일 즐기는 두뇌 피트니스&quot;
                    </p>
                  </div>
                </FadeInUp>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. CTA ── */}
        <section className="w-full bg-[#faf6f2]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-16 lg:py-[96px] text-center">
            <FadeInUp>
              <p className="font-bold text-[16px] lg:text-[20px] text-[#1b1c1c] mb-2">
                브레인프렌즈와 함께
              </p>
              <h2 className="font-bold text-[28px] lg:text-[48px] leading-[1.3] tracking-[-0.96px] mb-5">
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: gradientPink }}>다시 일상으로</span>
                {" "}
                <span className="text-[#1b1c1c]">돌아가세요.</span>
              </h2>
              <p className="font-normal text-[14px] lg:text-[16px] text-[#584142] leading-[1.7] mb-8">
                디지털 기술로 한계를 넘는 언어 재활 솔루션,<br className="hidden sm:block" />
                지금 바로 도입 상담을 신청하세요.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/inquiry"
                  className="text-white font-semibold text-[15px] lg:text-[16px] px-8 py-[18px] rounded-full shadow-[0px_20px_25px_-5px_rgba(245,171,155,0.3)] inline-flex items-center justify-center"
                  style={{ backgroundImage: gradientPink }}
                >
                  도입 문의하기
                </Link>
              </div>
            </FadeInUp>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
