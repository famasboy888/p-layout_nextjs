import Link from "next/link";

export default function Header() {
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
            <div className="flex flex-row items-center gap-2">
              <Link
                href="/register"
                className="bg-primary-gradient hover:border-purple-900 hover:border-1 text-white btn border-base-100"
              >
                Sign Up
              </Link>
              <Link href="/login" className="btn border-gray-200 bg-base-100">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
