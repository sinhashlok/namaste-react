import React from "react";
import ReactDOM from "react-dom/client";

// Functional Component
const HeadingComponent = () => (
  <div id="container">
    <h1 id="heading">Hello World from React!</h1>
    <Title />
  </div>
);

const Title = () => (
  <h1 className="head" tabIndex="5">
    Hello Namaste React 🙏!!
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
