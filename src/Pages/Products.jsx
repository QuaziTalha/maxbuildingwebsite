import React from "react";


var ProductCard = ({link, imageUrl, title, description})=>{
    return(
        <div className="grid-item col-md-4">
            <div className="advs-box advs-box-top-icon-img boxed text-left" data-href={link}>
                <a className="img-box img-scale-up" href={link}>
                    <span><img src={imageUrl} alt /></span>
                </a>
                <div className="advs-box-content">
                    <h3>{title}</h3>
                    <p dangerouslySetInnerHTML={{__html : description}}> 
                      
                    </p>
                </div>
            </div>
        </div>
    )
}

function Products() {
    return (
        <div>
            <div className="header-title ken-burn-out white" data-parallax="scroll" style={{ height: "200px" }} data-natural-height={800} data-natural-width={1920} data-image-src="./template/images/wide-1.jpg">
                <div className="container" >
                    <div className="title-base" style={{ marginTop: "70px" }}>
                        <hr className="anima" />
                        <h1>Our Products</h1>
                        {/* <p>The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can't achieve it.</p> */}
                    </div>
                </div>
            </div>
            <div className="section-empty no-padding-bottom">
                <div className="panel-box col-12">
                    <div className="container content">

                        <div className="panel active">
                            {/* <h2>Construction projects</h2> */}

                            <hr className="space l" />
                            <div className="grid-list">
                                <div className="grid-box">
                                    <div className="row">
                                    <ProductCard
                                        title="Floor Drain"
                                        description="Our floor drains are engineered for maximum efficiency and durability, ensuring effective water drainage in various settings. With precision design and quality materials, they offer reliable performance and easy maintenance."
                                        link="floor_drain"
                                        imageUrl="./template/images/products/products_1_small.jpg"
                                    />
                                    <ProductCard
                                        title="Modular Channel"
                                        description="Versatile and adaptable, our modular channels provide efficient water drainage solutions for a wide range of applications. Designed for ease of installation and durability, they offer flexibility to accommodate diverse project.<br/><br/>"
                                        link="modular_drain"
                                        imageUrl="./template/images/products/products_2_small.jpg"
                                    />
                                    <ProductCard
                                        title="Slot Drain Channel"
                                        description="Our slot drain channels offer sleek and modern drainage solutions for contemporary spaces. With a discreet and stylish design, they seamlessly integrate into any environment while ensuring effective water removal and easy cleaning."
                                        link="slot_drain"
                                        imageUrl="./template/images/products/products_3_small.jpg"
                                    />
                                    </div>
                                    <br/>
                                    <div className="row">
                                    <ProductCard
                                        title="Shower Channels"
                                        description="Designed specifically for shower areas, our shower channels combine functionality with aesthetic appeal. Featuring sleek designs and high-quality materials, they provide efficient water drainage to enhance the comfort . <br/><br/>"
                                        link="shower_channels"
                                        imageUrl="./template/images/products/products_4_small.jpg"
                                    />
                                    <ProductCard
                                        title="Floor Cleanout"
                                        description="Our floor cleanouts are essential components for maintaining clean and hygienic drainage systems. Designed for easy access and maintenance, they ensure efficient removal of debris and prevent clogging for uninterrupted water flow."
                                        link="floor_cleanout"
                                        imageUrl="./template/images/products/products_5_small.jpg"
                                    />
                                    <ProductCard
                                        title="Gully Products"
                                        description="Our gully products offer reliable solutions for efficient water drainage in outdoor and industrial settings. With sturdy construction and advanced features, they effectively manage excess water while withstanding harsh environmental conditions."
                                        link="gully_products"
                                        imageUrl="./template/images/products/products_6_small.jpg"
                                    />
                                    </div>
                                </div>
                                <div className="clear" />
                                <ul className="pagination-sm pagination-grid hide-first-last" data-page-items={4} data-pagination-anima="fade-left" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      )
    }
    

export default Products;