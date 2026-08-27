import Link from "next/link"

export default function Navbar(){
    return <div className="flex justify-between px-24 py-4 sticky top-0 bg-black text-white">
        <Link href="/">Piyush Bhandari</Link>
        <div className="links flex gap-12">
            <Link href="/">Home</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/about-us">About Us</Link>
        </div>
    </div>
}