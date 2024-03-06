import React from "react";
import { speakerData } from "../data/speaker.js";
import Navbar from "../components/Navbar.jsx";

const SpeakerPage = () => {
  return (
    <>
      <Navbar />
      <div className="spSec">
        {speakerData.map((item) => {
          return (
            <div className="spBox">
              <img className="spImg" src={item.image} alt="img" />
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

export default SpeakerPage;
