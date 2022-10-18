import { useEffect, useState } from "react";
import axios from 'axios';
import { copyFile } from "fs";
interface CharactersInfo {
    gender: string;
    image: string;
    location: Location;
    name: string;
    species: string;
    status: string;
}
interface Location {
    name: string;
}


const Api = () => {
    const [characters, setCharacters] = useState<CharactersInfo[] | null>([]);
    const [foundCharacter, setFoundCharacter] = useState<string>('');
    const [copyCharacters, setCopyCharacters] = useState<CharactersInfo[] | null>([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character', {
        }).then(function (response) {
            setCharacters(response.data.results);
            setCopyCharacters(response.data.results);
            console.log('data', response.data);
        });
    }, []);

    const handleChangeSearh = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === 0) {
            setCopyCharacters(characters);
        }
        setFoundCharacter(e.target.value);
        if (copyCharacters) {
            setCopyCharacters(copyCharacters?.filter((character) => {
                const regexp = new RegExp(`${e.target.value}`);
                return regexp.test(character.name)
            }))
        }
    }

    return characters ? (
        <div style={{ border: '1px solid #9E7676', padding: '30px', marginBottom: '20px' }}>
            <p style={{ fontWeight: 'bold' }}>---- Api Rick and Morty ----</p>
            <div>
                <p style={{color: 'blueviolet'}}>Look for the character and find out their characteristics</p>
                <input type="text" placeholder='Name' value={foundCharacter} onChange={(e) => handleChangeSearh(e)} style={{ display: 'inline-block' }}></input>
            </div>
            {copyCharacters?.map((character) => {
                return (
                    <div>
                        {character.name === foundCharacter ?
                        <div style={{border: '1px solid yellow', paddingRight: '20px', paddingLeft: '20px', width: '400px'}}>
                                <p style={{fontWeight: 'bold'}}>Name: {foundCharacter}</p>
                                <img src={character.image}></img>
                                <p style={{fontWeight: 'bold'}}>Gender: {character.gender}</p>
                                <p style={{fontWeight: 'bold'}}>Location: {character.location.name}</p>
                                <p style={{fontWeight: 'bold'}}>Specie: {character.species}</p>
                                <p>Status: {character.status}</p>
                        </div>
                            :
                        <p>{character.name}</p>}
                    </div>
               ) 
            })} 
        </div>
    ) : null
}

export default Api;
