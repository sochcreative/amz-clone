import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider.js";
import { auth } from "./firebase";


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="headerLogo"
          src="https://www.freelogodesign.org/file/app/blog/20180911090509731amazon_logo_RGB.jpg"
          alt="logo"
        />
      </Link>

      <div className="headerSearch">
        <input className="headerSearchInput" type="text" />

        <SearchIcon className="searchIcon" /> 
      </div>

      <div className="headerNav">
        <Link to={!user && '/login'}>
          <div  onClick={handleAuthenticaton}  className="headerOption">
            <span className="headerOneLine"> Hello {!user ?  "Guest" : user.email}</span>
            <span className="headerTwoLine">{user ? 'Sign Out':'Sign In'}</span>
          </div>
        </Link>
        <div className="headerOption">
          <span className="headerOneLine"> Return's</span>
          <span className="headerTwoLine"> & Order</span>
        </div>
        <div className="headerOption">
          <span className="headerOneLine"> Your</span>
          <span className="headerTwoLine"> Prime</span>
        </div>
        <Link to="/checkout">
          <div className="headerBasketCart">
            <AddShoppingCartIcon />
            <span className="headerOptionLineTwo headerBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
