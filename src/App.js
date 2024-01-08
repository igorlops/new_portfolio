import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Projetos from './pages/Projetos/Projetos';
import Cursos from './pages/Cursos/Cursos';
import Sobre from './pages/Sobre/Sobre'
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const {theme} = useDarkMode();
  return (
        <div className="d-flex flex-row" id='App'>
          <div className="col-2" id='header_app'>
            <Header/>
          </div>
          <div className={`col-10 pt-5 `} id='appContent'>

             <div id='home' className={`${theme ? "text-white bg-dark": "bg-light text-dark"}`}><Home/></div>
             <div id='sobre' className={`${!theme ? "text-white bg-dark": "bg-light text-dark"}`}><Sobre/></div>
             <div id='projetos' className={`${theme ? "text-white bg-dark": "bg-light text-dark"}`}><Projetos/></div>
             <div id='cursos' className={`${!theme ? "text-white bg-dark": "bg-light text-dark"}`}><Cursos/></div>
          </div>
        </div>
  );
}

export default App;
