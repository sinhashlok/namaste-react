import React from "react";

const RestaurantCard = (props) => {
  const { resName, cuisine, rating, eta, resImg, altImg } = props?.resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt={altImg} src={resImg} />
      <h3>{resName}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>{rating}</h4>
      <h4>{eta}</h4>
    </div>
  );
};

export default RestaurantCard;
