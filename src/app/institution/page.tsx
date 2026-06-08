"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/animations/FadeInUp";

const institutions = [
  { icon: "/images/institution-icon-speech.svg", title: "언어재활센터", sub: "전문 언어 치료 지원" },
  { icon: "/images/institution-icon-welfare.svg", title: "복지관", sub: "지역사회 인지 관리" },
  { icon: "/images/institution-icon-dementia.svg", title: "치매안심센터", sub: "예방 및 조기 개입" },
  { icon: "/images/institution-icon-care.svg", title: "요양기관", sub: "생활 밀착형 케어" },
  { icon: "/images/institution-icon-rehab.svg", title: "재활 관련 기관", sub: "맞춤형 솔루션 제공" },
];

const effects = [
  {
    num: "01",
    title: "임상 기반 콘텐츠",
    desc: "전문성 있는 재활 훈련을 기관에서 바로 활용하여\n교육의 질을 높일 수 있습니다.",
  },
  {
    num: "02",
    title: "데이터 기반 경과 관리",
    desc: "사용자의 변화를 정량적으로 확인하고 리포트를 통해\n체계적으로 분석합니다.",
  },
  {
    num: "03",
    title: "기관·보호자 관리 기능",
    desc: "담당자와 보호자가 함께 경과를 확인하고 실시간으로\n피드백을 주고받습니다.",
  },
  {
    num: "04",
    title: "확장 가능성",
    desc: "AI 분석 및 맞춤형 훈련으로 확장 가능한 유연한 기술\n구조를 지향합니다.",
  },
];

const steps = [
  { num: "1", title: "문의하기", desc: "홈페이지 또는 유선 도입 상담 신청" },
  { num: "2", title: "상담 및 안내", desc: "기관별 맞춤형 솔루션 및 시연 안내" },
  { num: "3", title: "도입 및 설정", desc: "계약 체결 및 시스템 초기 설정 지원" },
  { num: "4", title: "운영 및 관리", desc: "교육 지원 및 정기적인 기술 업데이트" },
];

export default function InstitutionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col w-full">

        {/* ── Hero ── */}
        <section
          className="w-full px-5 md:px-10 lg:px-[80px] pt-[160px] lg:pt-[192px] pb-14 lg:pb-[88px] min-h-[500px] lg:min-h-[600px] flex items-center"
          style={{ backgroundColor: "#04214d" }}
        >
          <div className="max-w-[1280px] mx-auto w-full lg:px-0">
            <FadeInUp>
              <div className="max-w-[768px] flex flex-col gap-6">
                <h1 className="font-bold text-[36px] sm:text-[48px] lg:text-[64px] text-white leading-[1.4] tracking-[-2px]">
                  기관과 가정을 연결하는<br />지속 가능한 재활 관리
                </h1>
                <p className="font-semibold text-[16px] lg:text-[20px] leading-[1.6]" style={{ color: "#738abb" }}>
                  치료실 중심의 재활을 넘어 기관, 가정, 지역사회에서도 이어지는<br className="hidden lg:block" />
                  언어·인지 관리 체계를 만듭니다.
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* ── 도입 대상 기관 ── */}
        <section className="w-full px-5 md:px-10 lg:px-[80px] py-14 lg:py-[64px]" style={{ backgroundColor: "#fff9ee" }}>
          <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
            <FadeInUp className="text-center">
              <p className="font-bold text-[14px] lg:text-[16px] tracking-[0.8px] uppercase mb-2" style={{ color: "#735c00" }}>
                PARTNERSHIP
              </p>
              <h2 className="font-bold text-[24px] lg:text-[32px] text-[#1e1b13] tracking-[-0.32px]">
                함께하는 도입 대상 기관
              </h2>
            </FadeInUp>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
              {institutions.map((inst, i) => (
                <FadeInUp key={inst.title} delay={i * 0.07}>
                  <div
                    className="bg-white rounded-[20px] pt-[42px] pb-10 px-8 flex flex-col items-center gap-0 shadow-[0px_4px_6px_rgba(4,33,77,0.06)]"
                    style={{ borderTop: "2px solid #ffe088" }}
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#faf3e5" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={inst.icon} alt={inst.title} className="w-6 h-6 object-contain" />
                    </div>
                    <p className="font-semibold text-[18px] lg:text-[20px] text-[#1e1b13] text-center leading-[1.6] mb-1">
                      {inst.title}
                    </p>
                    <p className="font-normal text-[14px] lg:text-[16px] text-[#44474f] text-center leading-[1.5]">
                      {inst.sub}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── 도입 효과 ── */}
        <section className="w-full px-5 md:px-10 lg:px-[80px] py-14 lg:py-[64px]" style={{ backgroundColor: "#faf3e5" }}>
          <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
            <FadeInUp>
              <h2 className="font-semibold text-[24px] lg:text-[32px] text-[#1e1b13] tracking-[-0.32px] mb-2">
                골든브레인케어 도입 효과
              </h2>
              <p className="font-semibold text-[14px] lg:text-[16px] text-[#44474f]">
                전문성과 효율성을 동시에 확보하는 스마트 재활 관리 솔루션입니다.
              </p>
            </FadeInUp>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
              {effects.map((effect, i) => (
                <FadeInUp key={effect.num} delay={i * 0.08}>
                  <div className="bg-white rounded-[12px] p-8 lg:p-10 flex gap-6 items-start shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
                    <p
                      className="font-extrabold text-[36px] lg:text-[40px] leading-[52px] tracking-[-0.8px] flex-shrink-0"
                      style={{ color: "#735c00" }}
                    >
                      {effect.num}
                    </p>
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-[20px] lg:text-[24px] text-[#1e1b13] leading-[1.4]">
                        {effect.title}
                      </p>
                      <p className="font-normal text-[14px] lg:text-[16px] text-[#44474f] leading-[1.6] whitespace-pre-line">
                        {effect.desc}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── 도입 프로세스 ── */}
        <section className="w-full px-5 md:px-10 lg:px-[80px] py-14 lg:py-[64px]" style={{ backgroundColor: "#fff9ee" }}>
          <div className="max-w-[1280px] mx-auto flex flex-col gap-14 lg:gap-16">
            <FadeInUp className="text-center">
              <h2 className="font-bold text-[24px] lg:text-[32px] text-[#1e1b13] tracking-[-0.32px] mb-2">
                도입 프로세스
              </h2>
              <p className="font-semibold text-[14px] lg:text-[16px] text-[#44474f]">
                빠르고 간편한 4단계 도입 과정을 안내해 드립니다.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <div className="relative flex items-start justify-between">
                {/* Connector line */}
                <div
                  className="absolute top-10 hidden lg:block"
                  style={{ left: "10%", right: "10%", height: 2, backgroundColor: "#ffe088" }}
                />

                {steps.map((step, i) => (
                  <div key={step.num} className="flex-1 flex flex-col items-center relative z-10">
                    <div className="relative mb-6">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center shadow-[0px_0px_0px_8px_#fff9ee,0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
                        style={{ backgroundColor: "#000c26" }}
                      >
                        <span className="font-bold text-[22px] lg:text-[24px] text-white">{step.num}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-center px-2">
                      <p className="font-semibold text-[18px] lg:text-[24px] text-[#1e1b13] leading-[1.4]">
                        {step.title}
                      </p>
                      <p className="font-medium text-[12px] lg:text-[14px] text-[#44474f] leading-[1.5]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="w-full px-5 md:px-10 lg:px-[192px] py-14 lg:py-[64px] relative overflow-hidden" style={{ backgroundColor: "#000c26" }}>
          {/* Glow effects */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute w-96 h-96 rounded-full blur-[60px] -top-48 -right-48" style={{ backgroundColor: "#ffe088" }} />
            <div className="absolute w-96 h-96 rounded-full blur-[60px] -bottom-48 -left-48" style={{ backgroundColor: "#d8e2ff" }} />
          </div>

          <div className="max-w-[896px] mx-auto relative z-10 py-12 flex flex-col items-center gap-10">
            <FadeInUp>
              <h2 className="font-semibold text-[24px] lg:text-[32px] text-white text-center leading-[1.375] tracking-[-0.32px]">
                골든브레인케어와 함께<br />재활의 새로운 가능성을 만들어가세요
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link
                  href="/inquiry"
                  className="font-semibold text-[18px] lg:text-[20px] text-[#241a00] tracking-[0.32px] px-14 lg:px-16 py-5 lg:py-6 rounded-[12px] min-w-[220px] text-center"
                  style={{ backgroundColor: "#ffe088" }}
                >
                  도입 문의하기
                </Link>
                <Link
                  href="https://pf.kakao.com/_qpxkCn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[18px] lg:text-[20px] text-white tracking-[0.32px] px-14 lg:px-16 py-5 lg:py-6 rounded-[12px] border-2 border-white min-w-[220px] text-center"
                >
                  카카오톡 문의하기
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
