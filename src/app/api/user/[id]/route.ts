import { type NextRequest, NextResponse } from "next/server";
import { getUserById } from "~/repositories/user.repo";
import { Types } from "mongoose";

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

    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
};
