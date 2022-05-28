import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Global } from './Styles/Global.styles.js';
import Home from './pages/Home/Home.js';
import Projetos from './pages/Projetos/Projetos.js';
import Sobre from './pages/Sobre/Sobre.js';
import Contato from './pages/Contato/Contato.js';
import Provider from './context/Provider.js';
// import { createBrowserHistory } from "history";

// let { location } = createBrowserHistory();

function App() {
  // console.log(location);
  return (
    <div>
      <Provider>
        <Global />
        <Routes >
          <Route exact path="/projetos" element={ <Projetos /> } />
          <Route exact path="/sobre" element={ <Sobre /> } />
          <Route exact path="/contato" element={ <Contato /> } />
          <Route exact path="/" element={ <Home /> } />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
