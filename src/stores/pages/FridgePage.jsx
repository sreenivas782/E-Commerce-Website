import React from "react";
import { fridgeData } from "../data/fridge.js";
import Navbar from "../components/Navbar.jsx";

const FridgePage = () => {
  return (
    <>
      <Navbar />
      <div className="frSec">
        {fridgeData.map((item) => {
          return (
            <div className="frBox">
              <img className="frImg" src={item.image} alt="img" />
              <div>
                {item.company}, {item.model}, {item.price}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FridgePage;
