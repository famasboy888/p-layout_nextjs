import Image from "next/image";
import { fetchEventOfUser } from "~/service/event/eventService";
import { type IEvent } from "~/types/eventType";
import { checkAuthorizationProtectedRoute } from "~/utils/auth/checkAuthorization";

export default async function page() {
  const session = await checkAuthorizationProtectedRoute("coordinator");
  let events: Partial<IEvent>[];
  if (session) {
    events = await fetchEventOfUser(session.user.id!);
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-8 mt-4 text-2xl font-bold">Recent Events</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {events! && events.length > 0 ? (
          events.map((event) => (
            <div
              key={event._id?.toString()}
              className="card h-40 w-auto bg-base-100 shadow-md md:h-64"
            >
              <figure>
                <Image
                  alt={event.eventName!}
                  src={`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`}
                  className="rounded-box"
                  width={500}
                  height={500}
                />
              </figure>
              <div className="p-2 text-[10px] md:p-4 md:text-sm">
                <h1 className="font-bold">{event.eventName}</h1>
                <p>{event.eventDesc}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No events available.</p>
        )}
      </div>
    </div>
  );
}
