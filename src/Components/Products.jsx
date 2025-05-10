import React from "react";

function Product({ img, title, price }) {
  return (
    <div>
      <div className="products-card">
        <div className="img-border">
          <img src={img} alt="Product" className="product-img" />
        </div>
        <h2 className="product-name"> {title}</h2>
        <p className="text-muted">The Registration Fee</p>
        <p className="product-price"> ₹ {price} /-</p>
      </div>
    </div>
  );
}

export default Product;
