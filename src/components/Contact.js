import React from 'react';
import '../App.scss';

function Contact() {
  return (
    <>
      <div className="marquee-border">
        <h2 className="marquee-title wrapper">contact contact contact </h2>
      </div>
      <div className="contact__container">
        <ul className="contact__list">
          <li className="contact__list__item wrapper">
            <a className="link" href="mailto:claudiasanes@gmial.com">
              Email
            </a>
          </li>
          <li className="contact__list__item wrapper">
            <a
              className="link"
              href="https://github.com/claudiasanes"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="contact__list__item wrapper">
            <a
              className="link"
              href="https://www.linkedin.com/in/claudiasantaella/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="contact__list__item wrapper">
            <a
              className="link"
              href="https://www.instagram.com/__santaella/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li className="contact__list__item wrapper">
            <a
              className="link"
              href="https://twitter.com/__Santaella"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li className="contact__list__item wrapper">
            <a
              className="link"
              href="https://www.claudiasantaella.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Design&Illustration
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Contact;
