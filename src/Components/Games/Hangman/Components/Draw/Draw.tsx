import { FC, useEffect, useState } from 'react';
import styles from './Draw.module.css';
interface Props {
    letterSelected: string[];
    randomWord: string;
    countErrors: number;
    setErrorCount: (errors: number) => void;
}

const Draw:FC<Props>  = ({letterSelected, randomWord, countErrors, setErrorCount}) => {
   

    useEffect(() => {
        let errors = 0;
        if (letterSelected.length > 0) {
            const wordLetter = randomWord.split("") //array
            letterSelected.forEach((userLetter) => {
                const correctLetter = wordLetter.some((letter) => userLetter === letter)
                if (!correctLetter) {
                    errors++;
                    setErrorCount(errors);
                }
            })
        }
        
    }, [letterSelected, randomWord]);

    return(
        <>
        <div className={styles.manDiv}>
            <div className={`${styles.stick1} ${countErrors >= 4 ? styles.displayBlock : styles.displayNone}`}></div>
            <div className={`${styles.stick2} ${countErrors >= 3 ? styles.displayBlock : styles.displayNone}`}></div>
            <div className={`${styles.stick3} ${countErrors >= 2 ? styles.displayBlock : styles.displayNone}`}></div>
            <div className={`${styles.stick4} ${countErrors >= 1 ? styles.displayBlock : styles.displayNone}`}></div>
            <div className={`${styles.head} ${countErrors >= 5 ? styles.displayBlock : styles.displayNone}`}></div>
            <div className={`${styles.body} ${countErrors >= 6 ? styles.displayBlock : styles.displayNone}`}></div>
            <div className={`${styles.arms} ${countErrors >= 7 ? styles.displayBlock : styles.displayNone}`}></div>
            <div className={`${styles.legLeft} ${countErrors >= 8 ? styles.displayBlock : styles.displayNone}`}></div>
            <div className={`${styles.legRight} ${countErrors >= 9 ? styles.displayBlock : styles.displayNone}`}></div>
        </div>
        </>
    )
};

export default Draw;