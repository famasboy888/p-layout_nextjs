import Link from "next/link";
import { auth } from "~/auth";
import Sidebar from "./components/Sidebar";

export default async function Header() {
  const session = await auth();

  return (
    <header>
      <nav>
        <div className="navbar fixed top-0 z-20 bg-base-100 px-8 shadow-md">
          {!session ? (
            <>
              <div className="navbar-start">
                <Link href="/" className="bg-base-100 text-xl">
                  P-Layout
                </Link>
              </div>
              <div className="navbar-end">
                <div className="flex flex-row items-center gap-2">
                  <Link
                    href="/register"
                    className="hover:border-1 btn border-base-100 bg-primary-gradient text-white hover:border-purple-900"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/login"
                    className="btn border-gray-200 bg-base-100"
                  >
                    Log In
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="navbar-start">
                <Sidebar />
              </div>
              <div className="navbar-center">
                <Link href="/" className="bg-base-100 text-xl">
                  P-Layout
                </Link>
              </div>
              <div className="navbar-end">
                <button className="btn btn-circle btn-ghost">
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
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
