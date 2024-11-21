import React from "react";

function Products() {
  return (
    <div>
      <div className="header-base">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="title-base text-left">
                <h1>Trench Drain Channel</h1>
                {/* <p>Success is no accident. It is hard work, perseverance, studying, sacrifice and most of all, love of what you are doing or learning to do.</p> */}
              </div>
            </div>
            <div className="col-md-3">
              <ol className="breadcrumb b white">
                <li>
                  <a href="#">Products</a>
                </li>
                <li className="active">Trench Drain Channel </li>
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
                      href="./template/images/products/trench drain channel.jpg"
                      data-lightbox-anima="fade-top"
                    >
                      <img
                        src="./template/images/products/trench drain channel.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="img-box lightbox"
                      href="./template/images/products/trench drain channel01.jpg"
                      data-lightbox-anima="fade-top"
                    >
                      <img
                        src="./template/images/products/trench drain channel01.jpg"
                        alt=""
                      />
                    </a>
                  </li>
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
                The versatility of our channel portfolio allows for easy
                customization, making it simple for customers to select a
                solution that fits their specific project needs. Key parameters
                like channel length, depth, and outlet position can be tailored
                without affecting delivery lead times, offering a seamless and
                efficient experience.
              </p>
              {/* <hr className="space s" /> */}
              {/* <a href="#" className="btn-text text-color"> Visit website</a> */}
            </div>
          </div>
          <hr className="space" />
          <h2 style={{ lineHeight: "0" }}>Specifation</h2>
          <p>
            The hygienic box channels from MAX Building Solutions are ideal for
            concrete, tile, and resin floors. They can be easily specified based
            on your project requirements or selected from predefined fixed
            dimensions for convenience.
          </p>
          <br />
          <h2 style={{ lineHeight: "0", fontSize: "23px" }}>Key Features:</h2>
          <p>
            <ul>
              <li>
                Hygienic Design: Designed in accordance with EN 1672, EN ISO
                14159, and EHEDG guidelines ensuring compliance with strict
                hygiene standards.
              </li>
              <li>
                Certifications: Tested and certified for load class to meet EN
                1253-1 standards for drainage systems.
              </li>
              <li>
                Material Options: Available in high-quality stainless steel
                grades: 1.4301 (Grade 304) or 1.4404 (Grade 316L).
              </li>
              <li>
                Finish & Durability: Fully pickled and passivated for
                long-lasting corrosion resistance and smooth, hygienic surfaces.
              </li>
              <li>Material Thickness: As per client requirment.</li>
              {/* <li>
                Material Options: Available in high-quality stainless steel
                grades:
                <ul>
                  <li> 1.4301 (Grade 304)</li> or <li>1.4404 (Grade 316L). </li>
                  <li> Galvanized Steel.</li>
                </ul>
              </li> */}
            </ul>
          </p>
          <br />
          <div class="row">
            <img
              src="./template/images/products/trench drain.png"
              alt="products_5_type"
              width="250px"
              height="200px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
