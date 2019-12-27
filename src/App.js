import React from 'react';
import * as Scroll from 'react-scroll';
import './App.scss';
import TopMenu from './components/TopMenu';


function App() {


  return (
    <div id="home">
      <div ></div>
      {/* Navigation */}
      <TopMenu></TopMenu>

      {/* Header */}
      <header id="scroll-to-top" name="scroll-to-top" className="masthead">
        <div name="home" className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">React-Grayscale</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">A free, responsive, one page theme based on Grayscale by <a href="https://startbootstrap.com/" rel="noopener noreferrer" target="_blank" >Start Bootstrap</a></h2>
            <Scroll.Link smooth={true} duration={500} spy={true} to="about" className="btn btn-primary js-scroll-trigger">Get Started</Scroll.Link>
          </div>
        </div>
      </header>

      {/* About section */}
      <section id="about" name="about" className="about-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-white mb-4">Built with Bootstrap 4</h2>
              <p className="text-white-50">Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on
                <a href="http://startbootstrap.com/template-overviews/grayscale/">the preview page</a>. The theme is open source, and you can use it for any purpose, personal or commercial.</p>
            </div>
          </div>
          <img src="img/ipad.png" className="img-fluid" alt=""></img>
        </div>
      </section>

      {/* Projects section */}
      <section id="projects" name="projects" className="projects-section bg-light">
        <div className="container">

          {/* Featured Project Row */}
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-xl-8 col-lg-7">
              <img className="img-fluid mb-3 mb-lg-0" src="img/bg-masthead.jpg" alt=""></img>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>Shoreline</h4>
                <p className="text-black-50 mb-0">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
              </div>
            </div>
          </div>

          {/* Project One Row */}
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
              <img className="img-fluid" src="img/demo-image-01.jpg" alt=""></img>
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">Misty</h4>
                    <p className="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                    <hr className="d-none d-lg-block mb-0 ml-0"></hr>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Two Row */}
          <div className="row justify-content-center no-gutters">
            <div className="col-lg-6">
              <img className="img-fluid" src="img/demo-image-02.jpg" alt=""></img>
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">Mountains</h4>
                    <p className="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                    <hr className="d-none d-lg-block mb-0 mr-0"></hr>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* <!-- Signup Section --> */}
      <section id="signup" name="signup" className="signup-section">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto text-center">

              <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 className="text-white mb-5">Subscribe to receive updates!</h2>

              <form className="form-inline d-flex">
                <input type="email" className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" placeholder="Enter email address..."></input>
                <button type="submit" className="btn btn-primary mx-auto">Subscribe</button>
              </form>

            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section name="contact" className="contact-section bg-black">
        <div className="container">

          <div className="row">

            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fa fa-map text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4"></hr>
                  <div className="small text-black-50">4923 Market Street, Orlando FL</div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fa fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4"></hr>
                  <div className="small text-black-50">
                    <a href="#">hello@yourdomain.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fa fa-phone text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4"></hr>
                  <div className="small text-black-50">+1 (555) 902-8832</div>
                </div>
              </div>
            </div>
          </div>

          <div className="social d-flex justify-content-center">
            <a href="#" className="mx-2">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="mx-2">
              <i className="fa fa-facebook-f"></i>
            </a>
            <a href="#" className="mx-2">
              <i className="fa fa-github"></i>
            </a>
          </div>

        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="bg-black small text-center text-white-50">
        <div className="container">
          Copyright &copy; Your Website 2019
        </div>
      </footer>

      {/* <!-- Bootstrap core JavaScript -->
      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

       <!-- Plugin JavaScript --> 
      <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

       <!-- Custom scripts for this template -->
      <script src="js/grayscale.min.js"></script> */}

    </div>
  );
}

export default App;
