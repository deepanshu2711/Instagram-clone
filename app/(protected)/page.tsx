import Posts from "@/components/posts/posts";
import Stories from "@/components/stories/stories";
import { initialUser } from "@/utils/initial-user";

export default async function Home() {
  const currentUser = await initialUser();
  if (!currentUser) return;
  return (
    <div className="flex flex-col ml-[250px] mr-[450px] w-full">
      <Stories />
      <Posts />
    </div>
  );
}
