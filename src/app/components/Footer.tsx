import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900  w-full text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Brand Name */}
          <h2 className="text-xl font-bold tracking-wide text-blue-400">
            Inventory
          </h2>

          {/* Navigation Links */}
          <nav className="flex space-x-6 text-sm">
            <Link href="/products" className="hover:text-blue-400 transition">
              Products
            </Link>
            <Link href="/cart" className="hover:text-blue-400 transition">
              Cart
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition">
              Contact Us
            </Link>
          </nav>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-400 transition">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-blue-400 transition">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-blue-400 transition">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-blue-400 transition">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Inventory. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
