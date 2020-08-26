import React from 'react';
import '../App.scss';
import Main from './Main';

import Curriculum from '../images/ClaudiaSantaellaCV.jpg';
import Aside from './Aside';

function App() {
  return (
    <div className="App">
      <div className="columns-container">
        <Main />
        <Aside />
      </div>
    </div>
  );
}

export default App;
