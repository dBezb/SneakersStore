import React from "react";

const ProductDetails = (props) => {
  const { id, src, alt, caption, price } = props.product;

  return (
    <div className="product-details">
      <img src={src} alt={alt} />
      <h3>{caption}</h3>
      <p>{price}</p>
      {/* Додайте інші деталі про кросівку, які ви хочете відобразити */}
    </div>
  );
};

export default ProductDetails;
