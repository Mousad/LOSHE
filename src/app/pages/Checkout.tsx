import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { ArrowLeft, Check, MapPin, Truck, User, Sparkles } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "الاسم مطلوب";
    if (!form.phone.trim()) newErrors.phone = "رقم الجوال مطلوب";
    else if (!/^[0-9+]{9,14}$/.test(form.phone.replace(/\s/g, "")))
      newErrors.phone = "رقم الجوال غير صحيح";
    if (!form.city.trim()) newErrors.city = "المدينة مطلوبة";
    if (!form.address.trim()) newErrors.address = "العنوان مطلوب";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      clearCart();
    }, 1800);
  };

  if (items.length === 0 && !submitted) {
    return (
      <div className="bg-[#FFFBF7] min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-gray-400 mb-4">لا توجد منتجات في سلتك</p>
          <Link to="/category/lip-care" className="text-pink-500 font-semibold hover:underline">
            ابدأي التسوق
          </Link>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="bg-[#FFFBF7] min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-sm mx-auto">
          <div
            className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #EC4899, #A855F7)", boxShadow: "0 10px 30px rgba(236,72,153,0.4)" }}
          >
            <Check size={44} className="text-white" />
          </div>
          
          <h2
            className="text-gray-800 mb-3"
            style={{ fontSize: "1.8rem", fontWeight: 800 }}
          >
            تم تأكيد طلبك! 
          </h2>
          <p className="text-gray-500 text-sm mb-2">
            شكراً لكِ <span className="text-pink-500 font-semibold">{form.name}</span>!
          </p>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            سيتواصل معكِ فريقنا قريباً على رقم ({form.phone}) لتأكيد التوصيل.
          </p>

          <div
            className="rounded-2xl p-5 mb-8 text-sm text-right"
            style={{ background: "linear-gradient(135deg, #FFF1F5, #F3E8FF)" }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">طريقة الدفع</span>
              <span className="text-gray-700 font-medium">الدفع عند الاستلام 💳</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">التوصيل</span>
              <span className="text-green-500 font-medium">مجاني </span>
            </div>
            <div className="flex justify-between border-t border-pink-200 pt-2 mt-2">
              <span className="text-gray-600 font-semibold">الإجمالي</span>
              <span className="font-bold text-pink-600">{totalPrice} ج. م</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
            className="w-full py-4 rounded-2xl text-white font-semibold"
            style={{ background: "linear-gradient(135deg, #EC4899, #A855F7)" }}
          >
            العودة للرئيسية
          </button>
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
            onClick={() => navigate("/cart")}
            className="p-2 rounded-xl text-gray-500 hover:bg-pink-50 hover:text-pink-500 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h1
            className="text-gray-800"
            style={{ fontSize: "1.6rem", fontWeight: 800 }}
          >
            التفاصيل
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate>
              {/* Personal Info */}
              <div
                className="bg-[#fffbf7] rounded-3xl p-6 mb-5"
                style={{ boxShadow: "0 4px 20px rgba(236,72,153,0.08)" }}
              >
                <h2 className="text-gray-800 font-bold text-base mb-5 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-pink-100 flex items-center justify-center">
                    <User size={14} className="text-pink-500" />
                  </div>
                  البيانات الشخصية
                </h2>

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-1.5">
                      الاسم الكامل <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="أدخلي اسمك الكامل"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-sm bg-pink-50/50 transition-all focus:outline-none focus:bg-white ${
                        errors.name
                          ? "border-red-300 focus:border-red-400"
                          : "border-pink-200 focus:border-pink-400"
                      }`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-1.5">
                      رقم الجوال <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="20xxxxxxxx"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-sm bg-pink-50/50 transition-all focus:outline-none focus:bg-white ${
                        errors.phone
                          ? "border-red-300 focus:border-red-400"
                          : "border-pink-200 focus:border-pink-400"
                      }`}
                      dir="ltr"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Delivery Info */}
              <div
                className="bg-white rounded-3xl p-6 mb-5"
                style={{ boxShadow: "0 4px 20px rgba(236,72,153,0.08)" }}
              >
                <h2 className="text-gray-800 font-bold text-base mb-5 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center">
                    <MapPin size={14} className="text-purple-500" />
                  </div>
                  عنوان التوصيل
                </h2>

                <div className="space-y-4">
                  {/* City */}
                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-1.5">
                      المدينة <span className="text-pink-500">*</span>
                    </label>
                    <select
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-sm bg-pink-50/50 transition-all focus:outline-none focus:bg-white ${
                        errors.city
                          ? "border-red-300 focus:border-red-400"
                          : "border-pink-200 focus:border-pink-400"
                      }`}
                    >
                      <option value="">اختاري المدينة</option>
                      {[ "اسكندرية", " اكتوبر", "الجيزة", "القاهرة", "السودان", "مصر"].map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-1.5">
                      العنوان التفصيلي <span className="text-pink-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="الحي، الشارع، رقم المبنى..."
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-sm bg-pink-50/50 transition-all focus:outline-none focus:bg-white resize-none ${
                        errors.address
                          ? "border-red-300 focus:border-red-400"
                          : "border-pink-200 focus:border-pink-400"
                      }`}
                    />
                    {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-1.5">
                      ملاحظات إضافية (اختياري)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="أي تعليمات خاصة للتوصيل..."
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-pink-200 text-sm bg-pink-50/50 transition-all focus:outline-none focus:bg-white focus:border-pink-400 resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div
                className="bg-white rounded-3xl p-6 mb-6"
                style={{ boxShadow: "0 4px 20px rgba(236,72,153,0.08)" }}
              >
                <h2 className="text-gray-800 font-bold text-base mb-4 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                    <Truck size={14} className="text-green-500" />
                  </div>
                  طريقة الدفع
                </h2>

                <div
                  className="flex items-center gap-4 p-4 rounded-2xl border-2 border-pink-400 cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #FFF1F5, #F3E8FF)" }}
                >
                  <div className="w-5 h-5 rounded-full border-2 border-pink-400 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-pink-500" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold text-sm">الدفع عند الاستلام </p>
                    <p className="text-gray-400 text-xs">ادفعي نقداً عند استلام طلبك</p>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl text-white font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-xl disabled:opacity-80 disabled:scale-100 flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #EC4899, #A855F7)",
                  boxShadow: "0 6px 25px rgba(236,72,153,0.35)",
                }}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    جاري تأكيد الطلب...
                  </>
                ) : (
                  <>
                    <Check size={18} />
                    تأكيد الطلب
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div
              className="bg-white rounded-3xl p-6 sticky top-24"
              style={{ boxShadow: "0 4px 20px rgba(236,72,153,0.08)" }}
            >
              <h3
                className="text-gray-800 mb-5"
                style={{ fontSize: "1rem", fontWeight: 700 }}
              >
                ملخص الطلب ({items.length} منتج)
              </h3>

              <div className="space-y-3 mb-5 max-h-60 overflow-y-auto scrollbar-hide">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-pink-50 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-700 text-xs font-medium line-clamp-2">{item.name}</p>
                      <p className="text-gray-400 text-xs">x{item.quantity}</p>
                    </div>
                    <p className="text-pink-600 font-semibold text-sm shrink-0">{item.price * item.quantity} ج. م</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-pink-100 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">المنتجات</span>
                  <span className="text-gray-700">{totalPrice} ج. م</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">الشحن</span>
                  <span className="text-green-500 font-medium">مجاني</span>
                </div>
                <div className="flex justify-between border-t border-pink-100 pt-2 mt-2">
                  <span className="text-gray-700 font-bold">الإجمالي</span>
                  <span
                    className="font-bold text-lg"
                    style={{
                      background: "linear-gradient(135deg, #EC4899, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {totalPrice} ج. م
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}