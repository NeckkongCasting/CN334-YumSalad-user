import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import { CartProvider } from '@/context/CartContext';

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Navbar />
      <main className="p-4">
        <Component {...pageProps} />
      </main>
    </CartProvider>
  );
}
