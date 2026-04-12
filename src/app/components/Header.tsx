import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { ShoppingCart, Menu, Sparkles } from "lucide-react";
import { useCart } from "../context/CartContext";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "الرئيسية", to: "/" },
    { label: "العناية بالشفاه", to: "/category/lip-care" },
    { label: "غلوس الشفاه", to: "/category/lip-glosses" },
    { label: "عن المتجر", to: "/about" },
  ];

  return (
    <>
      <header
        className= "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-14 bg-[#fffbf7]"
      >
        <div className="max-w-7xl mx-auto px-2 py-3 flex items-center justify-between gap-4">
          {/* Mobile: Menu icon */}
          <button
            className="md:hidden p-2 rounded-xl text-pink-500 transition-colors"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            
            <span
              className="text-2xl tracking-wide"
              style={{
                fontFamily: "'Cairo', sans-serif",
                fontWeight: 800,
                background: "linear-gradient(135deg, #EC4899, #A855F7, #D4A853)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Glowray
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.to
                    ? "bg-pink-50 text-pink-600"
                    : "text-gray-600 hover:text-pink-500 hover:bg-pink-50/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart Icon */}
          <button
            onClick={() => navigate("/cart")}
            className="relative p-2 rounded-xl text-pink-500 hover:bg-pink-50 transition-colors"
          >
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white text-xs flex items-center justify-center font-bold shadow-sm">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}