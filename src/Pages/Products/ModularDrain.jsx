import React from "react";


function Products() {
    return (
        <div>
            <div className="header-base">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="title-base text-left">
                                <h1>Modular Drain</h1>
                                {/* <p>Success is no accident. It is hard work, perseverance, studying, sacrifice and most of all, love of what you are doing or learning to do.</p> */}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <ol className="breadcrumb b white">
                                <li><a href="#">Products</a></li>
                                <li className="active">Modular Drain</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-empty " style={{backgroundColor: "white"}}>
                <div className="container content">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="flexslider slider nav-inner white row-17" data-options="numItems:3,controlNav:true,itemMargin:60">
                                <ul className="slides">
                                    <li>
                                        <a className="img-box lightbox" href="./template/images/products/products_2.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_2.jpg" alt />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="img-box lightbox" href="./template/images/products/products_2_1.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_2_1.jpg" alt />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="img-box lightbox" href="./template/images/products/products_2_2.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_2_2.jpg" alt />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="img-box lightbox" href="./template/images/products/products_2_3.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_2_3.jpg" alt />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="img-box lightbox" href="./template/images/products/products_2_4.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_2_4.jpg" alt />
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 boxed white row-17">
                            <h2 className="text-color">Description</h2>
                            <hr className="space m" />
                            <p>
                            Versatile and adaptable, our modular channels provide efficient water drainage solutions for a wide range of applications. Designed for ease of installation and durability, they offer flexibility to accommodate diverse project requirements.
                            </p>
                            {/* <hr className="space s" /> */}
                            {/* <a href="#" className="btn-text text-color"> Visit website</a> */}
                        </div>
                    </div>
                    <hr className="space" />
                    <h2>Specification</h2>
                    <hr className="space m" />
             
                    <ul>
                    <li>- According to EN 1253-2:2015</li>
                    <li>- Designed and optimised for use in commercial
                    and industrial kitchens.</li>
                    <li>- Available along with gratings for load classes up
                    to C 250 (EN 1253).</li>
                    <li>- Mesh grating sleep resistant as per DIN 51130.</li>
                    <li>- Suitable for vinyl, tiled, concrete and resin floors.</li>
                    <li>- Drain Channel can be fully customised as per the site
                    requirements. The size of Drain Channels are specified by
                    (Width X Length X Height) along with Outlet Diameter.    </li>
                    </ul>  
                       <img  src="./template/images/products/products_2_type.jpg" alt="products_1_type" />
                       
                            
                        
                    

                   
                </div>
            </div>
        </div>

      )
    }
    

export default Products;