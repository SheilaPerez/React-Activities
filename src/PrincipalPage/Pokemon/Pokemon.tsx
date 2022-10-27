import axios from "axios";
import { useEffect, useState } from "react";
import styles from './Pokemon.module.css';
interface PokemonFeature {
    abilities: Ability[];
    name: string;
    sprites: Image;
    types: Types[];
}
interface Ability {
    ability: abilityName;
}
interface abilityName {
    name: string;
}interface Image {
    front_default: string;
}
interface Types {
    type: typeName;
}
interface typeName {
    name: string;
} 

const Pokemon = () => {
    const [pokemon, setPokemon] = useState<string>('');
    const [fetchClicked, setFetchClicked] = useState<Boolean>(false);
    const [foundedPokemon, setFoundedPokemon] = useState<PokemonFeature>({abilities:[], name:'', sprites:{front_default: ''}, types:[]});
    const [error, setError] = useState<string>('');
    useEffect(() => {
        if (pokemon && fetchClicked) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
                console.log('data', response.data)
                setFoundedPokemon({
                    abilities: response.data.abilities,
                    name: response.data.name,
                    sprites: response.data.sprites,
                    types: response.data.types
                })
            }).catch(error => {
                setError(error.message);
            });
        }
        setFetchClicked(false);
    }, [fetchClicked, pokemon]);

    const handleChangeSearchPokemon = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPokemon(e.target.value.toLowerCase());
    }

    const handleClickFetch = () => {
        setFetchClicked(true);
        setError('');
    }

    const handleClickRefresh = () => {
        setFetchClicked(false);
        setPokemon('');
        setError('');
    }

    return (
        <div className={styles.content}>
            <p className={styles.title}>---- Api Pokemon ----</p>
            <div className={styles.inputContent}>
                <input type="text" value={pokemon} onChange={handleChangeSearchPokemon} className={styles.inputName}></input>
                <button type="button" onClick={handleClickFetch} className={styles.fetch}>Fetch</button>
                <button type="button" onClick={handleClickRefresh} className={styles.refresh}>Refresh</button>
            </div>
            <p className={styles.error}>{error}</p>
            {foundedPokemon.name === pokemon && 
                <div className={styles.infoContent}>
                    <img src={foundedPokemon.sprites.front_default} className={styles.image}></img>
                    <div className={styles.info}>
                        {foundedPokemon.abilities.map((ability) => {
                            return (
                            <div className={styles.informationContent}>
                                <p className={styles.typeInfo}>Ability:</p>
                                <p>{ability.ability.name}</p>
                            </div>
                            )
                            
                        })}
                        {foundedPokemon.types.map((type) => {
                            return (
                                <div className={styles.informationContent}>
                                    <p className={styles.typeInfo}>Type:</p>
                                    <p>{type.type.name}</p>
                                </div>
                            )
                            
                        })}
                    </div>
                </div>
            }
       </div>
   )  
    
}

export default Pokemon;