import { redirect } from "next/navigation";
import { auth } from "~/auth";

export const checkAuthorizationLoginRegisterRoute = async () => {
  const session = await auth();
  if (session) {
    redirect("/");
  }

  return session;
};

export const checkAuthorizationProtectedRoute = async (
  requiredRole: string,
) => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  if (session.user?.role !== requiredRole) {
    redirect("/unauthorized");
  }

  return session;
};
