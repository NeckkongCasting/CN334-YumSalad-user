import { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const yourAuthToken = localStorage.getItem('access_token'); 

    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3342/api/orders/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${yourAuthToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    // เช็คว่ามี token หรือไม่
    if (yourAuthToken) {
      fetchOrders();
    } else {
      console.log('No token found');
      setLoading(false); // ปิดการโหลดหากไม่มี token
    }
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Profile</h1>
      <h2>Order History</h2>
      <ul>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map(order => (
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
          ))
        )}
      </ul>
    </div>
  );
};

export default ProfilePage;
