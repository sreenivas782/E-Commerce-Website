import React from "react";
import { speakerData } from "../data/speaker";

const Speakers = () => {
  const firstFive = speakerData.slice(0, 5);
  return (
    <>
      <h2>Speakers</h2>
      <div className="spkSec">
        {firstFive.map((item) => {
          return (
            <div className="spkBox">
              <img className="spkImg" src={item.image} alt="img" />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Speakers;
