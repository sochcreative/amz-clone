import React from "react";
import "./Product.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "./StateProvider";


function Product({ id, title, info, price, img, rating }) {
   
  const[ { basket }, dispatch] = useStateValue();
  
  const addToBasket = () =>{
    //dispatch 
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id:id,
        title:title,
        info:info,
        price:price,
        img:img,
        rating:rating
      },
    });

  };

  return (
    <div className="product">
      <div className="productInfo">
        <h3>{title}</h3>
        <p>{info}</p>
        <p className="productPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarRateIcon />{" "}
              </p>
            ))}
        </div>
      </div>
      <img src={img} alt="" className="productImage" />

      <button className="basketBtn" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
