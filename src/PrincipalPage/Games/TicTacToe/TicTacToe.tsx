import { useState } from 'react';
import styles from './TicTacToe.module.css';
import { GoPrimitiveDot } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { TbLetterO } from "react-icons/tb";
const TicTacToe = () => {
    const boxesNums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const [chosenBoxes, setChosenBoxes] = useState<number[]>([]);
    const [random, setRandom] = useState<number[]>([]);

    const winnerCombination1 = [0, 1, 2]; 
    const winnerCombination2 = [3, 4, 5];
    const winnerCombination3 = [6, 7, 8];
    const winnerCombination4 = [0, 4, 8];
    const winnerCombination5 = [2, 4, 6];
    const winnerCombination6 = [0, 3, 6];
    const winnerCombination7 = [1, 4, 7];
    const winnerCombination8 = [2, 5, 8];

    const needsToGetRandomNumber = (randomNum: number, userSelection: number[]): boolean => {
        return userSelection.includes(randomNum) || random.includes(randomNum)
    }

    const handleClickBox = (numClicked: number) => {
        if (chosenBoxes.length <= 4 && !chosenBoxes.includes(numClicked) && !random.includes(numClicked)) {
            const userSelection = [...chosenBoxes, numClicked];
            setChosenBoxes(userSelection)

            if (userSelection.length < 5) {
                setTimeout(() => {
                    let randomNum = getRandomNumber(0, 8);
                    while (needsToGetRandomNumber(randomNum, userSelection)) { randomNum = getRandomNumber(0, 8) }
                    setRandom([...random, randomNum]);
                }, 500);
            }
            
        } 
    }

    const getRandomNumber = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const userWinner = winnerCombination1.every(winnerCombination1 => {
        return chosenBoxes.includes(winnerCombination1);
    }) || winnerCombination2.every(winnerCombination2 => {
        return chosenBoxes.includes(winnerCombination2);
    }) || winnerCombination3.every(winnerCombination3 => {
        return chosenBoxes.includes(winnerCombination3);
    }) || winnerCombination4.every(winnerCombination4 => {
        return chosenBoxes.includes(winnerCombination4);
    }) || winnerCombination5.every(winnerCombination5 => {
        return chosenBoxes.includes(winnerCombination5);
    }) || winnerCombination6.every(winnerCombination6 => {
        return chosenBoxes.includes(winnerCombination6);
    }) || winnerCombination7.every(winnerCombination7 => {
        return chosenBoxes.includes(winnerCombination7);
    }) || winnerCombination8.every(winnerCombination8 => {
        return chosenBoxes.includes(winnerCombination8);
    })

    const computerWinner = winnerCombination1.every(winnerCombination1 => {
        return random.includes(winnerCombination1);
    }) || winnerCombination2.every(winnerCombination2 => {
        return random.includes(winnerCombination2);
    }) || winnerCombination3.every(winnerCombination3 => {
        return random.includes(winnerCombination3);
    }) || winnerCombination4.every(winnerCombination4 => {
        return random.includes(winnerCombination4);
    }) || winnerCombination5.every(winnerCombination5 => {
        return random.includes(winnerCombination5);
    }) || winnerCombination6.every(winnerCombination6 => {
        return random.includes(winnerCombination6);
    }) || winnerCombination7.every(winnerCombination7 => {
        return random.includes(winnerCombination7);
    }) || winnerCombination8.every(winnerCombination8 => {
        return random.includes(winnerCombination8);
    })

    const handleClickRestart = () => {
        setChosenBoxes([]);
        setRandom([]);
    }
    
    return (
        <div className={styles.content}>
            <p className={styles.title}>---- Tic Tac Toe ----</p>
            {userWinner && <p className={styles.winLose}>You win!!</p>}
            {computerWinner && <p className={styles.winLose}>You lose... Try again!</p>}
            <div className={styles.boxes}>
                {boxesNums.map((num) => {
                    const numIncludes = chosenBoxes.includes(num);
                    const numRandomIncludes = random.includes(num);
                    return (
                        <div className={styles.boxContent} onClick={() => handleClickBox(num)}>
                            {!numIncludes && !numRandomIncludes && <GoPrimitiveDot size={40} color={'#A0E4CB'} />}
                            {numIncludes ? <ImCross size={40}/> :
                                random.map((randomNum) => {
                                    return randomNum === num && <TbLetterO size={40}/>;
                                }) 
                            }
                        </div>
                    )
                })}
            </div>
            <button type="button" onClick={handleClickRestart} className={styles.restart}>Play Again!</button>
        </div>
    )
};

export default TicTacToe;