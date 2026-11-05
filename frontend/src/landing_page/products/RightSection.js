import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container product-section">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 product-details">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <a href={learnMore} className="product-link">
            Learn More{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true" />
          </a>
        </div>

        <div className="col-12 col-md-6 product-image">
          <img src={imageURL} alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
