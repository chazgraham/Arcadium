import React, { useState } from "react";

function RockPaperScissors() {
    const [playerChoice, setPlayerChoice] = useState('')
    const [botChoice, setBotChoice] = useState('')
    console.log(playerChoice)
    console.log(botChoice)

    const choices = ['rock', 'paper', 'scissors']
    const botChoices = () => {
        const getRandomChoice = choices[Math.floor(Math.random()*choices.length)];
        setBotChoice(getRandomChoice)
    }

    return (
        <>
            <section>
                <div>
                    <img alt="player Choice" />
                    <button onClick={ () => {setPlayerChoice('rock'); botChoices()}}>Rock</button>
                    <button onClick={ ()=> {setPlayerChoice('paper'); botChoices()}}>Paper</button>
                    <button onClick={ ()=> {setPlayerChoice('scissors'); botChoices()}}>Scissors</button>
                </div>
            </section>
        </>
    )
}

export default RockPaperScissors;