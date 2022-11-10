import { FC, useState } from 'react';
import styles from './PrincipalPage.module.css';
interface Props {
    children: any;
    handleClickOpenExercice: (num: number) => void;
}
const PrincipalPage: FC<Props> = ({ children, handleClickOpenExercice }) => {
    let exercicesNums = [1,2,3,4,5,6,7,8,9,10,11];

    return (
        <div>
            <h1 className={styles.title}>Hey there! That is my practice exercicies. </h1>
            <p className={styles.subtitle}>Made with ReactJS + typescript + CSS3</p>
            <div className={styles.exerciceOpenedContent}>
                <div className={styles.buttonsExercicies}>
                    {exercicesNums.map((num) => {
                        return (
                            <button type="button" onClick={() => handleClickOpenExercice(num)} className={`${styles.button} ${styles['button' + num]}`}>{num}</button> 
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