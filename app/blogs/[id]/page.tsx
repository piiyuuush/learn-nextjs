import blogs from "../../data/blogs.json";
import { notFound } from "next/navigation";
import Link from "next/link";

interface BlogDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailsPage({ params }: BlogDetailsProps) {
  const { id } = await params;
  const blog = blogs.find((item) => item.id === id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-10">
      {/* Back button */}
      <div>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Back to Articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-xs text-zinc-400">
          <span className="px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300 font-medium">
            {blog.category}
          </span>
          <span>•</span>
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          {blog.title}
        </h1>

        <p className="text-lg text-zinc-400 leading-relaxed italic border-l-2 border-zinc-700 pl-4">
          {blog.excerpt}
        </p>
      </header>

      <hr className="border-zinc-800" />

      {/* Article Content */}
      <article className="prose prose-invert max-w-none text-zinc-300 leading-relaxed space-y-6 text-base sm:text-lg">
        {blog.content.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>

      <hr className="border-zinc-800" />

      {/* Author Card Footer */}
      <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-sm text-zinc-200">
          PB
        </div>
        <div>
          <h2 className="text-sm font-semibold text-zinc-200">Piyush Bhandari</h2>
          <p className="text-xs text-zinc-400">
            Full-stack developer exploring Next.js, React, and modern web architectures.
          </p>
        </div>
      </div>
    </div>
  );
}