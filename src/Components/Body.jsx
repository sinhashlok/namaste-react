import { useEffect, useState } from "react";

// Components
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

// Assets
import { SWIGGY_API, URL, OPTIONS } from "../utils/constants";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [tempRes, setTempRes] = useState([]); // for search [not used]
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(SWIGGY_API);
      const json = await data.json();

      // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setListOfRes(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setTempRes(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }

    fetchData();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const filterResList = listOfRes.filter(
      (res) => res?.info?.avgRatingString >= 4.5
    );
    setTempRes(filterResList);
  };

  return listOfRes.length === 0 ? (
    <div className="body">
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={(e) => {
              e.preventDefault();
              const filterResList = listOfRes.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              if (filterResList.length === 0) {
                alert("No Restaurant Found");
              } else {
                setTempRes(filterResList);
              }
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {tempRes.map((resData) => (
          <RestaurantCard key={resData?.info?.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
