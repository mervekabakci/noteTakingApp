import Auth from ".";
import AuthForm from "./AuthForm";

export default function ForgetPassword() {
  return (
    <Auth
      formTitle="Forgotten your password?"
      subTitle="Enter your email below, and we’ll send you a link to reset it."
    >
      <AuthForm mode="forgot" />
    </Auth>
  );
}