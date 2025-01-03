"use server";
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

function simulateApiCall(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("API call completed");
    }, 5000); // 20 seconds delay
  });
}

export const addEvent = async (prevState: unknown, formData: FormData) => {

  try {
    const result = await simulateApiCall();
    return {
      message: "Success",
    };
  } catch (error) {
    console.error("Error during API call:", error);
    return {
      message: "Failed",
    };
  }
};
