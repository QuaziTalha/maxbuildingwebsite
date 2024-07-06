import React, {Component} from "react";

class Footer extends Component{
  render(){
    return(
      <div>
  <i className="scroll-top scroll-top-mobile show fa fa-sort-asc" />
  <footer className="footer-base">
    <div className="container content">
      <div className="row">
        <div className="col-md-4">
          <img className="logo" src="./template/images/logo.png" style={{marginBottom: "0px", height:"100%"}} alt="logo" />
          <hr className="space s" />
          <p className="text-s">
          We, MAX Building Solutions (MBS) Was Established In The Year 2019 As MAX Trading And Services. MBS Has Emerged As A Manufacturer And Exporter 
          </p>
          <hr className="space s" />
          <div className="btn-group social-group btn-group-icons">
            <a target="_blank" href="#" data-social="share-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
              <i className="fa fa-facebook text-s circle" />
            </a>
            <a target="_blank" href="#" data-social="share-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
              <i className="fa fa-twitter text-s circle" />
            </a>
            <a target="_blank" href="#" data-social="share-google" data-toggle="tooltip" data-placement="top" title="Google+">
              <i className="fa fa-google-plus text-s circle" />
            </a>
            <a target="_blank" href="#" data-social="share-linkedin" data-toggle="tooltip" data-placement="top" title="LinkedIn">
              <i className="fa fa-linkedin text-s circle" />
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <h3 className="text-black text-uppercase">Contact Info</h3>
          <hr className="space space-30" />
          <ul className="fa-ul text-s ul-squares">
            <li><b>MAX Building Solutions L.L.C-FZ</b></li>
          <li><b>U.A.E</b> Meydan Grandstand, 6th floor,<br/> Meydan Road, Nad Al Sheba, Dubai</li>

            <li><b>India</b>Plot No.12, Nehru Nagar, Kat Kat Gate, Aurangabad</li>
            <li>info@maxbuildingsolution.com</li>
            <li>+91 848 309 4242</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3 className="text-black text-uppercase">Useful resources</h3>
          <hr className="space space-30" />
          <div className="footer-menu text-s">
            <a href="./">HOME</a>
            <a href="about_us">ABOUT US</a>
            <a href="/products">PRODUCTS</a>
            <a href="/projects">PROJECTS</a>
            <a href="/privacy">PRIVACY POLICY</a>
            <a href="#">CONTACT US</a>
          </div>
        </div>
      </div>
      <hr className="space hidden-sm" />
      <div className="row copy-row">
        <div className="col-md-12 copy-text">
          A Website by <a href="https://graphicon.in/">Graphicon Design Studio</a>
        </div>
      </div>
    </div>
  </footer>
</div>

    )
  }
}

export default Footer