import { cookies } from "next/headers";
import { type IEvent } from "~/types/eventType";
import { checkAuthorizationProtectedRoute } from "~/utils/auth/checkAuthorization";
import { BASE_URL } from "~/utils/constants";

export const fetchEventOfUser = async () => {
  try {
    const session = await checkAuthorizationProtectedRoute("coordinator");

    const res = await fetch(`${BASE_URL}/api/event/user/${session.user.id}`, {
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
