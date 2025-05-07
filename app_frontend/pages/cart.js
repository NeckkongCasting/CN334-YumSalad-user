import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/router';

export default function CartPage() {
  const { cartItems, updateQuantity, removeItem } = useCart();
  const router = useRouter();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleConfirm = () => {
    if (cartItems.length === 0) return;
    router.push('/checkout'); // หรือแสดง popup ก็ได้
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">ตะกร้าสินค้า</h1>
      {cartItems.length === 0 ? (
        <p>ไม่มีสินค้าในตะกร้า</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p>฿{item.price} x {item.quantity}</p>

                <div className="flex gap-2 mt-2">
                  <button onClick={() => updateQuantity(item.id, -1)} className="bg-gray-300 px-2 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="bg-gray-300 px-2 rounded">+</button>
                  <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500 underline">ลบ</button>
                </div>
              </div>
              <p className="font-bold text-green-700">฿{item.price * item.quantity}</p>
            </div>
          ))}
          <div className="text-right font-bold text-lg text-green-800 mt-4">
            รวมทั้งสิ้น: ฿{total}
          </div>

          {/* ปุ่มยืนยันสินค้า */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleConfirm}
              className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
            >
              ยืนยันสินค้า
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
