import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container product-section">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 product-image">
          <img src={imageURL} alt={productName} />
        </div>

        <div className="col-12 col-md-6 product-details">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div className="product-links">
            <a href={tryDemo}>
              Try Demo <i className="fa fa-long-arrow-right" />
            </a>

            <a href={learnMore}>
              Learn More <i className="fa fa-long-arrow-right" />
            </a>
          </div>

          <div className="product-app-links">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Get it on Google Play"
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
