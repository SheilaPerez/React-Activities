import axios from "axios";
import { useEffect, useState } from "react";
import styles from './Pokemon.module.css';
interface PokemonFeatures {

}
const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState<string>('');

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(function (response) {
            setPokemons(response.data);
            console.log('data', response.data);
        })
    }, [])
    
    const handleChangeSearchPokemon = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPokemon(e.target.value);
    }
    return (
        <div className={styles.content}>
            <p className={styles.title}>---- Api Pokemon ----</p>
            <input type="text" placeholder="Which pokemon?" onChange={(e) => handleChangeSearchPokemon(e)}></input>
            <button type="button">Fetch!</button>
        </div>
    )
}

export default Pokemon;