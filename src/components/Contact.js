import React from 'react';
import '../App.scss';

function Contact() {
  return (
    <>
      <div className="marquee-border">
        <span className="marquee-title wrapper">contact contact contact </span>
        {/* <span className="marquee-title wrapper">contact contact contact </span> */}
      </div>
      <div className="contact__container">
        <ul className="contact__list">
          <li className="contact__list__item wrapper">
            <a className="link" href="mailto:claudiasanes@gmail.com">
              <span>Email</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </li>
          <li className="contact__list__item wrapper">
            <a
              className="link"
              href="https://github.com/claudiasanes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </li>
          <li className="contact__list__item wrapper">
            <a
              className="link"
              href="https://www.linkedin.com/in/claudiasantaella/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </li>
          <li className="contact__list__item wrapper">
            <a
              className="link"
              href="https://www.claudiasantaella.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Design & Illustration</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </li>
          <li className="contact__list__item wrapper">
            <a
              className="link"
              href="https://www.instagram.com/__santaella/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Instagram</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </li>
          <li className="contact__list__item wrapper">
            <a
              className="link"
              href="https://twitter.com/__Santaella"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Twitter</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Contact;
