"use client";

import { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Menu, ShoppingCart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = useSelector((state: RootState) => state.cart.items.length);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">

        <Link href="/" className="text-2xl font-extrabold text-gray-800 tracking-wide">
          Invent<span className="text-blue-600">ory</span>
        </Link>


        <div className="hidden md:flex space-x-8 font-medium">
          <Link href="/products" className="relative group transition">
            <span className="hover:text-blue-500 transition">Products</span>
            <motion.div
              className="h-0.5 bg-blue-500 w-0 group-hover:w-full transition-all"
              layoutId="underline"
            />
          </Link>
          <Link href="/cart" className="flex items-center hover:text-blue-500 transition">
            <ShoppingCart className="w-5 h-5 mr-1" />
            Cart ({cartCount})
          </Link>
        </div>


        <button
          className="md:hidden p-2 rounded-lg transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
        </button>
      </div>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t shadow-md absolute w-full left-0 flex flex-col"
          >
            <Link
              href="/products"
              className="block px-6 py-3 text-lg font-medium hover:bg-gray-100 transition"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/cart"
              className=" px-6 py-3 text-lg font-medium hover:bg-gray-100 flex items-center transition"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Cart ({cartCount})
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
