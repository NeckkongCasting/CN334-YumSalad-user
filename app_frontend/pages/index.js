import { useState, useEffect } from 'react';
import Link from "next/link";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3341/product/');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <img
        src="https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?cs=srgb&dl=appetizer-cucumber-cuisine-1059905.jpg&fm=jpg"
        alt="banner"
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-6 mb-4 text-center">Recommend Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.slice(0, 4).map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="overflow-hidden rounded shadow-md cursor-pointer">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link
          href="/products"
          className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded"
        >
          See all
        </Link>
      </div>
    </div>
  );
}
