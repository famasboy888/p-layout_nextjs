import { auth } from "auth";
import Link from "next/link";
import GoogleSignOutButton from "./components/GoogleSignoutButton";

export default async function Header() {
  const session = await auth();

  return (
    <header>
      <nav>
        <div className="navbar fixed top-0 z-20 bg-base-100 px-8 shadow-md">
          <div className="navbar-start">
            <Link href="/" className="bg-base-100 text-xl">
              P-Layout
            </Link>
          </div>
          <div className="navbar-end">
            {!session ? (
              <div className="flex flex-row items-center gap-2">
                <Link
                  href="/register"
                  className="hover:border-1 btn border-base-100 bg-primary-gradient text-white hover:border-purple-900"
                >
                  Sign Up
                </Link>
                <Link href="/login" className="btn border-gray-200 bg-base-100">
                  Log In
                </Link>
              </div>
            ) : (
              <GoogleSignOutButton />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
