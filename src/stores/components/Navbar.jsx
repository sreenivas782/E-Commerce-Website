import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navSection">
        <div className="title"> E-Commerce</div>
        <Link to="/" className='link'>
          <li >Home</li>
        </Link>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="sign"> Sign in/Sign up</div>
        <Link to='/cart'>
        <div className="cart"> Cart</div>
          </Link>
      </div>

      <div className="subSec">
        <ul>
         
            <Link to="/mobiles">
              <li>Mobiles</li>
            </Link>
         
         

          <Link to="/watches">
            <li>Watches</li>
          </Link>
          <Link to="/menfashion">
            <li>Men Fashion</li>
          </Link>
          <Link to="/womenfashion">
            <li>Women Fashion</li>
          </Link>
          <Link to="/tv">
            <li>TV</li>
          </Link>

          <Link to="/fridge">
            <li>Fridge</li>
          </Link>
          <Link to="/speaker">
            <li>Speakers</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
