

export default function SignUpPageApp() {

  return (
    <>
      <SignUp />
    </>
  )
}

function SignUp() {
  return (
    <>
      <div className="login-container">
      <div className="login-card">
        <div className="logo">🖊️ <span>Notes</span></div>
        <h2>Create Your Account</h2>
        <p className="subtitle">Sign up to start organizing your notes and boost your productivity.</p>

        <form>
          <label>Email Address</label>
          <input type="email" placeholder="email@example.com" />

          <label className="password-label">
            Password
            
          </label>
          <input type="password" />

          <button type="submit" className="login-button">Sign up</button>
        </form>
        <hr />
        <div ><span className="subtitle">Or log in with:</span></div>
        <br />

        <button className="google-login">
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
          Google
        </button>
        <br />
        <hr />

        <p className="signup-text">Already have an account?<a href="/">Login</a></p>

    
      </div>
    </div>
    </>
  )
}