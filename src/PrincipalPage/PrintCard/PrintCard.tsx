import React, { useState } from 'react';
import styles from './PrintCard.module.css';

const PrintCard = () => {
    const [formState, setFormState] = useState({ nickName: '', biography: '' });
    const [formSubmit, setFormSubmit] = useState({ nickName: '', biography: '' });
    const [submitClicked, setSubmitClicked] = useState<Boolean>(false);

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

    return (
        <div className={styles.content}>
            <p className={styles.title}>---- Print User Card ----</p>
            <div className={styles.formContent}>
                <p>(User update form)</p>
                <label className={styles.label}>NickName</label>
                <input className={styles.inputNick} type="text" placeholder="NickName" value={formState.nickName} onChange={(e) => handleChangeNickName(e)}></input>
                <label className={styles.label}>Biography</label>
                <textarea className={styles.inputBio}value={formState.biography}onChange={(e) => handleChangeBiography(e)}placeholder="Tell us more about yourself in less than 140 characters"></textarea>
                <button type="button" onClick={handleClickSubmited}>Submit</button>
                <button type="button" onClick={handleClickReset}>Reset</button>
            </div>
            <div>
                <h3 className={styles.nickName}>{submitClicked && formSubmit.nickName.length > 0 ? formSubmit.nickName : "Unnamed"}</h3>
                <p className={styles.biography}>{submitClicked && formSubmit.biography.length > 0 ? formSubmit.biography : "No biography provided" }</p>
            </div>
            <div>
                
            </div>
        </div> 
    )
};

export default PrintCard;