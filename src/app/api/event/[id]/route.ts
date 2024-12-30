import { NextResponse, type NextRequest } from "next/server";
import { createEvent } from "~/repositories/event.repo";
import { type IEvent } from "~/types/eventType";

export const POST = async (
  req: NextRequest,
  context: { params: Promise<Partial<IEvent>> },
) => {
  try {
    const data = (await req.json()) as Partial<IEvent>;

    console.log("data from API", data);
    const eventData: Partial<IEvent> = {
      ...data,
    };
    const event = await createEvent(eventData);

    // Check if users is empty
    if (!event) {
      return new NextResponse(JSON.stringify({ error: "Event not created" }), {
        status: 400,
      });
    }

    // Implement DTO mapping using zod
    // return only id, email, name and role

    return new NextResponse(JSON.stringify(event), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
};
