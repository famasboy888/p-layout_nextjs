import axios from "axios";
import NextAuth from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "~/auth.config";

const BASE_URL = process.env.NEXTAUTH_URL;

const { auth } = NextAuth(authConfig);

export const checkAuthorizationLoginRegisterRoute = async () => {
  const session = await auth();
  if (session) {
    redirect("/");
  }

  return session;
};

interface IRole {
  role: string;
}

export const checkAuthorizationProtectedRoute = async (
  requiredRole: string,
) => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  try {
    const res = await axios.get<IRole>(
      `${BASE_URL}/api/auth/role/${session.user?.email}`,
    );
    const role = res.data.role;

    if (requiredRole !== role) {
      redirect("/unauthorized");
    }
  } catch (error) {
    console.error(error);
    redirect("/unauthorized");
  }

  return session;
};
