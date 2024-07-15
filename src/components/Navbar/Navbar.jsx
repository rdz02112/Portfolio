import React, { useState } from "react";
import { Link } from "react-scroll";
import './Navbar.css';
import MobileNav from "../MobileNav/MobileNav";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content">
                    <h1><a href="#portfolio">Portfolio</a> <span>: Mr Siraphat</span></h1>
                    <ul>
                        <li>
                            <Link className="menu-item" to="home" smooth={true} duration={500} offset={0}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="menu-item" to="skills" smooth={true} duration={500} offset={70}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link className="menu-item" to="work-experience" smooth={true} duration={500} offset={70}>
                                Work Experience
                            </Link>
                        </li>
                        <li>
                            <Link className="menu-item" to="contact-me" smooth={true} duration={500} offset={70}>
                                Contact Me
                            </Link>
                        </li>
                        {/* <button className="contact-btn" onClick={() => {}}>
                            Hire Me
                        </button> */}
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span className="material-icons-outlined" style={{ fontSize: "1.8rem" }}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
