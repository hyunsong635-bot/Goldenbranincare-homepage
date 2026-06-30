"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function HeroSlideshow() {
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
