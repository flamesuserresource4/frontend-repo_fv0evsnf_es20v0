export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-zinc-600 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} swiftcart. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-4 text-zinc-500">
            <a href="#" className="hover:text-zinc-900">Privacy</a>
            <a href="#" className="hover:text-zinc-900">Terms</a>
            <a href="#" className="hover:text-zinc-900">Support</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
