import Link from "next/link";

export default function page() {
  return (
    <div className="hero bg-base-100 pt-10">
      <div className="hero-content text-center text-neutral">
        <div className="min-h-screen max-w-full">
          <h1 className="mb-4 text-5xl font-bold">401 - Unauthorized Access</h1>
          <p className="mb-8">Contact administrator for access permissions.</p>
          <Link
            href="/dashboard"
            className="btn bg-primary text-white hover:bg-primary-dark"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
