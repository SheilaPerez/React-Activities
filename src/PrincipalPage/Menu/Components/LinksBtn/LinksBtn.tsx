import { FC } from 'react';
import styles from './LinksBtn.module.css';

interface Props {
    icon: any;
    handleClickOptionMenu?: () => void;
}

const LinksBtn: FC<Props> = ({icon, handleClickOptionMenu}) => {
    return(
        <div>
            <div className={styles.iconContent} onClick={handleClickOptionMenu}>
                 <div>{icon}</div>  
            </div>
        </div>
    )
};

export default LinksBtn;