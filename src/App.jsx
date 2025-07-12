import './App.css'
import { useRef, useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import LoginApp from './pages/auth/login'
import SignUpPageApp from './pages/auth/signUp';
import ForgetPasswordPageApp from './pages/auth/forgetPassword';
import ResetPasswordPageApp from './pages/auth/resetPassword';
import DialogApp from './DialogApp';
import Home from './pages/home';

export default function App() {
  const [count, setCount] = useState(0);
  const otherCount = useRef(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleOtherClick() {
    if (otherCount.current >= 10) {
      alert('Çok tıkladın yeter');
      return;
    }
  

    otherCount.current++;
    console.log(otherCount.current);
  
  }
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginApp />} />
        <Route path="/signup" element={<SignUpPageApp />} />
        <Route path="/forgot" element={<ForgetPasswordPageApp />} />
        <Route path="/reset" element={<ResetPasswordPageApp />} />
        <Route index element={<Home />} />
      </Routes>
    </Router>

    </>
  )
}

