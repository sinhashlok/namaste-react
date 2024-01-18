import React from "react";
import { useState } from "react";

// Components
import RestaurantCard from "./RestaurantCard";

// Assets
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    const filterResList = listOfRes.filter((res) => res.rating >= 4.5);
    setListOfRes(filterResList);
  };

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button className="filter-btn" onClick={handleClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((resData) => (
          <RestaurantCard key={resData.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
