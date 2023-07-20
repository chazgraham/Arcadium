import React, { useState, useEffect } from "react";
import "./index.css"

function CandySmasher() {
    const [currentColorArr, setCurrentColorArr] = useState([]);

    const width = 8;
    
    useEffect(() => {
        const candyColorArr = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
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
            // i is the first candy in the collum, i + width is the candy right under it, and i + width * 2 is the candy under candy i + width
            const collumOfTree = [i, i + width, i + width * 2]
            // the color that all the candies should be in the collum of three
            const selectedColor = currentColorArr[i]
            
            //if all the candies are the same color as the selected color then they will be replaced with a empty string
            if ( collumOfTree.every(candy => currentColorArr[candy] === selectedColor)) {
                collumOfTree.forEach(candy => currentColorArr[candy] = '')
            }
        }
    }

    const checkForCollumOfFour = () => {
        // loops through each square until last collum of 4, which happens to end at index of 39
        for (let i = 0; i < 39 ; i++) {
            // i is the first candy in the collum, i + width is the candy right under it, and i + width * 2 is the candy under candy i + width, i + width * 3 is under i + width * 2 
            const collumOfFour = [i, i + width, i + width * 2, i + width * 3]
            const selectedColor = currentColorArr[i]
            
            if ( collumOfFour.every(candy => currentColorArr[candy] === selectedColor)) {
                collumOfFour.forEach(candy => currentColorArr[candy] = '')
            }
        }
    }

    const checkForRowOfTree = () => {
        for (let i = 0; i < 64 ; i++) {
            const rowOfThree = [i, i + 1, i + 2]
            const selectedColor = currentColorArr[i]
            const notValid =  [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]

            if (notValid.includes(i)) continue
            
            if ( rowOfThree.every(candy => currentColorArr[candy] === selectedColor)) {
                rowOfThree.forEach(candy => currentColorArr[candy] = '')
            }
        }
    }

    const checkForRowOfFour = () => {
        for (let i = 0; i < 64 ; i++) {
            const rowOfFour = [i, i + 1, i + 2, i + 3]
            const selectedColor = currentColorArr[i]
            const notValid =  [5, 6, 7, 13,14, 15, 21,22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64]

            if (notValid.includes(i)) continue
            
            if ( rowOfFour.every(candy => currentColorArr[candy] === selectedColor)) {
                rowOfFour.forEach(candy => currentColorArr[candy] = '')
            }
        }
    }

    const shiftCandiesDown = () => {
        for (var i = 0; i < 64; i++) {
            // if the space below the candy is an empty string then swap the two vaules
            if (currentColorArr[i + width] === '') {
                currentColorArr[i + width] = currentColorArr[i]
                currentColorArr[i] = ''
            }
        }
    }
    
    useEffect(() => {
        const timer = setInterval(() => {
            checkForCollumOfFour()
            checkForCollumOfThree()
            checkForRowOfFour()
            checkForRowOfTree()
            shiftCandiesDown()
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