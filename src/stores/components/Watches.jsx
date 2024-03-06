import React from "react";
import { watchData } from "../data/watch";

const Watches = () => {
  const firstFive = watchData.slice(0, 5);

  return (
    <>
      <h2>WATCHES</h2>
      <div className="watSec">
        {firstFive.map((item) => {
          return (
            <div className="watBox">
              <img className="watImg" src={item.image} alt="img" />
            </div>
          );
        })}
        ;
      </div>
    </>
  );
};

export default Watches;
