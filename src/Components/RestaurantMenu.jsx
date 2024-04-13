import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCategoryMenu from "./Menu/ItemCategoryMenu";
import { useState } from "react";
import ComboMenu from "./Menu/ComboMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndexItem, setShowIndexItem] = useState(-1);
  const [showIndexCat, setShowIndexCat] = useState(-1);

  if (resInfo.length === 0) return <ShimmerMenu />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
  } = resInfo?.data?.cards[2]?.card?.card?.info;
  const cardsList =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const itemCards = cardsList.filter(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  const categoriesCards = cardsList.filter(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );

  return (
    <div className="flex flex-col mx-[320px] mt-10 max-md:mx-8">
      <h1 className="text-3xl font-bold mb-2 max-md:text-xl">{name}</h1>
      <div className="flex justify-between text-sm">
        <div className="rating">
          <div>{avgRatingString} ⭐️</div>
          <div>{totalRatingsString}</div>
        </div>
        <div className="cost">
          <div className="cusinie">{cuisines.join(", ")}</div>
          <div className="costsTwo">Cost: {costForTwoMessage}</div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-8 max-md:text-lg mb-2">Menu</h2>

      {itemCards?.map((item, index) => (
        <ItemCategoryMenu
          key={item?.card?.card?.title}
          item={item}
          showItems={index === showIndexItem && true}
          setShowIndexItem={() => {
            if (index === showIndexItem) {
              setShowIndexItem(-1);
            } else {
              setShowIndexItem(index);
              setShowIndexCat(-1);
            }
          }}
        />
      ))}

      {categoriesCards?.map((category, index) => (
        <ComboMenu
          key={category?.card?.card?.title}
          item={category?.card?.card}
          showIndexCat={index === showIndexCat && true}
          setShowIndexCat={() => {
            if (index === showIndexCat) {
              setShowIndexCat(-1);
            } else {
              setShowIndexCat(index);
              setShowIndexItem(-1);
            }
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
