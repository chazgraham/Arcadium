import React, { useState, useEffect } from "react";

function CandySmasher() {
    const [currentColorArr, setCurrentColorArr] = useState([]);

    const width = 8;
    const candyColor = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    
    useEffect(() => {
        const createBoard = () => {
            const randomColorArr = [];
            for (let i = 0; i < width * width; i++) {
                const randomColor = candyColor[Math.floor(Math.random() * candyColor.length)]
                randomColorArr.push(randomColor) 
            }
            setCurrentColorArr(randomColorArr)
            console.log(randomColorArr)
        }
        createBoard();
    }, [])

    return (
        <>
        </>
    )

}

export default CandySmasher;