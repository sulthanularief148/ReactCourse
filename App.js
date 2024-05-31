import React from "react";
import ReactDOM from "react-dom/client"

const header = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "heading" }, "This is my First React page"),
  React.createElement("h2", { id: "second_head" }, "This is subhead"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);

