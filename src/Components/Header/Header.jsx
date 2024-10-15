import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return(
        <Link to={`/`} className="header-link">
            <div className="header-container">
                <header className="header">
                    <div className="header-text">
                        <h1 className="header__name">MANGIA</h1>
                        <h2 className="header__slogan">- Mangia, bevi, e sii felice!</h2>
                    </div>

                </header>
            </div>  
        </Link>
    );
};

export default Header;