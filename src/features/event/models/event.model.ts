import { type Model, Schema, model, models } from "mongoose";
import { type IEvent } from "../types/eventType";

const EventSchema = new Schema(
  {
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    withPermission: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    eventName: {
      type: String,
      required: [true, "Event name is required"],
    },
    eventDesc: {
      type: String,
      default: "",
    },
    eventType: {
      type: String,
      required: [true, "Event type is required"],
      default: "",
    },
    eventDate: {
      type: Date,
      default: null,
    },
    eventCeremonyTime: {
      type: String,
      default: "",
    },
    eventReceptionTime: {
      type: String,
      default: "",
    },
    eventCeremonyLoc: {
      type: String,
      default: "",
    },
    eventReceptionLoc: {
      type: String,
      default: "",
    },
    eventStatus: {
      type: String,
      enum: ["planning", "completed", "cancelled"],
      default: "planning",
    },
  },
  {
    timestamps: true,
  },
);

const Event: Model<IEvent> =
  models.Event ?? model<IEvent>("Event", EventSchema);

export default Event;
