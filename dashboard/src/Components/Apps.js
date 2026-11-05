import React from "react";

const Apps = () => {
  React.useEffect(() => {
    window.location.href = "http://localhost:3000/products";
  }, []);

  return null;
};

export default Apps;
