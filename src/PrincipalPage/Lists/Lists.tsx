import styles from './Lists.module.css';
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from 'react';
import ToDoList from './ToDoList';
import CheckList from './ChechList';

const Lists = () => {
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
                <Route path="" element={<ToDoList></ToDoList>}></Route>
                <Route path="1" element={<ToDoList></ToDoList>}></Route>
                <Route path="2" element={<CheckList></CheckList>}></Route>
            </Routes> 
            <Outlet/>
        </div>
    )
};

export default Lists;