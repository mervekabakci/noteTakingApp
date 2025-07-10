import './App.css'
import LoginApp from './pages/auth/login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SignUpPageApp from './pages/auth/signUp';
import ForgetPasswordPageApp from './pages/auth/forgetPassword';
import ResetPasswordPageApp from './pages/auth/resetPassword';

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

  
      <DialogApp />

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

