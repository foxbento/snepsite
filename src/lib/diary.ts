import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type DiaryPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

const DIARY_DIR = path.join(process.cwd(), "content", "diary");

export function getAllDiaryPosts(): DiaryPost[] {
  const files = fs.readdirSync(DIARY_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(DIARY_DIR, file), "utf8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      content,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getDiaryPost(slug: string): DiaryPost | undefined {
  return getAllDiaryPosts().find((post) => post.slug === slug);
}
