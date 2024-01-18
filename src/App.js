import React from "react";
import ReactDOM from "react-dom/client";

// Components
import Header from "./Components/Header";
import Body from "./Components/Body";

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
