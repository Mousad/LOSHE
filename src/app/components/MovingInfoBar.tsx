import React from "react";

const items = [
  { icon: "", text: "توصيل سريع لجميع المناطق" },
  { icon: "", text: "الدفع عند الاستلام" },
  { icon: "", text: "منتجات أصلية 100%" },
  { icon: "", text: "تغليف هدايا مجاني" },
  { icon: "", text: "إرجاع مجاني خلال 14 يوم" },
  { icon: "", text: "أكثر من 50 منتج جمال" },
];

export function MovingInfoBar() {
  const allItems = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-2.5"
      style={{
        background: "linear-gradient(135deg,  #A855F7)",
      }}
    >
      <div className="animate-marquee">
        {allItems.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-white text-sm font-medium px-11 whitespace-nowrap"
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.text}</span>
            
          </span>
        ))}
      </div>
    </div>
  );
}
