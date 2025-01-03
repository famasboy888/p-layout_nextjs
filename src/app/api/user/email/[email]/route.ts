import { type NextRequest, NextResponse } from "next/server";
import { UserDTO } from "~/features/user/dto/user.dto";
import { getUserByEmail } from "~/features/user/repositories/user.repo";

export const GET = async (
  req: NextRequest,
  context: { params: Promise<{ email: string }> },
) => {
  try {
    const email = (await context.params).email;
    const users = await getUserByEmail(email);

    // Check if users is empty
    if (!users) {
      return new NextResponse(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    // Implement DTO mapping using zod
    // return only id, email, name and role

    const userDTO = UserDTO.parse(users);

    return new NextResponse(JSON.stringify(userDTO), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
};
