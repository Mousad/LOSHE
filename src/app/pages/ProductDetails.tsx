import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { ShoppingCart, ArrowLeft, Check, Star, Truck, Shield, RefreshCw } from "lucide-react";
import { allProducts } from "../data/products";
import { useCart } from "../context/CartContext";
import { ProductCard } from "../components/ProductCard";

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const product = allProducts.find((p) => p.id === id);
  const related = allProducts.filter((p) => p.categoryId === product?.categoryId && p.id !== id).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-4">المنتج غير موجود</p>
          <Link to="/" className="text-pink-500 hover:underline">العودة للرئيسية</Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.image2 || product.image];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    navigate("/checkout");
  };

  return (
    <div className="bg-[#FFFBF7] min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 pt-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-pink-500 transition-colors">الرئيسية</Link>
          <span>/</span>
          <Link to={`/category/${product.categoryId}`} className="hover:text-pink-500 transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-600 truncate max-w-[160px]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image Gallery */}
          <div>
            <div className="rounded-3xl overflow-hidden bg-pink-50 aspect-square mb-4 shadow-lg">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`rounded-2xl overflow-hidden w-20 h-20 transition-all duration-200 ${
                    selectedImage === i
                      ? "ring-2 ring-pink-500 ring-offset-2"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {product.badge && (
              <span className="inline-flex self-start bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {product.badge}
              </span>
            )}

            <p className="text-pink-500 text-sm font-semibold mb-1">{product.category}</p>

            <h1
              className="text-gray-800 mb-4 leading-tight"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800 }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={15} className={s <= 4 ? "text-yellow-400 fill-yellow-400" : "text-yellow-300 fill-yellow-200"} />
                ))}
              </div>
              <span className="text-gray-500 text-sm">(127 تقييم)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span
                className="font-bold"
                style={{
                  fontSize: "2rem",
                  background: "linear-gradient(135deg, #EC4899, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {product.price} ج م
              </span>
              <span className="text-gray-400 line-through text-sm">{Math.round(product.price * 1.2)} ج.م</span>
              <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-lg">وفري 20%</span>
            </div>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed text-sm mb-6">{product.description}</p>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gray-600 font-medium text-sm">الكمية:</span>
              <div className="flex items-center gap-0 border border-pink-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 text-pink-500 hover:bg-pink-50 transition-colors font-bold"
                >
                  −
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-semibold text-gray-700">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 text-pink-500 hover:bg-pink-50 transition-colors font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleBuyNow}
                className="flex-1 py-4 rounded-2xl text-white font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #EC4899, #A855F7)",
                  boxShadow: "0 6px 20px rgba(236,72,153,0.35)",
                }}
              >
                شراء الآن
              </button>
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 rounded-2xl font-semibold text-sm border-2 transition-all duration-200 flex items-center justify-center gap-2 ${
                  addedToCart
                    ? "border-green-400 text-green-600 bg-green-50"
                    : "border-pink-300 text-pink-600 hover:bg-pink-50"
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check size={16} />
                    تمت الإضافة!
                  </>
                ) : (
                  <>
                    <ShoppingCart size={16} />
                    إضافة إلى السلة
                  </>
                )}
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: <Truck size={18} />, text: "توصيل سريع" },
                { icon: <Shield size={18} />, text: "منتج أصلي" },
                { icon: <RefreshCw size={18} />, text: "إرجاع مجاني" },
              ].map((feat) => (
                <div
                  key={feat.text}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-pink-50 text-pink-600"
                >
                  {feat.icon}
                  <span className="text-xs text-gray-500 text-center">{feat.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2
              className="text-gray-800 mb-6"
              style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 800 }}
            >
              منتجات مشابهة 
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
