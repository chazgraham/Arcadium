import React, { useState, useEffect } from "react";
import "./index.css"

function CandySmasher() {
    const [currentColorArr, setCurrentColorArr] = useState([]);

    const width = 8;
    const candyColorArr = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    
    useEffect(() => {
        const createBoard = () => {
            const randomColorArr = [];
            for (let i = 0; i < width * width; i++) {
                const randomColor = candyColorArr[Math.floor(Math.random() * candyColorArr.length)]
                randomColorArr.push(randomColor) 
            }
            setCurrentColorArr(randomColorArr)
        }
        createBoard();
    }, [])

    return (
        <>
            <section className="container">
                <div className="gameBoard">
                    {currentColorArr.map((candy, index) => (
                        <img key={index} style={{backgroundColor: candy}} alt=""/>
                    ))}
                </div>
            </section>
        </>
    )

}

export default CandySmasher;