import React from "react";
import { Link } from "react-router";
import { Star, Heart, Shield, Sparkles, Instagram, MessageCircle } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.28 8.28 0 0 0 4.84 1.56V6.79a4.85 4.85 0 0 1-1.07-.1z" />
  </svg>
);

export function About() {
  return (
    <div className="bg-[#FFFBF7] min-h-screen pb-16">
      {/* Hero Banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1658492055212-e1acbccfca5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
          alt="about"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(26,10,34,0.82) 0%, rgba(168,85,247,0.4) 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
         
          <h1
            className="text-[#056d05]  mb-3"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800 }}
          >
            قصة Glowray 
          </h1>
          <p className="text-white/75 text-sm max-w-md">
            شغفنا بالجمال جعلنا نبني أفضل متجر لمستحضرات التجميل في المملكة
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14">
        {/* Mission */}
        <div className="text-center mb-14">
          <p className="text-pink-500 text-sm font-semibold tracking-widest mb-3">رسالتنا</p>
          <h2
            className="text-gray-800 mb-5"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 800 }}
          >
            نؤمن بجمال كل امرأة
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm">
            في Glowray، نؤمن أن الجمال ليس قناعاً بل هو تعبير عن الثقة والأصالة.
            لهذا نختار منتجاتنا بعناية فائقة من أجود العلامات التجارية العالمية لتناسب
            جمال المرأة العربية وتعكس شخصيتها المميزة.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-14">
          {[
            {
              icon: <Heart size={24} className="text-pink-500" />,
              title: "شغف حقيقي",
              desc: "كل منتج نختاره يمر بمراجعة دقيقة من فريقنا المتخصص في الجمال",
              bg: "linear-gradient(135deg, #FFF1F5, #FFE4EF)",
            },
            {
              icon: <Shield size={24} className="text-purple-500" />,
              title: "منتجات أصلية",
              desc: "نضمن أصالة 100% لجميع منتجاتنا مع ضمان استرداد كامل",
              bg: "linear-gradient(135deg, #F3E8FF, #EDE0FF)",
            },
            {
              icon: <Star size={24} className="text-yellow-500" />,
              title: "جودة فاخرة",
              desc: "نختار فقط العلامات التجارية الفاخرة التي تستحقها عميلاتنا",
              bg: "linear-gradient(135deg, #FFFBEB, #FEF3C7)",
            },
              {
              icon: <Heart size={24} className="text-pink-500" />,
              title: "شغف حقيقي",
              desc: "كل منتج نختاره يمر بمراجعة دقيقة من فريقنا المتخصص في الجمال",
              bg: "linear-gradient(135deg, #FFF1F5, #FFE4EF)",
            },
            
          ].map((val) => (
            <div
              key={val.title}
              className="rounded-3xl p-7 text-center"
              style={{
                background: val.bg,
                boxShadow: "0 4px 20px rgba(236,72,153,0.07)",
              }}
            >
              <div className="w-12 h-12 rounded-2xl bg-white mx-auto flex items-center justify-center mb-4 shadow-sm">
                {val.icon}
              </div>
              <h3 className="text-gray-800 font-bold mb-2">{val.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className="rounded-3xl p-8 mb-14 text-center"
          style={{ background: "linear-gradient(135deg, #EC4899, #A855F7)" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "500+", label: "منتج فاخر" },
              { num: "10K+", label: "عميلة سعيدة" },
              { num: "4.9★", label: "متوسط التقييم" },
              { num: "2021", label: "سنة التأسيس" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-white font-bold mb-1" style={{ fontSize: "1.8rem" }}>{stat.num}</p>
                <p className="text-white/75 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center mb-10">
          <p className="text-pink-500 text-sm font-semibold tracking-widest mb-3">تواصل معنا</p>
          <h2
            className="text-gray-800 mb-6"
            style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 800 }}
          >
            نحن هنا لمساعدتك 
          </h2>
          <div className="flex justify-center gap-5 mb-8">
            <a
              href="#"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white transition-all group-hover:scale-110 group-hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #E1306C, #833AB4, #F77737)" }}>
                <Instagram size={24} />
              </div>
              <span className="text-sm text-gray-500">@glowray.sa</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-white transition-all group-hover:scale-110 group-hover:shadow-lg">
                <TikTokIcon />
              </div>
              <span className="text-sm text-gray-500">@glowray</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center text-white transition-all group-hover:scale-110 group-hover:shadow-lg">
                <MessageCircle size={24} />
              </div>
              <span className="text-sm text-gray-500">واتساب</span>
            </a>
          </div>

          <Link
            to="/category/lip-care"
            className="inline-block px-8 py-4 rounded-2xl text-white font-semibold transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #EC4899, #A855F7)",
              boxShadow: "0 6px 20px rgba(236,72,153,0.3)",
            }}
          >
            ابدأي التسوق 
          </Link>
        </div>
      </div>
    </div>
  );
}
