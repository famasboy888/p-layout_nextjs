import { type Types } from "mongoose";
import User, { type IUser } from "~/models/user.model";
import dbConnect from "~/utils/db/db";

export async function getUserById(userId: Types.ObjectId) {
  try {
    await dbConnect();
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getUserByEmail(userEmail: string) {
  try {
    await dbConnect();
    const user = await User.findOne({
      email: userEmail,
    });
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createUserFromGoogleAuth(params: {
  email: string;
  name: string;
}) {
  try {
    await dbConnect();
    const user = await User.create(params);
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
