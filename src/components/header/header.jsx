import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <h1>Collosal.</h1>
                    <nav className="header-navbar">
                        <Link to={"/"}> <a>Services</a> </Link>
                        <Link to={"How We Work"}> <a>How We Work</a> </Link>
                        <Link to={"Projects"}> <a>Projects</a> </Link>
                        <Link to={"About"}> <a>About</a> </Link>
                    </nav>
                    <button>Contact</button>
                </div>
            </div>
        </header>
    );
};

export default Header;