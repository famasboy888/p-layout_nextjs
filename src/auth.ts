import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { authConfig } from "./auth.config";
import {
  createUserFromGoogleAuth,
  getUserByEmail,
} from "./repositories/user.repo";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [Google],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          if (user?.email && user?.name) {
            // Check if the user already exists
            const existingUser = await getUserByEmail(user?.email);

            if (!existingUser) {
              //If user doesnt exist create new user
              await createUserFromGoogleAuth({
                email: user.email,
                name: user.name,
              });
            }
          }
        } catch (error) {
          console.error(error);
        }
      }

      return true;
    },
    async session({ session }) {
      try {
        const dbUser = await getUserByEmail(session.user.email);

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
