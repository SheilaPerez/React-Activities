import styles from './Games.module.css';
import { useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import TicTacToe from './TicTacToe';
import Hangman from './Hangman/Hangman';

const Games = () => {
    const exercicesNums = [1, 2];
    const [selected, setSelected] = useState<number>(1);
    const navigate = useNavigate();

    const openExercice = (num: number) => {
        setSelected(num);
        navigate(num.toString());
    }
    return (
        <div>
            <div className={styles.buttonsExercicies}>
                <div className={styles.buttonsExercicies}>
                    {exercicesNums.map((num) => {
                        return (
                            <button type="button" onClick={() => openExercice(num)} className={`${styles.button} ${styles['button' + num]} ${selected === num && styles.selectedBtn}`}>{num}</button> 
                        )
                    })}
                </div>
            </div>
            <Routes>
                <Route path="" element={<TicTacToe></TicTacToe>}></Route>
                <Route path="1" element={<TicTacToe></TicTacToe>}></Route>
                <Route path="2" element={<Hangman></Hangman>}></Route>
            </Routes> 
            <Outlet/>
        </div>
    )
};

export default Games;