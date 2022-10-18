import './App.css';
import FizzBuzz from './PrincipalPage/FizzBuzz';
import ToDoList from './PrincipalPage/ToDoList';
import FootballMatch from './PrincipalPage/Reducer/FootballMatch';
import IteracionObjetos from './PrincipalPage/IteracionObjetos';
import Buscador from './PrincipalPage/Buscador';
import CheckList from './PrincipalPage/ChechList';
import Api from './PrincipalPage/Api';
function App() {
  return (
    <div className="App">
      <Api></Api>
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
 