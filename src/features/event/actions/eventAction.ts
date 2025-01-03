"use server";
import { Types } from "mongoose";
import { checkAuthorizationProtectedRoute } from "~/lib/auth/checkAuthorization";

import { EventDisplayArraySchema, EventInsertSchema } from "../dto/event.dto";
import { createEvent, getAllEventsByUserId } from "../repositories/event.repo";
import { type EventDisplayDTO } from "../types/eventType";

export const fetchEventOfUser = async () => {
  try {
    const session = await checkAuthorizationProtectedRoute("coordinator");

    const userId = new Types.ObjectId(session.user.id);

    const events = await getAllEventsByUserId(userId);

    const mappedEventData = EventDisplayArraySchema.parse(
      events,
    ) as Partial<EventDisplayDTO>[];

    return mappedEventData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addEvent = async (prevState: unknown, formData: FormData) => {
  try {
    const session = await checkAuthorizationProtectedRoute("coordinator");
    const userId = new Types.ObjectId(session.user.id);

    const eventData = EventInsertSchema.parse({
      createdBy: userId,
      withPermission: [userId],
      eventName: formData.get("eventName") as string,
      eventDesc: formData.get("eventDesc") as string,
      eventType: formData.get("eventType") as string,
      eventDate: new Date(formData.get("eventDate") as string),
      eventCeremonyTime: formData.get("eventCeremonyTime") as string,
      eventReceptionTime: formData.get("eventReceptionTime") as string,
      eventCeremonyLoc: formData.get("eventCeremonyLoc") as string,
      eventReceptionLoc: formData.get("eventReceptionLoc") as string,
      eventStatus: "planning",
    });

    const res = await createEvent(eventData);

    if (res) {
      return {
        message: "Success",
      };
    } else {
      return {
        message: "Failed",
      };
    }
  } catch (error) {
    console.error("Error during API call:", error);
    return {
      message: "Failed",
    };
  }
};
