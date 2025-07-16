import Auth from ".";
import AuthForm from "./AuthForm";

export default function Login() {
  return (
    <Auth formTitle="Welcome to Note" subTitle="Please log in to continue">
      <AuthForm mode="login" />
    </Auth>
  );
}