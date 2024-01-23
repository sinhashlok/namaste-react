import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const name = props?.resData?.info?.name;
  const cuisines = props?.resData?.info?.cuisines;
  const avgRatingString = props?.resData?.info?.avgRatingString;
  const sla = props?.resData?.info?.sla?.deliveryTime;
  const cloudinaryImageId = props?.resData?.info?.cloudinaryImageId;
  const costForTwo = props?.resData?.info?.costForTwo;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>Rating: {avgRatingString}</h4>
      <h4>Delivery Time: {sla} mins</h4>
      <h4>Cost for two: {costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
