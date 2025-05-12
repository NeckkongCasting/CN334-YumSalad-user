import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3342/api/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.detail || 'Login failed');
      }

      const data = await res.json();
      alert('Login successful!');
      // บันทึก token ไว้ หรือ redirect ไปหน้าอื่น
      // localStorage.setItem("token", data.token);
      router.push('/');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl text-black font-bold mb-6 text-center">LOGIN</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-2 border rounded text-white"
          style={{ backgroundColor: "rgba(189, 188, 188, 0.8)" }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded text-white"
          style={{ backgroundColor: "rgba(189, 188, 188, 0.8)" }}
          required
        />
        <a href="/signup" className="text-black hover:underline mb-4 block text-center">
          Don't have an account? Sign up
        </a>
        <button type="submit" className="w-full text-white p-2 rounded" style={{ backgroundColor: "rgba(22, 97, 27, 0.8)" }}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}
