
import { Link } from 'react-router-dom';
import Auth from '.';

export default function Login() {

  return (
    <>
      <Auth
        formTitle="Welcome to Note"
        subTitle="Please log in to continue"
      >
        <form>
          <label>Email Address</label>
          <input type="email" placeholder="email@example.com" />

          <label className="password-label">
            Password
            <Link to="/forgot" className='forgot'>Forgot</Link>
          </label>
          <input type="password"  />

          <button type="submit" className="login-button">Login</button>
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

        <p className="signup-text">No account yet? <Link to="/signup">Sign Up</Link></p>
      </Auth>
    </>
  )
}