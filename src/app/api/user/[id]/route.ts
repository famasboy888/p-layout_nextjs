import { type NextRequest, NextResponse } from "next/server";
import { getUserById } from "~/repositories/user.repo";
import { Types } from "mongoose";

export const GET = async (
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) => {
  const id = (await context.params).id;

  try {
    const users = await getUserById(new Types.ObjectId(id));
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: "Failed to fetch user" }), {
      status: 500,
    });
  }
};
