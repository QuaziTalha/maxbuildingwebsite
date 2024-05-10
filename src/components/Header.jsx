import React from "react";

export default function Header() {
  return (
    <div>
    <div id="preloader" />
    <header className="fixed-top scroll-change" data-menu-height={139} data-menu-anima="fade-in">
      <div className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="navbar-main navbar-middle">
          <div className="container">
            <div className="scroll-hide">
              <div className="container">
                <a className="navbar-brand center" href="#">
                  <img src="./template/images/logo.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="navbar-header">
              <a className="navbar-brand" href="https://templates.framework-y.com/index.html"><img src="./template/images/logo.png" alt="logo" /></a>
              <button type="button" className="navbar-toggle">
                <i className="fa fa-bars" />
              </button>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a href="./" >Home <span className="caret" /></a>
                  
                </li>
                <li className="dropdown">
                  <a href="about_us" >About Us <span className="caret" /></a>
                  
                </li>
                <li className="dropdown">
                  <a href="products" >Products <span className="caret" /></a>
                </li>
                <li className="dropdown active">
                  <a href="#" >Projects <span className="caret" /></a>
                </li>
                <li className="dropdown active">
                  <a href="#" >Contact Us <span className="caret" /></a>
                </li>
              
              </ul>
              <div className="nav navbar-nav navbar-right">
                
                <ul className="nav navbar-nav lan-menu">
                  <li className="dropdown">
                    <a href="?l=en" >EN</a>
                    <ul className="dropdown-menu">
                      <li><a href="?l=ar">Ar</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</div>

  );
}
