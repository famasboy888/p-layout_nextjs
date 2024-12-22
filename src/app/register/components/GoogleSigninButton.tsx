import Image from "next/image";
import { handleGoogleSignIn } from "../controllers/registerController";

export default function GoogleSigninButton() {
  return (
    <button
      onClick={handleGoogleSignIn}
      className="btn btn-outline btn-primary w-full"
    >
      <Image
        src={`/assets/buttons/google_signin_btn.svg`}
        alt="Google Sign In"
        width={30}
        height={30}
      />
      <span>Sign In with Google</span>
    </button>
  );
}
