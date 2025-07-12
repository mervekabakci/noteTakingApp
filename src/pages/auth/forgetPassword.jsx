import Auth from './index.jsx';
import './resetPassword.jsx'
import { Link } from 'react-router-dom';

export default function ForgetPassword() {

  return (
    <>
      <Auth
        formTitle="Forgotten your password?"
        subTitle="Enter your email below, and we'll send you a link to reset it."
      >
        <form>
          <label>Email Address</label>
          <input type="email" placeholder="email@example.com" />
          <Link to="/reset"><button type="submit" className="login-button" >Send Reset Link</button></Link>
        </form>
      </Auth>
    </>
  )
}