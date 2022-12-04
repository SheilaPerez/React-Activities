import { FC, useContext } from 'react';
import ColorContext from '../../../../Context/ColorContext';
import styles from './LinksBtn.module.css';

interface Props {
    icon: any;
    handleClickOptionMenu?: () => void;
}

const LinksBtn: FC<Props> = ({icon, handleClickOptionMenu}) => {
    const {lightOn, setLightOn} = useContext(ColorContext);

    return(
        <div>
            <div className={!lightOn ? styles.iconContent : styles.lightStyle} onClick={handleClickOptionMenu}>
                 <div>{icon}</div>  
            </div>
        </div>
    )
};

export default LinksBtn;