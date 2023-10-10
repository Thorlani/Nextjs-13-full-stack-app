const ReadPage = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
  
    const getPosts = async () => {
      const res = await fetch(`${process.env.NEXT_API_URL + "posts/" + id}`);
      const result = await res.json();
      return result;
    };
    const { post } = await getPosts();
    return (
      <main className="w-full flex min-h-[80vh] overflow-y-scroll no-scrollbar flex-col items-center justify-between  p-10 md:p-20">
        <div key={post.id}>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <div className="text-gray-600 mt-2 mb-5">{post.date.slice(0, 10)}</div>
          <p className="text-gray-600 mt-5">{post.description}</p>
        </div>
      </main>
    );
  };
  
  export default ReadPage;
  