import React from "react";

export default function Testimonials() {
  const voices = [
    {
      name: "Aさん（40代・初心者）",
      img: "/voice-1.png",
      text: "パソコンがほとんど触れない状態からのスタートでしたが、丁寧に教えていただき資料作成ができるようになりました。毎回通うのが楽しみです。",
    },
    {
      name: "Bさん（30代・転職希望）",
      img: "/voice-2.png",
      text: "WordとExcelの実務スキルを習得しました。わかりやすく実践的で、仕事に活かせる内容ばかりでした。資格対策も手伝っていただきました！",
    },
    {
      name: "Cさん（60代・シニア）",
      img: "/voice-3.png",
      text: "ゆっくり進めてくれるので無理なく続けられます。写真整理やネットの使い方など生活に役立つことも学べて嬉しいです。",
    },
  ];

  return (
    <section className="w-full bg-[#f7f9fc] py-24 px-[8vw]">
      <h2 className="text-3xl font-bold text-[#0a2a52] text-center mb-14">
        受講生の声
      </h2>

      <div className="max-w-[1100px] mx-auto grid md:grid-cols-3 gap-12">
        {voices.map((v, i) => (
          <div
            key={i}
            className="
              bg-white rounded-2xl shadow-md p-8
              hover:shadow-xl transition-all
            "
          >
            <img
              src={v.img}
              alt={v.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-5"
            />

            <h3 className="text-center text-lg font-semibold text-[#0a2a52] mb-3">
              {v.name}
            </h3>

            <p className="text-sm text-[#2d3b4f] leading-relaxed text-center">
              {v.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
