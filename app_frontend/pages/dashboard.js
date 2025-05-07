import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // ถ้าอยากโหลดข้อมูลออเดอร์ในอนาคตก็สามารถ fetch API ได้ที่นี่
  }, []);

  return (
    <div className="max-w-xl mx-auto bg-white p-6 mt-10 rounded shadow text-center">
      <h1 className="text-2xl font-bold text-green-700 mb-4">ขอบคุณสำหรับการสั่งซื้อ!</h1>
      <p className="text-gray-800 text-lg mb-6">
        ระบบได้รับคำสั่งซื้อของคุณแล้ว และจะดำเนินการจัดส่งในเร็ว ๆ นี้
      </p>
      <button
        onClick={() => router.push('/')}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
      >
        กลับไปหน้าแรก
      </button>
    </div>
  );
}
