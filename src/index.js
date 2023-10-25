import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./components/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} defaultRating={1}></StarRating>
    <StarRating
      size={30}
      color="skyblue"
      className="test"
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    ></StarRating> */}
  </React.StrictMode>
);
