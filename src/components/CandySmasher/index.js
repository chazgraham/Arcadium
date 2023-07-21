import React, { useState, useEffect } from "react";
import "./candySmasher.css";
import red from "../../assets/images/candyImages/red.png";
import blue from "../../assets/images/candyImages/blue.png";
import green from "../../assets/images/candyImages/green.png";
import yellow from "../../assets/images/candyImages/yellow.png";
import orange from "../../assets/images/candyImages/orange.png";
import purple from "../../assets/images/candyImages/purple.png";
import blank from "../../assets/images/candyImages/blank.png";

function CandySmasher() {
    const [currentColorArr, setCurrentColorArr] = useState([]);
    const [candyBeingDragged, setCandybeingDragged] = useState(null);
    const [candyBeingReplaced, setCandybeingReplaced] = useState(null);

    const width = 8;
    const candyColorArr = [red, blue, green, yellow, orange, purple];
    
    useEffect(() => {
        const createBoard = () => {
            const randomColorArr = [];
            for (let i = 0; i < width * width; i++) {
                const randomColor = candyColorArr[Math.floor(Math.random() * candyColorArr.length)];
                randomColorArr.push(randomColor);
            }
            setCurrentColorArr(randomColorArr);
        }
        createBoard();
    }, [])

    const checkForCollumOfThree = () => {
        // loops through each square until last collum of 3, which happens to end at index of 47
        for (let i = 0; i <= 47 ; i++) {
            // i is the first candy in the collum, i + width is the candy right under it, and i + width * 2 is the candy under candy i + width
            const collumOfTree = [i, i + width, i + width * 2];
            // the color that all the candies should be in the collum of three
            const selectedColor = currentColorArr[i];
            
            //if all the candies are the same color as the selected color then they will be replaced with a empty string
            if ( collumOfTree.every(candy => currentColorArr[candy] === selectedColor)) {
                collumOfTree.forEach(candy => currentColorArr[candy] = blank)
                return true;
            };
        }
    }

    const checkForCollumOfFour = () => {
        // loops through each square until last collum of 4, which happens to end at index of 39
        for (let i = 0; i <= 39 ; i++) {
            // i is the first candy in the collum, i + width is the candy right under it, and i + width * 2 is the candy under candy i + width, i + width * 3 is under i + width * 2 
            const collumOfFour = [i, i + width, i + width * 2, i + width * 3];
            const selectedColor = currentColorArr[i];
            
            if ( collumOfFour.every(candy => currentColorArr[candy] === selectedColor)) {
                collumOfFour.forEach(candy => currentColorArr[candy] = blank);
                return true;
            }
        }
    }

    const checkForRowOfThree = () => {
        for (let i = 0; i < 64 ; i++) {
            // adds the candy and the candy to the left and right
            const rowOfThree = [i, i + 1, i + 2];
            const selectedColor = currentColorArr[i];
            // last two candies in the collum not valid so you can have wrapping rows
            const notValid =  [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64];

            //skips the notValid numbers when looping through the array
            if (notValid.includes(i)) continue;
            
            // all 3 candies are the same then replace them empty img
            if ( rowOfThree.every(candy => currentColorArr[candy] === selectedColor)) {
                rowOfThree.forEach(candy => currentColorArr[candy] = blank);
                return true;
            }
        }
    }

    const checkForRowOfFour = () => {
        for (let i = 0; i < 64 ; i++) {
            const rowOfFour = [i, i + 1, i + 2, i + 3];
            const selectedColor = currentColorArr[i];
            const notValid =  [5, 6, 7, 13,14, 15, 21,22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64];

            if (notValid.includes(i)) continue;
            
            if ( rowOfFour.every(candy => currentColorArr[candy] === selectedColor)) {
                rowOfFour.forEach(candy => currentColorArr[candy] = blank);
                return true;
            }
        }
    }

    const shiftCandiesDown = () => {
        for (var i = 0; i <= 55; i++) {
            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
            const isFirstRow = firstRow.includes(i);

            if (isFirstRow && currentColorArr[i] === blank) {
                const randomColor = candyColorArr[Math.floor(Math.random() * candyColorArr.length)];
                currentColorArr[i] = randomColor;
            }

            if (currentColorArr[i + width] === blank) {
                currentColorArr[i + width] = currentColorArr[i];
                currentColorArr[i] = blank;
            }
        }
    }

    const dragStart = (e) => {
        setCandybeingDragged(e.target);
    }

    const dragDrop = (e) => {
        setCandybeingReplaced(e.target);
    }

    const dragEnd = (e) => {
        const candyBeingDraggedId = parseInt(candyBeingDragged.getAttribute('data-id'));
        const candyBeingReplacedId = parseInt(candyBeingReplaced.getAttribute('data-id'));

        const validmoves = [
            candyBeingDraggedId - 1,
            candyBeingDraggedId - width,
            candyBeingDraggedId + 1,
            candyBeingDraggedId + width
        ];

        const validmove = validmoves.includes(candyBeingReplacedId);

        if (validmove) {
            currentColorArr[candyBeingReplacedId] = candyBeingDragged.getAttribute('src');
            currentColorArr[candyBeingDraggedId] = candyBeingReplaced.getAttribute('src');
        }

        const isCollumOffour = checkForCollumOfFour();
        const isRowOfFour = checkForRowOfFour();
        const isCollumOfThree = checkForCollumOfThree();
        const isRowOfThree = checkForRowOfThree()

        if (candyBeingReplacedId && validmove && (isCollumOffour || isRowOfFour || isCollumOfThree || isRowOfThree)) {
            setCandybeingDragged(null);
            setCandybeingReplaced(null);
        } else {
            currentColorArr[candyBeingReplacedId] = candyBeingReplaced.getAttribute('src');
            currentColorArr[candyBeingDraggedId] = candyBeingDragged.getAttribute('src');
            setCurrentColorArr([...currentColorArr])
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            checkForCollumOfFour();
            checkForRowOfFour();
            checkForCollumOfThree();
            checkForRowOfThree();
            shiftCandiesDown();
            setCurrentColorArr([...currentColorArr])
        }, 170);
        return () => clearInterval(timer);
    });

    return (
        <>
            <section className="container">
                <div className="gameBoard">
                    {currentColorArr.map((candy, index) => (
                        <img 
                            key={index} 
                            src={candy} 
                            alt={candy}
                            data-id={index}
                            draggable={true}
                            onDragStart={dragStart}
                            onDragOver={(e) => e.preventDefault()}
                            onDragEnter={(e) => e.preventDefault()}
                            onDragLeave={(e) => e.preventDefault()}
                            onDrop={dragDrop}
                            onDragEnd={dragEnd}
                        />
                    ))}
                </div>
            </section>
        </>
    )

}

export default CandySmasher;