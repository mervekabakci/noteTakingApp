import logoLight from '../../public/images/statics/logo-light.svg';
import logoDark from '../../public/images/statics/logo-dark.svg';

export default function Logo({ theme="light"}){
    const logoSrc = theme === "light" ? logoDark : logoLight;
    return(
        <>
            <div className="logo"><img src={logoSrc} alt="" /></div>
        </>
    )
}