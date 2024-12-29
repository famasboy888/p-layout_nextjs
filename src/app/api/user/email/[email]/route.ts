import { type NextRequest, NextResponse } from "next/server";
import { UserDTO } from "~/dto/user/user.dto";
import { getUserByEmail } from "~/repositories/user.repo";

export const GET = async (
  req: NextRequest,
  context: { params: Promise<{ email: string }> },
) => {
  const email = (await context.params).email;
  try {
    const users = await getUserByEmail(email);

    // Implement DTO mapping using zod
    // return only id, email, name and role

    const userDTO = UserDTO.parse(users);
    console.log(users); // Log the userDTO for debugging

    return new NextResponse(JSON.stringify(userDTO), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: "Failed to fetch user" }), {
      status: 500,
    });
  }
};