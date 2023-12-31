import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Post = {
  id: string;
  title: string;
  description: string;
  date: string;
};

const Page = async () => {
  const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_API_URL + "posts"}`, {
      next: { revalidate: 60 },
    });
    const result = await res.json();
    return result;
  };
  const { posts } = await getPosts();
  return (
    <main className="w-full flex min-h-[80vh] overflow-y-scroll no-scrollbar flex-col items-start  p-10 md:p-20">
      {posts.map((post: Post) => {
        return (
          <div key={post.id} className="mb-8">
            <Link href={`/${post.id}`}>
              <h1 className="text-3xl font-bold">{post.title}</h1>
              <p className="text-gray-600">{post.description}</p>
              <p className="text-gray-600">{post.date.slice(0, 10)}</p>
            </Link>
          </div>
        );
      })}
    </main>
  );
};

export default Page;
