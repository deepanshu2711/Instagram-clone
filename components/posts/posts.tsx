import Post from "./post";

interface PostsProps {
  allPosts: any[];
}

const Posts = ({ allPosts }: PostsProps) => {
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-4 w-[500px] items-center justify-center ml-40">
        {allPosts &&
          allPosts.map((post) => (
            <Post
              key={post.id}
              comments={post.comments}
              description={post.description}
              likes={post.likes}
              postUrl={post.postUrl}
              userId={post.userId}
            />
          ))}
      </div>
    </div>
  );
};

export default Posts;
