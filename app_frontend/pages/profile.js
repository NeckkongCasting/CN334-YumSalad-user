import { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ฟังก์ชันดึงข้อมูลคำสั่งซื้อ
    const fetchOrders = async () => {
      const response = await fetch('/api/orders/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${yourAuthToken}`, // ใช้ JWT หรือ Cookie ที่ได้
        },
      });
      const data = await response.json();
      setOrders(data);
      setLoading(false);
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Profile</h1>
      <h2>Order History</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <p>Date: {new Date(order.created_at).toLocaleDateString()}</p>
            <p>Total: {order.total_price}</p>
            <p>Status: {order.payment_status}</p>
            <ul>
              {order.items.map(item => (
                <li key={item.id}>{item.product_name} x {item.quantity}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
