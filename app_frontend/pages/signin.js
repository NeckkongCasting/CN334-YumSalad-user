import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Logging in with', email, password);
  };

    return (
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>

        <form className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl text-black font-bold mb-6 text-center">LOGIN</h2>
          <input
            type="username"
            placeholder="Username"
            className="w-full mb-4 p-2 border rounded text-white"
            style={{ backgroundColor: "rgba(189, 188, 188, 0.8)", '::placeholder': { color: 'white' } }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 border rounded text-white"
            style={{ backgroundColor: "rgba(189, 188, 188, 0.8)", '::placeholder': { color: 'white' } }}
            required
          />
          <a href="/signup" className="text-black hover:underline mb-4 block text-center">Don't have an account? Sign up</a>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" style={{ backgroundColor: "rgba(22, 97, 27, 0.8)" }}>
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
  