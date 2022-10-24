import { useState } from "react";
import styles from './Buscador.module.css';

const Buscador = () => {
    const fruits: string[] = ['pera', 'manzana', 'kiwi', 'platano', 'uvas', 'melocoton', 'albaricoques', 'sandia', 'melon'];
    const [serchFruitByName, setSearchFruitByName] = useState<string>('');
    const [copyList, setCopyList] = useState<string[]>(fruits);

    const handleChangeBuscador = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchFruitByName(e.target.value);
    }

    const handleClickSearch = () => {
        setCopyList(copyList.filter((fruit) => {
            return serchFruitByName === fruit;
        }))
    }

    const handleReset = () => {
        setSearchFruitByName('');
        setCopyList(fruits);
    }

    return (
        <div className={styles.content}>
            <p className={styles.title}>---- Buscador ----</p>
            <div>
                <label className={styles.font}>Buscador de frutas</label>
                <input type="text" value={serchFruitByName} placeholder="Escribe la fruta aquí" className={styles.inputSearch} onChange={(e) => handleChangeBuscador(e)}></input>
                <button type="button" className={styles.search} onClick={handleClickSearch}>Search</button>
                <button type="button" className={styles.reset} onClick={handleReset}>Reset</button>
            </div>
            <p className={styles.font}>Lista de frutas</p>
            {copyList.map((fruit) => {
                return (
                    <ul>
                        <li>
                            {fruit}
                        </li>
                    </ul>
                )
            })}
        </div>
    )
};

export default Buscador;