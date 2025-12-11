import React from "react";

export default function Features() {
  return (
    <section className="w-full bg-white py-28 px-[8vw]">

      {/* 見出し */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-[#0a2a52] mb-3">
          選ばれる理由
        </h2>
        <p className="text-[#2d3b4f] text-sm">
          haru-learning が多くの方に選ばれている理由をご紹介します。
        </p>
      </div>

      {/* グリッド */}
      <div className="grid md:grid-cols-3">

        {/* Point 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-[#003b8b]/10 flex items-center justify-center mb-6">
            <img src="/icon-teacher.svg" alt="" className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-semibold text-[#0a2a52] mb-3">
            丁寧な少人数レッスン
          </h3>
          <p className="text-sm text-[#2d3b4f] leading-loose max-w-[260px]">
            ひとり一人の理解度に合わせて進めるレッスン。
            初めてでも安心して学べます。
          </p>
        </div>

        {/* Point 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-[#003b8b]/10 flex items-center justify-center mb-6">
            <img src="/icon-license.svg" alt="" className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-semibold text-[#0a2a52] mb-3">
            資格取得に強い指導
          </h3>
          <p className="text-sm text-[#2d3b4f] leading-loose max-w-[260px]">
            MOS・サーティファイなど、
            就職・転職に役立つ資格取得をしっかりサポートします。
          </p>
        </div>

        {/* Point 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-[#003b8b]/10 flex items-center justify-center mb-6">
            <img src="/icon-support.svg" alt="" className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-semibold text-[#0a2a52] mb-3">
            自分のペースで学べる
          </h3>
          <p className="text-sm text-[#2d3b4f] leading-loose max-w-[260px]">
            忙しい方でもムリなく続けられる、
            柔軟な個別サポート体制をご用意しています。
          </p>
        </div>

      </div>

    </section>
  );
}
