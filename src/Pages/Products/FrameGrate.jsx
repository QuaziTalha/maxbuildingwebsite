import React from "react";

function Products() {
  return (
    <div>
      <div className="header-base">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="title-base text-left">
                <h1>Frame Grate</h1>
                {/* <p>Success is no accident. It is hard work, perseverance, studying, sacrifice and most of all, love of what you are doing or learning to do.</p> */}
              </div>
            </div>
            <div className="col-md-3">
              <ol className="breadcrumb b white">
                <li>
                  <a href="#">Products</a>
                </li>
                <li className="active">Frame Grate </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="section-empty " style={{ backgroundColor: "white" }}>
        <div className="container content">
          <div className="row">
            <div className="col-md-8">
              <div
                className="flexslider slider nav-inner white row-17"
                data-options="numItems:3,controlNav:true,itemMargin:60"
              >
                <ul className="slides">
                  <li>
                    <a
                      className="img-box lightbox"
                      href="./template/images/products/frame grate.jpg"
                      data-lightbox-anima="fade-top"
                    >
                      <img
                        src="./template/images/products/frame grate.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  {/* <li>
                    <a
                      className="img-box lightbox"
                      href="./template/images/products/trench drain channel01.jpg"
                      data-lightbox-anima="fade-top"
                    >
                      <img
                        src="./template/images/products/trench drain channel01.jpg"
                        alt=''
                      />
                    </a>
                  </li> */}
                  {/* <li>
                    <a
                      className="img-box lightbox"
                      href="./template/images/products/products_5_2.jpg"
                      data-lightbox-anima="fade-top"
                    >
                      <img
                        src="./template/images/products/products_5_2.jpg"
                        alt
                      />
                    </a>
                  </li> */}
                  {/* <li>
                    <a
                      className="img-box lightbox"
                      href="./template/images/products/products_5_3.jpg"
                      data-lightbox-anima="fade-top"
                    >
                      <img
                        src="./template/images/products/products_5_3.jpg"
                        alt
                      />
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-md-4 boxed white row-17">
              <h2 className="text-color">Description</h2>
              <hr className="space m" />
              <p>
                Our Frame with Grating are designed for effective wastewater
                management across various settings, combining durability, high
                performance, and easy maintenance. Crafted from premium
                stainless steel, our floor drains meet stringent hygiene and
                quality standards, ensuring lasting reliability.
              </p>
              {/* <hr className="space s" /> */}
              {/* <a href="#" className="btn-text text-color"> Visit website</a> */}
            </div>
          </div>
          <hr className="space" />
          <h2 style={{ lineHeight: "0" }}>Specifation</h2>
          <p>
            MAX Building Solutions' Frame with Grating are designed for
            effective wastewater management across various settings, combining
            durability, high performance, and easy mainte- nance. Crafted from
            premium stainless steel, our floor drains meet stringent hygiene and
            quality standards, ensuring lasting reliability.
          </p>
          <br />
          <h2 style={{ lineHeight: "0", fontSize: "23px" }}>Key Features:</h2>
          <p>
            <ul>
              <li>
                {" "}
                According to EN 1253-2:2015 Designed and optimised for use in
                commercial.{" "}
              </li>
              <li>
                Available along with gratings for load classes up to C 250 (EN
                1253).
              </li>
              <li>
                {" "}
                Mesh grating sleep resistant as per DIN 51130. Suitable for
                vinyl, tiled, concrete and resin floors.
              </li>
              <li>
                Frame with grating can be fully customised as per the site
                requirements.
              </li>
              <li>
                {" "}
                The size of Frame & grating are specified by (Width X Length X
                Height).
              </li>
              <li>
                Material Options: Available in high-quality stainless steel
                grades:
                <ul>
                  <li> 1.4301 (Grade 304)</li> or <li>1.4404 (Grade 316L). </li>
                  <li> Galvanized Steel.</li>
                </ul>
              </li>
            </ul>
          </p>
          <hr className="space m" />
          <h2>Types Of Frame With Grating</h2>
          <hr className="space m" />
          <img
            src="./template/images/products/types of frame grates.png"
            style={{ width: "50%", height: "300px", objectFit: "contain" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
