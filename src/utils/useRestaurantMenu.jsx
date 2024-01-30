import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    async function fetchMenu() {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json);
    }

    fetchMenu();
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
