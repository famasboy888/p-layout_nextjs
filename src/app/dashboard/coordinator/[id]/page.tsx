import { checkAuthorizationProtectedRoute } from "~/utils/auth/checkAuthorization";
import CoordinatorDashboard from "./components/CoordinatorDashboard";

export default async function page() {
  //Route protection
  await checkAuthorizationProtectedRoute("coordinator");

  return <CoordinatorDashboard />;
}
