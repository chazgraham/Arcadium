import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function HomePage() {
    return (
        <>
            <section className="game_container">
                <h1 className="choose_game">
                    Choose Your Game!!!
                </h1>
                <div>
                    <Link to="/candySmasher"><button>cnasy smasher button test</button></Link>
                </div>
            </section>
        </>
    )
}

export default HomePage;