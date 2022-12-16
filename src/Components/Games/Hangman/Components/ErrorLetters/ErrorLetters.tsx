import { FC } from 'react';
import styles from './ErrorLetters.module.css';
interface Props {
    randomWord: any;
    userLettersSelected: string[];
}
const ErrorLetters: FC<Props> = ({userLettersSelected, randomWord}) => {
    return(
        <div className={styles.letters}>
            {userLettersSelected.map((userLetter, index) => {
                const lettersWord = randomWord.split("");
                const letterSelected = lettersWord.some((letter: string) => letter === userLetter)
                return  letterSelected ? "" : <p key={`t_${index}`} className={styles.userLetter}>{userLetter}</p>
            })}
        </div>
    )
};

export default ErrorLetters;