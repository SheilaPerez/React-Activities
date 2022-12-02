import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import styles from './ReactBasics.module.css';
import Buscador from "./Buscador";
import IteracionObjetos from "./IteracionObjetos";
import PrintCard from "./PrintCard";
import { useState } from "react";

const ReactBasics = () => {
    const exercicesNums = [1, 2, 3];
    const [selected, setSelected] = useState<number>(1);
    const navigate = useNavigate();

    const openExercice = (num: number) => {
        setSelected(num);
        navigate(num.toString());
    }
    return(
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
                <Route path="" element={<Buscador></Buscador>}></Route>
                <Route path="1" element={<Buscador></Buscador>}></Route>
                <Route path="2" element={<IteracionObjetos></IteracionObjetos>}></Route>
                <Route path="3" element={<PrintCard></PrintCard>}></Route>
            </Routes> 
            <Outlet/>
        </div>
    )
};

export default ReactBasics;