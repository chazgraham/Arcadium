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
    const [playerScore, setPlayerScore] = useState(0)
    const [botScore, setBotScore] = useState(0)

    const choices = [rock, paper, botScissors]
    const botChoices = () => {
        const getRandomChoice = choices[Math.floor(Math.random() * choices.length)];
        setBotChoice(getRandomChoice)
    }

    const checkWinner = () => {
        if (playerChoice === rock && botChoice === paper) {
            setBotScore((score) => score + 1)
        } else if (playerChoice === paper && botChoice === botScissors) {
            setBotScore((score) => score + 1)
        } else if (playerChoice === playerScissors && botChoice === rock) {
            setBotScore((score) => score + 1)
        } else if (botChoice === rock && playerChoice === paper) {
            setPlayerScore((score) => score + 1)
        } else if (botChoice === paper && playerChoice === playerScissors) {
            setPlayerScore((score) => score + 1)
        } else if (botChoice === botScissors && playerChoice === rock) {
            setPlayerScore((score) => score + 1)
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            checkWinner()
            setPlayerChoice(playerModal)
            setBotChoice(robotModal)
        }, 900)
        return () => clearInterval(timer)
    })

    return (
        <>
            <section className="rps_container">
                <div className="contestant_container">
                    <p className="rps_score">Score: {playerScore}</p>
                        <img className="rps_img" alt="player Choice" src={playerChoice} />
                </div>
                <div className="contestant_container">
                    <p className="rps_score">Score: {botScore}</p>
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