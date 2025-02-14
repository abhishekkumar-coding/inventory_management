import Link from "next/link";
import { ShoppingCart, Package, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen  py-20 flex flex-col justify-center items-center text-center bg-gray-50 px-4">
      {/* Hero Section */}
      <section className="max-w-3xl ">
        <h1 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
          Streamline Your <span className="text-blue-600">Inventory</span> Effortlessly
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Manage your stock, track products, and optimize your business with ease.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
            Explore Products
          </Link>
          <Link href="/cart" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 transition">
            View Cart
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <Package className="w-12 h-12 mx-auto text-blue-600" />
          <h3 className="mt-4 text-xl font-semibold">Product Management</h3>
          <p className="text-gray-600 mt-2">Easily add, update, and remove products from inventory.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <ShoppingCart className="w-12 h-12 mx-auto text-blue-600" />
          <h3 className="mt-4 text-xl font-semibold">Seamless Cart Journey</h3>
          <p className="text-gray-600 mt-2">Track and manage your purchases efficiently.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <CheckCircle className="w-12 h-12 mx-auto text-blue-600" />
          <h3 className="mt-4 text-xl font-semibold">Real-Time Updates</h3>
          <p className="text-gray-600 mt-2">Keep inventory updated with real-time stock tracking.</p>
        </div>
      </section>
    </div>
  );
}
