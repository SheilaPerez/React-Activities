import { Reducer, useReducer, useState } from "react";
import { reducer } from "./Reducer";
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
        <div style={{ border: '1px solid black', padding: '30px' }}>
            <p style={{ fontWeight: 'bold' }}>---- useReducer ----</p>
            {state.players.map((player) => {
                return (
                    <div>
                        <p>{player.name}</p>
                        <p>{player.age}</p>
                    </div>
                )
            })}
            <p>Add new player: </p>
            <input type="text" placeholder="Add player name" onChange={(e) => handleChangeAddPlayerName(e)}></input>
            <input type="number" placeholder="Add player age" onChange={(e) => handleChangeAddPlayerAge(e)}></input>
            <button type="button" onClick={handleClickAddNewPlayer}>Add</button>
            <p>Remove player:</p>
            <input type="text" placeholder="Write a player name" onChange={(e) => handleChangeRemovePlayer(e)}></input>
            <button type="button" onClick={handleClickRemovePlayerByName}>Remove</button>
        </div>
    )
}

export default FootballMatch; 

