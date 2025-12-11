// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section className="w-full">

    {/* ======================= */}
{/* PC版 HERO（視認性強化・最適化版） */}
{/* ======================= */}
<div className="hidden md:block relative w-full h-[100vh] overflow-hidden">

  {/* 写真 */}
  <img
    src="/hero-pc2.png"
    alt="教室の様子"
    className="
      absolute inset-0 w-full h-full
      object-cover
      object-[65%_50%]
    "
  />

  {/* グラデーション + テキスト */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-r
      from-[#0a2a52]/60 via-[#0a2a52]/20 to-transparent
      flex flex-col justify-center
      px-[8vw]
    "
  >
    <div className="max-w-[620px] mt-[-40vh]">
      <h1 className="
        text-5xl font-bold text-white leading-tight mb-6
        drop-shadow-[0_3px_6px_rgba(0,0,0,0.35)]
      ">
        明るい学びの空間で、<br />
        パソコンをもっと身近に。
      </h1>

      <p className="
        text-xl text-white/95 leading-relaxed mb-10
        drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]
      ">
        丁寧な少人数指導で、初心者から資格取得までしっかりサポート。
        「できた」の喜びを積み重ねながら、自信を育てる教室です。
      </p>
    </div>

    <div className="flex gap-6 ">
      <a
        href="#contact"
        className="
          px-8 py-3 bg-white text-[#003b8b] rounded-full text-base font-semibold
          shadow-xl hover:bg-blue-50 transition-all
        "
      >
        無料体験レッスンに申し込む
      </a>

      <a
        href="#course"
        className="
          px-8 py-3 bg-[#003b8b] text-white rounded-full text-base font-semibold
          shadow-xl hover:bg-[#002a6a] transition-all
        "
      >
        コースを見る
      </a>
    </div>
  </div>
</div>

 {/* ======================= */}
{/* SP版 HERO（最適化版） */}
{/* ======================= */}
<div className="md:hidden w-full flex flex-col relative">

  {/* 画像エリア */}
  <div className="relative w-full h-[280px]">
    <img
      src="/hero-sp.png"
      alt="教室の様子"
      className="absolute inset-0 w-full h-full object-cover object-[60%_50%]"
    />

    {/* ほんのり暗くするオーバーレイ */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/0" />
  </div>

  {/* テキスト & CTA */}
  <div className="px-6 pt-8 pb-14 bg-white">
    <h1 className="text-2xl font-bold text-[#0a2a52] leading-snug mb-4">
      明るい学びの空間で、<br />
      パソコンをもっと身近に。
    </h1>

    <p className="text-sm text-[#2d3b4f] leading-relaxed mb-8">
      初心者でも安心して通える落ち着いた教室。
      資格取得にも強い指導で、あなたの成長をサポートします。
    </p>

    {/* CTA 強弱つけた版 */}
    <a
      href="#contact"
      className="
        block w-full text-center py-3 bg-[#003b8b]
        text-white rounded-full text-sm shadow-lg font-semibold
        active:scale-[0.98] transition
      "
    >
      無料体験レッスンに申し込む
    </a>

    <a
      href="#course"
      className="
        block w-full text-center py-3 bg-white text-[#003b8b]
        border border-[#003b8b]/40 rounded-full text-sm mt-3
        active:scale-[0.98] transition
      "
    >
      コースを見る
    </a>
  </div>
</div>

    </section>
  );
}
