import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <Link to="/arcadium"><h1>Arcadium</h1></Link>
            </header>
        </>
    )
}

export default Header