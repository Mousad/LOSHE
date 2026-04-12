import React from "react";
import { Link } from "react-router";
import { X, Instagram, MessageCircle, Sparkles } from "lucide-react";
import { lipCareProducts, lipGlossProducts } from "../data/products";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navLinks = [
    { label: "الرئيسية", to: "/" },
    { label: "العناية بالشفاه", to: "/category/lip-care" },
    { label: "غلوس الشفاه", to: "/category/lip-glosses" },
    { label: "عن المتجر", to: "/about" },
    { label: "تواصل معنا", to: "/about" },
  ];

  const featuredProducts = [
    lipCareProducts[0],
    lipGlossProducts[0],
    lipCareProducts[1],
    lipGlossProducts[2],
  ];

  const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.28 8.28 0 0 0 4.84 1.56V6.79a4.85 4.85 0 0 1-1.07-.1z" />
    </svg>
  );

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-400 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`absolute inset-y-0 right-0 w-full max-w-sm bg-white flex flex-col transition-transform duration-400 ease-out shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-pink-100">
          <div className="flex items-center gap-2">
            
            <span
              className="text-xl text-[#f15b9a]"
              style={{
                fontFamily: "'Cairo', sans-serif",
                fontWeight: 800,
                
              }}
            >
              LOSHE
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-500 hover:bg-pink-50 hover:text-pink-500 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col px-4 py-4 gap-1 ">
          <p className="text-xs text-pink-400 font-semibold px-3 pb-2 tracking-wide">القائمة الرئيسية</p>
          {navLinks.map((link) => (
            <Link
              key={link.to + link.label}
              to={link.to}
              onClick={onClose}
              className="px-4 py-3 rounded-xl text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors font-medium "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="mx-5 border-t border-pink-100" />

        {/* Featured Products */}
        <div className="px-3 ">
          <p className="text-xs text-pink-400  font-semibold  tracking-wide">منتجات مميزة</p>



          
          <div className="flex gap-3 overflow-x-auto px-2 scrollbar-hide">
  {featuredProducts.map((product) => (
    <Link
      key={product.id}
      to={`/product/${product.id}`}
      onClick={onClose}
      className="flex-shrink-0 w-40 group"
    >
      <div className="rounded-2xl overflow-hidden w-full aspect-square bg-pink-50 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <p className="text-gray-600 text-center mt-2 w-full truncate">
        {product.name}
      </p>
    </Link>
  ))}
</div>
        </div>

        {/* Spacer */}
       <div className="h-11" /> 

        {/* Social Icons */}
        <div className="border-t border-pink-100 ">
          <p className="text-xs text-pink-400 font-semibold pb-3 tracking-wide text-center">تابعينا</p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-sm"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 transition-transform shadow-sm"
            >
              <TikTokIcon />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-sm"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
