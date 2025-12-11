import React, { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "パソコンがほとんど使えません。大丈夫ですか？",
      a: "まったくの初心者の方でも大歓迎です。電源の入れ方から丁寧にサポートします。",
    },
    {
      q: "途中でコース変更はできますか？",
      a: "はい、可能です。学習状況に合わせて最適なコースをご案内します。",
    },
    {
      q: "年齢制限はありますか？",
      a: "特にありません。10代から70代まで幅広い方が受講されています。",
    },
    {
      q: "自分のパソコンを持ち込んでも良いですか？",
      a: "持ち込みも可能です。ご自宅と同じ環境で学べるため、より定着しやすくなります。",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-white py-24 px-[8vw]">
      <h2 className="text-3xl font-bold text-[#0a2a52] text-center mb-14 ">
        よくある質問
      </h2>

      <div className="max-w-[900px] mx-auto space-y-4">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left px-6 py-4 flex justify-between items-center"
            >
              <span className="text-lg font-semibold text-[#0a2a52]">
                {f.q}
              </span>

              <span className="text-[#003b8b] text-xl">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>

            {/* ▼ 開いたときの答え */}
            {openIndex === i && (
              <div className="px-6 pb-4 text-sm text-[#2d3b4f] leading-relaxed">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
