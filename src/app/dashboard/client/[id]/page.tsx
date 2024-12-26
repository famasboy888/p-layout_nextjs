import { checkAuthorizationProtectedRoute } from "~/utils/checkAuthorization";

export default async function page() {
  //Route protection
  await checkAuthorizationProtectedRoute("client");

  return <div>Dashboard Client</div>;
}
