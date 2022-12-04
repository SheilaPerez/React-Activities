import { useContext } from 'react';
import ColorContext from '../../../Context/ColorContext';
import styles from './IteracionObjetos.module.css';

interface animal {
    animal: string;
    legs: number;
    female: boolean
    age: number
}
const IteracionObjetos = () => {
    const animals: animal[] = [{
        animal: 'cat',
        legs: 4,
        female: false,
        age: 3
    }, {
        animal: 'dog',
        legs: 4,
        female: true,
        age: 7
    }];
    const {lightOn, setLightOn} = useContext(ColorContext);

    return (
        <div  className={lightOn ? styles.lightContent : styles.content}>
        <p className={lightOn ? styles.lightTitle : styles.title}>---- Iteration with objects ----</p>
            <div className={styles.contentPage}>
                <div>
                    <p className={styles.objExemple}>Object exemple:</p>
                    <p>const animals = [{"{"}</p>
                    <p>animal: 'cat',</p>
                    <p>legs: 4,</p>
                    <p>female: false,</p>
                    <p>age: 3</p>
                    <p>{"}"} , {"{"}</p>
                    <p>animal: 'dog',</p>
                    <p>legs: 4,</p>
                    <p>female: true,</p>
                    <p>age: 7</p>
                    <p>{"}"}]</p>

                </div>
                <div className={styles.animalCard}>
                    {animals.map((animal) => {
                        return Object.entries(animal).map(([keys, value]) => {
                            return (
                                <p>{keys} --- {value}</p>
                            );
                        });
                    })}
                </div>
            </div>
        </div>
    );
}

export default IteracionObjetos;