import { Types } from "mongoose";
import { NextResponse, type NextRequest } from "next/server";
import { createEvent } from "~/features/event/repositories/event.repo";
import { type IEvent } from "~/features/event/types/eventType";

export const POST = async (
  req: NextRequest,
  context: { params: Promise<{ eventId: string }> },
) => {
  try {
    // const data = (await req.json()) as Partial<IEvent>;

    const data: Partial<IEvent> = {
      createdBy: new Types.ObjectId("67758413e153bf5d1e1c0620"),
      withPermission: [new Types.ObjectId("67758413e153bf5d1e1c0620")],
      eventName: "C Eve",
      eventDesc: "C This is a sample event description.",
      eventType: "Conference B",
      eventDate: new Date(),
      eventCeremonyTime: "10:00 AM",
      eventReceptionTime: "12:00 PM",
      eventCeremonyLoc: "Conference Hall C",
      eventReceptionLoc: "Conference Hall C",
      eventStatus: "planning",
    };

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
