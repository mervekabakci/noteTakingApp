import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import SideBar from "./shared/SideBar";
import Note from "./note/Note";

export default function Home(){
    return(
        <>
            <div className="main">
                <div className="container-xxl bg-white pe-0 d-flex h-100">
                    <SideBar />
                    <div className="pageContent">
                        <div className="pageHeader">
                            <div className="pageTitle">
                                <h1>All Notes</h1>
                            </div>
                            <div className="pageRightColumn">
                                <div className="searchWrapper">
                                    <span className="icon-Search"></span>
                                    <input type="text" placeholder="Search by title, content or tags..." />
                                </div>
                                <a href="#" className="settingsButton"><span className="icon-Setting"></span></a>
                            </div>
                        </div>
                        <div className="pageBody">
                            <Note />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}