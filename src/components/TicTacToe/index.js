import React, { useEffect, useState } from "react";
import "./ticTacToe.css";

function TicTacToe () {
    const [currentPiece, setCurrentPiece] = useState([]);
    const [yourMove, setYourMove] = useState(true);
    const [takenSpots, setTakenSpots] = useState([]);
    const [gameDirections, setGameDirections] = useState('Place first move to start')
    
    const width = 3;
    
    useEffect(() => {
        const createBoard = () => {
            const newBoard = [];
            for (var i = 0; i < width * width; i++) {
                newBoard.push('');
            }
            setCurrentPiece(newBoard);
        }
        createBoard();
    }, [])

    const selectSpot = (e) => {
        const takenSpot = [...takenSpots];
        const spotBeingTaken =(e.target);
        const spotBeingTakenId = parseInt(spotBeingTaken.getAttribute("data-id"));
 
        if (yourMove === true && !takenSpot.includes(spotBeingTakenId) && yourMove !== null) {
            e.target.style.color = 'blue'
            currentPiece[spotBeingTakenId] = 'X';
            takenSpot.push(spotBeingTakenId);

            setCurrentPiece([...currentPiece]);
            setYourMove(false);
            setGameDirections('Circles Move')
        }
        setTakenSpots(takenSpot);
        checkWinner()
    }

    const botMove = () => {
        if (takenSpots.length === 9 && yourMove !== null) {
            return setGameDirections('Draw Game');
        }

        if (yourMove !== true && yourMove !== null) {
            const takenSpot = [...takenSpots];
            const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            const avalibleSpot = nums.filter((i) => !takenSpot.includes(i));
            const getRandomPeice = avalibleSpot[Math.floor(Math.random()*avalibleSpot.length)];
            
            for (var i = 0; i < 1; i++) {
                currentPiece[getRandomPeice] = 'O';
                setCurrentPiece([...currentPiece]);
                takenSpot.push(getRandomPeice);
                setYourMove(true);
                setGameDirections('Crosses Move')
            }
            setTakenSpots(takenSpot);
            checkWinner()
        }
    }

    const checkWinner = () => {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], 
            [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] 
        ]

        winningCombos.forEach(array => {
            const xWins = array.every(move => currentPiece[move].includes('X'))
            const oWins = array.every(move => currentPiece[move].includes('O'))

            if (xWins) {
                setGameDirections('Cross wins')
                setYourMove(null)
            } else if (oWins) {
                setGameDirections('Circle wins')
                setYourMove(null)
            }
        });
    }

    useEffect(() => {
        const timer = setInterval(() => {
            botMove();
        }, 1000);
        return () => clearInterval(timer);
    })

    const reset = () => {
        window.location.reload(true)
    }

    return (
        <>
            <section className="tac_container">
                <div className="tac_gameBoard">
                    {currentPiece.map((move, index) => (
                        <p key={index} alt="moveSlot" data-id={index} onClick={selectSpot} style={{color: 'red'}}>
                            {move}
                        </p>
                    ))}
                </div>
            </section>
            <section className="tac_score_section">
               <p className="tac_score">{gameDirections}</p>
               <button className="tac_reset_btn" onClick={reset}>Reset</button>
            </section>
        </>
    )
}

export default TicTacToe;