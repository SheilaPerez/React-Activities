
interface animal {
    name: string;
    legs: number;
    female: boolean
    age: number
}
const IteracionObjetos = () => {
    const animals: animal[] = [{
        name: 'cat',
        legs: 4,
        female: false,
        age: 3
    }, {
        name: 'dog',
        legs: 4,
        female: true,
        age: 7
    }];
    return (
        <div style={{ border: '1px solid purple', padding: '30px', marginBottom: '20px' }}>
            <p style={{ fontWeight: 'bold' }}>---- Iteración con objetos ----</p>
            {animals.map((animal) => {
                return Object.entries(animal).map(([keys, value]) => {
                    return (
                        <p>{keys}:{value}</p>
                    );
                });
            })}

        </div>
    );
}

export default IteracionObjetos;