import Auth from ".";
import AuthForm from "./AuthForm";

export default function SignUp() {
  return (
    <Auth
      formTitle="Create Your Account"
      subTitle="Sign up to start organizing your notes and boost your productivity."
    >
      <AuthForm mode="register" />
    </Auth>
  );
}