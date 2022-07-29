import React from "react";
import Logo from "../assets/img/logo.svg";
function Navbar() {

    const [navbarStatus, setNavbarStatus] = React.useState({ isSubMenuVisible: true, isHiddenMenuVisible: true })

    function toggleHiddenBar() {
        setNavbarStatus((oldStatus) => ({ isSubMenuVisible: oldStatus.isSubMenuVisible, isHiddenMenuVisible: !oldStatus.isHiddenMenuVisible }));
    }

    return (

        <header>
            <nav>
                <div className="collapsed-menu">
                    <Logo className="navbar-logo-collapsed" />
                    <span className="collapsed-menu-toggle">Menu</span></div>
                <div className="main-bar">
                    <div className="left-group">
                        <Logo className="navbar-logo-expanded" />
                        <ul className="main-bar-menu">
                            <li className="main-bar-item"><a href="" className="menu-category">Live</a></li>
                            <li className="main-bar-item"><a href="" className="menu-category">Push</a></li>
                            <li className="main-bar-item"><a href="" className="menu-category">Link</a></li>
                            <li className="main-bar-item"><a href="" className="menu-category">Shop</a></li>
                            <li className="main-bar-item"><a href="" className="menu-category">Packs</a></li>
                            <li className="main-bar-item"><a href="" className="menu-category">Help</a></li>
                            <li className="main-bar-item"><div className="hidden-menu-toggle active-link" onClick={toggleHiddenBar}>More {navbarStatus.isHiddenMenuVisible ? "-" : "+"}</div></li>
                        </ul>
                    </div>

                    <ul className="main-bar-sidemenu">
                        <li className="main-bar-side-menu-item"><a href="" className="menu-category highlight-link">Try Live for free</a></li>
                        <li className="main-bar-side-menu-item"><a href="" className="menu-category"><span className="login-menu-text">Log in or register</span></a></li>
                    </ul>
                </div>
                {navbarStatus.isHiddenMenuVisible && <div className="hidden-bar">
                    <div className="upper-hidden-bar">
                        <div className="hidden-bar-title">
                            More on our site:
                        </div>
                        <ul className="hidden-bar-top-menu">
                            <li className="hidden-bar-top-menu-item"><a href="" className="menu-category">Blog</a></li>
                            <li className="hidden-bar-top-menu-item"><a href="" className="menu-category">Ableton for the Classroom</a></li>
                            <li className="hidden-bar-top-menu-item"><a href="" className="menu-category">Ableton for Colleges and Universities</a></li>
                            <li className="hidden-bar-top-menu-item"><a href="" className="menu-category">Certified Training</a></li>
                            <li className="hidden-bar-top-menu-item"><a href="" className="menu-category active-link">About Ableton</a></li>
                            <li className="hidden-bar-top-menu-item"><a href="" className="menu-category">Jobs</a></li>
                            <li className="hidden-bar-top-menu-item"><a href="" className="menu-category">Apprenticeships</a></li>
                        </ul>
                    </div>
                    <div className="lower-hidden-bar">
                        <div className="hidden-bar-title">
                            More of our products:
                        </div>
                        <ul className="hidden-bar-bottom-menu">
                            <li className="hidden-bar-bottom-menu-item"><a href="" className="menu-category"><div className="hidden-bar-subtitle">Loop</div>Watch Talks, Performances and Features from Ableton's Summit for Music Makers</a></li>
                            <li className="hidden-bar-bottom-menu-item"><a href="" className="menu-category"><div className="hidden-bar-subtitle">Learning Music</div>Learn the fundamentals of music making right in your browser.</a></li>
                            <li className="hidden-bar-bottom-menu-item"><a href="" className="menu-category"><div className="hidden-bar-subtitle">Learning Synths</div>Get started with synthesis using a web-based synth and accompanying lessons.</a></li>
                            <li className="hidden-bar-bottom-menu-item"><a href="" className="menu-category"><div className="hidden-bar-subtitle">Making Music</div>Some tips from 74 Creative Strategies for Electronic Producers.</a></li>
                        </ul>
                    </div>
                </div>}

                {navbarStatus.isSubMenuVisible && <div className="sub-bar">
                    <ul className="sub-bar-menu">
                        <li className="sub-bar-item"><a href="" className="menu-category active-link">About</a></li>
                        <li className="sub-bar-item"><a href="" className="menu-category">Jobs</a></li>
                        <li className="sub-bar-item"><a href="" className="menu-category">Apprenticeships</a></li>
                    </ul>
                </div>}
            </nav>
        </header>

    );
}

export default Navbar;