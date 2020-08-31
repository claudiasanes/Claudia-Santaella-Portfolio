import React from 'react';
import Character from './Character';
import Footer from './Footer';

const ps = [
  'Hey! I’m Claudia Santaella, a curious graphic designer who turned into front-end developer, I have +3 years of experience in creative and technological projects.',
  'I’ve mainly worked as a graphic designer and an illustrator. Recetly I’ve done a front-end developer bootcamp at Adalab. I truly believe in helping people lead more fulfilling lives throught design and front-end development, understanding their needs and bulding strategy.',
  'I love meeting new people and I’m available for hire or colaborations, don’t be afraid to say hello.',
];

function Main(props) {
  return (
    <>
      <div className="header header-left">
        <h1 className="header__title">Claudia Santaella</h1>
        <div>
          <button className="menu-hamburguer">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      <div className="main wrapper">
        {ps.map((paragraph, pindex) => (
          <p key={pindex} className="paragraph">
            {paragraph.split('').map((character, index) => (
              <Character key={`${character}-${index}`}>{character}</Character>
            ))}
          </p>
        ))}
        <div className="cv-btn">
          <a href={props.cv} download>
            download CV
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Main;
