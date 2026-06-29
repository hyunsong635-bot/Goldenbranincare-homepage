"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/animations/FadeInUp";

interface FormData {
  name: string;
  organization: string;
  phone: string;
  email: string;
  message: string;
}

export default function InquiryPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    organization: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "이름을 입력해주세요.";
    if (!form.organization.trim()) e.organization = "기관명을 입력해주세요.";
    if (!form.phone.trim()) e.phone = "연락처를 입력해주세요.";
    if (!form.email.trim()) e.email = "이메일을 입력해주세요.";
    if (!form.message.trim()) e.message = "문의 내용을 입력해주세요.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSending(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSending(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputClass = (field: keyof FormData) =>
    `w-full rounded-[12px] px-4 py-[10px] text-[16px] text-[#1e1b13] outline-none transition-colors placeholder:text-[#6b7280] focus:ring-2 focus:ring-[#fed65b]/60 ${
      errors[field] ? "ring-2 ring-red-400" : ""
    }`;

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#fff9ee" }}>
      <Header />
      <main className="flex flex-col w-full">

        {/* ── Hero ── */}
        <section className="w-full px-5 md:px-10 lg:px-[80px] pt-[160px] lg:pt-[192px] pb-10 lg:pb-[64px]" style={{ backgroundColor: "#fff9ee" }}>
          <div className="max-w-[672px] mx-auto flex flex-col items-center gap-4 text-center">
            <FadeInUp>
              <h1 className="font-bold text-[32px] lg:text-[40px] tracking-[-0.8px] leading-[1.3]" style={{ color: "#04214d" }}>
                도입 문의하기
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.08}>
              <p className="font-normal text-[16px] lg:text-[20px] text-[#44474f] leading-[1.6]">
                골든브레인케어 도입을 원하시는 기관·담당자께서는 아래 정보를 남겨주세요.<br className="hidden sm:block" />
                확인 후 빠르게 안내해 드리겠습니다.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* ── Form + Info ── */}
        <section className="w-full px-5 md:px-10 lg:px-[64px] pb-16 lg:pb-[80px]" style={{ backgroundColor: "#fff9ee" }}>
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* Form card */}
            <FadeInUp delay={0.05} className="lg:col-span-8">
              <div className="bg-white rounded-[20px] p-8 lg:p-[40px] shadow-[0px_4px_6px_rgba(0,12,38,0.06)]">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ backgroundColor: "#faf3e5" }}>
                      ✓
                    </div>
                    <h2 className="font-bold text-[24px] text-[#000c26]">문의가 접수되었습니다!</h2>
                    <p className="text-[16px] text-[#44474f] leading-[1.6]">
                      담당자가 확인 후 빠르게 연락드리겠습니다.<br />
                      급하신 경우 <strong>brain_care@naver.com</strong>으로 연락해 주세요.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", organization: "", phone: "", email: "", message: "" }); }}
                      className="font-semibold text-[16px] px-8 py-3 rounded-[12px] transition-opacity hover:opacity-80"
                      style={{ backgroundColor: "#fed65b", color: "#745c00" }}
                    >
                      다시 작성하기
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                    {/* 이름 */}
                    <div className="flex flex-col gap-1">
                      <label className="font-medium text-[14px] text-[#000c26]">이름 <span className="text-red-400">*</span></label>
                      <input
                        type="text"
                        placeholder="성함을 입력해주세요"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={inputClass("name")}
                        style={{ backgroundColor: "#faf3e5" }}
                      />
                      {errors.name && <p className="text-red-400 text-[13px]">{errors.name}</p>}
                    </div>

                    {/* 기관명 + 연락처 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1">
                        <label className="font-medium text-[14px] text-[#000c26]">기관명 <span className="text-red-400">*</span></label>
                        <input
                          type="text"
                          placeholder="기관명"
                          value={form.organization}
                          onChange={(e) => handleChange("organization", e.target.value)}
                          className={inputClass("organization")}
                          style={{ backgroundColor: "#faf3e5" }}
                        />
                        {errors.organization && <p className="text-red-400 text-[13px]">{errors.organization}</p>}
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-medium text-[14px] text-[#000c26]">연락처 <span className="text-red-400">*</span></label>
                        <input
                          type="tel"
                          placeholder="010-0000-0000"
                          value={form.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className={inputClass("phone")}
                          style={{ backgroundColor: "#faf3e5" }}
                        />
                        {errors.phone && <p className="text-red-400 text-[13px]">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* 이메일 */}
                    <div className="flex flex-col gap-1">
                      <label className="font-medium text-[14px] text-[#000c26]">이메일 <span className="text-red-400">*</span></label>
                      <input
                        type="email"
                        placeholder="example@email.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={inputClass("email")}
                        style={{ backgroundColor: "#faf3e5" }}
                      />
                      {errors.email && <p className="text-red-400 text-[13px]">{errors.email}</p>}
                    </div>

                    {/* 문의 내용 */}
                    <div className="flex flex-col gap-1">
                      <label className="font-medium text-[14px] text-[#000c26]">문의 내용 <span className="text-red-400">*</span></label>
                      <textarea
                        rows={5}
                        placeholder="문의하실 내용을 상세히 적어주세요"
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className={`${inputClass("message")} resize-none`}
                        style={{ backgroundColor: "#faf3e5" }}
                      />
                      {errors.message && <p className="text-red-400 text-[13px]">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full font-semibold text-[18px] py-4 rounded-[12px] transition-opacity hover:opacity-90 mt-1 disabled:opacity-60"
                      style={{ backgroundColor: "#fed65b", color: "#745c00" }}
                    >
                      {sending ? "전송 중..." : "도입 문의하기"}
                    </button>
                    {submitError && (
                      <p className="text-red-400 text-[14px] text-center">
                        전송에 실패했습니다. 잠시 후 다시 시도하거나 brain_care@naver.com으로 연락해 주세요.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </FadeInUp>

            {/* Contact info card */}
            <FadeInUp delay={0.12} className="lg:col-span-4">
              <div
                className="rounded-[20px] p-[40px] pl-[44px] flex flex-col gap-10"
                style={{ backgroundColor: "#04214d", borderLeft: "4px solid #d4af37" }}
              >
                {/* Header */}
                <div className="flex items-center justify-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/inquiry-icon-header.svg" alt="" className="w-[17px] h-5 object-contain" />
                  <p className="font-bold text-[20px] lg:text-[24px] text-center leading-[1.33]" style={{ color: "#fff9ee" }}>
                    빠른 상담을 원하시면
                  </p>
                </div>

                {/* Contact items */}
                <div className="flex flex-col gap-8">
                  <Link href="tel:050713793759" className="flex items-start gap-5 hover:opacity-80 transition-opacity">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/inquiry-icon-phone.svg" alt="전화" className="w-[42px] h-[42px] flex-shrink-0 object-contain" />
                    <div className="flex flex-col gap-0.5">
                      <p className="font-medium text-[14px] lg:text-[16px] tracking-[0.8px] uppercase" style={{ color: "#d4af37" }}>PHONE</p>
                      <p className="font-bold text-[14px] lg:text-[16px]" style={{ color: "#fff9ee" }}>0507-1379-3759</p>
                    </div>
                  </Link>

                  <Link href="mailto:brain_care@naver.com" className="flex items-start gap-5 hover:opacity-80 transition-opacity">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/inquiry-icon-email.svg" alt="이메일" className="w-[44px] h-10 flex-shrink-0 object-contain" />
                    <div className="flex flex-col gap-0.5">
                      <p className="font-medium text-[14px] lg:text-[16px] tracking-[0.8px] uppercase" style={{ color: "#d4af37" }}>EMAIL</p>
                      <p className="font-bold text-[14px] lg:text-[16px]" style={{ color: "#fff9ee" }}>brain_care@naver.com</p>
                    </div>
                  </Link>

                  <div className="flex items-start gap-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/inquiry-icon-website.svg" alt="웹사이트" className="w-[44px] h-[44px] flex-shrink-0 object-contain" />
                    <div className="flex flex-col gap-0.5">
                      <p className="font-medium text-[14px] lg:text-[16px] tracking-[0.8px] uppercase" style={{ color: "#d4af37" }}>WEBSITE</p>
                      <p className="font-bold text-[14px] lg:text-[16px]" style={{ color: "#fff9ee" }}>goldenbraincare.com</p>
                    </div>
                  </div>
                </div>

                {/* Kakao divider */}
                <div className="border-t pt-10 flex items-center justify-center gap-4" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <Link
                    href="https://pf.kakao.com/_qpxkCn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  >
                    <p className="font-semibold text-[14px] lg:text-[16px] text-center" style={{ color: "#fff9ee" }}>
                      카카오 채널로도 상담 가능합니다.
                    </p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/inquiry-icon-kakao.svg" alt="카카오" className="w-5 h-5 flex-shrink-0 object-contain" />
                  </Link>
                </div>
              </div>
            </FadeInUp>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
