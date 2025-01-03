import { checkAuthorizationProtectedRoute } from "~/lib/auth/checkAuthorization";

export default async function page() {
  //Route protection
  await checkAuthorizationProtectedRoute("admin");

  return <div>Dashboard Admin</div>;
}
