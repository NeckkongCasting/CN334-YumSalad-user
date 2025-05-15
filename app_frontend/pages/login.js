import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://cn334-yumsalad-back.onrender.com/api/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || 'Login failed');
      }

      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      alert('Login successful!');
      router.push('/');
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
          SIGN IN
        </h2>
        <img
          src="https://th.bing.com/th/id/R.ce9dd1615321df47b7b7f3f3f4e6a73b?rik=ZXTMSGi4dy2qMQ&riu=http%3a%2f%2fnoblesfonteinprojects.co.za%2fwp-content%2fuploads%2f2023%2f06%2fprofile4.jpg&ehk=PcnywifoTVWdZz6jjUzwh4p631a45EEDggSfBLh58cc%3d&risl=&pid=ImgRaw&r=0"
          alt="profile"
          className="mb-4 rounded-full w-[100px] h-[100px] object-cover mx-auto"
        />
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
        <a
          href="/signup"
          className="text-black hover:underline mb-4 block text-center"
        >
          Don't have an account? Sign up
        </a>
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
