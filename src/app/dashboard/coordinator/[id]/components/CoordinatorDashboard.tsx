"use client";

import axios from "axios";
import { useEffect } from "react";
import { type IUser } from "~/models/user.model";

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

export default function CoordinatorDashboard() {
  console.log(BASE_URL);
  useEffect(() => {
    console.log(`${BASE_URL}/api/user/6772510dbe3cf46c9b33aa17`);
    fetchUser()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <div>CoordinatorDashboard</div>;
}
