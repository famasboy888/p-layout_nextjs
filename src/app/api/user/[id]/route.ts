import { Types } from "mongoose";
import { type NextRequest, NextResponse } from "next/server";
import { UserDTO } from "~/dto/user/user.dto";
import { getUserById } from "~/repositories/user.repo";

export const GET = async (
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) => {
  try {
    const id = (await context.params).id;
    const users = await getUserById(new Types.ObjectId(id));

    // Check if users is empty
    if (!users) {
      return new NextResponse(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    // Implement DTO mapping using zod
    // return only id, email, name and role

    const userDTO = UserDTO.parse(users);
    console.log(users); // Log the userDTO for debugging

    return new NextResponse(JSON.stringify(userDTO), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
};
