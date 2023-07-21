import React from "react";
import { Link } from "react-router-dom";
import "./homePage.css";

function HomePage() {
    return (
        <>
            <section className="game_container">
                <h1 className="choose_game">
                    Choose Your Game!!!
                </h1>
                <div className="game_thumbnails">
                    <div className="thumdnail_card">
                        <Link to="/candySmasher">
                            <img className="img_thumbnail" src={require(`../../assets/images/gameThumbnails/candySmasher.png`)} alt="candySmasher"/>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage;