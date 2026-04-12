import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, ArrowLeft, Instagram, MessageCircle, MapPin, Star } from "lucide-react";
import { MovingInfoBar } from "../components/MovingInfoBar";
import { ProductCard } from "../components/ProductCard";
import { categories, bestSellers, allProducts } from "../data/products";

const heroSlides = [
  {
    image: "https://i.pinimg.com/736x/0a/b5/23/0ab523261a3eda46e13be457581f0580.jpg",
    
  },
  {
    image: "https://i.pinimg.com/736x/54/22/47/5422478cb1113d4039a76f6b3363e8a1.jpg",
   
  },
];

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.28 8.28 0 0 0 4.84 1.56V6.79a4.85 4.85 0 0 1-1.07-.1z" />
  </svg>
);

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToNext = () => {
    if (animating) return;
    setAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setAnimating(false), 600);
  };

  const goToPrev = () => {
    if (animating) return;
    setAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setTimeout(() => setAnimating(false), 600);
  };

  return (
    <div className="bg-[#FFFBF7]">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ minHeight: "79vh" }}>
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt="hero"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,10,34,0.75) 0%, rgba(236,72,153,0.25) 60%, transparent 100%)",
              }}
            />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full min-h-[88vh] px-6 md:px-16 max-w-7xl mx-auto">
          <div
            key={currentSlide}
            className="animate-fade-in"
          >
           
            <h1
              className="text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.2 }}
            >
              جمالك يبدأ من
              <span
                className="block">
               
                Glowray 
              </span>
            </h1>
            <p
              className="text-white/85 mb-8 max-w-lg leading-relaxed"
              style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)" }}
            >
              اكتشفي أفضل مستحضرات التجميل لإطلالة مشرقة كل يوم
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/category/lip-care")}
                className="px-7 py-3.5 rounded-2xl text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #EC4899, #A855F7)",
                  boxShadow: "0 8px 25px rgba(236,72,153,0.4)",
                }}
              >
                ابدأ التسوق
              </button>
             
            </div>
          </div>
        </div>
      </section>

      {/* Moving Info Bar */}
      <MovingInfoBar />

      {/* Categories Section */}
      <section className="py-11 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            
            <h2
              className="text-gray-800 mb-3"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800 }}
            >
              اكتشفي مجموعاتنا
            </h2>
            <p className="text-gray-500 max-w-sm mx-auto text-sm">كل ما تحتاجينه لشفاه مثالية في مكان واحد</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                className="group relative rounded-2xl overflow-hidden h-52 md:h-80 block"
              
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-all duration-300"
                  
                />
                <div className="absolute bottom-0 right-0 p-6">
                  <p className="text-pink-300 text-xl font-semibold mb-3 tracking-widest uppercase">{cat.nameEn}</p>
                  <h3 className="text-[#ffffff] text-xl font-bold mb-12">{cat.name}</h3>
                  
                </div>
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#f6339a] backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowLeft size={16} className="text-[#056d05]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-11 px-4 bg-[#fffbf7] from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2
                className="text-gray-800"
                style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", fontWeight: 800 }}
              >
                الأكثر مبيعاً 
              </h2>
            </div>
           
          </div>

          {/* Horizontal Scroll */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4">
  {bestSellers.slice(0, 4).map((product) => (
    <div key={product.id} className="w-full">
      <ProductCard product={product} />
    </div>
  ))}

  {/* الخامسة في النص */}
  {bestSellers[4] && (
    <div className="col-span-2 md:col-span-4 flex justify-center">
      <div className="w-42 md:w-60">
        <ProductCard product={bestSellers[4]} />
      </div>
    </div>
  )}
</div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden min-h-[290px] md:min-h-[320px] flex items-center"
            
          >
            <img
              src="https://i.pinimg.com/1200x/55/84/e7/5584e71cf580f87dc4b43c0deac89f09.jpg"
              alt="promo"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              
            />
            <div className="relative z-10 p-8 md:p-14 text-right">
              <h2
                className="text-yellow mb-3 "
                style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 800 }}
              >
                خصم 20% على جميع<br />منتجات الشفاه
              </h2>
              <p className="text-white/80 mb-6 text-sm max-w-sm">
                لفترة محدودة فقط! استمتعي بأجمل مستحضرات التجميل بأسعار استثنائية
              </p>
              <Link
                to="/category/lip-care"
                className="inline-block px-8 py-3.5 rounded-2xl bg-white font-semibold transition-all hover:scale-105 hover:shadow-xl"
                style={{ color: "#EC4899" }}
              >
                تسوقي الآن
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Strip */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className="text-gray-800"
              style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", fontWeight: 800 }}
            >
              منتجات جديدة 
            </h2>
          </div>
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-2 " style={{ minWidth: "max-content" }}>
              {allProducts.slice(0, 8).map((product) => (
                <div key={product.id} className="w-44 md:w-52 shrink-0">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-11 px-4 bg- from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-pink-500 text-sm font-semibold tracking-widest mb-2">تابعينا</p>
          <h2
            className="text-gray-800 mb-3"
            style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", fontWeight: 800 }}
          >
            كوني جزءاً من مجتمع Glowray
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">
            شاركينا إطلالتك واحصلي على فرصة الظهور في صفحتنا 
          </p>
          <div className="flex justify-center gap-5">
            <a
              href="#"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #E1306C, #833AB4, #F77737)" }}>
                <Instagram size={28} />
              </div>
              <span className="text-sm text-gray-600 font-medium">Instagram</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center text-white transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg">
                <TikTokIcon />
              </div>
              <span className="text-sm text-gray-600 font-medium">TikTok</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center text-white transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg">
                <MessageCircle size={28} />
              </div>
              <span className="text-sm text-gray-600 font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
      <section className="py-8 px-4">
  <div className="max-w-7xl mx-auto">
    
    <div className="grid grid-cols-4 gap-3">
      
      <img
        src="https://i.pinimg.com/736x/f6/53/b0/f653b0aca20e0e0e1f51b5a24eaf34cf.jpg"
        alt="image 1"
        className="w-full h-24 md:h-32 object-cover rounded-xl"
      />

      <img
        src="https://i.pinimg.com/736x/1c/3f/67/1c3f673a9305231b70888fa6650a0d0b.jpg"
        alt="image 2"
        className="w-full h-24 md:h-32 object-cover rounded-xl"
      />

      <img
        src="https://i.pinimg.com/1200x/3b/f3/d5/3bf3d5a67466775546487e736b2c5833.jpg"
        alt="image 3"
        className="w-full h-24 md:h-32 object-cover rounded-xl"
      />

      <img
        src="https://i.pinimg.com/736x/11/47/49/11474928e8fa11e9e91ed88a22a77a08.jpg"
        alt="image 4"
        className="w-full h-24 md:h-32 object-cover rounded-xl"
      />

    </div>

  </div>
</section>

      {/* About Store Section */}
      <section className="py-11 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <p className="text-pink-500 text-sm font-semibold tracking-widest mb-3">قصتنا</p>
              <h2
                className="text-gray-800 mb-4 leading-tight"
                style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800 }}
              >
                نحن Glowray <br />جمالك مهمتنا
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4 text-sm">
                أُسِّس متجر Glowray بشغف حقيقي لتزويد المرأة العربية بأفضل منتجات التجميل العالمية بأسعار مناسبة وخدمة توصيل سريعة.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                نحن نؤمن أن كل امرأة تستحق أن تشعر بجمالها كل يوم. لهذا نختار منتجاتنا بعناية فائقة لتضمن لكِ أعلى جودة.
              </p>
              <div className="flex flex-wrap gap-4 mb-7">
                {[
                  { num: "500+", label: "منتج" },
                  { num: "10K+", label: "عميلة سعيدة" },
                  { num: "5★", label: "تقييم" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center px-4 py-3 rounded-2xl bg-pink-50">
                    <p className="font-bold text-pink-600" style={{ fontSize: "1.3rem" }}>{stat.num}</p>
                    <p className="text-gray-500 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-block px-7 py-3.5 rounded-2xl text-white font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #EC4899, #A855F7)",
                  boxShadow: "0 6px 20px rgba(236,72,153,0.3)",
                }}
              >
                اعرف أكثر
              </Link>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src="https://i.pinimg.com/736x/f2/d4/6f/f2d46f639797a1a39f6aee125b72bb8e.jpg"
                  alt="about glowray"
                  className="w-full h-[20] object-cover"
                />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="rounded-3xl overflow-hidden bg-white shadow-xl h-[180px]">
  <iframe
    title="Glowray Location"
    src="https://www.google.com/maps?q=Cairo,Egypt&output=embed"
    className="w-full h-full border-0"
    loading="lazy"
  />
</div>
    </div>
  );
}
