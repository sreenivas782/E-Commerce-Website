import React from "react";
import { computerData } from "../data/computers";

const Watches = () => {
  return (
    <div>
      {computerData.map((item) => {
        return (
          <div>
            <img src={item.image} alt="img" />
          </div>
        );
      })};
    </div>
  );
};

export default Watches;
