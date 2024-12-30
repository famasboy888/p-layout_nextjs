import { checkAuthorizationProtectedRoute } from "~/utils/auth/checkAuthorization";

export default async function page() {
  //Route protection
  await checkAuthorizationProtectedRoute("client");

  return <div>Dashboard Client</div>;
}
