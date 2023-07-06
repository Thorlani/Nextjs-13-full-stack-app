type PostProps = {
  id: string;
  title: string;
  desc: string;
  date: Date;
};

let posts: PostProps[] = [];

//handlers
export const getPosts = () => posts;

export const addPosts = (post: PostProps) => {
  posts.push(post);
};

export const removePosts = (id: string) => {
  posts = posts.filter((post) => post.id !== id);
};

export const updatePosts = (id: string, title: string, desc: string) => {
  const post = posts.find((post) => post.id === id);

  if (post) {
    post.title = title;
    post.desc = desc;
  } else {
    throw new Error("NO POST FOUND");
  }
};

export const getById = (id: string) => {
  return posts.find((post) => post.id === id);
};
