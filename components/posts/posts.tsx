import Post from "./post";

const Posts = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-4 w-[500px] items-center justify-center ml-40">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Posts;
