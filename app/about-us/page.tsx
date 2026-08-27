import Link from "next/link";

export default function AboutPage() {
  const skills = [
    { name: "Next.js 15", category: "Framework" },
    { name: "React 19", category: "Library" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS v4", category: "Styling" },
    { name: "Server Components", category: "Architecture" },
    { name: "Node.js", category: "Backend" },
    { name: "Git & GitHub", category: "Tooling" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          About Me
        </h1>
        <p className="text-base text-zinc-400 max-w-xl">
          Hi! I'm Piyush Bhandari — building modern web applications and exploring the latest in React and Next.js ecosystem.
        </p>
      </div>

      {/* Bio / Profile Card */}
      <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700/80 flex items-center justify-center font-mono text-lg font-bold text-zinc-100">
            PB
          </div>
          <div>
            <h2 className="text-xl font-semibold text-zinc-100">Piyush Bhandari</h2>
            <p className="text-sm text-zinc-400">Software Developer & Explorer</p>
          </div>
        </div>

        <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
          <p>
            Welcome to my playground project! This app was built to thoroughly understand the modern Next.js App Router, dynamic routing architecture, server-rendered components, and clean UI engineering with Tailwind CSS.
          </p>
          <p>
            I enjoy crafting minimalist, high-performance interfaces that deliver great user experience and maintainable, clean code.
          </p>
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Tech Stack & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between"
            >
              <span className="text-sm font-medium text-zinc-200">{skill.name}</span>
              <span className="text-[11px] text-zinc-500 mt-1">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action / Connect Footer */}
      <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-zinc-100">Interested in following along?</h3>
          <p className="text-xs text-zinc-400">Check out my blog posts or explore the source code.</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/blogs"
            className="rounded-lg bg-zinc-100 text-zinc-950 px-4 py-2 text-xs font-semibold hover:bg-zinc-200 transition-colors"
          >
            Explore Blogs
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-zinc-800 text-zinc-300 border border-zinc-700/80 px-4 py-2 text-xs font-medium hover:bg-zinc-700/60 hover:text-white transition-colors"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}