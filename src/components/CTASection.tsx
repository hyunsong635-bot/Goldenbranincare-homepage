"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CTASection() {
  const [form, setForm] = useState({ name: "", organization: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setForm({ name: "", organization: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-[#eee8da] w-full overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[80px] py-10 lg:py-[64px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[64px] w-full">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5 lg:gap-[24px] items-start lg:pb-[314px]"
          >
            <h2 className="font-medium text-[17px] lg:text-[20px] text-[#000c26] leading-[1.6]">
              골든브레인케어와 함께
              <br />
              언어·인지 재활의 새로운 가능성을 만들어가세요.
            </h2>
            <p className="font-semibold text-[15px] lg:text-[20px] text-[#44474f] leading-[1.6]">
              지금 바로 전문가와의 상담을 통해 우리 기관에 최적화된 솔루션을
              확인해보세요.
            </p>
            <div className="flex flex-wrap gap-3 items-start">
              <Link
                href="https://pf.kakao.com/_qpxkCn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#000c26] text-white font-semibold text-[14px] lg:text-[18px] px-6 py-3 lg:px-[32px] lg:py-[16px] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#001540] transition-colors whitespace-nowrap inline-block"
              >
                상담 신청하기
              </Link>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white flex flex-col items-start pb-8 lg:pb-[58px] pt-6 lg:pt-[40px] px-5 lg:px-[40px] rounded-[20px] shadow-[0px_4px_6px_rgba(0,12,38,0.06)]"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-[12px] items-start w-full">
              <div className="flex flex-col gap-[4px] items-start w-full">
                <label className="font-medium text-[13px] lg:text-[14px] text-[#000c26] leading-[20px]">이름</label>
                <div className="bg-[#faf3e5] flex items-center py-[10px] pl-[16px] pr-[12px] rounded-[12px] w-full">
                  <input type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="성함을 입력해주세요"
                    className="bg-transparent text-[14px] lg:text-[16px] text-[#44474f] placeholder:text-[#6b7280] outline-none w-full" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[12px] w-full">
                <div className="flex flex-col gap-[4px]">
                  <label className="font-medium text-[13px] lg:text-[14px] text-[#000c26] leading-[20px]">기관명</label>
                  <div className="bg-[#faf3e5] flex items-center py-[10px] pl-[16px] pr-[12px] rounded-[12px] w-full">
                    <input type="text" name="organization" value={form.organization} onChange={handleChange}
                      placeholder="기관명"
                      className="bg-transparent text-[14px] lg:text-[16px] text-[#44474f] placeholder:text-[#6b7280] outline-none w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <label className="font-medium text-[13px] lg:text-[14px] text-[#000c26] leading-[20px]">연락처</label>
                  <div className="bg-[#faf3e5] flex items-center py-[10px] pl-[16px] pr-[12px] rounded-[12px] w-full">
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="010-0000-0000"
                      className="bg-transparent text-[14px] lg:text-[16px] text-[#44474f] placeholder:text-[#6b7280] outline-none w-full" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[4px] items-start w-full">
                <label className="font-medium text-[13px] lg:text-[14px] text-[#000c26] leading-[20px]">이메일</label>
                <div className="bg-[#faf3e5] flex items-center py-[10px] pl-[16px] pr-[12px] rounded-[12px] w-full">
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="example@email.com"
                    className="bg-transparent text-[14px] lg:text-[16px] text-[#44474f] placeholder:text-[#6b7280] outline-none w-full" />
                </div>
              </div>
              <div className="flex flex-col gap-[4px] items-start w-full">
                <label className="font-medium text-[13px] lg:text-[14px] text-[#000c26] leading-[20px]">문의 내용</label>
                <div className="bg-[#faf3e5] rounded-[12px] w-full">
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="문의하실 내용을 상세히 적어주세요"
                    className="bg-transparent text-[14px] lg:text-[16px] text-[#44474f] placeholder:text-[#6b7280] outline-none w-full resize-none p-[16px] min-h-[120px] lg:min-h-[140px] leading-[24px]" />
                </div>
              </div>
              <button type="submit" disabled={status === "sending"}
                className="bg-[#fed65b] text-[#745c00] font-semibold text-[15px] lg:text-[18px] py-[14px] lg:py-[16px] rounded-[12px] w-full hover:bg-[#fdc93a] transition-colors disabled:opacity-60">
                {status === "sending" ? "전송 중..." : "도입 문의하기"}
              </button>
              {status === "success" && (
                <p className="text-[14px] text-[#15803d] text-center w-full">
                  문의가 정상적으로 접수되었습니다. 감사합니다!
                </p>
              )}
              {status === "error" && (
                <p className="text-[14px] text-red-500 text-center w-full">
                  필수 항목(이름·이메일·문의 내용)을 확인해 주세요. 문제가 계속되면 brain_care@naver.com으로 연락 바랍니다.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
