import { Types } from "mongoose";
import { z } from "zod";

// Define a Zod schema for the event DTO display
const createEventSchema = () => {
  return z.object({
    _id: z.instanceof(Types.ObjectId).transform((objId) => objId.toString()), // Transform ObjectId to string
    createdBy: z
      .instanceof(Types.ObjectId)
      .transform((objId) => objId.toString()), // Assuming createdBy is a string
    withPermission: z.array(
      z.instanceof(Types.ObjectId).transform((objId) => objId.toString()),
    ), // Assuming withPermission is an array of strings
    eventName: z.string(),
    eventDesc: z.string().optional(),
    eventType: z.string(),
    eventDate: z.date(), // Assuming eventDate is a Date object
    eventCeremonyTime: z.string().optional(),
    eventReceptionTime: z.string().optional(),
    eventCeremonyLoc: z.string().optional(),
    eventReceptionLoc: z.string().optional(),
    eventStatus: z.enum(["planning", "completed", "cancelled"]), // Assuming these are the possible statuses
    createdAt: z.date(), // Assuming createdAt is a Date object
    updatedAt: z.date(), // Assuming updatedAt is a Date object
  });
};

export const EventDisplayArraySchema = z.array(createEventSchema());

// Define a Zod schema for the event DTO insert
export const EventInsertSchema = z.object({
  createdBy: z.instanceof(Types.ObjectId), // Assuming createdBy is a string
  withPermission: z.array(z.instanceof(Types.ObjectId)), // Assuming withPermission is an array of strings
  eventName: z.string(),
  eventDesc: z.string().optional(),
  eventType: z.string(),
  eventDate: z.date(), // Assuming eventDate is a Date object
  eventCeremonyTime: z.string().optional(),
  eventReceptionTime: z.string().optional(),
  eventCeremonyLoc: z.string().optional(),
  eventReceptionLoc: z.string().optional(),
  eventStatus: z.enum(["planning", "completed", "cancelled"]), // Assuming these are the possible statuses
});
