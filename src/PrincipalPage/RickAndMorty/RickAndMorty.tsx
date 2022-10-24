import { useEffect, useState } from "react";
import axios from 'axios';
import styles from './RickAndMorty.module.css';
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


const RickAndMorty = () => {
    const [characters, setCharacters] = useState<CharactersInfo[]>([]);
    const [foundCharacter, setFoundCharacter] = useState<string>('');
    const [filteredCharacters, setFilteredCharacters] = useState<CharactersInfo[]>([]);
    const [searchClicked, setSearchClicked] = useState<Boolean>(false);
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character').then(function (response) {
            setCharacters(response.data.results);
        });
    }, []);

    const handleChangeSearh = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFoundCharacter(e.target.value);
    }

    const handleClickSearch = (foundCharacter: string) => {
        setSearchClicked(!searchClicked);
            const foundCharacters = characters.filter((character) => {
                return foundCharacter === character.name;
            })
            setFilteredCharacters(foundCharacters!)    
    }

    const handleClickRestart = () => {
        setFoundCharacter('');
        setFilteredCharacters([]);
    }

    return characters ? (
        <div className={styles.content}>
            <p className={styles.title}>---- Api Rick and Morty ----</p>
            <div>
                <p className={styles.subtitle}>Looking for the character and find out their characteristics</p>
                <div className={styles.inputContent}>
                    <input type="text" placeholder='Name' value={foundCharacter} onChange={(e) => handleChangeSearh(e)} className={styles.inputName}></input>
                    <button type="button" className={styles.search} onClick={() => handleClickSearch(foundCharacter)}>Search</button>
                    <button type="button" className={styles.restart} onClick={handleClickRestart}>Restart</button>
                </div>
            </div>
            <p>Characters list:</p>
            {filteredCharacters?.length === 0 && characters.map((character: CharactersInfo) => {
                return (
                    <p>{character.name}</p>
                )
            })}
            {filteredCharacters.length > 0 && filteredCharacters?.map((character) => {
                return (
                    <div style={{border: '1px solid yellow', paddingRight: '20px', paddingLeft: '20px', width: '400px', marginTop: '20px'}}>
                                <p style={{fontWeight: 'bold'}}>Name: {foundCharacter}</p>
                                <img src={character.image}></img>
                                <p style={{fontWeight: 'bold'}}>Gender: {character.gender}</p>
                                <p style={{fontWeight: 'bold'}}>Location: {character.location.name}</p>
                                <p style={{fontWeight: 'bold'}}>Specie: {character.species}</p>
                                <p style={{fontWeight: 'bold'}}>Status: {character.status}</p>
                        </div>
                )
            })}
        </div>
    ) : null
}

export default RickAndMorty;
