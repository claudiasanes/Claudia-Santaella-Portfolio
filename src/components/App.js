import React from 'react';
import '../App.scss';
import Main from './Main';
import Curriculum from '../images/ClaudiaSantaellaCV.jpg';
import Aside from './Aside';

function App() {
  const handleCollapsable = (targetedCollapsableId) => {
    if (targetedCollapsableId !== this.state.activePanel) {
      this.setState({ activePanel: targetedCollapsableId });
    } else {
      this.setState({ activePanel: '' });
    }
  };

  return (
    <div className="App">
      <div className="columns-container">
        <Main cv={Curriculum} />
        <Aside />
      </div>
    </div>
  );
}

export default App;
