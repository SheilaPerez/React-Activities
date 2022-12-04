import LinksBtn from './Components/LinksBtn/LinksBtn';
import styles from './Menu.module.css';
import { FaReact } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { CgGirl } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import ColorContext from '../../Context/ColorContext';

const Menu = () => {
    const navigate = useNavigate();
    const {lightOn, setLightOn} = useContext(ColorContext);
    
    const portfolioLink = () => {
        window.location.href = "https://sheilaperez.netlify.app";
    }

    useEffect(() => {
        const body = document.getElementsByTagName("body")[0]
        body.style.backgroundColor = lightOn ? '#F9F9F9' : 'rgb(41, 38, 38)';
    },[lightOn]);


    return(
        <div className={styles.menuContent}>
                <LinksBtn icon={<FaReact size={30}/>} handleClickOptionMenu={() => navigate("/")}></LinksBtn>
                <LinksBtn icon={<RiLightbulbFlashLine size={30}/>} handleClickOptionMenu={() => setLightOn(!lightOn)}></LinksBtn>
                <LinksBtn icon={<CgGirl size={30}/>} handleClickOptionMenu={portfolioLink}></LinksBtn>
        </div>
    )
};

export default Menu;