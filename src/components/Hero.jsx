import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm">
              <Star className="text-amber-500" size={14} />
              <span>Fast, modern shopping experience</span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
              Everything you love, delivered at lightspeed
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600">
              Discover curated products from top brands. Optimized for speed so you can browse and checkout without friction.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Shop now
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                Learn more
              </a>
            </div>

            <div className="mt-8 grid max-w-lg grid-cols-2 gap-4 text-sm text-zinc-700 sm:grid-cols-4">
              {[
                'Free shipping',
                'Secure checkout',
                '24/7 support',
                'Easy returns',
              ].map((item) => (
                <div key={item} className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop"
                alt="Hero"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
