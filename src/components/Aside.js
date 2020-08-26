import React from 'react';
import Projects from './Projects';
import Contact from './Contact';

function Aside() {
  return (
    <aside className="aside">
      <div className="header header-right">
        <div className="wrapper">
          <h1 className="header__title">menu</h1>
        </div>
      </div>

      <Projects />
      <Contact />
    </aside>
  );
}

export default Aside;
