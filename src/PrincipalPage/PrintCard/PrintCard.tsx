import React, { useState } from 'react';
import styles from './PrintCard.module.css';

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
    const [avatarSelected, setAvatarSelected] = useState<Avatar>();

    const handleChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({...formState, nickName: e.target.value});
    }
    const handleChangeBiography = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormState({...formState, biography: e.target.value});
    }
    const handleClickSubmited = () => {
        setFormSubmit({...formSubmit, nickName: formState.nickName, biography: formState.biography})
        setSubmitClicked(true);
    }

    const handleClickReset = () => {
        setFormState({nickName: '', biography: ''});
    }

    const handleClickAvatar = (avatar: Avatar) => {
        setAvatarSelected(avatar)
    }

    return (
        <div className={styles.content}>
            <p className={styles.title}>---- Print User Card ----</p>
            <div className={styles.formContent}>
                <p>(User update form)</p>
                <label className={styles.label}>NickName</label>
                <input className={styles.inputNick} type="text" placeholder="NickName" value={formState.nickName} onChange={(e) => handleChangeNickName(e)}></input>
                <label className={styles.label}>Biography</label>
                <textarea className={styles.inputBio}value={formState.biography}onChange={(e) => handleChangeBiography(e)}placeholder="Tell us more about yourself in less than 140 characters"></textarea>
                <div>
                    <p>Choose your mood: </p>
                    {avatars.map((avatar) => {
                        return (
                            <img src={avatar.name} className={styles.avatar} onClick={() => handleClickAvatar(avatar)}></img>
                        )
                    })}
                </div>
                <div className={styles.buttons}>
                    <button type="button" onClick={handleClickSubmited} className={styles.submit}>Success!</button>
                    <button type="button" onClick={handleClickReset} className={styles.reset}>Reset</button>
                </div>
            </div>
            <div className={styles.userCardContent}>
                {avatarSelected && <img src={avatarSelected?.name} className={styles.avatarImg}></img> }
                <h3 className={styles.nickName}>{submitClicked && formSubmit.nickName.length > 0 ? formSubmit.nickName : "Unnamed"}</h3>
                <p className={styles.biography}>{submitClicked && formSubmit.biography.length > 0 ? formSubmit.biography : "No biography provided" }</p>
            </div>
            <div>    
            </div>
        </div> 
    )
};

export default PrintCard;