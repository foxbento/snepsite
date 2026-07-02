import Link from "next/link";
import { format } from "date-fns";
import { getAllDiaryPosts } from "@/lib/diary";

export default function DiaryPage() {
  const posts = getAllDiaryPosts();

  return (
    <div className="pt-6 pb-10 px-4 sm:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-mono font-medium mb-2">&gt; diary.</h1>
        <p className="text-himalaya-shadow">
          journal entries, in no particular order
        </p>
      </header>

      <div className="space-y-4 max-w-2xl">
        {posts.map((post) => (
          <Link key={post.slug} href={`/diary/${post.slug}`} className="block">
            <div className="card border border-himalaya-mist">
              <h3 className="text-lg mb-2 text-himalaya-peak">{post.title}</h3>
              <p className="text-himalaya-shadow mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-himalaya-shadow">
                  {format(new Date(post.date), "MMM d, yyyy")}
                </span>
                <span className="text-himalaya-deep hover:text-himalaya-accent transition-colors">
                  Read more →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
