import Event from "~/models/event.model";
import { type IEvent } from "~/types/eventType";
import dbConnect from "~/utils/db/db";

export async function createEvent(params: Partial<IEvent>) {
  try {
    await dbConnect();
    const event = await Event.create(params);
    return event;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
