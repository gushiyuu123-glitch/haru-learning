import React from "react";

export default function Pricing() {
  const plans = [
    {
      name: "ライトプラン",
      price: "¥6,800 / 月",
      desc: "まずは気軽に学びたい方へ。週1〜2回ペースで無理なく続けられます。",
      points: [
        "週1〜2回のレッスン",
        "PC基礎の習得に最適",
        "チャットで質問サポート",
      ],
      highlight: false,
    },
    {
      name: "スタンダードプラン",
      price: "¥9,800 / 月",
      desc: "一番人気のバランス型。資格取得・スキルアップをしっかりサポート。",
      points: [
        "週2〜3回のレッスン",
        "Word・Excel・実務スキル",
        "個別学習フォロー",
        "資格取得対策つき",
      ],
      highlight: true,
    },
    {
      name: "プレミアムプラン",
      price: "¥14,800 / 月",
      desc: "短期間で実力を伸ばしたい方に。専任講師が徹底サポート。",
      points: [
        "通い放題プラン",
        "マンツーマン指導あり",
        "高度な実務スキル習得",
        "資格取得フルサポート",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-[8vw]">
      <h2 className="text-3xl font-bold text-[#0a2a52] text-center mb-14">
        料金プラン
      </h2>

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`
              rounded-2xl border shadow-md p-8 bg-white
              transition-all hover:shadow-xl
              ${plan.highlight ? "border-[#003b8b]" : "border-gray-200"}
            `}
          >
            {/* プラン名 */}
            <h3
              className={`
                text-xl font-bold mb-3
                ${plan.highlight ? "text-[#003b8b]" : "text-[#0a2a52]"}
              `}
            >
              {plan.name}
            </h3>

            {/* 料金 */}
            <p className="text-3xl font-bold text-[#0a2a52] mb-3">
              {plan.price}
            </p>

            {/* 説明 */}
            <p className="text-sm text-[#2d3b4f] leading-relaxed mb-6">
              {plan.desc}
            </p>

            {/* ポイントリスト */}
            <ul className="text-sm text-[#2d3b4f] space-y-2 mb-6">
              {plan.points.map((p, i) => (
                <li key={i}>・{p}</li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className={`
                block text-center py-3 rounded-full font-semibold
                transition-all
                ${
                  plan.highlight
                    ? "bg-[#003b8b] text-white hover:bg-[#002a6a]"
                    : "bg-white border border-[#003b8b]/40 text-[#003b8b] hover:bg-blue-50"
                }
              `}
            >
              このプランで相談する
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
