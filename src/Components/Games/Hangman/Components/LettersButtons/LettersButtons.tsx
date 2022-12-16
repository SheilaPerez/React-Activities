import styles from "./LettersButtons.module.css";
import { FC, useContext } from "react";
import { abc } from "./abc";
import ColorContext from "../../../../../Context/ColorContext";
interface Props {
  userLettersSelected: string[];
  handleClickUSerLetters: (letter: string) => void;
}

const LettersButtons: FC<Props> = ({userLettersSelected, handleClickUSerLetters}) => {
  const { lightOn } = useContext(ColorContext);

  return (
    <div className={styles.letters}>
      {abc.map((letter: string, index: number) => {
        const letterSelectedBtn = userLettersSelected.findIndex(
          (userLetter) => userLetter === letter
        );
        return (
          <button
            key={`abc_${index}`}
            onClick={() => handleClickUSerLetters(letter)}
            className={`${lightOn ? styles.lightLetter : styles.letter} ${
              letterSelectedBtn !== -1 ? styles.letterSelected : ""
            }`}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default LettersButtons;
