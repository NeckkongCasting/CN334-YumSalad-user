import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductSelectionPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3341/product/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">OUR PRODUCTS</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-2 text-center">
            <Link href={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto mb-2 rounded cursor-pointer"
              />
            </Link>
            <p>{product.name}</p>
            <p>{product.price}฿</p>
            <Link
              href={`/products/${product.id}`}
              className="text-sm bg-green-600 text-white px-2 py-1 rounded block mt-2"
            >
              add to cart
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
