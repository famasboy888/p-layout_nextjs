import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import User, { type IUser } from "~/models/user.model";
import dbConnect from "~/utils/db/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          const res = await fetch(
            `${process.env.NEXTAUTH_URL}/api/user/email/${user.email}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            },
          );

          if (!res.ok) {
            throw new Error("Failed to fetch user data");
          }

          // Check if the user already exists
          const existingUser: IUser | null = (await res.json()) as IUser;

          if (!existingUser) {
            await User.create({
              // If the user doesn't exist, create a new user
              email: user.email,
              name: user.name,
            });
          }
        } catch (error) {
          console.error(error);
        }
      }

      return true;
    },
    async session({ session }) {
      try {
        const res = await fetch(
          `${process.env.NEXTAUTH_URL}/api/user/email/${session.user.email}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }

        const user: IUser | null = (await res.json()) as IUser;

        if (user) {
          session.user.id = user._id.toString();
          session.user.email = user.email;
          session.user.name = user.name;
        }
      } catch (error) {
        console.error(error);
      }

      return session;
    },
  },
});
