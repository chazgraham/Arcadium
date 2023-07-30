import React, { useState } from "react";
import './rockPaperScissors.css';

import rock from '../../assets/images/rpsImgs/rock.png';
import paper from '../../assets/images/rpsImgs/paper.png';
import playerScissors from '../../assets/images/rpsImgs/playerScissors.png';
import botScissors from '../../assets/images/rpsImgs/botScissors.png';

function RockPaperScissors() {
    const [playerChoice, setPlayerChoice] = useState('')
    const [botChoice, setBotChoice] = useState('')
    console.log(playerChoice)
    console.log(botChoice)

    const choices = [rock, paper, botScissors]
    const botChoices = () => {
        const getRandomChoice = choices[Math.floor(Math.random() * choices.length)];
        setBotChoice(getRandomChoice)
    }

    return (
        <>
            <section className="rps_container">
                <div className="player_container">
                    <div>
                        <img className="rps_img" alt="player Choice" src={playerChoice} />
                    </div>
                    <div>
                        <button onClick={() => { setPlayerChoice(rock); botChoices() }}>Rock</button>
                        <button onClick={() => { setPlayerChoice(paper); botChoices() }}>Paper</button>
                        <button onClick={() => { setPlayerChoice(playerScissors); botChoices() }}>Scissors</button>
                    </div>
                </div>
                <div>
                    <img className="rps_img" alt="bot choice" src={botChoice} />
                </div>
            </section>
        </>
    )
}

export default RockPaperScissors;