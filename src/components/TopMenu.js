import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import * as Scroll from 'react-scroll';


class TopMenu extends React.Component {

    state = { isTopOfPage: true };


    constructor (props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }
    
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        const currentYScroll = window.scrollY;
        
        if (this.state.isTopOfPage && currentYScroll < 50) {
            return;
        }
        if (currentYScroll < 50) {
          this.setState({ isTopOfPage: true });
        } else {
            this.setState({ isTopOfPage: false });
        }
      }

    render() {
      return <Navbar fixed="top" className={(this.state.isTopOfPage ? '' : 'navbar-shrink')} expand="sm"> {/* missing id mainNav */}
                <Container>
                    <Navbar.Brand>
                        <Scroll.Link smooth={true} duration={500} spy={true} href="#scroll-to-top" to="scroll-to-top">React-GrayScale</Scroll.Link>
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