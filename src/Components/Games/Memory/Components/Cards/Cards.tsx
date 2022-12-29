import styles from './Cards.module.css';
import AnimalsImages from '../AnimalsImages/AnimalsImages';
import { useEffect, useState } from 'react';
interface AnimalCard {
    name: string,
    id: number,
    isRotated: boolean,
    otherCardId: number,
    guessed: boolean
}
const Cards = () => {
    const [animals, setAnimals] = useState<AnimalCard[]>(AnimalsImages.sort(() => Math.random() -0.5));
    const [firstCard, setFirstCard] = useState<AnimalCard | undefined>(undefined);
    const [secondCard, setSecondCard] = useState<AnimalCard | undefined>(undefined);

    const handleClickCard = (animal: AnimalCard) => {
        if (!firstCard) {
            setAnimals(animals.map((savedAnimal) => {
                if (animal.id === savedAnimal.id) {
                    animal.isRotated = true;
                }
                return savedAnimal;
            }));
            setFirstCard(animal);
            return;
        }

        if (firstCard && !secondCard) {
            setSecondCard(animal);
            setAnimals(animals.map((savedAnimal) => {
                if (animal.id === savedAnimal.id) {
                    animal.isRotated = true;
                }
                return savedAnimal;
            }));
            return;
        }
    }

    useEffect(() => {
        setTimeout(() => {
            if (secondCard && firstCard) {
                if (firstCard.id === secondCard.otherCardId) {
                     setAnimals(animals.map((savedAnimal) => {
                         if (savedAnimal.id === firstCard.id || savedAnimal.id === secondCard.id) {
                             savedAnimal.guessed = true;
                         }
                         return savedAnimal;
                     }))
                 } else {
                     setAnimals(animals.map((savedAnimal) => {
                         if (savedAnimal.id === firstCard.id || savedAnimal.id === secondCard.id) {
                             savedAnimal.isRotated = false;
                             savedAnimal.guessed = false;
                         }
                         return savedAnimal;
                     }));
                 }
                 setFirstCard(undefined);
                 setSecondCard(undefined);
            }
        }, 2000)
        
    }, [secondCard, firstCard])

    const handleClickRestart = () => {
        setAnimals(animals.map((animal) => {
            animal.isRotated = false; 
            return animal;
        }))
        setAnimals(AnimalsImages.sort(() => Math.random() -0.5))
    }

    return(
        <div className={styles.cardsContainer}>
            {animals.map((animal) => {
                return(
                    <div className={styles.card} onClick={() => handleClickCard(animal)}>
                        <div className={`${animal.isRotated && animal.guessed && `${styles.face} ${styles.front} ${styles.flipfront}`} ${animal.isRotated && !animal.guessed ? `${styles.face} ${styles.front} ${styles.flipfront}` : `${styles.face} ${styles.front}`}`}>
                            <p>Animal memory</p>
                        </div>
                        <div className={animal.isRotated ? `${styles.face} ${styles.back} ${styles.flipback}` :`${styles.face} ${styles.back}`}>
                            <img src={`../../../../MemoryAnimals/${animal.name}`}  alt="animals" className={styles.animalImage}></img>
                        </div>
                    </div>
                    )
                })
            }
            <button type="button" onClick={handleClickRestart} className={styles.restartBtn}>Restart</button>
        </div>
    )
};

export default Cards;