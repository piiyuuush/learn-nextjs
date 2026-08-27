import Link from "next/link";
import blogs from "./data/blogs.json";

export default function Home() {
  const recentBlogs = blogs.slice(0, 2);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-20">
      {/* Hero Section */}
      <section className="text-center flex flex-col items-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
          Modern web development,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600">
            simplified.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
          A minimalist portfolio and blog demonstrating Next.js dynamic routing, server components, and responsive dark-mode styling.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/blogs"
            className="rounded-lg bg-zinc-100 text-zinc-950 px-5 py-2.5 text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-sm"
          >
            Read Blogs
          </Link>
          <Link
            href="/about-us"
            className="rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 px-5 py-2.5 text-sm font-medium hover:bg-zinc-800/70 hover:text-white transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
          <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-sm font-bold text-zinc-300 mb-4">
            ⚡
          </div>
          <h2 className="text-base font-semibold text-zinc-100 mb-2">Dynamic Routing</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Folder-based routing with bracket syntax for dynamic slugs and async server params.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
          <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-sm font-bold text-zinc-300 mb-4">
            🛡️
          </div>
          <h2 className="text-base font-semibold text-zinc-100 mb-2">Persistent Layouts</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Shared headers and footers that maintain state and don't re-render between route transitions.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
          <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-sm font-bold text-zinc-300 mb-4">
            🎨
          </div>
          <h2 className="text-base font-semibold text-zinc-100 mb-2">Tailwind CSS</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Sleek dark theme UI built with utilities, responsive containers, and smooth hover effects.
          </p>
        </div>
      </section>

      {/* Recent Blog Posts Preview */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Recent Articles</h2>
          <Link
            href="/blogs"
            className="text-xs text-zinc-400 hover:text-white transition-colors"
          >
            View all articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className="group block p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all"
            >
              <div className="flex items-center justify-between text-xs text-zinc-500 mb-3">
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-medium">
                  {blog.category}
                </span>
                <span>{blog.readTime}</span>
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors mb-2">
                {blog.title}
              </h3>
              <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                {blog.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}