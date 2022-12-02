import { FC, useState } from 'react';
import styles from './PrincipalPage.module.css';
interface Props {
    children: any;
    handleClickOpenExercice: (num: number) => void;
}
const PrincipalPage: FC<Props> = ({ children, handleClickOpenExercice }) => {
    let exercicesNums = [1,2,3,4,5,6,7,8,9,10,11,12];
    const [selected, setSelected] = useState(1);

    const openExercice = (num: number) => {
        handleClickOpenExercice(num);
        setSelected(num);
    }
    return (
        <div>
            
                <div className={styles.exerciceOpenedContent}>
                    <div className={styles.buttonsExercicies}>
                        {exercicesNums.map((num) => {
                            return (
                                <button type="button" onClick={() => openExercice(num)} className={`${styles.button} ${styles['button' + num]} ${selected === num && styles.selectedBtn}`}>{num}</button> 
                            )
                        })}
                        </div>
                    <div className={styles.exerciceContent}>
                        {children}
                    </div>
                </div>
        </div>
    )
};

export default PrincipalPage;