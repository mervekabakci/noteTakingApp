import Auth from ".";
import AuthForm from "./AuthForm";

export default function Login() {
  return (
    <Auth formTitle="Welcome to Note" subTitle="Please log in to continue">
      <AuthForm mode="login" />
    </Auth>
  );
}


// import { Link } from 'react-router-dom';
// import Auth from '.';

// export default function Login() {
//   return (
//     <>
//       <Auth
//         formTitle="Welcome to Note"
//         subTitle="Please log in to continue"
//       >
//         <form 
//           autoComplete='false'>
//           <label>Email Address</label>
//           <input type="email" name='email' placeholder="email@example.com" />

//           <div className="password-label">
//             <label>Password</label>
//             <Link to="/forgot" className='forgot'>Forgot</Link>
//           </div>
//           <input type="password" name='password' />

//           <button className="login-button">
//             Login
//           </button>
//         </form>
//         <hr />
//         <div><span className="subtitle">Or log in with:</span></div>
//         <br />

//         <button className="google-login">
//           <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
//           Google
//         </button>
//         <br />
//         <hr />

//         <p className="signup-text">No account yet? <Link to="/signup">Sign Up</Link></p>
//       </Auth>
//     </>
//   )
// }