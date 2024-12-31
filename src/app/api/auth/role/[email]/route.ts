import { type NextRequest, NextResponse } from "next/server";
import { getUserRoleByEmail } from "~/repositories/user.repo";

export const GET = async (
  req: NextRequest,
  context: { params: Promise<{ email: string }> },
) => {
  try {
    const email = (await context.params).email;
    const role = await getUserRoleByEmail(email);

    // Check if users is empty
    if (!role) {
      return new NextResponse(JSON.stringify({ error: "Error getting role" }), {
        status: 404,
      });
    }

    // Implement DTO mapping using zod
    // return only id, email, name and role

    return new NextResponse(JSON.stringify(role), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
};
