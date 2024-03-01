import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
// Utils
import UserContext from "../utils/UserContext";
import { useGetRestaurantsQuery } from "../utils/store/apiSlice";
// Assets
import { SWIGGY_API } from "../utils/constants";
import useOnlineStaus from "../utils/useOnlineStatus";

const Body = () => {
  const [tempRes, setTempRes] = useState([]); // for search [not used]
  let listOfRes = [];
  const [searchText, setSearchText] = useState("");
  const online = useOnlineStaus();
  const { setUserName } = useContext(UserContext);
  const {
    data: data,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetRestaurantsQuery();
  if (isSuccess) {
    listOfRes =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
  }

  useEffect(() => {
    setTempRes(listOfRes);
  }, [isSuccess]);

  const ResCardPromoted = withPromotedLabel(RestaurantCard);

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await fetch(SWIGGY_API);
  //     const json = await data.json();
  //     setListOfRes(
  //       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //     setTempRes(
  //       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //   }

  //   fetchData();
  // }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const filterResList = listOfRes.filter(
      (res) => res?.info?.avgRatingString >= 4.3
    );
    setTempRes(filterResList);
  };

  if (!online) {
    return <h1 className="offline">You are offline</h1>;
  }

  return isFetching ? (
    <div className="mx-8 my-8">
      <Shimmer />
    </div>
  ) : isError ? (
    <div className="text-center text-2xl">
      Please use CORS diabled browser.
      <br />
      Sorry for the inconvenience
    </div>
  ) : (
    <div className="mx-8 my-8">
      <div className="flex flex-col items-center justify-center">
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
        <div className="py-2 flex justify-between items-center">
          <label className="mr-2 text-lg">Username: </label>
          <input
            className="w-[200px] appearance-none border border-slate-200 rounded mr-2 py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:border-indigo-600 focus:shadow-outline"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap mt-10">
        {tempRes.map((resData) => (
          <Link
            to={`/restaurant/${resData?.info?.id}`}
            key={resData?.info?.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            {resData?.info?.avgRatingString >= 4.3 ? (
              <ResCardPromoted key={resData?.info?.id} resData={resData} />
            ) : (
              <RestaurantCard key={resData?.info?.id} resData={resData} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
