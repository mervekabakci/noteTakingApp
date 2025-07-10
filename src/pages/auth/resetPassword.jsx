
import { Link } from 'react-router-dom';

export default function ResetPasswordPageApp() {

  return (
    <>
      <ResetPassword />
    </>
  )
}

function ResetPassword() {
  return (
    <>
      <div className="login-container">
      <div className="login-card">
        <div className="logo">🖊️ <span>Notes</span></div>
        <h2>Reset Your Password</h2>
        <p className="subtitle">Choose a new password to secure your account.</p>

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
        

    
      </div>
    </div>
    </>
  )
}