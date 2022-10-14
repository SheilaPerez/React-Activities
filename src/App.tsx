import './App.css';
import FizzBuzz from './PrincipalPage/FizzBuzz';
import ToDoList from './PrincipalPage/ToDoList';
import FootballMatch from './PrincipalPage/Reducer/FootballMatch';
import IteracionObjetos from './PrincipalPage/IteracionObjetos';
function App() {
  return (
    <div className="App">
      <FizzBuzz></FizzBuzz>
      <ToDoList></ToDoList>
      <IteracionObjetos></IteracionObjetos>
      <FootballMatch></FootballMatch>
    </div>
  );
}

export default App;
 