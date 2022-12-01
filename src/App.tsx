import './App.css';
import FizzBuzz from './PrincipalPage/FizzBuzz';
import ToDoList from './PrincipalPage/ToDoList';
import FootballMatch from './PrincipalPage/Reducer/FootballMatch';
import IteracionObjetos from './PrincipalPage/IteracionObjetos';
import Buscador from './PrincipalPage/Buscador';
import CheckList from './PrincipalPage/ChechList';
import RickAndMorty from './PrincipalPage/RickAndMorty';
import PrintCard from './PrincipalPage/PrintCard';
import Marcador from './PrincipalPage/Marcador';
import TicTacToe from './PrincipalPage/TicTacToe';
import Pokemon from './PrincipalPage/Pokemon';
import AdivinarNum from './PrincipalPage/AdivinarNum';
import ChangeSizeColor from './PrincipalPage/ChangeSizeColor';
import { FcHighPriority } from "react-icons/fc";
import PrincipalPage from './PrincipalPage';
import { useState } from 'react';
function App() {
  const [numOpen, setNumOpen] = useState<number>(1);

  const openExercice = (num: number) => {
    setNumOpen(num);
  }

  const getExerciceComponent = () => {
    switch (numOpen) {
      case 1:
        return <Marcador></Marcador>;
      case 2:
        return <Pokemon></Pokemon>;
      case 3:
        return <ToDoList></ToDoList>;
      case 4:
        return <IteracionObjetos></IteracionObjetos>;
      case 5:
        return <RickAndMorty></RickAndMorty>;
      case 6:
        return <Buscador></Buscador>;
      case 7:
        return <CheckList></CheckList>;
      case 8:
        return <PrintCard></PrintCard>;
      case 9:
        return <AdivinarNum></AdivinarNum>;
      case 10:
        return <FootballMatch></FootballMatch>;
      case 11:
        return <TicTacToe></TicTacToe>;
      case 12: 
        return <ChangeSizeColor></ChangeSizeColor>
    }
  }

  return (
    <div className="App">
      <h2>---- Still in progress <FcHighPriority size={20} /> ----</h2>
      <PrincipalPage handleClickOpenExercice={(exerciceNum) => openExercice(exerciceNum)}>
        {getExerciceComponent()};
      </PrincipalPage>
      <FizzBuzz></FizzBuzz>
    </div>
  );
}

export default App;
 