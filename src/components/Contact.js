import React from 'react';
import '../App.scss';

function Contact() {
  return (
    <>
      <div className="contact__container">
        <ul className="contact__list">
          <li className="contact__list__item">
            <a className="link" href="mailto:claudiasanes@gmial.com">
              Email
            </a>
          </li>
          <li className="contact__list__item">
            <a className="link" href="https://github.com/claudiasanes">
              GitHub
            </a>
          </li>
          <li className="contact__list__item">
            <a
              className="link"
              href="https://www.linkedin.com/in/claudiasantaella/"
            >
              LinkedIn
            </a>
          </li>
          <li className="contact__list__item">
            <a className="link" href="https://www.instagram.com/__santaella/">
              Instagram
            </a>
          </li>
          <li className="contact__list__item">
            <a className="link" href="https://twitter.com/__Santaella">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Contact;
