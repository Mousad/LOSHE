import React, { useState } from "react";
import { Link } from "react-router";
import { ShoppingCart, Check } from "lucide-react";
import { Product } from "../context/CartContext";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div
        className="bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
        style={{ boxShadow: "0 4px 20px rgba(236,72,153,0.08)" }}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-square bg-pink-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.badge && (
            <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-gray-800 font-semibold text-sm leading-snug mb-2 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center justify-between mt-3">
            <span
              className="font-bold"
              style={{
                background: "linear-gradient(135deg, #EC4899, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "1.1rem",
              }}
            >
              {product.price} $
            </span>
            <button
              onClick={handleAddToCart}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                added
                  ? "bg-green-100 text-green-600"
                  : "bg-pink-50 text-pink-600 hover:bg-pink-500 hover:text-white"
              }`}
            >
              {added ? (
                <>
                  <Check size={14} />
                  <span className="hidden sm:inline">تمت الإضافة</span>
                </>
              ) : (
                <>
                  <ShoppingCart size={14} />
                  <span className="hidden sm:inline">أضف للسلة</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}