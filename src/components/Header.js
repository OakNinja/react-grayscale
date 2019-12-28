import React from 'react';
import * as Scroll from 'react-scroll';

function Header(props) {
  return (
    <header id="scroll-to-top" name="scroll-to-top" className="masthead">
    <div name="home" className="container d-flex h-100 align-items-center">
      <div className="mx-auto text-center">
      <h1 className="mx-auto my-0 text-uppercase">{props.title}</h1>
      <h2 className="text-white-50 mx-auto mt-2 mb-5">{props.text}</h2>
      <Scroll.Link smooth={true} duration={500} spy={true} to="about" className="btn btn-primary js-scroll-trigger">{props.buttonLabel}</Scroll.Link>
      </div>
    </div>
  </header>
    );
  }

export default Header;