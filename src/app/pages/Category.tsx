import React from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { lipCareProducts, lipGlossProducts, categories } from "../data/products";

export function Category() {
  const { id } = useParams<{ id: string }>();

  const category = categories.find((c) => c.id === id);
  const products = id === "lip-care" ? lipCareProducts : id === "lip-glosses" ? lipGlossProducts : [];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-4">الفئة غير موجودة</p>
          <Link to="/" className="text-pink-500 hover:underline">العودة للرئيسية</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#ffffff] min-h-screen pb-16">
      {/* Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(26,10,34,0.8) 0%, rgba(236,72,153,0.3) 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-12 max-w-7xl mx-auto">
          
          
          <h1
            className="text-white mb-2"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800 }}
          >
            {category.name}
          </h1>
          <p className="text-white/70 text-sm max-w-md">{category.description}</p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 pt-12">
       

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-20">
            
            <p className="text-gray-400 text-lg">لا توجد منتجات في هذه الفئة حالياً</p>
          </div>
        )}
      </div>

      {/* Other Category CTA */}
      <div className="max-w-7xl mx-auto px-4 pt-14">
  <div className="rounded-3xl overflow-hidden relative">

    {/* الصورة */}
    <img
      src="https://i.pinimg.com/736x/61/c0/8a/61c08a8899c55fab6d19633d52221633.jpg"
      alt="Lip Care Banner"
      className="w-full h-54 md:h-80 object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-6">
      
      <p className="text-white mb-4 text-lg md:text-xl font-medium">
        {id === "lip-care"
          ? "هل تبحثين عن غلوس الشفاه؟"
          : "هل تبحثين عن منتجات العناية بالشفاه؟"}
      </p>

      <Link
        to={id === "lip-care" ? "/category/lip-glosses" : "/category/lip-care"}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-white font-semibold transition-all hover:scale-105"
        style={{ background: "linear-gradient(135deg, #EC4899, #A855F7)" }}
      >
        <ShoppingCart size={16} />
        {id === "lip-care"
          ? "اكتشفي قلوس الشفاه"
          : "اكتشفي العناية بالشفاه"}
      </Link>

    </div>
  </div>
</div>
    </div>
  );
}
