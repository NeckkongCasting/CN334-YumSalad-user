import Link from "next/link";
import sampleProducts from "@/data/products";

export default function HomePage() {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?cs=srgb&dl=appetizer-cucumber-cuisine-1059905.jpg&fm=jpg"
        alt="banner"
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-6 mb-4 text-center">
        recommend product
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sampleProducts.slice(0, 4).map((product) => (
          <img
            key={product.id}
            src={product.image}
            alt={product.name}
            className="rounded shadow-md"
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link
          href="/products"
          className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded"
        >
          see all
        </Link>
      </div>
    </div>
  );
}
