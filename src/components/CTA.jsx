// src/components/CTA.jsx
import React from "react";

export default function CTA() {
  return (
    <section className="w-full relative my-24">
      {/* 背景画像 */}
      <div className="relative w-full h-[380px] md:h-[420px] overflow-hidden rounded-2xl">
        <img
          src="/cta-bg.png"
          alt="無料体験レッスンの様子"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-[#0a2a52]/60 md:bg-[#0a2a52]/50" />

        {/* テキスト */}
        <div className="
          absolute inset-0 flex flex-col items-center justify-center 
          text-center text-white px-6
        ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            無料体験レッスン受付中
          </h2>
          <p className="text-sm md:text-base max-w-[600px] leading-relaxed mb-8">
            実際の授業を体験しながら、不安や疑問点を解消できます。
            はじめての方もお気軽にお申し込みください。
          </p>

          <a
            href="#contact"
            className="
              px-8 py-3 bg-white text-[#003b8b]
              rounded-full font-semibold text-base 
              shadow-xl hover:bg-blue-50 transition
            "
          >
            無料体験に申し込む
          </a>
        </div>
      </div>
    </section>
  );
}
