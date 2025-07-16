import './App.css'
import { useRef, useState } from 'react';
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';

import LoginApp from './pages/auth/login'
import SignUpPageApp from './pages/auth/signUp';
import ForgetPasswordPageApp from './pages/auth/forgetPassword';
import ResetPasswordPageApp from './pages/auth/resetPassword';
import DialogApp from './DialogApp';
import Home from './pages/home';
import { AuthContext } from './pages/auth/AuthContext';

const stored = JSON.parse(localStorage.user || '{}');

export default function App() {
  const [user, setUser] = useState(stored.user || null);

  const updateUSer = (userData) => {
    const updated = { user:userData};
    setUser(userData);
    localStorage.user = JSON.stringify(updated);
  }
  return(
    <>
      <AuthContext.Provider value={{ user, setUser:updateUSer }}>
        <Router>
          <Routes>
            <Route path="/login" element={!user ? <LoginApp /> : <Navigate to="/" />} />
            <Route path="/signup" element={<SignUpPageApp />} />
            <Route path="/forgot" element={<ForgetPasswordPageApp />} />
            <Route path="/reset" element={<ResetPasswordPageApp />} />
            <Route index element={user ? <Home /> : <Navigate to="/login" />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </>
  )
}

