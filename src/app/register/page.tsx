import { checkAuthorizationLoginRegisterRoute } from "~/lib/auth/checkAuthorization";
import RegisterForm from "~/features/register/components/RegisterForm";

export default async function RegisterPage() {
  //Route protection
  await checkAuthorizationLoginRegisterRoute();

  return <RegisterForm />;
}
