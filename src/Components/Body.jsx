import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

// Assets
import { SWIGGY_API } from "../utils/constants";
import useOnlineStaus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [tempRes, setTempRes] = useState([]); // for search [not used]
  const [searchText, setSearchText] = useState("");
  const online = useOnlineStaus();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(SWIGGY_API);
      const json = await data.json();
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

  if (!online) {
    return <h1 className="offline">You are offline</h1>;
  }
  
  return listOfRes.length === 0 ? (
    <div className="mx-8 my-8">
      <Shimmer />
    </div>
  ) : (
    <div className="mx-8 my-8">
      <div className="flex flex-col items-center">
        <div className="flex">
          <input
            type="text"
            className="appearance-none border border-slate-200 rounded mr-2 py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:border-indigo-600 focus:shadow-outline"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-all"
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
        <button
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all mt-4 w-[295px] justify-center"
          onClick={handleClick}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap mt-10 justify-center">
        {tempRes.map((resData) => (
          <Link
            to={`/restaurant/${resData?.info?.id}`}
            key={resData?.info?.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <RestaurantCard key={resData?.info?.id} resData={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
