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
    <div className="flex flex-col w-[280px] m-2 min-h-[400px] rounded-lg p-2 border-2 border-indigo-600 transition-all">
      <img
        className="rounded-lg h-[180px]"
        alt=""
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <h4 className="mb-3">{cuisines?.join(", ")}</h4>
        <h4>Rating: {avgRatingString}⭐️ </h4>
        <h4>Delivery Time: {sla} mins</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
