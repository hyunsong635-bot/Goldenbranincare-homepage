"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/animations/FadeInUp";

const contactCards = [
  {
    icon: "/images/contact-icon-globe.svg",
    label: "공식 홈페이지",
    value: "goldenbraincare.com",
    href: "https://goldenbraincare.com",
  },
  {
    icon: "/images/contact-icon-email.svg",
    label: "이메일 문의",
    value: "brain_care@naver.com",
    href: "mailto:brain_care@naver.com",
  },
  {
    icon: "/images/contact-icon-phone.svg",
    label: "고객 지원 센터",
    value: "0507-1379-3759",
    href: "tel:050713793759",
  },
];

const locations = [
  {
    icon: "/images/contact-icon-hq.svg",
    title: "본사 (HQ)",
    address: "부산 진구 동천로 116, 한신밴빌딩 501호",
  },
  {
    icon: "/images/contact-icon-lab.svg",
    title: "연구실 (Lab)",
    address: "부산 진구 중앙대로 694, 쥬디스태화 9F",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col w-full">

        {/* ── Hero ── */}
        <section
          className="w-full px-5 md:px-10 lg:px-[80px] pt-[160px] lg:pt-[192px] pb-14 lg:pb-[64px]"
          style={{ backgroundColor: "#fff9ee" }}
        >
          <div className="max-w-[672px] mx-auto flex flex-col items-center gap-3 text-center">
            <FadeInUp>
              <span
                className="inline-block font-semibold text-[14px] px-4 py-1.5 rounded-full"
                style={{ backgroundColor: "#fed65b", color: "#745c00" }}
              >
                INQUIRY &amp; INFO
              </span>
            </FadeInUp>
            <FadeInUp delay={0.08}>
              <h1 className="font-bold text-[32px] lg:text-[40px] text-[#000c26] leading-[1.3] tracking-[-0.8px]">
                문의 및 이용안내
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.16}>
              <p className="font-bold text-[16px] lg:text-[20px] text-[#44474f] leading-[1.625] mt-3">
                브레인프렌즈는 AI 기반 디지털 언어·인지재활 플랫폼으로,<br className="hidden sm:block" />
                치매예방부터 언어재활까지 개인별 맞춤 훈련을 제공합니다.<br className="hidden sm:block" />
                아래 연락처로 편하게 문의해 주세요.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* ── Contact Cards ── */}
        <section
          className="w-full px-5 md:px-10 lg:px-[80px] pt-6 pb-14 lg:pb-[64px]"
          style={{ backgroundColor: "#fff9ee" }}
        >
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
            {contactCards.map((card, i) => (
              <FadeInUp key={card.label} delay={i * 0.07}>
                <Link
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center gap-1 p-6 lg:p-[24px] rounded-[20px] text-center hover:shadow-md transition-shadow"
                  style={{ backgroundColor: "#faf3e5" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                    style={{ backgroundColor: "#000c26" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={card.icon} alt={card.label} className="w-5 h-5 object-contain" />
                  </div>
                  <p className="font-semibold text-[14px] lg:text-[16px] text-[#44474f] tracking-[0.32px]">
                    {card.label}
                  </p>
                  <p className="font-semibold text-[18px] lg:text-[20px] text-[#000c26] leading-[1.6]">
                    {card.value}
                  </p>
                </Link>
              </FadeInUp>
            ))}
          </div>
        </section>

        {/* ── Location ── */}
        <section
          className="w-full px-5 md:px-10 lg:px-[80px] py-14 lg:py-[64px]"
          style={{ backgroundColor: "#faf3e5" }}
        >
          <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
            <FadeInUp>
              <h2 className="font-bold text-[24px] lg:text-[32px] text-[#000c26] tracking-[-0.32px]">
                회사 주소
              </h2>
            </FadeInUp>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[64px]">
              {locations.map((loc, i) => (
                <FadeInUp key={loc.title} delay={i * 0.08}>
                  <div className="bg-white rounded-[20px] p-8 lg:p-[40px] flex gap-6 items-start shadow-[0px_4px_6px_rgba(0,12,38,0.06)]">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#fed65b" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={loc.icon} alt={loc.title} className="w-5 h-[18px] object-contain" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-[20px] lg:text-[24px] text-[#000c26] leading-[1.33]">
                        {loc.title}
                      </p>
                      <p className="font-medium text-[16px] lg:text-[18px] text-[#44474f] leading-[1.625]">
                        {loc.address}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="w-full px-5 md:px-10 lg:px-[192px] py-14 lg:py-[64px] relative overflow-hidden" style={{ backgroundColor: "#000c26" }}>
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
