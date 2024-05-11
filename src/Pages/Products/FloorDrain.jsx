import React from "react";


function Products() {
    return (
        <div>
            <div className="header-base">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="title-base text-left">
                                <h1>Floor Drain</h1>
                                {/* <p>Success is no accident. It is hard work, perseverance, studying, sacrifice and most of all, love of what you are doing or learning to do.</p> */}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <ol className="breadcrumb b white">
                                <li><a href="#">Products</a></li>
                                <li className="active">Floor Drain</li>
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
                                        <a className="img-box lightbox" href="./template/images/products/products_1.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_1.jpg" alt />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="img-box lightbox" href="./template/images/products/products_1_1.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_1_1.jpg" alt />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="img-box lightbox" href="./template/images/products/products_1_2.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_1_2.jpg" alt />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="img-box lightbox" href="./template/images/products/products_1_3.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_1_3.jpg" alt />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="img-box lightbox" href="./template/images/products/products_1_4.jpg" data-lightbox-anima="fade-top">
                                            <img src="./template/images/products/products_1_4.jpg" alt />
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 boxed white row-17">
                            <h2 className="text-color">Description</h2>
                            <hr className="space m" />
                            <p>Our floor drains are engineered for maximum efficiency and durability, ensuring effective water drainage in various settings. With precision design and quality materials, they offer reliable performance and easy maintenance.</p>
                            {/* <hr className="space s" /> */}
                            {/* <a href="#" className="btn-text text-color"> Visit website</a> */}
                        </div>
                    </div>
                    <hr className="space" />
                    <h2>Specification</h2>
                    <hr className="space m" />
             
                        
                            <table border="1" className="table">
                                <thead>
                                    <tr>
                                        <th>Item No.</th>
                                        <th>Size Dimension in MM</th>
                                        <th>Outlet</th>
                                        <th>Material</th>
                                        <th>Finish</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>FD T180</td>
                                        <td>80 X 80</td>
                                        <td>DSO</td>
                                        <td>SS304 | SS316</td>
                                        <td>Matt</td>
                                    </tr>
                                    <tr>
                                        <td>FD TIIOO</td>
                                        <td>100 X 100</td>
                                        <td>050 | 075</td>
                                        <td>SS304 | SS316</td>
                                        <td>Matt</td>
                                    </tr>
                                    <tr>
                                        <td>FD Tli50</td>
                                        <td>150 X 150</td>
                                        <td>D501 | D751</td>
                                        <td>SS304 | SS316</td>
                                        <td>Matt</td>
                                    </tr>
                                    <tr>
                                        <td>FD T1200</td>
                                        <td>200 X 200</td>
                                        <td>D501D751Dm</td>
                                        <td>SS304 | SS316</td>
                                        <td>Matt</td>
                                    </tr>
                                </tbody>
                            </table>
                      
                       <div class="row">
                       <img className="col-md-6" src="./template/images/products/products_1_type1.jpg" alt="products_1_type" />
                            <img className="col-md-6" src="./template/images/products/products_1_type2.jpg" alt="products_1_type" />
                       </div>
                            
                        
                    


                    <hr className="space m" />

                    <hr className="space" />
                    {/* <div className="row porfolio-bar">
                        <div className="col-md-2">
                            <div className="icon-box" data-anima="scale-up" data-trigger="hover">
                                <i className="fa fa-arrow-left text-m" /><label className="text-s"><a href="#">Previous</a></label>
                            </div>
                        </div>
                        <div className="col-md-8 text-center">
                            <a href="#" data-anima="scale-up" data-trigger="hover"><i className="fa fa-th anima" /></a>
                        </div>
                        <div className="col-md-2 text-right">
                            <div className="icon-box icon-box-right pull-right" data-anima="scale-up" data-trigger="hover">
                                <label className="text-s"><a href="#">Next</a></label><i className="fa fa-arrow-right text-m" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

      )
    }
    

export default Products;