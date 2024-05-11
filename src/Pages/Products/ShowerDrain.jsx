import React from "react";


function Products() {
    return (
        <div>
            <div className="header-base">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="title-base text-left">
                                <h1>Shower Drain</h1>
                                {/* <p>Success is no accident. It is hard work, perseverance, studying, sacrifice and most of all, love of what you are doing or learning to do.</p> */}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <ol className="breadcrumb b white">
                                <li><a href="#">Products</a></li>
                                <li className="active">Shower Drain</li>
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
                                        <a className="img-box lightbox" href="./template/images/products/products_4.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_4.jpg" alt />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="img-box lightbox" href="./template/images/products/products_4_1.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_4_1.jpg" alt />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="img-box lightbox" href="./template/images/products/products_4_2.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_4_2.jpg" alt />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="img-box lightbox" href="./template/images/products/products_4_3.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_4_3.jpg" alt />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="img-box lightbox" href="./template/images/products/products_4_4.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_4_4.jpg" alt />
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 boxed white row-17">
                            <h2 className="text-color">Description</h2>
                            <hr className="space m" />
                            <p>
                            Designed specifically for shower areas, our shower channels combine functionality with aesthetic appeal. Featuring sleek designs and high-quality materials, they provide efficient water drainage to enhance the comfort and safety of shower spaces.
                            </p>
                            {/* <hr className="space s" /> */}
                            {/* <a href="#" className="btn-text text-color"> Visit website</a> */}
                        </div>
                    </div>
                    <hr className="space" />
                    <h2>Specification</h2>
                    <hr className="space m" />
             <img src="./template/images/products/products_4_type.png" style={{width: "100%"}} alt=""  />
                    
                    <div class="row">
                       <img className="col-md-6" src="./template/images/products/products_4_type1.jpg" alt="products_4_type" />
                            <img className="col-md-6" src="./template/images/products/products_4_type2.jpg" alt="products_4_type" />
                       </div>
                        
                    

                   
                </div>
            </div>
        </div>

      )
    }
    

export default Products;