import React, { useState } from "react";
import { menData } from "../data/men.js";
import Navbar from "../components/Navbar.jsx";

const MenfashionPage = () => {

  const[selectedProduct,setSelectedProduct]=useState([]);

  const brandHandler=(mbrand)=>{
    if(selectedProduct.includes(mbrand)){
      setSelectedProduct(selectedProduct.filter((item)=>item!==mbrand));
    }
    else{
      setSelectedProduct([...selectedProduct , mbrand]);
    }
  };
  const filteredProducts=selectedProduct.length===0?
    menData:menData.filter((mbrand)=>selectedProduct.includes(mbrand.brand));


  
  return (
    <>
      <Navbar />
    <div className="men-fullpage">
      <div>
        {menData.map((men)=>{
      return(
        <div className="men-selected">
          <label>
            <input type="checkbox" checked={selectedProduct.includes(men.brand)}
              onChange={()=>brandHandler(men.brand)}/>
            {men.brand}
          </label>
        </div>
      )
        })}
      </div>

      <div className="menSec">
        {filteredProducts.map((item) => (
          <div key={item.brand} className="menBox">
            <img className="menImg" src={item.image} alt="img" />
            <div>
              {item.company}, {item.model}, {item.price}
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default MenfashionPage;
