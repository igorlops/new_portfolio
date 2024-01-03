import './App.css';
import React, { useState, useEffect, Fragment } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home/Home';
import Projetos from './pages/Projetos/Projetos';
import Cursos from './pages/Cursos/Cursos';
import Sobre from './pages/Sobre/Sobre'
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const {theme} = useDarkMode();
  return (
      <BrowserRouter>
        <div className="col-12 d-flex flex-row">
          <div className="col-2">
            <Header/>
            <div classname="form-check form-switch">
                <input classname="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                <label classname="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
            </div>
          </div>
          <div className={`col-10 pt-5 ${theme ? "text-white bg-dark": ""}`} id='appContent'>

            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/sobre' element={<Sobre/>} />
              <Route path='/cursos' element={<Cursos/>}/>
              <Route path='/projetos' element={<Projetos/>}/>
            </Routes>
          </div>
        </div>
        </BrowserRouter>
  );
}

export default App;
