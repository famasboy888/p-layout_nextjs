import { checkAuthorizationProtectedRoute } from "~/utils/checkAuthorization";

export default async function page() {
  //Route protection
  await checkAuthorizationProtectedRoute("admin");

  return <div>Dashboard Admin</div>;
}
