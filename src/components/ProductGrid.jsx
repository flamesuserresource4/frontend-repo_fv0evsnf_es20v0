import { useMemo } from 'react';
import { Star } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: 129.99,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1518444028785-8f6f95f0c949?q=80&w=1400&auto=format&fit=crop',
    category: 'Audio',
  },
  {
    id: 2,
    title: 'Smart Watch',
    price: 179.0,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1400&auto=format&fit=crop',
    category: 'Wearables',
  },
  {
    id: 3,
    title: 'Mechanical Keyboard',
    price: 89.99,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop',
    category: 'Accessories',
  },
  {
    id: 4,
    title: '4K Monitor',
    price: 349.99,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
    category: 'Displays',
  },
  {
    id: 5,
    title: 'Portable Speaker',
    price: 59.99,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1400&auto=format&fit=crop',
    category: 'Audio',
  },
  {
    id: 6,
    title: 'Gaming Mouse',
    price: 49.99,
    rating: 4.3,
    image:
      'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1600&auto=format&fit=crop',
    category: 'Accessories',
  },
];

function ProductCard({ product, onAdd }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-square w-full overflow-hidden bg-zinc-50">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="line-clamp-1 font-medium text-zinc-900">{product.title}</h3>
            <p className="mt-1 text-xs text-zinc-500">{product.category}</p>
          </div>
          <div className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">
            <Star size={12} className="fill-amber-400 text-amber-400" />
            {product.rating}
          </div>
        </div>
        <div className="mt-3 flex items-end justify-between">
          <p className="text-lg font-semibold tracking-tight text-zinc-900">
            ${product.price.toFixed(2)}
          </p>
          <button
            onClick={() => onAdd?.(product)}
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-white hover:bg-zinc-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid({ query = '', onAdd }) {
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Trending now</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Handpicked items popular with shoppers this week.
          </p>
        </div>
        <div className="text-sm text-zinc-500">{filtered.length} results</div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
