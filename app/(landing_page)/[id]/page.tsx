import AddComment from "@/components/AddComment";

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

  const getComments = async () => {
    const res = await fetch(`${process.env.NEXT_API_URL + "comments/" + id}`);
    const result = await res.json();
    return result;
  };
  const { comments } = await getComments();

  type CommentProps = {
    id: string;
    name: string;
    comment: string;
    postId: string;
  };

  return (
    <main className="w-full flex min-h-[80vh] overflow-y-scroll no-scrollbar flex-col items-start justify-evenly p-10 md:p-20">
      <div key={post.id}>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <div className="text-gray-600 mt-2 mb-5">{post.date.slice(0, 10)}</div>
        <p className="text-gray-600 mt-5">{post.description}</p>
      </div>
      <div className="mt-16">
        <h4 className="font-bold text-xl mb-6">Comments</h4>
        {comments.map((comment: CommentProps) => {
          return (
            <div key={comment.id} className="mb-4 commentBorder pb-4">
              <h5>
                Name: <span className="font-bold text-lg">{comment.name}</span>
              </h5>
              <p>Comment: {comment.comment}</p>
            </div>
          );
        })}
      </div>
      <AddComment id={post.id} />
    </main>
  );
};

export default ReadPage;
