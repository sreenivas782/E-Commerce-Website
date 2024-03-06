import React from "react";
import { mobileData } from "../data/mobiles";

const Mobiles = () => {
  const firstFive = mobileData.slice(0, 5);

  return (
    <>
      <h2>MOBILES</h2>
      <div className="proSec">
        {firstFive.map((item) => {
          return (
            <div className="imgBox">
              <img className="proImg" src={item.image} alt="img" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Mobiles;
