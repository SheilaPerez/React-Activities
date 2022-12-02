import { useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import AdivinarNum from "./AdivinarNum";
import styles from './ApiPractice.module.css';
import Pokemon from "./Pokemon";
import RickAndMorty from "./RickAndMorty";

const ApiPractice = () => {
    const exercicesNums = [1, 2, 3];
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
                <Route path="" element={<RickAndMorty></RickAndMorty>}></Route>
                <Route path="1" element={<RickAndMorty></RickAndMorty>}></Route>
                <Route path="2" element={<AdivinarNum></AdivinarNum>}></Route>
                <Route path="3" element={<Pokemon></Pokemon>}></Route>
            </Routes> 
            <Outlet/>
        </div>
    )
};
export default ApiPractice;