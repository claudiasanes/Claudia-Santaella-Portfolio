import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

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
            <Link to="/cv">CV</Link>
            {/* <a className="link" href="aaa" alt="link">
              CV
            </a> */}
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
    </div>
  );
}

export default Footer;
