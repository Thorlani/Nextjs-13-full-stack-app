import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
}

export default async function Home() {
  const getPosts = async () => {
    const res = await fetch("http://localhost:3000/api/posts");
    const result = await res.json();
    return result;
  };
  const { posts } = await getPosts();
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between p-24">
      {posts.map((post: Post) => {
        return (
          <div key={post.id}>
            <Link href={`/blog/post/${post.id}`}>
              <h1 className="text-3xl font-bold">{post.title}</h1>
              <p className="text-gray-600">{post.description}</p>
              <p className="text-gray-600">{post.date.slice(0, 10)}</p>
            </Link>
          </div>
        );
      })}
    </main>
  );
}
