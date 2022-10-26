import styles from './AdivinarNum.module.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsFillPersonFill } from "react-icons/bs";

const NUM_TRIES = 5;
const NUM_RANDOM_MAX = 20;
interface CharacterInfo {
    id: number;
    name: string;
    image: string;
}

const AdivinarNum = () => {
    const [character, setCharacter] = useState<CharacterInfo>({id: 0, name: '', image: ''});
    const [userNumber, setUserNumber] = useState<string>('');
    const [randomNum, setRandomNum] = useState<number>(0);
    const [playClicked, setPlayClicked] = useState<Boolean>(false);
    const [tries, setTries] = useState<number>(NUM_TRIES);
    const effectNumRandom = () => {
        const numRandom = getRandomNum(1, NUM_RANDOM_MAX);
        setRandomNum(numRandom);
            axios.get(`https://rickandmortyapi.com/api/character/${numRandom}`).then((response) => {
                console.log('caract', response.data)
                setCharacter(response.data)
            })
    }
    
    useEffect(() => {
        effectNumRandom()
    }, []);

    const getRandomNum = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const handleChangeUserNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserNumber(e.target.value);
        setPlayClicked(false);
    }

    const handleClickPlay = () => {
        setPlayClicked(true);
        setTries(tries - 1);
    }
    
    const handleClickPlayAgain = () => {
        setPlayClicked(false);
        setUserNumber('');
        effectNumRandom();
        setTries(NUM_TRIES);
    }

    return (
        <div className={styles.content}>
            <p className={styles.title}>---- Guess the number ----</p>
            <input type="text" placeholder='Pick a number!' value={userNumber} onChange={handleChangeUserNumber} className={styles.inputNumber}></input>
            <button type="button" onClick={handleClickPlay}>Play!</button>
            <button type="button" onClick={handleClickPlayAgain}>Play again</button> 
            <div>
                <p>Which Rick and Morty Character?</p>
                {tries <= 0 ? <p>You loose...</p> : <p>You have {tries} tries</p>}
            </div>
            <div>
                {playClicked && parseInt(userNumber) === randomNum ?
                    <div>
                        <p>{character.name}</p>
                        <img src={character?.image} className={styles.image}></img>
                    </div>
                    :
                    <div>
                        <p>???</p>   
                        <div className={styles.notImageContent}>
                            <BsFillPersonFill size={90}/>
                        </div>                  
                    </div>
                }
                {playClicked && parseInt(userNumber) > randomNum && <p>Less</p>}
                {playClicked && parseInt(userNumber) < randomNum && <p>Higher</p>}
            </div>
        </div>
    )
};

export default AdivinarNum;
