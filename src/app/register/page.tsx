import { checkAuthorizationLoginRegisterRoute } from "~/utils/auth/checkAuthorization";
import RegisterForm from "./components/RegisterForm";

export default async function RegisterPage() {
  //Route protection
  await checkAuthorizationLoginRegisterRoute();

  return <RegisterForm />;
}
