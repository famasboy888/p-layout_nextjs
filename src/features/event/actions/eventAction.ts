import { Types } from "mongoose";
import { checkAuthorizationProtectedRoute } from "~/lib/auth/checkAuthorization";
import { EventArraySchema } from "../dto/event.dto";
import { getAllEventsByUserId } from "../repositories/event.repo";
import { type EventDisplayDTO } from "../types/eventType";

export const fetchEventOfUser = async () => {
  try {
    const session = await checkAuthorizationProtectedRoute("coordinator");

    const userId = new Types.ObjectId(session.user.id);

    const events = await getAllEventsByUserId(userId);

    const mappedEventData = EventArraySchema.parse(
      events,
    ) as Partial<EventDisplayDTO>[];

    return mappedEventData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
