import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "./PasswordInput";

export default function AuthForm({ mode }) {
  const navigate = useNavigate();
  const successDialogRef = useRef(null);

  const [isDialogSuccess, setDialogSuccess] = useState(true);
  const [dialogMessage, setDialogMessage] = useState('Kayıt Başarılı');
  const [dialogMessageText, setDialogMessageText] = useState('Kaydınız başarıyla alındı. Giriş yapabilirsiniz.');

  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(null);

  const isLoginService = mode === "login";
  const isRegisterService = mode === "register";
  const isForgotService = mode === "forgot";
  const isResetService = mode === "reset";

  const baseUrl = "https://notes.muratakdemir.tr/Auth";
  const fetchUrl = `${baseUrl}/${mode}`;
  if(isRegisterService){
      console.log("isRegisterService");
      console.log(fetchUrl)
  }
  if(isLoginService){
      console.log("isLoginService");
  }
  if(isForgotService){
      console.log("isForgotService");
  }
  if(isResetService){
      console.log("isResetService");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData);
    console.log(formObj)
    const req = await fetch(fetchUrl,
    {
      method:'POST',
      headers:{
        'Content-Type': 'Application/json'
      },
      body:JSON.stringify(formObj)
    });

    if(isRegisterService){
      if(!req.ok){
        const errorData = await req.json();
        console.log("Error response:", errorData.message);
        const duplicateError = errorData?.errors?.DuplicateUserName?.[0];

        setDialogSuccess(false);

        if(duplicateError){
          setDialogSuccess(true);
          setDialogMessage('Kayıt Yapılamadı!')
          setDialogMessageText('Bu kullanıcı daha önce kayıt oldu. Giriş yapmak için Login butonuna tıklayınız.')
        }else{
          setDialogSuccess(false);
          setDialogMessage('Kayıt Yapılamadı!')
          setDialogMessageText("Bir hata oluştu. Lütfen tekrar deneyiniz.")
        }

        successDialogRef.current.showModal();
        return;
      }

      setDialogMessage("Kayıt Başarılı!");
      setDialogMessageText("Kaydınız başarıyla alındı. Giriş yapabilirsiniz.");
      setDialogSuccess(true);
      successDialogRef.current.showModal();
    }
    if(isLoginService){
      setUserToken(await req.json());
      localStorage.userToken = JSON.stringify(userToken);
      navigate("/");
    }
  };
  function goToLogin() {
    successDialogRef.current.close();
    if (isDialogSuccess) {
      navigate("/login");
    }
  }
  return (
    <>
        <form onSubmit={handleSubmit}>
          {(isLoginService || isRegisterService || isForgotService) && (
              <>
                <div className="inputColumn">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="email@example.com" required/>
                </div>
              </>
          )}

          {(isLoginService || isRegisterService || isResetService) && (
              <>
                <div className="inputColumn">
                  <div className="password-label">
                      <label>Password</label>
                      {isLoginService && 
                          <Link to="/forgot" className='forgot'>Forgot</Link>
                      }
                  </div>
                  <PasswordInput name="password" />
                  {(isResetService || isRegisterService) &&  <div className="valid-message"><span className="icon-info"></span><span>At least 8 characters</span></div>}
                </div>
              </>
          )}

          {isResetService && (
              <>
              <div className="inputColumn">
                <label>Confirm New Password</label>
                <PasswordInput name="confirmPassword" />
              </div>
              </>
          )}

          <button className="login-button" type="submit">
              {isLoginService && "Login"}
              {isRegisterService && "Sign Up"}
              {isForgotService && "Send Reset Link"}
              {isResetService && "Reset Password"}
          </button>
        </form>
        {(isLoginService || isRegisterService) && (
            <>
                <hr />
                <div><span className="subtitle">Or log in with:</span></div>
                <button className="google-login">
                  <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
                  <span>Google</span>
                </button>
                <hr />
            </>
        )}
        {isLoginService && <p className="signup-text">No account yet? <Link to="/signup" >Sign Up</Link></p>}
        {isRegisterService && <p className="signup-text">Already have an account? <Link to="/login" >Login</Link></p>}

        <dialog ref={successDialogRef}>
          <div className="dialogHead">
            {dialogMessage}
            <button className="closeBtn" onClick={() => successDialogRef.current.close()}>×</button>
          </div>
          <div className="dialogBody">
            <p className="succesText">{dialogMessageText}</p>
            <div className="dialogActions">
              <button className={`${isDialogSuccess ? "confirmBtn button-primary"  : "cancelBtn"}`} onClick={goToLogin}>{isDialogSuccess ? "Login" : "Close"}</button>
            </div>
          </div>
        </dialog>
    </>
  );
}