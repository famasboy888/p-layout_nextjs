import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import User from "~/models/user.model";
import dbConnect from "~/utils/db/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
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

      return true;
    },
    async session({ session }) {
      const dbUser = await User.findOne({
        email: session.user.email,
      });

      if (dbUser) {
        session.user.id = dbUser._id.toString();
        session.user.email = dbUser.email;
        session.user.name = dbUser.name;
      }

      return session;
    },
  },
});