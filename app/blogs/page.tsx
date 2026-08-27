import Link from "next/link";
import blogs from "../data/blogs.json";

export default function BlogsPage() {
  return (
    <div className="px-24 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      <ul className="space-y-2">
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link 
              href={`/blogs/${blog.id}`}
              className="text-blue-600 hover:underline"
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}