import { useRouter } from "next/router";
import { useState } from "react";
import sampleProducts from "@/data/products";
import { useCart } from '@/context/CartContext';


export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();

  const product = sampleProducts.find((p) => p.id === id);

  // เพิ่ม state สำหรับจำนวนสินค้า
  const [quantity, setQuantity] = useState(1);
  const [option, setOption] = useState(1);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto bg-gray-100 p-4 rounded shadow">
      <div className="flex flex-col md:flex-row gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="text-black rounded w-72 h-72 object-cover"
        />
        <div className="flex-1 space-y-4">
          <h2 className="text-black font-bold">{product.name}</h2>
          <p className="text-black font-semibold text-lg">
            {product.description}
          </p>
          <p className="text-green-700 font-semibold text-lg">
            ฿{product.price} / Bowl
          </p>

          {/* จำนวนสินค้า */}
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="bg-green-300 px-3 py-1 rounded text-black font-semibold text-lg"
            >
              -
            </button>
            <span className="text-black font-semibold text-lg">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="bg-green-300 px-3 py-1 rounded text-black font-semibold text-lg"
            >
              +
            </button>
          </div>

          {/* ตัวเลือกเพิ่มเติม */}
          <div className="flex gap-2 items-center">
            <span>option</span>
            <button
              onClick={() => setOption((o) => Math.max(1, o - 1))}
              className="bg-gray-300 px-2"
            >
              -
            </button>
            <span>{option}</span>
            <button
              onClick={() => setOption((o) => o + 1)}
              className="bg-gray-300 px-2"
            >
              +
            </button>
          </div>

          <button
            onClick={() => addToCart(product, quantity)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mt-2"
          >
            ADD TO CART
          </button>

        </div>
      </div>
    </div>
  );
}
