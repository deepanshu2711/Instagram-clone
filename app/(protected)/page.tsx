import Posts from "@/components/posts/posts";
import FollowSuggestions from "@/components/sidebar/follow-suggestions";
import Stories from "@/components/stories/stories";
import { getAllPosts } from "@/utils/get-all-posts";
import { getAllUsers } from "@/utils/get-all-users";
import { initialUser } from "@/utils/initial-user";

export default async function Home() {
  const currentUser = await initialUser();
  const posts = await getAllPosts();
  const users = await getAllUsers();
  if (!currentUser) return;
  return (
    <div className="w-full flex">
      <div className="flex flex-col ml-[250px] mr-[150px]">
        <Stories />
        <Posts allPosts={posts} />
      </div>
      <div className="p-2">
        <FollowSuggestions allUsers={users} />
      </div>
    </div>
  );
}
