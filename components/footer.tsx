import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 text-zinc-400">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p className="text-zinc-500">
          © {new Date().getFullYear()} Piyush Bhandari. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-zinc-200 transition-colors">
            Home
          </Link>
          <Link href="/blogs" className="hover:text-zinc-200 transition-colors">
            Blogs
          </Link>
          <Link href="/about-us" className="hover:text-zinc-200 transition-colors">
            About Us
          </Link>
        </div>
      </div>
    </footer>
  );
}