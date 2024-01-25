import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    async function fetchMenu() {
      const data = await fetch(MENU_API + resId);
      const response = await data.json();
      setResInfo(response);
    }
    fetchMenu();
  }, []);

  if (resInfo.length === 0) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
  } = resInfo?.data?.cards[0]?.card?.card?.info;

  const cardsList =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="menu">
      <h1 className="res-name">{name}</h1>
      <div className="menu-info">
        <div className="rating" style={{ fontSize: "14px" }}>
          <div>{avgRatingString} ⭐️</div>
          <div>{totalRatingsString}</div>
        </div>
        <div className="cost" style={{ fontSize: "14px" }}>
          <div className="cusinie">{cuisines.join(", ")}</div>
          <div className="costsTwo">Cost: {costForTwoMessage}</div>
        </div>
      </div>
      <h2>Menu</h2>

      {cardsList.map((card) => {
        console.log(card);
        const itemCards = card?.card?.card?.itemCards;
        const categoriesCards = card?.card?.card?.categories;
        if (itemCards === undefined && categoriesCards === undefined) return;
        return (
          <div className="menu-sections">
            <h2 className="menu-section-title">{card?.card?.card?.title}</h2>
            <ul className="menu-list">
              {itemCards === undefined
                ? categoriesCards?.map((category) => {
                    const title = category?.title;
                    return (
                      <div className="category-item">
                        <h2 style={{ color: "red" }}>{title}</h2>
                        {category.itemCards.map((item) => {
                          return (
                            <li className="menu-item-list">
                              <div className="menu-item-name">
                                {item?.card?.info?.name}{" "}
                                {item?.card?.info?.itemAttribute
                                  ?.vegClassifier == 1
                                  ? "🟢"
                                  : "🔴"}
                              </div>
                              <div className="menu-item-price">
                                Cost: ₹
                                {item?.card?.info?.price / 100 ||
                                  item?.card?.info?.defaultPrice / 100}
                                /-
                              </div>
                              <div className="menu-item-desc">
                                {item?.card?.info?.description}
                              </div>
                            </li>
                          );
                        })}
                      </div>
                    );
                  })
                : itemCards?.map((item) => (
                    <li className="menu-item-list">
                      <div className="menu-item-name">
                        {item?.card?.info?.name}{" "}
                        {item?.card?.info?.isVeg == 1 ? "🟢" : "🔴"}
                      </div>
                      <div className="menu-item-price">
                        Cost: ₹
                        {item?.card?.info?.price / 100 ||
                          item?.card?.info?.defaultPrice / 100}
                        /-
                      </div>
                      <div className="menu-item-desc">
                        {item?.card?.info?.description}
                      </div>
                    </li>
                  ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
