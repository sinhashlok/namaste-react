import { useState } from "react";
import ItemList from "./ItemList";

const ItemCategoryMenu = ({ item, showItems, setShowIndexItem }) => {
  const list = item?.card?.card?.itemCards;
  const title = item?.card?.card?.title;
  
  const handleClick = () => {
    setShowIndexItem();
  };

  return (
    <div className="border-2 bg-slate-50 border-indigo-500 rounded-lg px-8 py-4 my-4">
      <div className="flex flex-row justify-between cursor-pointer" onClick={handleClick}>
        <span className="text-xl font-bold">{title} ({list.length})</span>
        <span className="text-2xl">{!showItems ? "⬇️" : "⬆️"}</span>
      </div>
      {showItems && <ItemList list={list} />}
    </div>
  );
};

export default ItemCategoryMenu;
