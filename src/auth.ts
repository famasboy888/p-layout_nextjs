import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import User, { type IUser } from "~/models/user.model";
import { authConfig } from "./auth.config";
import dbConnect from "./utils/db/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [Google],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          await dbConnect();

          // Check if the user already exists
          const existingUser = await User.findOne({ email: user.email });

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
        await dbConnect();
        const dbUser = await User.findOne({
          email: session.user.email,
        });

        if (dbUser) {
          session.user.id = dbUser._id.toString();
          session.user.email = dbUser.email;
          session.user.name = dbUser.name;
          session.user.role = dbUser.role;
        }

        console.log("session from auth", session);
      } catch (error) {
        console.error(error);
      }
      return session;
    },
  },
});
