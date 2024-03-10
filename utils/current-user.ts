import { auth } from "@clerk/nextjs";
import { db } from "./MongoDb";
import UserModel from "@/models/user-modal";

export const currentUser = async () => {
  await db();
  const { userId } = auth();
  if (!userId) return null;

  const currentUser = await UserModel.findOne({ userId });

  return currentUser;
};
