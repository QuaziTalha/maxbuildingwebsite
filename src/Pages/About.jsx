import React from "react";

function About() {
  return (
    <div>
      <div className="header-title ken-burn-out white" data-parallax="scroll" style={{height: "200px"}} data-natural-height={800} data-natural-width={1920} data-image-src="./template/images/wide-1.jpg">
        <div className="container" >
          <div className="title-base" style={{marginTop:"70px"}}>
            <hr className="anima" />
            <h1>About us</h1>
            {/* <p>The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can't achieve it.</p> */}
          </div>
        </div>
      </div>
      <div className="section-empty no-padding-bottom">
        <div className="container content">
          <div className="row">
           
            <div className="col-md-8 col-sm-6">
            <h4 class="text-color">Welcome to</h4>
            <h1>MAX Building Solutions</h1>
              <hr className="space m" />
              <p>
              MAX Building Solutions is a premier provider of innovative and high-quality water drainage solutions for  industrial, commercial, and residential projects. Since our establishment in 2011, we have been dedicated to revolutionizing the water drainage industry with cutting-edge technology, superior craftsmanship, and a relentless commitment to customer satisfaction.<br/>
              At MAX Building Solutions, we offer a comprehensive range of drainage products designed to meet the diverse needs of modern construction. Our portfolio includes modular channels, shower drains, floor drains, gully systems, and stainless steel trench drains, each crafted with precision and engineered for durability.
              </p>
            </div>
            
            <div className="col-md-4 text-right hidden-sm">
              <img src="./template/images/man.png" alt="Alternate Text" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="section-empty bg-white">
        <div className="container content">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h4>Team members</h4>
              <div className="counter-box-simple text-color "><span className="counter text-xl" data-to={3000} data-separator>3000</span><span className="text-s"> %</span></div>
              <hr className="space xs" />
              <p className="text-xs text-uppercase">Increase from middle 2010.</p>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Growing scale</h4>
              <div className="counter-box-simple text-color  "><span className="counter text-xl" data-to={300}>120</span><span className="text-s"> %</span></div>
              <hr className="space xs" />
              <p className="text-xs text-uppercase">Business daily growth</p>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Clients</h4>
              <div className="counter-box-simple text-color "><span className="counter text-xl" data-to={950}>950</span><span className="text-s" /></div>
              <hr className="space xs" />
              <p className="text-xs text-uppercase">N° of clients we helped.</p>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Projects</h4>
              <div className="counter-box-simple text-color"><span className="counter text-xl" data-to={2500} data-separator>2500</span><span className="text-s" /></div>
              <hr className="space xs" />
              <p className="text-xs text-uppercase">Number of projects.</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="section-empty">
        <div className="container content">
          <div className="row proporzional-row proporzional-row-sm">
            <div className="col-md-4 boxed white">
              <h2 className="text-color">OUR MISSION</h2>
              <p>
              
Our mission at MAX Building Solutions is to lead the water drainage industry through innovation, superior craftsmanship, and unwavering dedication to customer satisfaction.
              </p>
              
            </div>
            <div className="col-md-4">
              <a className="img-box lightbox" data-lightbox-anima="fade-top" href="./template/images/gallery/image-1.jpg">
                <img src="./template/images/gallery/image-1.jpg" alt />
              </a>
            </div>
            <div className="col-md-4 boxed-inverse">
              <h2>OUR VISION</h2>
              <p>
             
Our vision is to be the foremost leader and trusted partner in the global water drainage industry. We aspire to set the standard for excellence by continuously innovating .
              </p>
              {/* <a href="#" className="btn-text">Read more</a> */}
            </div>
          </div>
          <hr className="space l" />
          <div className="row proporzional-row proporzional-row-sm">
            <div className="col-md-4">
              <a className="img-box lightbox" data-lightbox-anima="fade-top" href="./template/images/gallery/image-2.jpg">
                <img src="./template/images/gallery/image-2.jpg" alt />
              </a>
            </div>
            <div className="col-md-4 boxed white">
              <h2 className="text-color">Our Values</h2>
              <p>
              At MAX Building Solutions, our core values drive everything we do. We prioritize quality, innovation, customer focus, integrity, and sustainability in all aspects of our business. These values guide us delivering superior products.
              </p>
              
            </div>
            <div className="col-md-4 boxed white">
              <h2 className="text-color">Our Commitment</h2>
              <p>
              Our Commitment : 
              At MAX Building Solutions, we are steadfastly dedicated to upholding these core values in every facet of our operations. By unwaveringly staying true to our mission and vision, we aim to drive positive impact .
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default About