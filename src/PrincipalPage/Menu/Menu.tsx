import LinksBtn from './Components/LinksBtn/LinksBtn';
import styles from './Menu.module.css';
import { FaReact } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { CgGirl } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();

    return(
        <div className={styles.menuContent}>
            <LinksBtn icon={<FaReact size={30}/>} handleClickOptionMenu={() => navigate("/")}></LinksBtn>
            <LinksBtn icon={<RiLightbulbFlashLine size={30}/>}></LinksBtn>
            <LinksBtn icon={<CgGirl size={30}/>}></LinksBtn>
        </div>
    )
};

export default Menu;