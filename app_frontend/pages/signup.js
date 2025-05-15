import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignupPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch('https://cn334-yumsalad-back.onrender.com/api/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          username, 
          password,
          fullname: username,
          address: "",
          province: "",
          post_code: "",
          tel: ""
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        const errorDetail =
          data.detail ||
          Object.values(data).flat().join('\n') || 
          'Registration failed';
        throw new Error(errorDetail);
      }

      alert('Registration successful!');
      router.push('/login');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.squarespace-cdn.com/content/v1/5c9047d7a09a7e36047930c5/1628920669405-GTAO3R9I81VDSS2R6A54/Foods+_+Roots_6015.jpg')",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl text-black font-bold mb-6 text-center">
          SIGN UP
        </h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-2 border rounded text-white placeholder-white"
          style={{ backgroundColor: 'rgba(189, 188, 188, 0.8)' }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded text-white placeholder-white"
          style={{ backgroundColor: 'rgba(189, 188, 188, 0.8)' }}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded text-white placeholder-white"
          style={{ backgroundColor: 'rgba(189, 188, 188, 0.8)' }}
          required
        />
        <button
          type="submit"
          className="w-full text-white p-2 rounded hover:bg-green-900"
          style={{ backgroundColor: 'rgba(22, 97, 27, 0.8)' }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
