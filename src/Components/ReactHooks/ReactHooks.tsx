import { useState } from 'react';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import ChangeSizeColor from './ChangeSizeColor';
import FootballMatch from './FootballMatch/FootballMatch';
import Marcador from './Marcador';
import styles from './ReactHooks.module.css';

const ReactHooks = () => {
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
                <Route path="1" element={<ChangeSizeColor></ChangeSizeColor>}></Route>
                <Route path="2" element={<Marcador></Marcador>}></Route>
                <Route path="3" element={<FootballMatch></FootballMatch>}></Route>
            </Routes> 
            <Outlet/>
        </div>
    )
};

export default ReactHooks;