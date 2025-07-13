import Auth from ".";
import AuthForm from "./AuthForm";

export default function ResetPassword() {
  return (
    <Auth
      formTitle="Reset Your Password"
      subTitle="Choose a new password to secure your account."
    >
      <AuthForm mode="reset" />
    </Auth>
  );
}