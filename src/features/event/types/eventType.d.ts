import { type Document, type Types } from "mongoose";

export interface IEvent extends Document {
  _id: Types.ObjectId;
  createdBy: Types.ObjectId;
  withPermission: Types.ObjectId[];
  eventName: string;
  eventDesc?: string;
  eventType: string;
  eventDate?: Date | null;
  eventCeremonyTime?: string;
  eventReceptionTime?: string;
  eventCeremonyLoc?: string;
  eventReceptionLoc?: string;
  eventStatus: "planning" | "completed" | "cancelled";
  createdAt?: Date;
  updatedAt?: Date;
}
