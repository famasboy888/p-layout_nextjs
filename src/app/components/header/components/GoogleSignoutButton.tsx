"use client";

import { handleGoogleSignOut } from "~/app/register/controllers/registerController";

export default function GoogleSignOutButton() {
  return (
    <button
      onClick={handleGoogleSignOut}
      className="btn border-gray-200 bg-base-100"
    >
      <span>Sign Out</span>
    </button>
  );
}
