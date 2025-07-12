import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

export default function SideBar(){
    return(
        <div className="sidebarWrapper">
            <div className="sidebar-top">
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <div className="sidebar">
                <div className="sideBarMenu">
                    <Link to="/home"><span className="icon-Home"></span><span>All Notes</span></Link>
                    <Link to="/archive"><span className="icon-Archive"></span><span>Archived Notes</span></Link>
                </div>
                <div className="tagWrapper">
                    <div className="title">Tags</div>
                    <div className="tagList">
                        <a href="#"><span className="icon-Tag"></span><span>Cooking</span></a>
                        <a href="#"><span className="icon-Tag"></span><span>Dev</span></a>
                        <a href="#"><span className="icon-Tag"></span><span>Fitness</span></a>
                        <a href="#"><span className="icon-Tag"></span><span>Health</span></a>
                        <a href="#"><span className="icon-Tag"></span><span>Personal</span></a>
                        <a href="#"><span className="icon-Tag"></span><span>React</span></a>
                        <a href="#"><span className="icon-Tag"></span><span>Recipes</span></a>
                        <a href="#"><span className="icon-Tag"></span><span>Shopping</span></a>
                        <a href="#"><span className="icon-Tag"></span><span>Travel</span></a>
                        <a href="#"><span className="icon-Tag"></span><span>TypeScript</span></a>
                    </div>
                </div>
            </div>

        </div>
    )
}