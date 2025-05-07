import Link from "next/link";
import sampleProducts from "@/data/products";

export default function ProductSelectionPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">OURS PRODUCTS</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sampleProducts.map((product) => (
          <div key={product.id} className="border rounded p-2 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto mb-2 rounded"
            />
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
