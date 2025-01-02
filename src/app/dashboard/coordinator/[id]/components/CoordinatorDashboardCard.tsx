"use client";

import Image from "next/image";
import { use } from "react";
import { type IEvent } from "~/types/eventType";

export default function CoordinatorDashboardCard({
  eventData,
}: {
  readonly eventData: Promise<Partial<IEvent>[]>;
}) {
  const events = use(eventData);
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {events.length > 0 ? (
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
  );
}
