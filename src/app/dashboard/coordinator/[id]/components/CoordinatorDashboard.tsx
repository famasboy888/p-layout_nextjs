"use client";

import axios from "axios";
import { Types } from "mongoose";
import { useEffect } from "react";
import { type IUser } from "~/models/user.model";
import { type IEvent } from "~/types/eventType";

const BASE_URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL;

const fetchUser = async () => {
  const res = await axios.get(
    `${BASE_URL}/api/user/6772510dbe3cf46c9b33aa17`,
    {},
  );

  const data = res.data as IUser;
  console.log("data", data, `${BASE_URL}/api/user/6772510dbe3cf46c9b33aa17`);
  return data;
};

const addEvent = async () => {
  const eventData: Partial<IEvent> = {
    createdBy: new Types.ObjectId("6772510dbe3cf46c9b33aa17"),
    withPermission: [new Types.ObjectId("6772510dbe3cf46c9b33aa17")],
    eventName: "Another Conference",
    eventDesc: "Another to discuss annual progress and future plans.",
    eventType: "Conference",
    eventDate: new Date("2023-12-15T09:00:00Z"),
    eventCeremonyTime: "09:00 AM",
    eventReceptionTime: "06:00 PM",
    eventCeremonyLoc: "Main Hall, Building B",
    eventReceptionLoc: "Banquet Hall, Building C",
    eventStatus: "planning",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    const res = await axios.post(
      `${BASE_URL}/api/event/6772510dbe3cf46c9b33aa17`,
      eventData,
    );

    const data = res.data as IEvent;
    console.log("data", data, `${BASE_URL}/api/event/6772510dbe3cf46c9b33aa17`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error creating event:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

export default function CoordinatorDashboard() {
  console.log(BASE_URL);
  useEffect(() => {
    console.log(`${BASE_URL}/api/user/6772510dbe3cf46c9b33aa17`);
    addEvent()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <div>CoordinatorDashboard</div>;
}
