import EditPost from "@/components/EditPost";

const ReadPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_API_URL + "posts/" + id}`, {
      next: { revalidate: 1000 },
    });
    const result = await res.json();
    return result;
  };
  const { post } = await getPosts();

  return (
    <main className="w-full flex min-h-[80vh] overflow-y-scroll no-scrollbar flex-col items-start justify-evenly p-10 md:p-20">
      <h1 className="font-bold text-xl">Edit Post</h1>
      <EditPost
        id={post.id}
        title={post.title}
        description={post.description}
      />
    </main>
  );
};

export default ReadPage;
