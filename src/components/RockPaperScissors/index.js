import React, { useEffect, useState } from "react";
import './rockPaperScissors.css';

import rock from '../../assets/images/rpsImgs/rock.png';
import paper from '../../assets/images/rpsImgs/paper.png';
import playerScissors from '../../assets/images/rpsImgs/playerScissors.png';
import botScissors from '../../assets/images/rpsImgs/botScissors.png';
import robotModal from '../../assets/images/rpsImgs/robotModal.png';
import playerModal from '../../assets/images/rpsImgs/humanModal.png';

function RockPaperScissors() {
    const [playerChoice, setPlayerChoice] = useState(playerModal)
    const [botChoice, setBotChoice] = useState(robotModal)

    const choices = [rock, paper, botScissors]
    const botChoices = () => {
        const getRandomChoice = choices[Math.floor(Math.random() * choices.length)];
        setBotChoice(getRandomChoice)
    }

    const checkWinner = () => {
        if (playerChoice === rock && botChoice === paper) {
            console.log('bot wins')
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            checkWinner()
            setPlayerChoice(playerModal)
            setBotChoice(robotModal)
        }, 1000)
        return () => clearInterval(timer)
    })

    return (
        <>
            <section className="rps_container">
                <div className="player_container">
                    <div>
                        <img className="rps_img" alt="player Choice" src={playerChoice} />
                    </div>
                </div>
                <div>
                    <img className="rps_img" alt="bot choice" src={botChoice} />
                </div>
            </section>
            <section className="player_btns">
                <div>
                    <button className="player_btn" onClick={() => { setPlayerChoice(rock); botChoices() }}>Rock</button>
                    <button className="player_btn" onClick={() => { setPlayerChoice(paper); botChoices() }}>Paper</button>
                    <button className="player_btn" onClick={() => { setPlayerChoice(playerScissors); botChoices() }}>Scissors</button>
                </div>
            </section>
        </>
    )
}

export default RockPaperScissors;