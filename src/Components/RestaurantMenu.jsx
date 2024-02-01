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
  } = resInfo?.data?.cards[0]?.card?.card?.info;

  const cardsList =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
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

      {/* {cardsList.map((card) => {
        const itemCards = card?.card?.card?.itemCards;
        const categoriesCards = card?.card?.card?.categories;
        if (itemCards === undefined && categoriesCards === undefined) return;
        return (
          <div className="flex flex-col mt-4 bg-slate-100 p-4 rounded-md">
            <h2 className="text-xl font-bold mb-2">{card?.card?.card?.title}</h2>
            <ul className="flex flex-col">
              {itemCards === undefined
                ? categoriesCards?.map((category) => {
                    const title = category?.title;
                    return (
                      <div className="category-item">
                        <h2 className="text-lg text-red-500 font-semibold">{title}</h2>
                        {category.itemCards.map((item) => {
                          return (
                            <li className="flex py-4 mb-2 border-b-[1px] last:border-0 border-black max-md:flex-col max-md:text-sm">
                              <img
                                className="w-[300px] rounded-md mr-2 max-md:w-[100px] max-md:h-[100px]"
                                alt=""
                                src={CDN_URL + item?.card?.info?.imageId}
                              />
                              <div>
                                <div className="text-lg font-semibold mb-4">
                                  {item?.card?.info?.name}{" "}
                                  {item?.card?.info?.itemAttribute
                                    ?.vegClassifier == 1
                                    ? "🟢"
                                    : "🔴"}
                                </div>
                                <div className="font-semibold">
                                  Cost: ₹
                                  {item?.card?.info?.price / 100 ||
                                    item?.card?.info?.defaultPrice / 100}
                                  /-
                                </div>
                                <div className="menu-item-desc">
                                  {item?.card?.info?.description}
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </div>
                    );
                  })
                : itemCards?.map((item) => (
                    <li className="flex py-4 mb-2 border-b-[1px] last:border-0 border-black max-md:flex-col max-md:text-sm">
                      <img
                        className="w-[300px] rounded-md mr-2 max-md:w-[100px] max-md:h-[100px]"
                        alt=""
                        src={CDN_URL + item?.card?.info?.imageId}
                      />
                      <div>
                        <div className="text-lg font-semibold mb-4">
                          {item?.card?.info?.name}{" "}
                          {item?.card?.info?.isVeg == 1 ? "🟢" : "🔴"}
                        </div>
                        <div className="font-semibold">
                          Cost: ₹
                          {item?.card?.info?.price / 100 ||
                            item?.card?.info?.defaultPrice / 100}
                          /-
                        </div>
                        <div className="menu-item-desc">
                          {item?.card?.info?.description}
                        </div>
                      </div>
                    </li>
                  ))}
            </ul>
          </div>
        );
      })} */}
    </div>
  );
};

export default RestaurantMenu;
