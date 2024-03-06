import React from "react";
import { womanData } from "../data/woman.js";

const Women = () => {
  const firstFive = womanData.slice(0, 5);
  return (
    <>
      <h2>Women</h2>
      <div className="womSec">
        {firstFive.map((item) => {
          return (
            <div className="womBox">
              <img className="womImg" src={item.image} alt="img" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Women;
