import { auth } from "auth";
import { redirect } from "next/navigation";

export const checkAuthorizationLoginRegisterRoute = async () => {
  const session = await auth();
  if (session) {
    redirect("/");
  }
  return session;
};

export const checkAuthorizationProtectedRoute = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return session;
};
