import Link from "next/link";
import blogs from "../data/blogs.json";

export default function BlogsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      {/* Page Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Articles & Notes
        </h1>
        <p className="text-base text-zinc-400 max-w-xl">
          Thoughts on full-stack web development, React, Next.js architecture, and UI engineering.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.id}`}
            className="group flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-zinc-500 mb-4">
                <span className="px-2.5 py-1 rounded-full bg-zinc-800/80 text-zinc-300 font-medium text-xs">
                  {blog.category}
                </span>
                <span>{blog.date} · {blog.readTime}</span>
              </div>

              <h2 className="text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors mb-2.5">
                {blog.title}
              </h2>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {blog.excerpt}
              </p>
            </div>

            <div className="pt-6 flex items-center gap-1.5 text-xs font-medium text-zinc-300 group-hover:text-white group-hover:translate-x-1 transition-all">
              <span>Read article</span>
              <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}