"use client";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
  stepIndex: number | null;
}

const modals = [
  // 0 — 자가진단 (orange)
  {
    tag: "SELF ASSESSMENT 05",
    tagColor: "#c2410c",
    titlePre: "생활 공간 기반",
    titleHighlight: "자가진단",
    highlightColor: "#ea580c",
    bg: "#fff7ed",
    bannerFrom: "#fb923c",
    bannerTo: "#f97316",
    left: (
      <div className="bg-[#f5f0ea] rounded-[16px] p-5 h-full flex flex-col justify-center">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "집", icon: "🏠", active: false },
            { label: "병원", icon: "🏥", active: false },
            { label: "카페", icon: "☕", active: true },
            { label: "마트", icon: "🛒", active: false },
            { label: "버스", icon: "🚌", active: false },
            { label: "공원", icon: "🌳", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-[12px] text-sm font-medium ${
                item.active
                  ? "bg-white border-2 border-[#fb923c] text-[#ea580c]"
                  : "bg-white border border-[#e5e0d8] text-[#44474f]"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-[12px]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    features: [
      { title: "맞춤형 환경 설정", desc: "사용자가 가장 많이 활동하는 일상 공간 선택", color: "#fb923c" },
      { title: "AI 기반 분석", desc: "발화 패턴과 정확도를 실시간으로 자동 분석", color: "#fb923c" },
      { title: "주기적 리포트", desc: "진단 결과를 바탕으로 최적의 훈련 코스 추천", color: "#fb923c" },
    ],
    banner: "\"언제 어디서나 객관적으로 확인하는 나의 언어 회복 상태\"",
  },

  // 1 — 언어재활 (blue)
  {
    tag: "SPEECH REHAB 06",
    tagColor: "#1d4ed8",
    titlePre: "부족한 언어 영역을 단계별로 집중 훈련하는",
    titleHighlight: "언어재활",
    highlightColor: "#2563eb",
    bg: "#f0f5ff",
    bannerFrom: "#60a5fa",
    bannerTo: "#3b82f6",
    left: (
      <div className="flex flex-col gap-3 h-full justify-center">
        {[
          { title: "의미·음운 훈련", desc: "단어의 의미적 연결과 소리의 구성을 강화합니다." },
          { title: "문장 산출 훈련", desc: "구조화된 문장 만들기 활동을 통해 표현력을 높입니다." },
          { title: "담화 구성 훈련", desc: "실제 대화와 유사한 맥락에서 의사소통을 연습합니다." },
        ].map((item) => (
          <div key={item.title} className="bg-white border-l-4 border-[#3b82f6] rounded-[12px] px-4 py-3 shadow-sm">
            <p className="font-bold text-[14px] text-[#000c26] mb-0.5">{item.title}</p>
            <p className="text-[12px] text-[#44474f] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    ),
    features: [
      { title: "단어 명명하기", desc: "① 단어 명명 → ② 조합 → ③ 조사 → ④ 동사 → ⑤ 문장 → ⑥ 묘사", color: "#3b82f6", list: true },
    ],
    rightList: ["단어 명명하기", "단어 조합하기", "조사 선택하기", "동사 활용하기", "짧은 문장 말하기", "장면 묘사하기"],
    banner: "\"데이터 기반의 정교한 훈련 설계로 회복의 속도를 높입니다\"",
  },

  // 2 — 노래 훈련 (green)
  {
    tag: "SONG TRAINING 07",
    tagColor: "#15803d",
    titlePre: "좋아하는 곡으로 리듬과 발화 반응을 훈련하는",
    titleHighlight: "노래훈련",
    highlightColor: "#16a34a",
    bg: "#f0fdf4",
    bannerFrom: "#4ade80",
    bannerTo: "#22c55e",
    left: (
      <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-[16px] p-5 h-full flex flex-col justify-center gap-3">
        {[
          { title: "과수원 길", sub: "동요 · 02:30", active: true },
          { title: "아리랑", sub: "민요 · 03:15", active: false },
          { title: "고향의 봄", sub: "동요 · 02:45", active: false },
        ].map((song) => (
          <div
            key={song.title}
            className={`flex items-center gap-3 p-3 rounded-[12px] ${
              song.active ? "bg-white shadow-sm border border-[#86efac]" : "bg-white/60"
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              song.active ? "bg-[#22c55e]" : "bg-[#d1fae5]"
            }`}>
              <span className={`text-[10px] ${song.active ? "text-white" : "text-[#16a34a]"}`}>▶</span>
            </div>
            <div>
              <p className="font-semibold text-[13px] text-[#000c26]">{song.title}</p>
              <p className="text-[11px] text-[#44474f]">{song.sub}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    features: [
      { title: "MIT 멜로디 억양 치료법", desc: "음악적 요소를 활용하여 좌뇌 손상 환자의 우뇌 발화 기능을 자극합니다.", color: "#22c55e" },
      { title: "리듬 기반 발음 교정", desc: "정확한 박자에 맞춘 발성으로 조음 정확도를 향상시킵니다.", color: "#22c55e" },
      { title: "정서적 유대감 형성", desc: "익숙한 선율을 통해 재활 훈련의 스트레스를 낮추고 즐거움을 더합니다.", color: "#22c55e" },
    ],
    banner: "\"음악의 힘으로 더 자연스럽고 리드미컬한 발화를 이끌어냅니다\"",
  },

  // 3 — 게임모드 (dark)
  {
    tag: "GAME MODE 08",
    tagColor: "#f472b6",
    titlePre: "가상 시나리오와 언어·인지 훈련을 결합한",
    titleHighlight: "게임모드",
    highlightColor: "#f472b6",
    bg: "#0f172a",
    dark: true,
    bannerFrom: "#f472b6",
    bannerTo: "#ec4899",
    left: (
      <div className="grid grid-cols-2 gap-3 h-full content-center">
        {[
          { icon: "🌐", title: "360° 생활공간\n시나리오", sub: "실제 일상 환경 재현" },
          { icon: "💬", title: "언어 게임", sub: "재미있는 어휘 확장" },
          { icon: "✋", title: "손모션 게임", sub: "인지-반응 협응력 훈련" },
          { icon: "🧠", title: "인지 게임", sub: "기억력 및 주의력 강화" },
        ].map((item) => (
          <div key={item.title} className="bg-white/10 border border-white/20 rounded-[12px] p-3 flex flex-col gap-1">
            <span className="text-xl">{item.icon}</span>
            <p className="font-bold text-[12px] text-white leading-tight whitespace-pre-line">{item.title}</p>
            <p className="text-[11px] text-white/60">{item.sub}</p>
          </div>
        ))}
      </div>
    ),
    features: [
      { title: "몰입형 360° 시나리오", desc: "실제 거주 환경이나 방문할 장소를 가상으로 체험하며 실전 대화 역량을 기릅니다.", color: "#f472b6" },
      { title: "다영역 게임 구성", desc: "언어 재활뿐 아니라 실행 기능, 기억력, 시지각 등 다각도 인지 훈련을 포함합니다.", color: "#f472b6" },
      { title: "확장형 콘텐츠", desc: "수행 능력에 따라 난이도가 자동 조절되며 새로운 시나리오가 지속 업데이트됩니다.", color: "#f472b6" },
    ],
    banner: "\"재활이 지루하지 않게, 매일 즐기는 두뇌 피트니스\"",
  },
];

export default function StepHoverModal({ stepIndex }: Props) {
  const modal = stepIndex !== null && stepIndex < modals.length ? modals[stepIndex] : null;

  return (
    <AnimatePresence>
      {modal && (
        <>
          {/* backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 pointer-events-none"
          />

          {/* modal */}
          <motion.div
            key={`modal-${stepIndex}`}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-4"
          >
            <div
              className="w-full max-w-[860px] rounded-[24px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.25)]"
              style={{ background: modal.bg }}
            >
              {/* header */}
              <div className="px-8 pt-8 pb-4">
                <p
                  className="text-[11px] font-bold tracking-[2px] uppercase mb-2"
                  style={{ color: modal.tagColor }}
                >
                  {modal.tag}
                </p>
                <h3
                  className={`font-bold leading-snug ${modal.dark ? "text-white" : "text-[#000c26]"}`}
                  style={{ fontSize: "clamp(16px, 2vw, 22px)" }}
                >
                  {modal.titlePre}{" "}
                  <span style={{ color: modal.highlightColor }}>{modal.titleHighlight}</span>
                </h3>
              </div>

              {/* body */}
              <div className="px-8 pb-6 grid grid-cols-2 gap-6" style={{ minHeight: 240 }}>
                {/* left */}
                <div>{modal.left}</div>

                {/* right */}
                <div className="flex flex-col gap-3 justify-center">
                  {(modal as typeof modals[0]).rightList ? (
                    <div className="bg-white rounded-[16px] p-4 shadow-sm">
                      {((modal as typeof modals[1]).rightList ?? []).map((item, i) => (
                        <div key={item} className="flex items-center gap-3 py-2 border-b border-slate-100 last:border-none">
                          <div className="w-6 h-6 rounded-full bg-[#dbeafe] flex items-center justify-center flex-shrink-0">
                            <span className="text-[11px] font-bold text-[#3b82f6]">{i + 1}</span>
                          </div>
                          <span className="text-[13px] font-medium text-[#000c26]">{item}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    modal.features.map((f) => (
                      <div
                        key={f.title}
                        className={`rounded-[12px] px-4 py-3 border-l-4 ${
                          modal.dark ? "bg-white/10 border-transparent" : "bg-white shadow-sm"
                        }`}
                        style={{ borderLeftColor: f.color }}
                      >
                        <p className={`font-bold text-[13px] mb-0.5 ${modal.dark ? "text-white" : "text-[#000c26]"}`}>
                          {f.title}
                        </p>
                        <p className={`text-[12px] leading-relaxed ${modal.dark ? "text-white/70" : "text-[#44474f]"}`}>
                          {f.desc}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* banner */}
              <div
                className="px-8 py-4 text-white font-bold text-center"
                style={{
                  fontSize: "clamp(12px, 1.5vw, 15px)",
                  background: `linear-gradient(to right, ${modal.bannerFrom}, ${modal.bannerTo})`,
                }}
              >
                {modal.banner}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
