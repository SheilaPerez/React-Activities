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

function App() {
  return (
    <div className="App">
      <AdivinarNum></AdivinarNum>
      <Pokemon></Pokemon>
      <TicTacToe></TicTacToe>
      <Marcador></Marcador>
      <PrintCard></PrintCard>
      <RickAndMorty></RickAndMorty>
      <CheckList></CheckList>
      <Buscador></Buscador>
      <ToDoList></ToDoList>
      <IteracionObjetos></IteracionObjetos>
      <FootballMatch></FootballMatch>
      <FizzBuzz></FizzBuzz>
    </div>
  );
}

export default App;
 