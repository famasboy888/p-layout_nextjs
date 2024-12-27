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
  role?: string;
}

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    role: {
      type: String,
      default: "client",
      enum: ["admin", "client", "coordinator"],
    },
  },
  { timestamps: true },
);

const User: Model<IUser> = models.User ?? model<IUser>("User", UserSchema);

export default User;
