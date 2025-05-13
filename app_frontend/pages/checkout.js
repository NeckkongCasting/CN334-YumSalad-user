import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/router';

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    router.push('/payment');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.phone) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    // ยังไม่เคลียร์ cart ตอนนี้ รอชำระเงิน
    // ไปหน้า payment
    router.push('/payment');
  };

  // จำลองการสั่งซื้อ
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-black">ยืนยันคำสั่งซื้อ</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1 text-black">ชื่อผู้สั่ง</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-black"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1 text-black">ที่อยู่</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            rows="3"
            className="w-full border px-3 py-2 rounded text-black"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1 text-black">เบอร์โทร</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 w-full"
        >
          ยืนยันคำสั่งซื้อ
        </button>
      </form>
    </div>
  );
}
