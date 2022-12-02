import { FC } from "react";
import styles from './Options.module.css';
import { FaLaptop } from "react-icons/fa";

interface Props {
    options: string;
    handleClickOption?: () => void;
}
const Options: FC<Props> = ({options, handleClickOption}) => {
    return(
        <div>
            <div className={styles.optionContent} onClick={handleClickOption}>
                <span className={styles.icon}><FaLaptop size={20}/></span>
                <h2 className={styles.option}>{options}</h2>
            </div>
        </div>
    )
};

export default Options;