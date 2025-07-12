import { Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function Home(){
    return(
        <>
            <div className="main">
                <div className="container-xxl">
                    <div className="sidebar">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}