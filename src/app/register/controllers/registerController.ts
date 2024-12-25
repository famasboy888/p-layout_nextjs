"use server";
import { signIn, signOut } from "auth";

export const handleGoogleSignIn = async () => {
  await signIn("google");
};

export const handleGoogleSignOut = async () => {
  await signOut();
};
