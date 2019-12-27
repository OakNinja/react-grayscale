import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import * as Scroll from 'react-scroll';


class TopMenu extends React.Component {
    constructor (props){
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }
    
    componentDidMount() {
    
      Scroll.Events.scrollEvent.register('begin', function() {
        console.log("begin", arguments);
      });
    
      Scroll.Events.scrollEvent.register('end', function() {
        console.log("end", arguments);
      });
    
      Scroll.scrollSpy.update();
    }
    scrollToTop(options) {
      Scroll.animateScroll.scrollToTop(options);
    }
    componentWillUnmount() {
      Scroll.Events.scrollEvent.remove('begin');
      Scroll.Events.scrollEvent.remove('end');
    }

    render() {
      return <Navbar fixed="top" expand="sm"> {/* missing id mainNav */}
                <Container>
                    <Navbar.Brand>
                        <Scroll.Link className="nav-link" smooth={true} duration={500} spy={true} href="#home" to="home">React-GrayScale</Scroll.Link>
                    </Navbar.Brand> 
                    <Navbar.Toggle className="navbar-toggler-right" aria-controls="responsive-navbar-nav" aria-expanded="false" aria-label="Toggle navigation" />
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