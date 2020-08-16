import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.scss';
import Character from './Character';
import Footer from './Footer';
import Cv from './Cv';
import Contact from './Contact';
import Header from './Header';

const ps = [
  'Lolita, luz de mi vida, fuego de mis entrañas. Pecado mío, alma mía. Lo-li-ta: la punta de la lengua emprende un viaje de tres pasos paladar abajo hasta apoyarse, en el tercero, en el borde de los dientes. Lo. Li. Ta.',
  'Era Lo, sencillamente Lo, por la mañana, cuando estaba derecha, con su metro cuarenta y ocho de estatura, sobre un pie enfundado en un calcetín. Era Lola cuando llevaba puestos los pantalones. Era Dolly en la escuela. Era Dolores cuando firmaba. Pero en mis brazos fue siempre Lolita.',
  '¿Tuvo Lolita una precursora? Naturalmente que sí. En realidad, Lolita no hubiera podido existir para mí si un verano no hubiese amado a otra niña iniciática. En un principado junto al mar. ¿Cuándo? Aquel verano faltaban para que naciera Lolita casi tantos años como los que tenía yo entonces. Pueden confiar en que la prosa de los asesinos sea siempre elegante.',
  'Señoras y señores del jurado, la prueba número uno es lo que los serafines, los mal informados e ingenuos serafines de majestuosas alas, envidiaron. Contemplen esta maraña de espinas.',
];
function App() {
  const [style, setStyle] = useState({});
  // const changeColor = (color) => setStyle({ backgroundColor: color });
  return (
    <div className="App">
      <Header />
      <Contact />
      <Route exact path="/">
        <div>
          {ps.map((paragraph, pindex) => (
            <p key={pindex} className="paragraph">
              {paragraph.split('').map((character, index) => (
                <Character
                  key={`${character}-${index}`}
                  // changeColor={changeColor}
                >
                  {character}
                </Character>
              ))}
            </p>
          ))}
          <div className="background" style={style}></div>
        </div>
      </Route>
      <Footer />

      <Switch>
        <Route path="/cv" component={Cv} />
      </Switch>
    </div>
  );
}

export default App;
