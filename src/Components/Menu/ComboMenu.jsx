import { useState } from "react";
import ComboList from "./ComboList";

const ComboMenu = ({ item, showIndexCat, setShowIndexCat }) => {
  const title = item?.title;
  const list = item?.categories;

  const handleClick = () => {
    setShowIndexCat();
  };

  return (
    <div className="border-2 bg-slate-50 border-indigo-500 rounded-lg px-8 py-4 my-4">
      <div
        className="flex flex-row justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="text-xl font-bold">{title}</span>
        <span className="text-2xl">{!showIndexCat ? "⬇️" : "⬆️"}</span>
      </div>
      {showIndexCat &&
        list?.map((item) => {
          return <ComboList key={item?.title} list={item} />;
        })}
    </div>
  );
};

export default ComboMenu;
