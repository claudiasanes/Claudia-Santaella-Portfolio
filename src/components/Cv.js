import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Curriculum from '../images/ClaudiaSantaellaCV.jpg';

function Cv() {
  return (
    <div className="cv-container">
      <img className="cv-img" src={Curriculum} alt="curriculum" />
    </div>
  );
}

export default Cv;
