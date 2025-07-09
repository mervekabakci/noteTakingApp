import './App.css'
import LoginApp from './login_pages/login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SignUpPageApp from './login_pages/signUp';
import ForgetPasswordPageApp from './login_pages/forgetPassword';
import ResetPasswordPageApp from './login_pages/resetPassword';

export default function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<LoginApp />} />
        <Route path="/signup" element={<SignUpPageApp />} />
        <Route path="/forgot" element={<ForgetPasswordPageApp />} />
        <Route path="/reset" element={<ResetPasswordPageApp />} />
      </Routes>
    </Router>
    </>
  )
}

