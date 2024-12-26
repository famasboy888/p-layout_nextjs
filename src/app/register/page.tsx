import { checkAuthorizationLoginRegisterRoute } from "~/utils/checkAuthorization";
import RegisterForm from "./components/RegisterForm";

export default async function RegisterPage() {
  //Route protection
  await checkAuthorizationLoginRegisterRoute();

  return <RegisterForm />;
}
