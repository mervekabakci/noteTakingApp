import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import SideBar from "./shared/SideBar";

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
                            <div className="noteListWrapper">
                                <button className="button-primary">+ Create New Note</button>
                                <div className="noteList">
                                    <Link to="/note-id" className="noteItem">
                                        <div className="name">React Performance Optimization</div>
                                        <div className="tags">
                                            <span>Dev</span>
                                            <span>React</span>
                                        </div>
                                        <div className="date">29 Oct 2024</div>
                                    </Link>
                                    <Link to="/note-id" className="noteItem">
                                        <div className="name">Japan Travel Planning</div>
                                        <div className="tags">
                                            <span>Travel</span>
                                            <span>Personal</span>
                                        </div>
                                        <div className="date">28 Oct 2024</div>
                                    </Link>
                                    <Link to="/note-id" className="noteItem">
                                        <div className="name">Favorite Pasta Recipes</div>
                                        <div className="tags">
                                            <span>Cooking</span>
                                            <span>Recipes</span>
                                        </div>
                                        <div className="date">27 Oct 2024</div>
                                    </Link>
                                    <Link to="/note-id" className="noteItem">
                                        <div className="name">Weekly Workout Plan</div>
                                        <div className="tags">
                                            <span>Dev</span>
                                            <span>React</span>
                                        </div>
                                        <div className="date">25 Oct 2024</div>
                                    </Link>
                                    <Link to="/note-id" className="noteItem">
                                        <div className="name">Meal Prep Ideas</div>
                                        <div className="tags">
                                            <span>Cooking</span>
                                            <span>Health</span>
                                            <span>Recipes</span>
                                        </div>
                                        <div className="date">12 Oct 2024</div>
                                    </Link>
                                    <Link to="/note-id" className="noteItem">
                                        <div className="name">Reading List</div>
                                        <div className="tags">
                                            <span>Personal</span>
                                            <span>Dev</span>
                                        </div>
                                        <div className="date">05 Oct 2024</div>
                                    </Link>
                                    <Link to="/note-id" className="noteItem">
                                        <div className="name">Fitness Goals 2025</div>
                                        <div className="tags">
                                            <span>Fitness</span>
                                            <span>Health</span>
                                            <span>Personal</span>
                                        </div>
                                        <div className="date">22 Sep 2024</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="noteDetailsWrapper">
                                <div className="noteDetailsContent">
                                    <h2>React Performance Optimization</h2>
                                    <div className="info">
                                        <div className="item">
                                            <div className="title"><span className="icon-Tag"></span><span>Tags</span></div>
                                            <div className="tags">Dev, React</div>
                                        </div>
                                        <div className="item">
                                            <div className="title"><span className="icon-CircleClock"></span><span>Last edited</span></div>
                                            <div className="date">29 Oct 2024</div>
                                        </div>
                                    </div>
                                    <div className="paragraph">
                                        Key performance optimization techniques:
                                        <br />
                                        1. Code Splitting
                                        <ul>
                                            <li>Use React.lazy() for route-based splitting</li>
                                            <li>Implement dynamic imports for heavy components</li>
                                        </ul>
                                        2.	Memoization
                                        <ul>
                                            <li>useMemo for expensive calculations</li>
                                            <li>useCallback for function props</li>
                                            <li>React.memo for component optimization</li>
                                        </ul>
                                        3. Virtual List Implementation
                                        <ul>
                                            <li>Use react-window for long lists</li>
                                            <li>Implement infinite scrolling</li>
                                        </ul>

                                        TODO: Benchmark current application and identify bottlenecks
                                    </div>
                                </div>
                                <div className="noteRightColumn">
                                    <button className="fixBtn button-secondary-outline"><span className="icon-Archive"></span><span>Archive Note</span></button>
                                    <button className="fixBtn button-secondary-outline"><span className="icon-Delete"></span><span>Delete Note</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}