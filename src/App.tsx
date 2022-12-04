import './App.css';
import { FcHighPriority } from "react-icons/fc";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from './Components/Menu/Menu';
import ExercicesMenu from './Components/ExercicesMenu/ExercicesMenu';
import ReactBasics from './Components/ReactBasics/ReactBasics';
import Lists from './Components/Lists';
import ReactHooks from './Components/ReactHooks/ReactHooks';
import ApiPractice from './Components/ApiPractice/ApiPractice';
import Games from './Components/Games/Games';
import { useState } from 'react';
import ColorContext from './Context/ColorContext';

function App() {
  const [lightOn, setLightOn] = useState(false);


  return (
    <div className="App">
      <h2 className={lightOn ? "lightProgress" : "progress"}>---- Still in progress <FcHighPriority size={20} /> ----</h2>
      <h1 className={lightOn ? "lightTitle" : "title"}>Hey there! That is my practice exercicies. </h1>
      <p className={lightOn ? "lightSubtitle" : "subtitle"}>Made with ReactJS + typescript + CSS3</p>
     
      <ColorContext.Provider value={{lightOn, setLightOn}}>
        <Router>
          <div className="flex">
            <Menu></Menu>
            <Routes>
              <Route path="/" element={<ExercicesMenu></ExercicesMenu>}></Route>
              <Route path="/reactbasics/*" element={<ReactBasics></ReactBasics>}></Route>
              <Route path="/todolists/*" element={<Lists></Lists>}></Route>
              <Route path="/reacthooks/*" element={<ReactHooks></ReactHooks>}></Route>
              <Route path="/api/*" element={<ApiPractice></ApiPractice>}></Route>
              <Route path="/games/*" element={<Games></Games>}></Route>
            </Routes>
          </div>
        </Router>
      </ColorContext.Provider>
    </div>
  );
}

export default App;
