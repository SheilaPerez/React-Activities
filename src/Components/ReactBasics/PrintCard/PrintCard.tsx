import React, { useContext, useState } from 'react';
import styles from './PrintCard.module.css';
import { BsFillPersonFill } from "react-icons/bs";
import ColorContext from '../../../Context/ColorContext';

const PrintCard = () => { 
    interface Avatar {
        name: string;
        id: number
    }
    const avatars = [{
        name: "avatar6.webp",
        id: 1
    }, {
        name: "avatar1.jpeg",
        id: 2
    }, {
        name: "avatar2.jpeg",
        id: 3
    }, {
        name: "avatar3.jpeg",
        id: 4
    }, {
        name: "avatar4.jpeg",
        id: 4  
    }, {
        name: "avatar5.webp",
        id: 5
    }]
    const [formState, setFormState] = useState({ nickName: '', biography: '' });
    const [formSubmit, setFormSubmit] = useState({ nickName: '', biography: '' });
    const [submitClicked, setSubmitClicked] = useState<Boolean>(false);
    const [avatarSelected, setAvatarSelected] = useState<Avatar>({name: '', id: 0});
    const [max140Chart, setMax140Chart] = useState<Boolean>(false);
    const {lightOn, setLightOn} = useContext(ColorContext);

    const handleChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({...formState, nickName: e.target.value});
    }
    const handleChangeBiography = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormState({ ...formState, biography: e.target.value });
        if (e.target.value.length > 140) {
            setMax140Chart(true);
        } else {
            setMax140Chart(false);
        }
    }
    const handleClickSubmited = () => {
        setFormSubmit({...formSubmit, nickName: formState.nickName, biography: formState.biography})
        setSubmitClicked(true);
    }

    const handleClickReset = () => {
        setFormState({ nickName: '', biography: '' });
    }

    const handleClickAvatar = (avatar: Avatar) => {
        setAvatarSelected(avatar)
    }

    return (
        <div  className={lightOn ? styles.lightContent : styles.content}>
        <p className={lightOn ? styles.lightTitle : styles.title}>---- Print User Card ----</p>
            <div className={lightOn ? styles.lightFormContent : styles.formContent}>
                <p>(User update form)</p>
                <label className={styles.label}>NickName</label>
                <input className={styles.inputNick} type="text" placeholder="NickName" value={formState.nickName} onChange={(e) => handleChangeNickName(e)}></input>
                <label className={styles.label}>Biography</label>
                <textarea className={styles.inputBio}value={formState.biography}onChange={(e) => handleChangeBiography(e)}placeholder="Tell us more about yourself in less than 140 characters"></textarea>
                {max140Chart && <p className={styles.stop}>stop and write less</p>}
                <p>Choose your mood: </p>
                <div className={styles.avatarContent}>
                    {avatars.map((avatar) => {
                        return (
                            <img src={`/${avatar.name}`} alt="img" className={styles.avatar} onClick={() => handleClickAvatar(avatar)}></img>
                        )
                    })}
                </div>
                <div className={styles.buttons}>
                    <button type="button" onClick={handleClickSubmited} className={styles.submit}>Success!</button>
                    <button type="button" onClick={handleClickReset} className={styles.reset}>Reset</button>
                </div>
            </div>
                {max140Chart ?
                    <div className={styles.userCardContentEmpty}>
                        <h3 className={styles.nickName}>"Unnamed"</h3>
                        <p className={styles.biographyEmpty}>"No biography provided"</p>
                    </div> : 
                    <div className={styles.userCardContent}>
                    {avatarSelected ? <img src={`/${avatarSelected.name}?`}  alt="img" className={styles.avatarImg}></img> : <BsFillPersonFill size={90}/>}
                    <div>
                        <h3 className={styles.nickName}>{submitClicked && formSubmit.nickName.length > 0 ? formSubmit.nickName : "Unnamed"}</h3>
                        <p className={styles.biography}>{submitClicked && formSubmit.biography.length > 0 ? formSubmit.biography : "No biography provided" }</p>
                    </div>
                    </div>
                }
            <div>    
            </div>
        </div> 
    )
};

export default PrintCard;