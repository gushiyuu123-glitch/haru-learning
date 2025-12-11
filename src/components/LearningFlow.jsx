import React from "react";

export default function LearningFlow() {
  return (
    <section className="w-full bg-[#f4f8fc] py-24 px-[8vw]">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 左：ナプキンAIの画像 */}
        <div>
          <img
            src="/flow-napkin3.png"
            alt="学習の流れ"
            className="w-full max-w-[1000px] mx-auto drop-shadow-md"
          />
        </div>

        {/* 右：テキスト説明 */}
        <div>
          <h2 className="text-3xl font-bold text-[#0a2a52] mb-6">
            学びのステップ
          </h2>

          <p className="text-[#2d3b4f] leading-relaxed mb-6">
            haru-learning では、初心者の方でも安心して学べるよう、
            ステップごとに<br></br>わかりやすいカリキュラムをご用意しています。<br></br>
            無理なく基礎から資格取得まで進められる流れになっています。
          </p>

          <ul className="space-y-5 text-[#2d3b4f] leading-relaxed">
            <li>
              <span className="font-semibold text-[#0a2a52]">① PC初心者：</span>
              電源の入れ方やマウス操作など、本当に基礎から丁寧に。
            </li>
            <li>
              <span className="font-semibold text-[#0a2a52]">② 基礎練習：</span>
              タイピング・基本操作・インターネットの使い方。
            </li>
            <li>
              <span className="font-semibold text-[#0a2a52]">③ Word / Excel：</span>
              実務で役立つスキルをしっかり習得。
            </li>
            <li>
              <span className="font-semibold text-[#0a2a52]">④ 資格取得：</span>
              MOSやサーティファイなど人気資格に対応。
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
