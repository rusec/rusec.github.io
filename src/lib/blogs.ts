import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { format } from "date-fns";
import { Post, PostData } from "@/lib/types";
const postsDirectory = path.join(process.cwd(), "public/blog/posts");

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    // changing data.date to a string

    data.date = format(data.date, "MMM/dd/yy");

    return {
      slug: fileName.replace(/\.md$/, ""),
      data: data as PostData,
      content,
    };
  });

  return allPosts;
}

function filterSlug(slug: string) {
  let regex = /[a-zA-Z0-9_%+-]/g;
  let match = slug.match(regex);
  if (!match) throw new Error("Invalid slug");
  let newSlug = match.join("");
  return newSlug;
}
export function getPostBySlug(slug: string): Post | null {
  try {
    slug = filterSlug(slug);
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    data.date = format(data.date, "MMM/dd/yy");

    return {
      slug,
      data: data as PostData,
      content,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An error occurred while trying to get the post by slug");
    }

    return null;
  }
}
