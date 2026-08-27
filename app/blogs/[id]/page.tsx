import blogs from "../../data/blogs.json";
import { notFound } from "next/navigation";
import Link from "next/link";


export default async function BlogDetailsPage(
    {params}: {
        params: Promise<{id: string}>
    }
){
    const {id} = await params; 
    const blog = blogs.find((item) => item.id === id);
    if(!blog){
        notFound();
    }
  return (
    <article className="px-24 min-h-screen flex flex-col gap-2">
        <Link href="/blogs">{"<---"} Back to Blogs Menu</Link>
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="mt-4 text-gray-700">{blog.content}</p>
    </article>
  );
}