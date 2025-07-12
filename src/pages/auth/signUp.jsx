import Auth from "."
import Logo from "../../components/Logo"


export default function SignUp() {

  return (
      <>
      <Auth
        formTitle="Create Your Account"
        subTitle="Sign up to start organizing your notes and boost your productivity."
      >
        <form>
          <label>Email Address</label>
          <input type="email" placeholder="email@example.com" />

          <label className="password-label">
            Password
            
          </label>
          <input type="password" />

          <button type="submit" className="login-button">Sign up</button>
        </form>
        <hr />
        <div ><span className="subtitle">Or log in with:</span></div>
        <br />

        <button className="google-login">
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
          Google
        </button>
        <br />
        <hr />

        <p className="signup-text">Already have an account?<a href="/">Login</a></p>
      </Auth>
    </>
  )
}