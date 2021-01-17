import React from 'react';
import "./CheckoutProduct.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "./StateProvider";
  

function CheckoutProduct({ id, title, info, price, img, rating }) {
    const[ { basket }, dispatch] = useStateValue();

   const removeFromBasket = () =>{
                 dispatch({
                     type: 'REMOVE_FROM_BASKET',
                     id:id,

                 })
   }
    return (
        <div className="checkoutProduct">
            <img src={img} alt="" className="checkoutProductImage"/>
            
            <div className="checkoutProductInfo">
                <h3 className="checkoutProductTitle">{title}</h3>
                <p className="checkoutProductbrief">{info}</p>
           
            <p className="checkoutProductPrice">
                <small>$</small>
                <strong>{price}</strong> 
            </p>
            <div className="checkoutProductRating">
            {Array(rating).
            fill().
            map((_, i) => (
                <p><StarRateIcon /></p>
            ))}
            
            </div>
            <button onClick={removeFromBasket}>Remove From basket</button>
            </div>
          
        </div>


    )
}

export default CheckoutProduct;
