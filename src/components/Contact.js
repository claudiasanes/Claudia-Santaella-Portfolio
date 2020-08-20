import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

function Contact() {
  return (
    <>
      <div className="contact__container">
        <Link to="/" className="contact__return-btn">
          <div className="return"> RETURN</div>
        </Link>

        <ul className="contact__list">
          <li className="contact__list__item">
            <a className="link" href="mailto:claudiasanes@gmial.com">
              Email
            </a>
          </li>
          <li className="contact__list__item">
            <a
              className="link"
              href="https://github.com/claudiasanes"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="contact__list__item">
            <a
              className="link"
              href="https://www.linkedin.com/in/claudiasantaella/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="contact__list__item">
            <a
              className="link"
              href="https://www.instagram.com/__santaella/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li className="contact__list__item">
            <a
              className="link"
              href="https://twitter.com/__Santaella"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Contact;
