import { checkAuthorizationProtectedRoute } from "~/utils/auth/checkAuthorization";

export default async function page() {
  //Route protection
  await checkAuthorizationProtectedRoute("coordinator");

  return <div>Dashboard Coordinator</div>;
}
