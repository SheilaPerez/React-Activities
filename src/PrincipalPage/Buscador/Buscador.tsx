import { useState } from "react";

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
        <div style={{ border: '1px solid red', padding: '30px', marginBottom: '20px' }}>
            <p style={{ fontWeight: 'bold' }}>---- Buscador ----</p>
            <div>
                <label style={{marginRight: '10px'}}>Buscador de frutas</label>
                <input type="text" value={serchFruitByName} onChange={(e) => handleChangeBuscador(e)}></input>
                <button type="button" onClick={handleClickSearch}>Search</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </div>
            <p>lista de frutas</p>
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