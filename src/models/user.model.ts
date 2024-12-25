import {
  type Document,
  type Model,
  type Types,
  Schema,
  model,
  models,
} from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId;
  email: string;
  name: string;
}

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
  },
  { timestamps: true },
);

const User: Model<IUser> = models.User ?? model<IUser>("User", UserSchema);

export default User;
