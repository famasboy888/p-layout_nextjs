import GoogleSigninButton from "~/components/ui/GoogleSigninButton";
import { checkAuthorizationLoginRegisterRoute } from "~/lib/auth/checkAuthorization";
export default async function page() {
  //Route protection
  await checkAuthorizationLoginRegisterRoute();

  return (
    <div className="flex h-screen flex-col items-center bg-base-100">
      <div className="w-full max-w-md space-y-4 rounded bg-white p-8 shadow-md">
        <GoogleSigninButton />
        <div className="divider">OR</div>
        <form className="space-y-4">
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
