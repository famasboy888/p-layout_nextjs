import { type Types } from "mongoose";
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
