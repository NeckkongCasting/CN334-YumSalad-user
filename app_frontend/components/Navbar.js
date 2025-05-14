import Link from "next/link";

export default function Navbar() {
  return (
  
    <nav className="bg-custom-green text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex gap-4 items-center">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="logo" className="h-10 w-10" />
          <span className="font-bold text-lg ml-2">YumSalad ยำสลัด</span>
        </Link>
        <Link href="/products" className="ml-4">
          OUR PRODUCTS
        </Link>
        <Link href="/aboutus">ABOUT US</Link>
      </div>
      <div className="flex gap-4 items-center">
        <Link href="/cart">🛒</Link>
        <Link href="/login">👤</Link>
      </div>
    </nav>

  );
}
