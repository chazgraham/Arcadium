import React, { useEffect, useState } from "react";
import "./ticTacToe.css";

function TicTacToe () {
    const [currentPiece, setCurrentPiece] = useState([]);
    const width = 3;
    
    
    useEffect(() => {
        const createBoard = () => {
            const newBoard = [];
            for (var i = 0; i < width * width; i++) {
                newBoard.push('white')
            }
            setCurrentPiece(newBoard)
        }
        createBoard()
    }, [])

    const takeSpot = (e) => {
        console.log(e.target);
    }

    return (
        <>
            <section className="tac_container">
                <div className="tac_gameBoard">
                    {currentPiece.map((move, index) => (
                        <img
                            key={index}
                            alt="moveSlot"
                            style={{backgroundColor: move}}
                            data-id={index}
                            onClick={takeSpot}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default TicTacToe;