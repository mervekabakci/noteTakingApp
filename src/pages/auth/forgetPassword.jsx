
import './resetPassword.jsx'
import { Link } from 'react-router-dom';

export default function ForgetPasswordPageApp() {

  return (
    <>
      <ForgetPassword />
    </>
  )
}

function ForgetPassword() {
  return (
    <>
      <div className="login-container">
      <div className="login-card">
        <div className="logo">🖊️ <span>Notes</span></div>
        <h2>Forgotten your password?</h2>
        <p className="subtitle">Enter your email below, and we'll send you a link to reset it.</p>

        <form>
          <label>Email Address</label>
          <input type="email" placeholder="email@example.com" />


          
          <Link to="/reset"><button type="submit" className="login-button" >Send Reset Link</button></Link>
        </form>
        

        

    
      </div>
    </div>
    </>
  )
}