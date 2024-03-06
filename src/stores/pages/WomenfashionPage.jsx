import React, {useState}from "react";
import { womanData } from "../data/woman.js";
import Navbar from "../components/Navbar.jsx";

const WomenfashionPage = () => {

  const [selectedProduct, setSelectedProduct]=useState([]);

  const brandHandler=(mbrand)=>{
    if(selectedProduct.includes(mbrand)){
      setSelectedProduct(selectedProduct.filter((item)=>item!==mbrand))
    }
    else{
      setSelectedProduct([...selectedProduct,mbrand])
    }
  };

  const filteredProducts=selectedProduct.length===0?
    womanData:womanData.filter((mbrand)=>selectedProduct.includes(mbrand.brand));




  
  return (
    <>
      <Navbar />
      <div  className="wmen-fullpage">
      <div>
        {womanData.map((women)=>{
      return(
        <div>
          <label>
            <input type="checkbox" checked={selectedProduct.includes(women.brand)}
              onChange={()=>brandHandler(women.brand)}/>
            {women.brand}
          </label>
        </div>
      )
        })}
      </div>

      
      <div className="wmenSec">
        { filteredProducts.map((item) => {
          return (
            <div className="wmenBox">
              <img className="wmenImg" src={item.image} alt="img" />
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

export default WomenfashionPage;
