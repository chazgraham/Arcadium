import React, { useState } from "react";

function RockPaperScissors() {
    const [playerChoice, setPlayerChoice] = useState('')
    console.log(playerChoice)

    return (
        <>
            <section>
                <div>
                    <img alt="player Choice" />
                    <button onClick={ () => setPlayerChoice('rock')}>Rock</button>
                    <button onClick={ ()=> setPlayerChoice('paper')}>Paper</button>
                    <button onClick={ ()=> setPlayerChoice('scissors')}>Scissors</button>
                </div>
            </section>
        </>
    )
}

export default RockPaperScissors;