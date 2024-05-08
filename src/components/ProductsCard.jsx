import React from 'react';

const ProductsCard = ({ title, description, imageUrl, link }) => {
  return (
    <div data-sort={2} className={`maso-item col-md-3 `}>
      <div className="advs-box advs-box-top-icon-img boxed-inverse" data-href={`./${link}`}>
        <a className="img-box lightbox img-scale-up" href={`./${link}`}>
          <span><img src={imageUrl} alt={title} /></span>
        </a>
        <div className="advs-box-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
