"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GoogleSignOutButton from "~/components/ui/GoogleSignoutButton";
export default function Sidebar() {
  const { data: userSession } = useSession();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  let role = "";
  let id = "";
  if (userSession) {
    role = userSession.user.role!;
    id = userSession.user.id!;
  }
  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={() => setIsDrawerOpen(!isDrawerOpen)}
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu min-h-full w-80 bg-base-100 p-4 text-base-content">
          <div className="flex items-center space-x-4 pt-3">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-circle btn-ghost"
            >
              <div className="w-10 rounded-full">
                <Image
                  alt="User Avatar"
                  src={
                    userSession?.user.image ??
                    "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                  }
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div>
              <div className="font-bold capitalize">
                {userSession?.user.name}
              </div>
              <div className="text-xs uppercase text-gray-500">
                {userSession?.user.role}
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <ul>
            <li>
              <Link href={`/dashboard/${role}/${id}`} onClick={handleLinkClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <a onClick={handleLinkClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Item 1
              </a>
            </li>
            <li>
              <a onClick={handleLinkClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Item 3
              </a>
            </li>
            <li>
              <GoogleSignOutButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
