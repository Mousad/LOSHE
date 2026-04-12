import React from "react";
import { createBrowserRouter, Outlet } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { About } from "./pages/About";


function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <p className="text-6xl mb-4"></p>
        <h2 className="text-gray-800 font-bold text-2xl mb-3">الصفحة غير موجودة</h2>
        <a href="/" className="text-pink-500 font-semibold hover:underline">العودة للرئيسية</a>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "category/:id", Component: Category },
      { path: "product/:id", Component: ProductDetails },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: Checkout },
      { path: "about", Component: About },
      { path: "*", Component: NotFound },
    ],
  },
]);
