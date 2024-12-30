import { checkAuthorizationProtectedRoute } from "~/utils/auth/checkAuthorization";
import CoordinatorDashboard from "./components/CoordinatorDashboard";

export default async function page() {
  await checkAuthorizationProtectedRoute("coordinator");

  return <CoordinatorDashboard />;
}
