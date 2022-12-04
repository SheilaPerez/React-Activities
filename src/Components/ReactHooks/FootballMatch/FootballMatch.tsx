import { Reducer, useContext, useReducer, useState } from "react";
import { reducer } from "./Reducer";
import styles from './FootballMatch.module.css';
import ColorContext from "../../../Context/ColorContext";

export interface match {
    players: {
        name: string,
        age: number
    }[],
    homeScore: number,
    teams: string[]
}

const FootballMatch = () => {
    const footballMatchInitialState: match = {
        players: [{
            name: 'David',
            age: 21
        },
        {
            name: 'Roger',
            age: 23
        },
        {
            name: 'Victor',
            age: 25
            
        }],
        homeScore: 0,
        teams: ['Barça', 'Madrid', 'Atletic', 'Rayo']
    }
    const [newPlayer, setNewPlayer] = useState({ name: '', age: 0 })
    const [namePlayerRemove, setNamePlayerRemove] = useState('')
    const [state, dispatch] = useReducer<Reducer<match, any>>(reducer, footballMatchInitialState)
    const {lightOn, setLightOn} = useContext(ColorContext);

    const handleChangeAddPlayerName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPlayer({ ...newPlayer, name: e.target.value });
    }

    const handleChangeAddPlayerAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPlayer({ ...newPlayer, age: parseInt(e.target.value) });
    }

    const handleClickAddNewPlayer = () => {
        dispatch({ type: 'addplayer', payload: newPlayer });

    }

    const handleChangeRemovePlayer = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNamePlayerRemove(e.target.value);
    }

    const handleClickRemovePlayerByName = () => {
        dispatch({ type: 'removeplayer', payload: namePlayerRemove });
    }
    return (
        <div  className={lightOn ? styles.lightContent : styles.content}>
            <p className={lightOn ? styles.lightTitle : styles.title}>---- useReducer ----</p>
            <p className={styles.explication}>Add new player: </p>
            <input type="text" placeholder="Add player name" className={styles.newPlayer} onChange={(e) => handleChangeAddPlayerName(e)}></input>
            <input type="number" placeholder="Add player age" className={styles.newPlayer} onChange={(e) => handleChangeAddPlayerAge(e)}></input>
            <button type="button" onClick={handleClickAddNewPlayer} className={styles.addButton}>Add</button>
            <p className={styles.explication}>Remove player:</p>
            <div className={styles.removeContent}>
                <input type="text" placeholder="Write a player name" className={styles.removePlayer} onChange={(e) => handleChangeRemovePlayer(e)}></input>
                <button type="button" onClick={handleClickRemovePlayerByName} className={styles.removeButton}>Remove</button>
            </div>
            {state.players.map((player) => {
                return (
                    <div className={styles.cardPlayer}>
                        <p>Name: {player.name}</p>
                        <p>Age: {player.age}</p>
                    </div>
                )
            })}
            
        </div>
    )
}

export default FootballMatch; 

