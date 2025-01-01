import { cookies } from "next/headers";
import { type IEvent } from "~/types/eventType";
import { BASE_URL } from "~/utils/constants";

export const fetchEventOfUser = async (userId: string) => {
  try {
    const res = await fetch(`${BASE_URL}/api/event/user/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: (await cookies()).toString(),
      },
    });

    const events: Partial<IEvent>[] = (await res.json()) as Partial<IEvent>[];

    return events;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
