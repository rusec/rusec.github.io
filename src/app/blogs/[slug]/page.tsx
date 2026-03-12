import { getPostBySlug, getAllPosts } from "@/lib/blogs";
import { Post } from "@/lib/types";
import { remark } from "remark";
import html from "remark-html";
import Image from "next/image";
interface BlogPostProps {
    params: Promise<{
        slug: string;
    }>;
}

export const dynamic = "auto";
import "./blogs.css";
export async function generateStaticParams() {
    const allPosts = getAllPosts(); // Assuming getAllPosts returns an array of Post objects
    return allPosts.map(post => ({
        slug: post.slug
    }));
}
export default async function BlogPost({ params }: BlogPostProps) {
    const post = getPostBySlug((await params).slug);

    // if not found return a message
    if (!post) {
        return (
            <div className="p-6 bg-base-100 mx-auto min-h-screen">
                <h2 className="text-5xl font-bold text-center mb-8 text-secondary-content">Post not found</h2>
            </div>
        );
    }

    const contentWithFigures = post.content.replace(
        /{{<\s*figure\s*src="([^"]+)"\s*caption="([^"]+)"\s*width=(\d+)\s*height=(\d+)\s*>}}/g,
        `![$2]($1)
        *Caption: $2*`
    );

    const processedContent = remark().use(html).processSync(contentWithFigures);
    const contentHtml = processedContent.toString();

    return (
        <div className="p-6 bg-base-100 mx-auto min-h-screen">
            <div className="card shadow-lg bg-secondary text-secondary-content">
                <figure>
                    <Image src={post.data.image} alt={post.data.title} className="w-full h-64 object-cover" />
                </figure>
                <div className="card-body">
                    <h1 className="card-title text-4xl mb-4">{post.data.title}</h1>
                    <p className="text-sm text-accent">
                        {post.data.date} • {post.data.author}
                    </p>
                    <div className="prose max-w-none mt-4 blog" dangerouslySetInnerHTML={{ __html: contentHtml }} />
                </div>
            </div>
        </div>
    );
}
