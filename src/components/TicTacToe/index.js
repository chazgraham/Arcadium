import React, { useEffect, useState } from "react";
import "./ticTacToe.css";
import { parsePath } from "react-router-dom";
import userEvent from "@testing-library/user-event";

function TicTacToe () {
    const [currentPiece, setCurrentPiece] = useState([]);
    const [yourMove, setYourMove] = useState(true)
    
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

    const selectSpot = (e) => {
        if (yourMove === true) {
            const spotBeingTaken =(e.target);
            const spotBeingTakenId = parseInt(spotBeingTaken.getAttribute("data-id"))
            currentPiece[spotBeingTakenId] = 'black'
            setCurrentPiece([...currentPiece])
            setYourMove(false)
        } 
    }

    const botMove = () => {
        if (yourMove !== true) {
            console.log('bot move')
            setYourMove(true)
        }
    }
    
    useEffect(() => {
        const timer = setInterval(() => {
            botMove()
        }, 1000)
        return () => clearInterval(timer)
    })


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
                            onClick={selectSpot}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default TicTacToe;