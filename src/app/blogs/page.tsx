import Link from "next/link";
import { getAllPosts } from "@/lib/blogs";
import { Post } from "@/lib/types";
import Image from "next/image";
interface BlogPostProps {
    params: Promise<Post[]>;
}
export const dynamic = "auto";
export default async function BlogIndex() {
    const posts: Post[] = getAllPosts();

    return (
        <div className="p-6 bg-base-100 min-h-screen">
            <h1 className="text-5xl font-bold text-center mb-8 text-secondary-content">Blogs</h1>
            <pre className="hidden">USE WINDOWS THEY SAID, IT WOULD BE FUN THEY SAID</pre>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <div key={post.slug} className="card shadow-xl bg-secondary text-secondary-content">
                        <figure>
                            <Image src={post.data.image} alt={post.data.title} className="w-full h-48 object-cover" width="1000" height="1000"/>
                            
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title text-accent">{post.data.title}</h2>
                            <p>{post.data.description}</p>
                            <div className="card-actions justify-end">
                                <Link href={`/blogs/${post.slug}`}>
                                    <div className="btn btn-primary">Read More</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
