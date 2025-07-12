import Logo from "../../components/Logo";

export default function Auth({ children, formTitle, subTitle }){
    return(
        <>
            <div className="login-container">
                <div className="login-card">
                    <Logo />
                    {formTitle && <h2>{formTitle}</h2>}
                    {subTitle && <p className="subtitle">{subTitle}</p>}
                    {children}
                </div>
            </div>
        </>
    )
}