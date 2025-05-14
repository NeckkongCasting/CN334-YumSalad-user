import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/router';

export default function CartPage() {
  const { cartItems, updateQuantity, removeItem } = useCart();
  const router = useRouter();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleConfirm = () => {
    if (cartItems.length === 0) return;
    router.push('/checkout');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-800">ตะกร้าสินค้า</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-lg text-gray-600">ไม่มีสินค้าในตะกร้า</div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 object-cover rounded-md" 
                />
                <div>
                  <p className="font-semibold text-xl">{item.name}</p>
                  <p className="text-sm text-gray-600">฿{item.price} x {item.quantity}</p>

                  <div className="flex gap-2 mt-2">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)} 
                      className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded-full text-lg"
                    >
                      -
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)} 
                      className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded-full text-lg"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => removeItem(item.id)} 
                      className="ml-4 text-red-500 hover:text-red-700 underline text-sm"
                    >
                      ลบ
                    </button>
                  </div>
                </div>
              </div>
              <p className="font-bold text-xl text-green-700">฿{item.price * item.quantity}</p>
            </div>
          ))}

          <div className="text-right font-bold text-2xl text-green-800 mt-4">
            รวมทั้งสิ้น: ฿{total}
          </div>

          <div className="flex justify-end mt-8">
            <button
              onClick={handleConfirm}
              className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition duration-300"
            >
              ยืนยันสินค้า
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
