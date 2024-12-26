import { checkAuthorizationProtectedRoute } from "~/utils/checkAuthorization";

export default async function page() {
  //Route protection
  await checkAuthorizationProtectedRoute();

  return <div>Dashboard Client</div>;
}
