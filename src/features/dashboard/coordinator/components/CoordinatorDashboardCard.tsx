import Image from "next/image";
import { type EventDisplayDTO } from "~/features/event/types/eventType";

export default function CoordinatorDashboardCard({
  eventData,
}: {
  readonly eventData: Partial<EventDisplayDTO>[];
}) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {eventData.length > 0 ? (
        eventData.map((event) => (
          <div
            key={event._id?.toString()}
            className="card h-40 w-auto bg-base-100 shadow-md md:h-64"
          >
            <figure>
              <Image
                alt={
                  event.eventName ??
                  "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                }
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
  );
}
