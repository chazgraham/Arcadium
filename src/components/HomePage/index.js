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
                    <div className="thumdnail_card">
                        <Link to="/ticTacToe">
                            <img className="img_thumbnail" src={require(`../../assets/images/gameThumbnails/ticTacTumbnail.png`)} alt="ticTacToe"/>
                        </Link>
                    </div>
                    <div className="thumdnail_card">
                        <Link to="/rockPaperScissors">
                            <img className="img_thumbnail" src={require(`../../assets/images/gameThumbnails/rps_thumbnail.png`)} alt="rockPaperScissors"/>
                        </Link>
                    </div>
                    <div className="thumdnail_card">
                        <Link to="/mineSweeper">
                            <img className="img_thumbnail" src={require(`../../assets/images/gameThumbnails/comingSoon.png`)} alt="comming soon"/>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage;