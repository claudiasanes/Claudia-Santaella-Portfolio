import React from 'react';
import '../App.scss';
import Main from './Main';
import Curriculum from '../images/ClaudiaSantaellaCV.jpg';
import Aside from './Aside';

class App extends React.Component {
  state = {
    isMenuOpen: false,
    isActive: false,
  };

  handleToggleMenu = () => {
    this.setState((prevState) => {
      return { isMenuOPen: !prevState.isMenuOPen };
    });
  };

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
    // this.setState((prevState) => {
    //   return { isActive: !prevState.isActive };
    // });
  };

  render() {
    return (
      <div className="App">
        <div className="columns-container">
          <Main
            cv={Curriculum}
            handleClickMenu={this.handleToggleMenu}
            isActive={this.state.isActive}
            toggleButton={this.toggleButton}
          />
          <Aside show={this.state.isMenuOPen} />
        </div>
      </div>
    );
  }
}

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleCollapsable = () => {
//     if (isMenuOpen !== false) {
//       setIsMenuOpen(true);
//     } else {
//       setIsMenuOpen(true);
//     }
//   };

//   return (
//     <div className="App">
//       <div className="columns-container">
//         <Main cv={Curriculum} />
//         <Aside />
//       </div>
//     </div>
//   );
// }

export default App;
