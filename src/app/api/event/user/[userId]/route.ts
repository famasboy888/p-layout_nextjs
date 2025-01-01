import { Types } from "mongoose";
import { NextResponse, type NextRequest } from "next/server";
import { getAllEventsByUserId } from "~/repositories/event.repo";

export const GET = async (
  req: NextRequest,
  context: { params: Promise<{ userId: string }> },
) => {
  try {
    const userId = (await context.params).userId;
    const events = await getAllEventsByUserId(new Types.ObjectId(userId));

    return new NextResponse(JSON.stringify(events), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
};
