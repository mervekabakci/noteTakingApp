
import { Link } from 'react-router-dom';
import Auth from '.';

export default function ResetPassword() {

  return (
    <>
      <Auth
        formTitle="Reset Your Password"
        subTitle="Choose a new password to secure your account."
      >
        <form>
          <label className="password-label">
            New Password
            
          </label>
          <input type="password" />

          <label className="password-label">
          Confirm New Password
            
          </label>
          <input type="password" />

          <Link to="/"><button type="submit" className="login-button" >Reset Password</button></Link>
        </form>
      </Auth>
    </>
  )
}