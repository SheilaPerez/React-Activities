import { FC, useContext, useEffect, useState } from 'react';
import ColorContext from '../../../../../Context/ColorContext';
import styles from './Lines.module.css';

interface Props {
    wordToLines: string;
    letterSelected: string[];
    setMatchLetters: (match: number) => void;
    countMatches: number;
}
const Lines: FC<Props> = ({wordToLines, letterSelected, setMatchLetters, countMatches}) => {
    const {lightOn} = useContext(ColorContext);

    const lines = wordToLines.split("");

    useEffect(() => {
        let match = 0;
        lines.forEach((letterLine) => {
            letterSelected.forEach((letter) => {
                if(letterLine === letter) {
                    match++
                    setMatchLetters(match)
                }
            })
        })
    },[letterSelected])

    
    return(
        <div>
            <div className={styles.linesWordUnknow}>
                {lines.map((line: string) => {
                    const printLetterSelected = letterSelected.some((letter) => line === letter)
                    return printLetterSelected ? <p className={styles.correctLetter}>{line}</p> :  <div className={lightOn ? styles.line : styles.lightLine}></div>
                })}
            </div>
            <div>
                {countMatches === lines.length && <p className={styles.winMessage}>You win!!</p>}
            </div>
        </div>
    )
};

export default Lines;

// las letras de la palabra random "lines" coinciden todas con las letras "line"