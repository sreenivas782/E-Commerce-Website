import React from "react";
import { tvData } from "../data/tv";

const Tv = () => {
  const firstFive = tvData.slice(0, 4);
  return (
    <>
      <h2>TV</h2>
      <div className="tvSec">
        {firstFive.map((item) => {
          return (
            <div className="tvBox">
              <img className="tvImg" src={item.image} alt="img" />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Tv;
