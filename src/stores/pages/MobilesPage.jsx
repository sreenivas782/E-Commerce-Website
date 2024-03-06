import React, { useState } from "react";
import { mobileData } from "../data/mobiles";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";

const MobilesPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== mango));
    } else {
      setSelectedProduct([...selectedProduct, mango]);
    }
  };

  const filteredProduct =
    selectedProduct.length === 0
      ? mobileData
      : mobileData.filter((mango) => selectedProduct.includes(mango.company));

  return (
    <>
      <Navbar />
      <div className="full-page">
        <div className="selected-product">
          {mobileData.map((phone) => {
            return (
              <div className="selected-pro">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(phone.company)}
                    onChange={() => companyHandler(phone.company)}
                  />
                  {phone.company}
                </label>
              </div>
            );
          })}
        </div>
        <div className="mpSec">
          {filteredProduct.map((item) => {
            return (
              <div className="mpBox">
                <Link to={`/mobiles/${item.id}`}>
                
                  <img className="mapImg" src={item.image} alt="img" />
                </Link>

                <div>
                  {item.company}, {item.model}, {item.price}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default MobilesPage;
