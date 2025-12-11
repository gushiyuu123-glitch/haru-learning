// src/components/Access.jsx
import React from "react";

export default function Access() {
  return (
    <section className="w-full bg-white py-24 px-[8vw]">
      <h2 className="text-3xl font-bold text-[#0a2a52] text-center mb-14">
        アクセス
      </h2>

      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12">

        {/* MAP */}
        <div className="w-full h-[360px] rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* テキスト */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-[#0a2a52] mb-4">
            haru-learning パソコン教室
          </h3>

          <p className="text-[#2d3b4f] leading-relaxed mb-4">
            〒000-0000<br />
            東京都サンプル市サンプル町 1-2-3 ○○ビル 2F
          </p>

          <p className="text-[#2d3b4f] leading-relaxed mb-2">
            【営業時間】10:00〜18:00（火曜定休）
          </p>

          <p className="text-[#2d3b4f] leading-relaxed mb-6">
            【アクセス】○○駅から徒歩5分。駐車場2台あり。
          </p>

          <a
            href="#contact"
            className="
              inline-block px-6 py-3 bg-[#003b8b] text-white 
              rounded-full text-sm font-semibold shadow-md 
              hover:bg-[#002a6a] transition
            "
          >
            無料体験を申し込む
          </a>
        </div>
      </div>
    </section>
  );
}
