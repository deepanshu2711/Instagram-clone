import { initialUser } from "@/utils/initial-user";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@mui/material";

export default async function Home() {
  const currentUser = await initialUser();
  if (!currentUser) return;
  return <div>Main Feed</div>;
}
