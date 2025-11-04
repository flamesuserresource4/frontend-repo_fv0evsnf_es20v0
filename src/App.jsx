import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState('');

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.qty, 0), [cart]);

  const handleAdd = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      <Navbar cartCount={cartCount} onSearchChange={setQuery} />
      <main>
        <Hero />
        <ProductGrid query={query} onAdd={handleAdd} />
      </main>
      <Footer />
    </div>
  );
}
