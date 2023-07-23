import React, { useEffect, useState } from "react";
import "./ticTacToe.css";

function TicTacToe () {
    const [currentPiece, setCurrentPiece] = useState([]);
    const [yourMove, setYourMove] = useState(true);
    const [takenSpots, setTakenSpots] = useState([]);
    
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
        }
        setTakenSpots(takenSpot);
        checkWinner()
    }

    const botMove = () => {
        if (takenSpots.length === 9) {
            console.log('game over');
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
                console.log('x wins')
                setYourMove(null)
            } else if (oWins) {
                console.log('o wins')
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



    return (
        <>
            <section className="tac_container">
                <div className="tac_gameBoard">
                    {currentPiece.map((move, index, color) => (
                        <p key={index} alt="moveSlot" data-id={index} onClick={selectSpot} style={{color: 'red'}}>
                            {move}
                        </p>
                    ))}
                </div>
            </section>
        </>
    )
}

export default TicTacToe;