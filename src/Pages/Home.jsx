import React, { Component } from "react";
import ProductsCard from "../components/ProductsCard";

class Home extends Component {


  
  render() {
    const urlParams = new URLSearchParams(window.location.search);
    const language = urlParams.get('l');

    // Define text content based on the language
    const welcomeText = language === 'ar' ? "مرحبًا بك<br/>في حلول بناء ماكس" : "Welcome<br/>To Max<br/>Building<br/>Solutions";

    return (
      <div>
        <div className="section-slider">
          <div className="flexslider slider white" data-options="animation:fade,controlNav:false,slideshowSpeed:4000">
            <ul className="slides">
              <li>
                <div className="bg-cover" style={{ backgroundImage: 'url("./template/images/hd-1.jpg")' }} />
              </li>
              <li>
                <div className="bg-cover" style={{ backgroundImage: 'url("./template/images/hd-2.jpg")' }} />
              </li>
            </ul>
          </div>
          <div className="container content overlay-content white" style={{paddingBottom:"70px"}}>
            <div className="row">
              <div className="col-md-6">
                <h1 className="text-uppercase" dangerouslySetInnerHTML={{ __html: welcomeText }} ></h1>
              </div>
              <div className="col-md-2 pull-right text-right">
                <hr className="space space-250" style={{height:"150px"}} />
                <a href="#" className="btn btn-sm btn-yellow nav-justified">Contacts</a>
              </div>
              <div className="col-md-2 pull-right text-right">
                <hr className="space space-250" style={{height:"150px"}} />
                <a href="#" className="btn btn-sm btn-border  nav-justified">About US</a>
              </div>
            </div>
          </div>
        </div>
        <div className="section-empty">
          <div className="container content">
            <div className="flexslider carousel outer-navs" data-options="minWidth:200,itemMargin:30,numItems:4,controlNav:true,directionNav:true">
              <ul className="slides">
                <li>
                  <div className="advs-box advs-box-top-icon boxed-inverse" data-href>
                    <i className="im-crane icon circle" />
                    <h3>High Quality Products</h3>
                    <p>
                      Supplying high quality stainless steel drainage channels, gullies, frame and gratings, Floor Drain, Cleanout, Shower Drain, Kitchen channel etc.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="advs-box advs-box-top-icon boxed-inverse" data-href>
                    <i className="im-office-lamp icon circle" />
                    <h3>Hygienic <br/>Solutions</h3>
                    <p>
                      Our portfolio has expanded and we provide a solution in commercial and industrial market sectors where hygiene is of importance.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="advs-box advs-box-top-icon boxed-inverse" data-href>
                    <i className="im-repair icon circle" />
                    <h3>Timely <br/>Delivery</h3>
                    <p>
                      We firmly believe in timeliness of our product delivery; <br/>making sure it reaches the destination at the intended date and time.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="advs-box advs-box-top-icon boxed-inverse" data-href>
                    <i className="im-thread icon circle" />
                    <h3>Wide Range of Products</h3>
                    <p>
                      Our products varies across several domains of work such as Food Production, Kitchens, Health, Pharmaceutical <br/>and Leisure.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="advs-box advs-box-top-icon boxed-inverse" data-href>
                    <i className="im-computer icon circle" />
                    <h3>Custom Products Available</h3>
                    <p>
                      Supplying our products<br/> in a standard, adapted <br/>or totally customized <br/>form to meet your <br/>requirements.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <hr />
            <table className="grid-table border-table grid-table-xs-12 text-left">
              <tbody>
                <tr>
                  <td>
                    <h2>About us</h2>
                    <p>
                    MAX Building Solutions is a premier provider of innovative and high-quality water drainage solutions for  industrial, commercial, and residential projects. Since our establishment in 2011, we have been dedicated to revolutionizing the water drainage industry with cutting-edge technology, superior craftsmanship
                    </p>
                    <a href="#" className="btn btn-sm">About us</a>
                  </td>
                  <td>
                    <hr className="space visible-sm" />
                    <h2>Our Mission</h2>
                    <p>
                    Our mission at MAX Building Solutions is to lead the water drainage industry through innovation, superior craftsmanship, and unwavering dedication to customer satisfaction. We strive to revolutionize construction practices by providing cutting-edge drainage solutions for industrial, commercial, and residential projects.


                    </p>
                    <a href="#" className="btn btn-sm">Contact us</a>
                  </td>
                  <td>
                    <hr className="space visible-sm" />
                    <h2>Our Vision</h2>
                    <p>
                    Our vision is to be the foremost leader and trusted partner in the global water drainage industry. We aspire to set the standard for excellence by continuously innovating and delivering cutting-edge solutions .We envision a future where our products are synonymous with quality, reliability, and performance. 
                    </p>
                    <a href="#" className="btn btn-sm">Our Products</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="section-empty">
          <div className="container content">
            <h2 className="pull-left">Featured projects</h2>
            <br/>
            <hr className="space visible-sm" />
            <div className="maso-list">
              <div className="navbar navbar-inner text-right">
                <div className="navbar-toggle"><i className="fa fa-bars" /><span>Menu</span><i className="fa fa-angle-down" /></div>
                
              </div>
              <div className="maso-box row">
                <ProductsCard 
                  title="Floor Drain"
                  description="" 
                  link = "floor_drain"
                  imageUrl="./template/images/products/products_1_small.jpg"
                />
                <ProductsCard 
                  title="Modular Channel"
                  description="" 
                  link = "modular_drain"
                  imageUrl="./template/images/products/products_2_small.jpg"
                />
                <ProductsCard 
                  title="Slot Drain Channel"
                  description="" 
                  link = "slot_drain"
                  imageUrl="./template/images/products/products_3_small.jpg"
                />
                <ProductsCard 
                  title="Shower Channels"
                  description="" 
                  link = "shower_channels"
                  imageUrl="./template/images/products/products_4_small.jpg"
                />
                <ProductsCard 
                  title="Floor Cleanout"
                  description="" 
                  link = "floor_cleanout"
                  imageUrl="./template/images/products/products_5_small.jpg"
                />
                
                
                <div className="clear" />
              </div>
            </div>
          </div>
        </div>
        <div className="section-bg-image parallax-window white" data-natural-height={1080} data-natural-width={1920} data-parallax="scroll" data-image-src="./template/images/hd-3.jpg">
          <div className="container content">
            <div className="row">
              <div className="col-md-8 col-center text-center">
                <h4 className="text-color">Join our amazing team</h4>
                <h1 className="text-uppercase">We are hard workers that follow the latest trends</h1>
                <hr className="space s" />
                <a href="#" className="btn-text text-color">Apply now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="section-empty bg-white">
          <div className="container content">
            <div className="row">
              <div className="col-md-6">
                <h2>Get in touch with us</h2>
                <hr className="space m" />
                <form  className="form-box form-ajax" >
                  <input id="name" name="name" placeholder="Full name" type="text" className="form-control form-value" required />
                  <hr className="space s" />
                  <div className="row">
                    <div className="col-md-6">
                      <input id="phone" name="phone" placeholder="Phone" type="text" className="form-control form-value" />
                    </div>
                    <div className="col-md-6">
                      <input id="email" name="email" placeholder="Email" type="email" className="form-control form-value" required />
                    </div>
                  </div>
                  <hr className="space s" />
                  <textarea id="messagge" name="messagge" placeholder="Your message" className="form-control form-value" required defaultValue={""} />
                  <hr className="space m" />
                  <button className="btn-sm btn">Send messagge</button>
                  <div className="success-box">
                    <div className="alert alert-success">Congratulations. Your message has been sent successfully</div>
                  </div>
                  <div className="error-box">
                    <div className="alert alert-warning">Error, please retry. Your message has not been sent</div>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <hr className="space visible-sm" />
                <h2>Our contacts</h2>
                
                <hr className="space m" />
                <div className="row">
                  <div className="col-md-6">
                   
                    <h4 className="text-color">Email</h4>
                    <p className="text-s">
                      info@maxbuildingsolution.com
                    </p>
                    <hr className="space m" />

                    <h4 className="text-color">Contact Phone</h4>
                    <p className="text-s">
                      +91 848 309 4242
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4 className="text-color">Address</h4>
                    <p className="text-s">
                      Plot No.12, Nehru Nagar, <br/>Kat Kat Gate, <br/>Aurangabad
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Home;
