import '../App.css';
import { Link } from 'react-router-dom';

export default function LoginApp() {

  return (
    <>
      <Login />
    </>
  )
}

function Login() {
  return (
    <>
      <div className="login-container">
      <div className="login-card">
        <div className="logo">🖊️ <span>Notes</span></div>
        <h2>Welcome to Note</h2>
        <p className="subtitle">Please log in to continue</p>

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
      </div>
    </div>
    </>
  )
}