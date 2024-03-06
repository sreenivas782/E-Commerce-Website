import React from "react";
import { Link, useParams } from "react-router-dom";
import { mobileData } from "../stores/data/mobiles";
import Navbar from "../stores/components/Navbar";
import {useCart} from "../stores/context/CartContext";

const MobilesSingle = () => {
  const { id } = useParams();

  const { cartItems, addToCart} = useCart()

  
  const product = mobileData.find((item) => item.id === id);
  return (
    <>
     
        <Navbar/>
     
    <div>
      
      <div className="msImg">
        <img src={product.image} alt="img" />
      </div>
      <div className="msModel">
        <h2>{product.company}</h2>
      </div>
      <div className="msPrice">
        <h3>{product.model}</h3>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        <div>
          <button onClick={()=>addToCart(product)} style={{color:'black' ,background:'orange'}}> Add to Cart</button>
        </div>
      </div>
    </div>
      </>
  );
};

export default MobilesSingle;
