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

    const checkForCollumOfThree = () => {
        // loops through each square until last collum of 3, which happens to end at index of 47
        for (let i = 0; i < 47 ; i++) {
            // i is the first candy in the collum, i + width is the candy right under it, and i + width is the candy under candy i + width
            const collumOfTree = [i, i + width, i + width * 2]
            // the color that all the candies should be in the collum of three
            const selectedColor = currentColorArr[i]
            
            //if all the candies are the same color as the selected color then they will be replaced with a empty string
            if ( collumOfTree.every(candy => currentColorArr[candy] === selectedColor)) {
                collumOfTree.forEach(candy => currentColorArr[candy] = '')
            }
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            checkForCollumOfThree()
            setCurrentColorArr([...currentColorArr])
        }, 100);
        return () => clearInterval(timer)
    })

    return (
        <>
            <section className="container">
                <div className="gameBoard">
                    {currentColorArr.map((candy, index) => (
                        <img key={index} style={{backgroundColor: candy}} alt={candy}/>
                    ))}
                </div>
            </section>
        </>
    )

}

export default CandySmasher;