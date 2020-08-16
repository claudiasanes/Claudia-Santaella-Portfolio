import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';
import Curriculum from '../images/ClaudiaSantaellaCV.jpg';

function Cv() {
  return (
    <div className="cv-container">
      <Link to="/" className="return-btn">
        RETURN
      </Link>
      <img className="cv-img" src={Curriculum} alt="curriculum" />
    </div>
  );
}

export default Cv;
