import React,{useState} from "react";
import { tvData } from "../data/tv.js";
import Navbar from "../components/Navbar.jsx";

const TvPage = () => {

  const [selectedProduct , setSelectedProduct] =useState([]);

  const brandHandler=(mbrand)=>{
    if(selectedProduct.includes(mbrand)){
      setSelectedProduct(selectedProduct.filter((item)=>item!==mbrand));
    }
    else{
      setSelectedProduct([...selectedProduct, mbrand])
    }
  };

  const filteredProducts=selectedProduct.length===0?
    tvData:tvData.filter((mbrand)=>selectedProduct.includes(mbrand.brand));
  


  
  return (
    <>
      <Navbar />
      <div className="tv-fullpage">
      <div>
        {tvData.map((tvs)=>{
      return(
        <div className="tv-selected">
          <label>
            <input type='checkbox' checked={selectedProduct.includes(tvs.brand)}
              onChange={()=>brandHandler(tvs.brand)}/>
            {tvs.brand}
          </label>
        </div>
      )
      
        })}
      </div>

      
      <div className="tvSec">
        {filteredProducts.map((item) => {
          return (
            <div className="tvBox">
              <img className="tvImg" src={item.image} alt="img" />
              <div>
                {item.brand}, {item.model}, {item.price}
              </div>
            </div>
          );
        })}
      </div>
        </div>
    </>
  );
};

export default TvPage;
