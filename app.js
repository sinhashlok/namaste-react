import React from "react";
import ReactDOM from "react-dom/client";

/**
 * LOW LEVEL PLAN
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - Restaurant Card
 *          - Img
 *          - Name of the Restaurant
 *          - Rating (star)
 *          - Cuisine
 *          - ETA
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const resList = [
  {
    id: 1,
    resName: "KFC",
    cuisine: ["Fried Chicken", "Burger", "Rolls"],
    rating: "4.5 Stars",
    eta: "45 mins",
    resImg:
      "https://content.jdmagicbox.com/comp/bellary/h7/9999p8392.8392.210812221924.c1h7/catalogue/kfc-sp-circle-bellary-fried-chicken-restaurants-0hpfozfdeb.jpg",
    altImg: "KFC chicken",
  },
  {
    id: 2,
    resName: "McDonalds",
    cuisine: ["Burger", "Rolls", "Fries"],
    rating: "4.1 Stars",
    eta: "35 mins",
    resImg:
      "https://pricemenu.in/wp-content/uploads/2023/04/Mcdonalds-Meal-Prices.jpg",
    altImg: "McDonalds",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.vectorstock.com/i/preview-1x/73/82/food-logo-vector-38377382.jpg"
          alt="foody-logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resName, cuisine, rating, eta, resImg, altImg } = props?.resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt={altImg} src={resImg} />
      <h3>{resName}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>{rating}</h4>
      <h4>{eta}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((resData) => (
          <RestaurantCard key={resData.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
