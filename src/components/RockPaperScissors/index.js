import React, { useState } from "react";
import './rockPaperScissors.css';

function RockPaperScissors() {
    const [playerChoice, setPlayerChoice] = useState('')
    const [botChoice, setBotChoice] = useState('')
    console.log(playerChoice)
    console.log(botChoice)

    const choices = ['rock', 'paper', 'scissors']
    const botChoices = () => {
        const getRandomChoice = choices[Math.floor(Math.random() * choices.length)];
        setBotChoice(getRandomChoice)
    }

    return (
        <>
            <section className="rps_container">
                <div className="player_container">
                    <div>
                        <img className="rps_img" alt="player Choice" />
                    </div>
                    <div>
                        <button onClick={() => { setPlayerChoice('rock'); botChoices() }}>Rock</button>
                        <button onClick={() => { setPlayerChoice('paper'); botChoices() }}>Paper</button>
                        <button onClick={() => { setPlayerChoice('scissors'); botChoices() }}>Scissors</button>
                    </div>
                </div>
                <div>
                    <img className="rps_img" alt="bot choice" />
                </div>
            </section>
        </>
    )
}

export default RockPaperScissors;