import styles from './Marcador.module.css';
import { useState } from 'react';
import Heart from './Components/Heart';
const Marcador = () => {
    const [number, setNumber] = useState<number>(0);
    const [numClicked, setNumClicked] = useState<Boolean>(false);
    
    const handleClickNumBtn = () => {
        setNumClicked(true)
        setNumber(number + 1);
        setTimeout(() => {
            setNumClicked(false)
        },1000)
    }

    const handleClickRefresh = () => {
        setNumber(0);
    }

    return (
        <div className={styles.content}>
            <p className={styles.title}>---- Click! ----</p>
            <div className={styles.marcContent}>
                <div className={styles.numContent}>
                    {number < 9 ? <div onClick={handleClickNumBtn} className={`${numClicked ? `${styles.numBtn} ${styles.numBtnAnimation}` : styles.numBtn}`}>{number}</div>
                        : <div className={`${numClicked ? `${styles.numBtn} ${styles.numBtnAnimationNine}`: styles.numBtn}`}>9</div>}
                    <div>
                        <button onClick={handleClickNumBtn} className={styles.plus}>+</button>
                        <button onClick={handleClickRefresh} className={styles.refresh}>Refresh</button>
                    </div>
                </div>
                <Heart></Heart>
            </div>
            
        </div>
    )
}
export default Marcador;