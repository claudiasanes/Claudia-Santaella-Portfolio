import React from 'react';
import Projects from './Projects';
import Contact from './Contact';

function Aside(props) {
  let asideClasses = 'aside';
  if (props.show) {
    asideClasses = 'aside open';
  }

  return (
    <>
      <div className="header header-right">
        <h1 className="header__title">menu</h1>
      </div>
      <aside className={asideClasses}>
        <Contact />
        <Projects />
      </aside>
    </>
  );
}

export default Aside;
