import { auth } from "~/auth";

export const checkAuthorization = async () => {
  const session = await auth();

  if (!session) {
    throw new Error("Not authenticated");
  }

  return session;
};
