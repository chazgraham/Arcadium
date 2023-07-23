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
 
        if (yourMove === true) {
            e.target.style.color = 'blue'
            const spotBeingTaken =(e.target);
            const spotBeingTakenId = parseInt(spotBeingTaken.getAttribute("data-id"));
            currentPiece[spotBeingTakenId] = 'X';
            setCurrentPiece([...currentPiece]);
            takenSpot.push(spotBeingTakenId);
            setYourMove(false);
        }
        setTakenSpots(takenSpot);
    }

    const botMove = () => {
        if (takenSpots.length === 9) {
            console.log('game over');
        }

        if (yourMove !== true) {
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
        }
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