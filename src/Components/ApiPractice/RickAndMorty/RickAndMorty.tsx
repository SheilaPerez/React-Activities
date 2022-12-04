import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import styles from './RickAndMorty.module.css';
import ColorContext from "../../../Context/ColorContext";
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
interface Pages {
    next: string;
    prev: string;
}

const RickAndMorty = () => {
    const [characters, setCharacters] = useState<CharactersInfo[]>([]);
    const [foundCharacter, setFoundCharacter] = useState<string>('');
    const [filteredCharacters, setFilteredCharacters] = useState<CharactersInfo[]>([]);
    const [searchClicked, setSearchClicked] = useState<Boolean>(false);
    const [pages, setPages] = useState<Pages>({next:'', prev: ''});
    const {lightOn, setLightOn} = useContext(ColorContext);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character').then((response) => {
            setCharacters(response.data.results);
            setPages(response.data.info);
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

    const handleClickNextPage = () => {
        axios.get(pages.next).then((response) => {
            setCharacters(response.data.results);
            setPages(response.data.info);
        });
    }

    const handleClickPreviusPage = () => {
        axios.get(pages.prev).then((response) => {
            setCharacters(response.data.results);
            setPages(response.data.info);
        });
    }

    return characters ? (
        <div className={lightOn ? styles.lightContent : styles.content}>
            <p className={lightOn ? styles.lightTitle : styles.title}>---- Api Rick and Morty ----</p>
            <div>
                <p className={styles.subtitle}>Looking for the character and find out their characteristics</p>
                <div className={styles.inputContent}>
                    <input type="text" placeholder='Name' value={foundCharacter} onChange={(e) => handleChangeSearh(e)} className={styles.inputName}></input>
                    <button type="button" className={styles.search} onClick={() => handleClickSearch(foundCharacter)}>Search</button>
                    <button type="button" className={styles.restart} onClick={handleClickRestart}>Restart</button>
                </div>
            </div>
            {filteredCharacters?.length === 0 && characters.map((character: CharactersInfo) => {
                return (
                    <p>{character.name}</p>
                )
            })}
            {filteredCharacters.length > 0 ? filteredCharacters?.map((character) => {
                return (
                    <div className={lightOn ? styles.lightCaracterContent : styles.characterContent}>
                        <img src={character.image} className={styles.image}></img>
                        <div>
                            <div>
                                <p className={styles.valueName}>Gender:</p><p className={styles.value}>{character.gender}</p>
                            </div>
                            <div>
                                <p className={styles.valueName}>Location:</p><p className={styles.value}>{character.location.name}</p>
                            </div>
                            <div>
                                <p className={styles.valueName}>Specie: </p><p className={styles.value}>{character.species}</p>
                            </div>
                            <div>
                                <p className={styles.valueName}>Status: </p><p className={styles.value}>{character.status}</p>
                            </div>
                        </div>
                    </div>
                )
            }) : 
            <div>
                <button type="button" onClick={handleClickPreviusPage} className={styles.previus}>Previus</button>
                <button type="button" onClick={handleClickNextPage} className={styles.next}>Next</button>
            </div>
            }
            
        </div>
    ) : null
}

export default RickAndMorty;
