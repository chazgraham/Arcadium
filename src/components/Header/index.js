import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <>
            <header>
                <Link to="/"><h1 className="title">Arcadium</h1></Link>
            </header>
        </>
    )
}

export default Header