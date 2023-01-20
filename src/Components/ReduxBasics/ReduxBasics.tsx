import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Todolist from "./Todolist/Todolist";
import styles from './ReduxBasics.module.css';
import { useState } from 'react';
const ReduxBasics = () => {
  const exercicesNums = [1];
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
            <Route path="1" element={<Todolist></Todolist>}></Route>
        </Routes> 
        <Outlet/>
      
    </div>
  );
};

export default ReduxBasics;
