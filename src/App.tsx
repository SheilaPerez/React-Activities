import React, { Suspense, useState } from 'react';
import { FcHighPriority } from "react-icons/fc";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Provider} from 'react-redux';
import Menu from './Components/Menu/Menu';
import ColorContext from './Context/ColorContext';
import './App.css';
import Store from './Components/ReduxBasics/Store/Store'
const ExercicesMenu = React.lazy(() => import ('./Components/ExercicesMenu/ExercicesMenu')) ;
const ReactBasics  = React.lazy(() => import ('./Components/ReactBasics/ReactBasics'));
const Lists = React.lazy(() => import ('./Components/Lists'));
const ReactHooks = React.lazy(() => import('./Components/ReactHooks/ReactHooks'));
const ApiPractice = React.lazy(() => import('./Components/ApiPractice/ApiPractice'));
const Games = React.lazy(() => import('./Components/Games/Games'));
const ReduxBasics = React.lazy(() => import('./Components/ReduxBasics/ReduxBasics'))
function App() {
  const [lightOn, setLightOn] = useState(false);


  return (
    <div className="App">
      <h2 className={lightOn ? "lightProgress" : "progress"}>---- Still in progress <FcHighPriority size={20} /> ----</h2>
      <h1 className={lightOn ? "lightTitle" : "title"}>Hey there! That is my practice exercicies. </h1>
      <p className={lightOn ? "lightSubtitle" : "subtitle"}>Made with ReactJS + typescript + CSS3</p>
     
      <Provider store={Store}>
        <ColorContext.Provider value={{lightOn, setLightOn}}>
          <Router>
            <div className="flex">
              <Menu></Menu>
              <Routes>
                <Route path="/" element={<Suspense><ExercicesMenu/></Suspense>}></Route>
                <Route path="/reactbasics/*" element={<Suspense><ReactBasics/></Suspense>}></Route>
                <Route path="/todolists/*" element={<Suspense><Lists/></Suspense>}></Route>
                <Route path="/reacthooks/*" element={<Suspense><ReactHooks/></Suspense>}></Route>
                <Route path="/api/*" element={<Suspense><ApiPractice/></Suspense>}></Route>
                <Route path="/games/*" element={<Suspense><Games/></Suspense>}></Route>
                <Route path="/reduxbasics/*" element={<Suspense><ReduxBasics/></Suspense>}></Route>
              </Routes>
            </div>
          </Router>
        </ColorContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
