import React from "react";
import { Link } from "react-router";
import { Instagram, MessageCircle, Sparkles, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.28 8.28 0 0 0 4.84 1.56V6.79a4.85 4.85 0 0 1-1.07-.1z" />
    </svg>
  );

  return (
    <footer className="bg-[#1A0A22] text-white pt-5  pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-10 flex items-center justify-center">
              
              <span
                className="text-4xl "
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #F9A8D4, #C084FC, #FCD34D)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Glee Beauty
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              متجرك المفضل لمستحضرات التجميل الفاخرة. نقدم لك أجود منتجات العناية بالشفاه وأروع غلوسات اللامعة.
            </p>
            <div className="flex gap-3 mt-5 flex items-center justify-center">
              <a
                href="#"
                className="w-13 h-13 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 flex items-center justify-center transition-all duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-13 h-13 rounded-full bg-white/10 hover:bg-black flex items-center justify-center transition-all duration-200"
              >
                <TikTokIcon />
              </a>
              <a
                href="#"
                className="w-13 h-13 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-all duration-200"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div >
            <h4 className="text-pink-300 font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {[
                { label: "الرئيسية", to: "/" },
                { label: "العناية بالشفاه", to: "/category/lip-care" },
                { label: "غلوس الشفاه", to: "/category/lip-glosses" },
                { label: "عن المتجر", to: "/about" },
                { label: "تواصل معنا", to: "/about" },
              ].map((link) => (
                <li key={link.to + link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-pink-300 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        

          {/* Contact */}
          
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <p>© 2026 Glee Beauty. جميع الحقوق محفوظة</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-pink-400 transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-pink-400 transition-colors">الشروط والأحكام</a>
              <a href="#" className="hover:text-pink-400 transition-colors">سياسة الإرجاع</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
