import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import * as Scroll from 'react-scroll';

class TopMenu extends React.Component {
    render() {
      return <Navbar bg="white" fixed="top" expand="sm"> {/* missing id mainNav */}
      <Container>
        <Navbar.Brand href="#home" onClick={() => Scroll.animateScroll.scrollToTop()}>React-GrayScale</Navbar.Brand> 
        <Navbar.Toggle class="navbar-toggler-right" aria-controls="responsive-navbar-nav" aria-expanded="false" aria-label="Toggle navigation" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ml-auto">
            <Scroll.Link smooth={true} duration={500} spy={true} className="nav-link" href="#about" to="about">About</Scroll.Link>
            <Scroll.Link smooth={true} duration={500} spy={true} className="nav-link" href="#projects" to="projects">Projects</Scroll.Link>
            <Scroll.Link smooth={true} duration={500} spy={true} className="nav-link" href="#signup" to="signup">Contact</Scroll.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    }
  }

export default TopMenu;