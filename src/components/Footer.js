import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

function Footer() {
  return (
    <div className="footer">
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a className="link" href="aaa" alt="link">
              PROJECTS
            </a>
          </li>
          <li className="menu__item">
            <Link to="/cv" className="link">
              CV
            </Link>
          </li>
          <li className="menu__item">
            <a
              className="link"
              href="https://www.claudiasantaella.com/"
              alt="designer web"
              target="_blank"
              rel="noopener noreferrer"
            >
              DESIGN & ILLUSTRATION
            </a>
          </li>
          <li className="menu__item">
            <a className="link" href="aaa" alt="link">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
      <div className="copyright">
        <span className="copyright__text">Made by Claudiasanes. 2020</span>
      </div>
    </div>
  );
}

export default Footer;
