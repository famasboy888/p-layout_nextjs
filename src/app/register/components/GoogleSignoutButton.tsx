import { handleGoogleSignOut } from "../controllers/registerController";

export default function GoogleSignOutButton() {
  return (
    <button
      onClick={handleGoogleSignOut}
      className="btn btn-outline btn-primary w-full"
    >
      <span>Sign Out</span>
    </button>
  );
}
