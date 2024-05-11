import React from "react";


function Products() {
    return (
        <div>
            <div className="header-base">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="title-base text-left">
                                <h1>Floor Cleanout</h1>
                                {/* <p>Success is no accident. It is hard work, perseverance, studying, sacrifice and most of all, love of what you are doing or learning to do.</p> */}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <ol className="breadcrumb b white">
                                <li><a href="#">Products</a></li>
                                <li className="active">Floor Cleanout</li>
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
                                        <a className="img-box lightbox" href="./template/images/products/products_5.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_5.jpg" alt />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="img-box lightbox" href="./template/images/products/products_5_1.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_5_1.jpg" alt />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="img-box lightbox" href="./template/images/products/products_5_2.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_5_2.jpg" alt />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="img-box lightbox" href="./template/images/products/products_5_3.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_5_3.jpg" alt />
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 boxed white row-17">
                            <h2 className="text-color">Description</h2>
                            <hr className="space m" />
                            <p>
                            Our floor cleanouts are essential components for maintaining clean and hygienic drainage systems. Designed for easy access and maintenance, they ensure efficient removal of debris and prevent clogging for uninterrupted water flow.
                            </p>
                            {/* <hr className="space s" /> */}
                            {/* <a href="#" className="btn-text text-color"> Visit website</a> */}
                        </div>
                    </div>
                    <hr className="space" />
                    <h2>Specification</h2>
                    <hr className="space m" />
             <img src="./template/images/products/products_5_type.png" style={{width: "100%"}} alt=""  />
                    
                    <div class="row">
                       <img  src="./template/images/products/products_5_type.jpg" alt="products_5_type" />
                       </div>
                        
                    

                   
                </div>
            </div>
        </div>

      )
    }
    

export default Products;