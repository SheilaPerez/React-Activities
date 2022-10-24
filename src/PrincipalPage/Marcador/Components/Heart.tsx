import { useState } from 'react';
import styles from './Heart.module.css';
import { FcLikePlaceholder } from "react-icons/fc";

const Heart = () => {
    const [heartNum, setHeartNum] = useState(0);
    const [heartClicked, setHeartClicked] = useState<Boolean>(false);
    const handleClickHeartNum = () => {
        setHeartClicked(true);
        setHeartNum(heartNum + 1);
        setTimeout(() => {
            setHeartClicked(false)
        },1000)
    }

    const handleClickResetHeartNum = () => {
        setHeartNum(0);
    }

    return (
        <div className={styles.heartContent}>
            {heartNum < 20 ? <p className={styles.heartNum}>{heartNum}</p> : heartNum >= 20 && <p className={styles.heartNum}>20</p>}
            <div className={`${heartClicked ? `${styles.heart} ${styles.heartBtnAnimation} ${styles.heartColor}`: styles.heart}`} onClick={handleClickHeartNum}><FcLikePlaceholder size={70}/></div>
            <button type="button" onClick={handleClickResetHeartNum}>x</button>
        </div>
    )
}

export default Heart;