import './App.css';
import { FcHighPriority } from "react-icons/fc";
import PrincipalPage from './PrincipalPage';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from './PrincipalPage/Menu/Menu';
import ExercicesMenu from './PrincipalPage/ExercicesMenu/ExercicesMenu';
import FizzBuzz from './PrincipalPage/ReactBasics/FizzBuzz';
import TicTacToe from './PrincipalPage/Games/TicTacToe';
import ReactBasics from './PrincipalPage/ReactBasics/ReactBasics';
import Lists from './PrincipalPage/Lists';
import ReactHooks from './PrincipalPage/ReactHooks/ReactHooks';
import ApiPractice from './PrincipalPage/ApiPractice/ApiPractice';
import Games from './PrincipalPage/Games/Games';

function App() {
  return (
    <div className="App">
      <h2>---- Still in progress <FcHighPriority size={20} /> ----</h2>
      <h1 className="title">Hey there! That is my practice exercicies. </h1>
      <p className="subtitle">Made with ReactJS + typescript + CSS3</p>
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
    </div>
  );
}

export default App;
 

/** 
      <PrincipalPage handleClickOpenExercice={(exerciceNum) => openExercice(exerciceNum)}>
        {getExerciceComponent()};
      </PrincipalPage>
      <FizzBuzz></FizzBuzz>
 **/