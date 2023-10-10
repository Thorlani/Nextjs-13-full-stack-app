import Delete from "@/components/Delete";
import Link from "next/link";
import React from "react";

type Post = {
  id: string;
  title: string;
  description: string;
  date: string;
};

const Edit = async () => {
  const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_API_URL + "posts"}`);
    const result = await res.json();
    return result;
  };
  const { posts } = await getPosts();
  return (
    <main className="w-full flex min-h-[80vh] overflow-y-scroll no-scrollbar flex-col items-start  p-10 md:p-20">
      {posts.map((post: Post) => {
        return (
          <div key={post.id} className="mb-8">
            <div>
              <h1 className="text-3xl font-bold">{post.title}</h1>
              <p className="text-gray-600">{post.description}</p>
              <p className="text-gray-600">{post.date.slice(0, 10)}</p>
            </div>
            <div className="w-fit h-fit flex">
              <Link href={`/edit/${post.id}`}>
                <button className="px-4 py-1 rounded-[12px] border-[1px] border-[#000] hover:bg-[#fff]">
                  Update
                </button>
              </Link>
              {/* <Delete id={post.id} /> */}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Edit;
