import { type Types } from "mongoose";
import Event from "~/features/event/models/event.model";
import dbConnect from "~/lib/db/db";
import { type IEvent } from "../types/eventType";

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

export async function getAllEventsByUserId(userId: Types.ObjectId) {
  try {
    await dbConnect();
    const events = await Event.find({
      createdBy: userId,
    }).exec();
    return events;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
