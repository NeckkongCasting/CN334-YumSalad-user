import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PaymentPage() {
  const { cartItems, clearCart } = useCart();
  const router = useRouter();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  }, [cartItems]);

  const handleConfirmPayment = () => {
    clearCart();
    alert('ยืนยันการชำระเงินเรียบร้อยแล้ว');
    router.push('/dashboard');
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow text-center">
      <h1 className="text-2xl font-bold mb-4 text-green-700">ชำระเงิน</h1>
      
      <p className="text-lg font-semibold mb-2 text-gray-800">ยอดที่ต้องชำระ: <span className="text-green-700">฿{total}</span></p>
      
      <div className="flex justify-center mb-4">
        <img
          src="https://promptpay.io/0912345678.png?amount=100.00"
          alt="QR Code Payment"
          className="w-64 h-64 border"
        />
      </div>

      <p className="text-gray-500 mb-6">กรุณาสแกน QR Code เพื่อชำระเงิน</p>

      <button
        onClick={handleConfirmPayment}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded w-full"
      >
        ยืนยันการชำระเงิน
      </button>
    </div>
  );
}
