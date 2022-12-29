import styles from './Memory.module.css';
import { FC, useContext, useState } from 'react';
import ColorContext from '../../../Context/ColorContext';
import Cards from './Components/Cards';
interface Props {
}
const Memory:FC <Props> = () => {
    const {lightOn} = useContext(ColorContext);

    return(
        <div className={lightOn ? styles.lightContent : styles.content}>
            <p className={lightOn ? styles.lightTitle : styles.title}>---- Memory ----</p>
            <Cards></Cards>
        </div>
    )
};

export default Memory;