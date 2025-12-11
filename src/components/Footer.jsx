// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a2a52] text-white pt-16 pb-10 px-[8vw]">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-12">

        {/* 教室情報 */}
        <div>
          <h3 className="text-xl font-bold mb-4">haru-learning</h3>
          <p className="text-sm leading-relaxed text-white/80">
            明るい学びの空間で、パソコンをもっと身近に。
            初心者から資格取得まで丁寧にサポートする
            少人数制のパソコンスクールです。
          </p>
        </div>

        {/* メニュー */}
        <div>
          <h4 className="text-lg font-semibold mb-4">メニュー</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#about" className="hover:text-white transition">教室について</a></li>
            <li><a href="#course" className="hover:text-white transition">コース案内</a></li>
            <li><a href="#pricing" className="hover:text-white transition">料金プラン</a></li>
            <li><a href="#faq" className="hover:text-white transition">よくある質問</a></li>
            <li><a href="#contact" className="hover:text-white transition">無料体験申し込み</a></li>
          </ul>
        </div>

        {/* アクセス情報 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">アクセス</h4>
          <p className="text-sm leading-relaxed text-white/80 mb-3">
            〒900-0000  
            沖縄県那覇市○○1-2-3 ○○ビル2F
          </p>
          <p className="text-sm text-white/80 mb-1">営業時間：10:00〜20:00</p>
          <p className="text-sm text-white/80 mb-1">定休日：水曜日</p>
          <p className="text-sm text-white/80">TEL：000-123-4567（架空）</p>
        </div>

      </div>

      {/* コピーライト */}
      <div className="mt-12 pt-6 border-t border-white/15 text-center text-xs text-white/60">
        © haru-learning. All rights reserved.
      </div>
    </footer>
  );
}
