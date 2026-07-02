import { notFound } from "next/navigation";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import { getAllDiaryPosts, getDiaryPost } from "@/lib/diary";

export function generateStaticParams() {
  return getAllDiaryPosts().map((post) => ({ slug: post.slug }));
}

export default async function DiaryPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getDiaryPost(slug);

  if (!post) notFound();

  return (
    <div className="pt-6 pb-10 px-4 sm:px-6">
      <header className="mb-8 max-w-2xl">
        <h1 className="text-3xl font-mono font-medium mb-2">{post.title}</h1>
        <p className="text-himalaya-shadow">
          {format(new Date(post.date), "MMM d, yyyy")}
        </p>
      </header>

      <div className="card border border-himalaya-mist max-w-2xl">
        <ReactMarkdown
          components={{
            p: (props) => <p className="mb-4" {...props} />,
            ul: (props) => (
              <ul className="list-disc list-inside mb-4" {...props} />
            ),
            ol: (props) => (
              <ol className="list-decimal list-inside mb-4" {...props} />
            ),
            blockquote: (props) => (
              <blockquote
                className="border-l-4 border-himalaya-accent pl-3 text-himalaya-shadow mb-4"
                {...props}
              />
            ),
            code: (props) => (
              <code
                className="bg-himalaya-mist rounded px-1 py-0.5 text-sm"
                {...props}
              />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
