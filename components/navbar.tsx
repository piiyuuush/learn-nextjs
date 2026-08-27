import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 text-zinc-100">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-medium text-base tracking-tight flex items-center gap-2.5 group"
        >
          <span className="text-zinc-200 group-hover:text-white transition-colors">
            Piyush Bhandari
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/blogs"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Blogs
          </Link>
          <Link
            href="/about-us"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            About Us
          </Link>
        </div>
      </nav>
    </header>
  );
}