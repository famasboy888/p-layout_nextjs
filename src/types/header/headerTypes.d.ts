import { type Session } from "next-auth";

export interface IHeader {
  session: Session;
}
