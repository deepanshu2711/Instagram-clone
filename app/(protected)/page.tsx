import Posts from "@/components/posts/posts";
import FollowSuggestions from "@/components/sidebar/follow-suggestions";
import Stories from "@/components/stories/stories";
import { initialUser } from "@/utils/initial-user";

export default async function Home() {
  const currentUser = await initialUser();
  if (!currentUser) return;
  return (
    <div className="w-full flex">
      <div className="flex flex-col ml-[250px] mr-[150px]">
        <Stories />
        <Posts />
      </div>
      <div className="p-2">
        <FollowSuggestions />
      </div>
    </div>
  );
}
