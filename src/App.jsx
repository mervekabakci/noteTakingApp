import './App.css'
import LoginApp from './pages/auth/login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SignUpPageApp from './pages/auth/signUp';
import ForgetPasswordPageApp from './pages/auth/forgetPassword';
import ResetPasswordPageApp from './pages/auth/resetPassword';

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

