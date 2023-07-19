import React from "react";

function CandySmasher() {
    const width = 8;
    const candyColor = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];

    const createBoard = () => {
        const randomColorArr = [];
        for (let i = 0; i < width * width; i++) {
            const randomColor = candyColor[Math.floor(Math.random() * candyColor.length)]
            randomColorArr.push(randomColor) 
        }
        console.log(randomColorArr)
    }
    console.log(createBoard())

    return (
        <>
        </>
    )

}

export default CandySmasher;