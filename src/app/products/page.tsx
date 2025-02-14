"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { PackageOpen } from "lucide-react";
import Loading from "../components/Loading";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function ProductListing() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch products from Fake Store API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Product Listing
      </h1>

      {loading ? (
        <Loading />
      ) : products.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <PackageOpen size={60} className="text-gray-400" />
          <p className="text-gray-500 mt-4 text-lg">No products available.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h2>
              <p className="text-gray-600">Price: ${product.price}</p>
              <button
                className="mt-auto w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
