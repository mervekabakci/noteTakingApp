import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "./PasswordInput";

export default function AuthForm({ mode }) {
  const [userToken, setUserToken] = useState(null);
  const navigate = useNavigate();

  const isLogin = mode === "login";
  const isRegister = mode === "register";
  const isForgot = mode === "forgot";
  const isReset = mode === "reset";

  const baseUrl = "https://notes.muratakdemir.tr/Auth";
  const fetchUrl = `${baseUrl}/${mode}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData);

    try {
      const response = await fetch(fetchUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObj),
      });

      const data = await response.json();
      console.log("Login yanıtı:", data);

      if (!response.ok) {
          if (response.status === 401) {
            if (data.title === "Unauthorized" && data.detail === "Failed") {
              alert("Bu e-posta adresi kayıtlı değil veya şifre yanlış.");
              return;
            }
          }

        if (data.title?.includes("DuplicateUserName")) {
          alert("Bu e-posta zaten kayıtlı. Lütfen giriş yapın.");
          navigate("/login");
          return;
        }

        if (data.errors) {
          const errorMessages = Object.entries(data.errors)
            .map(([key, val]) => `${key}: ${val.join(", ")}`)
            .join("\n");
          alert("Validasyon Hataları:\n" + errorMessages);
        } else {
          alert("Hata: " + (data.title || response.status));
        }
        return;
      }

      if (isLogin || isRegister) {
        localStorage.setItem("userToken", userToken);
        setUserToken(data);

        const reqHeaders = {
            Authorization: `Bearer ${userToken.accessToken}`,
        }
        
        const reqDetails = {
          method: "GET",
          headers:reqHeaders
        }
        const infoResponse = await fetch(`${baseUrl}/manage/info`, reqDetails).then(res => res.json());
        console.log(infoResponse)

        if (!infoResponse.ok) {
          const infoError = await infoResponse.json();
          localStorage.removeItem("userToken");

          if (infoError.title?.includes("Unauthorized")) {
            alert("Kullanıcı bulunamadı. Lütfen kayıt olun.");
            navigate("/signup");
          } else {
            alert("Giriş doğrulaması başarısız.");
          }
          return;
        }

        const userInfo = await infoResponse.json();
        console.log("Kullanıcı bilgisi:", userInfo);
        alert("Başarılı giriş / kayıt!");
        navigate("/");
        return;
      }

      if (isForgot) alert("Şifre yenileme bağlantısı gönderildi.");
      if (isReset) alert("Şifre başarıyla yenilendi.");
      
    } catch (err) {
      alert("Bir hata oluştu: " + err.message);
    }
  };
  return (
    <>
        <form onSubmit={handleSubmit}>
        {(isLogin || isRegister || isForgot) && (
            <>
              <div className="inputColumn">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="email@example.com" required/>
              </div>
            </>
        )}

        {(isLogin || isRegister || isReset) && (
            <>
              <div className="inputColumn">
                <div className="password-label">
                    <label>Password</label>
                    {isLogin && 
                        <Link to="/forgot" className='forgot'>Forgot</Link>
                    }
                </div>
                <PasswordInput name="password" />
                {(isReset || isRegister) &&  <div className="valid-message"><span className="icon-info"></span><span>At least 8 characters</span></div>}
              </div>
            </>
        )}

        {isReset && (
            <>
            <div className="inputColumn">
              <label>Confirm New Password</label>
              <PasswordInput name="confirmPassword" />
            </div>
            </>
        )}

        <button className="login-button" type="submit">
            {isLogin && "Login"}
            {isRegister && "Sign Up"}
            {isForgot && "Send Reset Link"}
            {isReset && "Reset Password"}
        </button>
        </form>
        {(isLogin || isRegister) && (
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
        {isLogin && <p className="signup-text">No account yet? <Link to="/signup" >Sign Up</Link></p>}
        {isRegister && <p className="signup-text">Already have an account? <Link to="/login" >Login</Link></p>}

    </>
  );
}