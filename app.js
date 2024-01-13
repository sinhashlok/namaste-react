import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div", // parent
  { id: "parent" },
  [
    React.createElement(
      "div", // child
      { id: "child1", key: 1 },
      [
        // grandchild - array of children
        React.createElement("h1", { key: "1" }, "I am an H1 tag!"),
        React.createElement("h2", { key: "2" }, "I am an H2 tag!"),
      ]
    ),
    React.createElement(
      "div", // child
      { id: "child2", key: 2 },
      [
        // grandchild - array of children
        React.createElement("h1", { key: "1" }, "I am an H1 tag!"),
        React.createElement("h2", { key: "2" }, "I am an H2 tag!"),
      ]
    ),
  ]
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(parent);
console.log(parent.props.children[0].props.children);
