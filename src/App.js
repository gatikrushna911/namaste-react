import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
