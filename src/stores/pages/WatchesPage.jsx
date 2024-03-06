import React, { useState } from "react";
import { watchData } from "../data/watch.js";
import Navbar from "../components/Navbar.jsx";

const WatchesPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const brandHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== brand));
    } else {
      setSelectedProduct([...selectedProduct, brand]);
    }
  };

  const filteredProduct =
    selectedProduct.length === 0
      ? watchData
      : watchData.filter((item) => selectedProduct.includes(item.brand));

  return (
    <>
      <Navbar />
      <div className="f-page">
      <div className="selected-Wpro">
        {watchData.map((watch) => (
          <div className="selected-Wpro1">
            <label>
              <input
                type="checkbox"
                checked={selectedProduct.includes(watch.brand)}
                onChange={() => brandHandler(watch.brand)}
              />
            {watch.brand}
            </label>
          </div>
        ))}
      </div>

      <div className="wpSec">
        {filteredProduct.map((item) => (
          <div key={item.brand} className="wpBox">
            <img className="wpImg" src={item.image} alt="img" />
            <div>
              {item.company}, {item.model}, {item.price}, {item.brand}
            </div>
          </div>
        ))}
      </div>
        </div>
    </>
  );
};

export default WatchesPage;
