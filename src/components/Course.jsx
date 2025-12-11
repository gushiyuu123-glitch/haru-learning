import React from "react";

export default function Course() {
  const courses = [
    {
      title: "初心者ベーシックコース",
      desc: "電源の入れ方からWord・Excelの基礎まで。初めての方でも安心して学べる入門コース。",
      img: "/course-basic.png",
    },
    {
      title: "ビジネス実践コース",
      desc: "職場で求められる資料作成やデータ管理など、実務に直結するスキルを習得します。",
      img: "/course-business.png",
    },
    {
      title: "資格取得コース",
      desc: "MOS・サーティファイなど、就職や転職で強みになる資格取得を徹底サポートします。",
      img: "/course-license.png",
    },
  ];

  return (
    <section className="w-full bg-[#f7f9fc] py-24 px-[8vw]">
      <h2 className="text-3xl font-bold text-[#0a2a52] text-center mb-14">
        コースのご案内
      </h2>

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-12">
        {courses.map((c, i) => (
          <div
            key={i}
            className="
              bg-white rounded-xl shadow-md overflow-hidden
              hover:shadow-xl transition-all
            "
          >
            <img
              src={c.img}
              alt={c.title}
              className="w-full h-[180px] object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#0a2a52] mb-3">
                {c.title}
              </h3>
              <p className="text-sm text-[#2d3b4f] leading-relaxed mb-4">
                {c.desc}
              </p>

              <a
                href="#contact"
                className="
                  inline-block px-5 py-2 border border-[#003b8b]/40
                  text-[#003b8b] rounded-full text-sm
                  hover:bg-[#003b8b] hover:text-white transition
                "
              >
                詳しく見る
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
