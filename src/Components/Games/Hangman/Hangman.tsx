import { useContext, useEffect, useState } from 'react';
import ColorContext from '../../../Context/ColorContext';
import Lines from './Components/Lines/Lines';
import styles from './Hangman.module.css';
import Draw from './Components/Draw';
import LettersButtons from './Components/LettersButtons';
import ErrorLetters from './Components/ErrorLetters';

const words = ["supermarquet", "song", "television", "game", "kid", "colors", "skirt", "chicken"];

const Hangman = () => {
    const {lightOn} = useContext(ColorContext);
    const [userLetters, setUserLetters] = useState<Array<string>>([]);
    const [random, setRandom] = useState<number>(0);
    const [errorCount, setErrorCount] = useState(0);
    const [numLettersMatch, setNumLettersMatch] = useState(0);


    useEffect(() => {
        setRandom(getRandomIntInclusive(0,7));    
    },[])

    function getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const userClickLetterButton = (letter: string) => {
        setUserLetters((prevState) => [letter, ...prevState]);
    }

    const handleClickRestart = () => {
        setUserLetters([])
        setErrorCount(0)
        setRandom(getRandomIntInclusive(0,7))
        setNumLettersMatch(0)
    }
    
    return(
        <div className={lightOn ? styles.lightContent : styles.content}>
            <p className={lightOn ? styles.lightTitle : styles.title}>---- Hangman ----</p>
            {errorCount === 9 && <p className={styles.lostMessage}>You lost...</p>}
            <Draw letterSelected={userLetters} randomWord={words[random]} countErrors={errorCount}  setErrorCount={(errors) => setErrorCount(errors)}/>
            <Lines wordToLines={words[random]} letterSelected={userLetters} countMatches={numLettersMatch} setMatchLetters={(match) => setNumLettersMatch(match)}/>
            <LettersButtons userLettersSelected={userLetters} handleClickUSerLetters={userClickLetterButton}></LettersButtons>
            <ErrorLetters userLettersSelected={userLetters} randomWord={words[random]}></ErrorLetters>
            <button type="button" onClick={handleClickRestart} className={styles.restart}>Restart</button>
        </div>
    )
};

export default Hangman;