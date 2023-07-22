import React, { useEffect, useState } from "react";

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

    return (
        <>
            <section className="tac_container">
                <div className="tac_gameBoard">
                    {currentPiece.map((move, index) => (
                        <img
                            alt="moveSlot"
                            style={{backgroundColor: move}}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default TicTacToe;