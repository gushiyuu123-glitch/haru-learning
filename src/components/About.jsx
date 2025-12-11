import React from "react";

export default function About() {
  return (
    <section className="w-full bg-white py-28 px-[8vw]">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* 左：写真 */}
        <div>
          <img
            src="/about-photo.png"
            alt="教室の雰囲気"
            className="
              w-full h-[420px] object-cover 
              rounded-xl shadow-lg
            "
          />
        </div>

        {/* 右：文章 */}
        <div>
          <h2 className="text-3xl font-bold text-[#0a2a52] mb-4">
            haru-learning について
          </h2>

          {/* サブコピー（短い説明） */}
          <p className="text-[#003b8b] font-medium mb-6">
            初めてでも、安心してゆっくり学べるパソコン教室。
          </p>

          <p className="text-[#2d3b4f] leading-loose mb-6">
            haru-learning は、わかりやすさと続けやすさを大切にした
            少人数制のパソコンスクールです。
            パソコンに触れるのが初めての方でも、
            楽しく学べるよう丁寧にサポートします。
          </p>

          <p className="text-[#2d3b4f] leading-loose">
            仕事・生活・資格取得まで幅広いスキルを身につけられるよう、
            ひとり一人のペースに合わせたカリキュラムをご用意しています。  
            “わかる喜び” を積み重ね、自信につながる学びを提供します。
          </p>
        </div>
      </div>
    </section>
  );
}
