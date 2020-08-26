import React from 'react';
import Character from './Character';
import Footer from './Footer';

const ps = [
  'I’m a curious brand and product designer with +6 years of experience in creative and technological projects',
  'Most of my work moves among intersection of Branding, Product Design, Technology & Culture. I truly believe in new media and code as much as typography, editorial and product design.',
  'Throughout the last few years, I’ve worked on the fascinating fields of mobility, telecommunications services, fashion, and journalism.',
  'I love meeting new people and sharing all kind of stories. Do you wanna have a chat? hi@rafagarces.com',
];

function Main() {
  return (
    <div className="main">
      <div className="header header-left">
        <div className="wrapper">
          <h1 className="header__title">Claudia Santaella</h1>
        </div>
      </div>
      <div className="wrapper">
        {ps.map((paragraph, pindex) => (
          <p key={pindex} className="paragraph">
            {paragraph.split('').map((character, index) => (
              <Character key={`${character}-${index}`}>{character}</Character>
            ))}
          </p>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Main;
