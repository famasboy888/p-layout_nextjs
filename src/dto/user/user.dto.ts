import { Types } from "mongoose";
import { z } from "zod";

// Define a Zod schema for the user DTO
export const UserDTO = z.object({
  _id: z.instanceof(Types.ObjectId),
  email: z.string().email(),
  name: z.string(),
  role: z.string(),
});
