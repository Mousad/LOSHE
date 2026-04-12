import React from "react";
import { Link, useNavigate } from "react-router";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="bg-[#FFFBF7] min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-sm mx-auto">
          <div
            className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #FFF1F5, #F3E8FF)" }}
          >
            <ShoppingBag size={40} className="text-pink-400" />
          </div>
          <h2
            className="text-gray-800 mb-3"
            style={{ fontSize: "1.5rem", fontWeight: 800 }}
          >
            سلتك فارغة 
          </h2>
          <p className="text-gray-400 text-sm mb-8">لم تضيفي أي منتجات بعد. ابدأي التسوق الآن!</p>
          <Link
            to="/category/lip-care"
            className="inline-block px-8 py-3.5 rounded-2xl text-white font-semibold"
            style={{ background: "linear-gradient(135deg, #EC4899, #A855F7)" }}
          >
             التسوق
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFBF7] min-h-screen pb-20">
      <div className="max-w-4xl mx-auto px-4 pt-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-xl text-gray-500 hover:bg-pink-50 hover:text-pink-500 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h1
            className="text-gray-800"
            style={{ fontSize: "1.6rem", fontWeight: 800 }}
          >
            سلة التسوق 🛍️
          </h1>
          <span className="bg-pink-100 text-pink-600 text-sm font-semibold px-2.5 py-0.5 rounded-full">
            {totalItems} منتج
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-4 flex gap-4 transition-all"
                style={{ boxShadow: "0 4px 20px rgba(236,72,153,0.08)" }}
              >
                {/* Image */}
                <Link to={`/product/${item.id}`} className="shrink-0">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-pink-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="text-gray-800 font-semibold text-sm mb-1 line-clamp-2 hover:text-pink-500 transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-gray-400 text-xs mb-3">{item.category}</p>
                  <div className="flex items-center justify-between">
                    {/* Quantity */}
                    <div className="flex items-center gap-0 border border-pink-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-pink-500 hover:bg-pink-50 transition-colors"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="w-8 h-8 flex items-center justify-center font-semibold text-gray-700 text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-pink-500 hover:bg-pink-50 transition-colors"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                    {/* Price */}
                    <span
                      className="font-bold"
                      style={{
                        background: "linear-gradient(135deg, #EC4899, #A855F7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        fontSize: "1rem",
                      }}
                    >
                      {item.price * item.quantity} ر.س
                    </span>
                  </div>
                </div>

                {/* Delete */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="shrink-0 p-2 rounded-xl text-gray-300 hover:text-red-400 hover:bg-red-50 transition-all self-start"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div
              className="bg-white rounded-3xl p-6 sticky top-24"
              style={{ boxShadow: "0 4px 20px rgba(236,72,153,0.08)" }}
            >
              <h3
                className="text-gray-800 mb-5"
                style={{ fontSize: "1.1rem", fontWeight: 700 }}
              >
                ملخص الطلب
              </h3>

              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">المنتجات ({totalItems})</span>
                  <span className="text-gray-700 font-medium">{totalPrice} ر.س</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">الشحن</span>
                  <span className="text-green-500 font-medium">مجاني 🎁</span>
                </div>
                <div className="border-t border-pink-100 pt-3 flex justify-between">
                  <span className="text-gray-700 font-semibold">الإجمالي</span>
                  <span
                    className="font-bold text-lg"
                    style={{
                      background: "linear-gradient(135deg, #EC4899, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {totalPrice} ر.س
                  </span>
                </div>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="w-full py-4 rounded-2xl text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #EC4899, #A855F7)",
                  boxShadow: "0 6px 20px rgba(236,72,153,0.3)",
                }}
              >
                متابعة الدفع →
              </button>

              <Link
                to="/category/lip-care"
                className="block text-center text-pink-500 text-sm font-medium mt-4 hover:text-pink-600"
              >
                متابعة التسوق
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-5 border-t border-pink-100 space-y-2">
                {["🔒 دفع آمن ومضمون", "🚚 توصيل سريع", "✅ منتجات أصلية 100%"].map((badge) => (
                  <p key={badge} className="text-gray-400 text-xs text-center">{badge}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
