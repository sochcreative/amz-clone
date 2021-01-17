import { useElements } from "@stripe/react-stripe-js";
import React, { useState }from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { CardElement, useStripe , UseElements } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer.js';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const {error , setError } = useState(null);
  const {disabled , setDisabled } = useState(true);

  const handleSubmit = e =>{

  }

  const handleChange = event =>{

    setDisabled(event.empty);
    setError(event.error ? event.error.message: "");

  }

  return (
    <div className="payment">
      <div className="paymentContainer">
      <h1>Checkout(
          <Link to="/checkout">{basket?.length}</Link>
      ) </h1>
        {/* payment Delivery */}
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Delivery Address</h3>
          </div>
          <div className="paymentAddress">
            <p>{user?.email}</p>
            <p>noida location</p>
          </div>
        </div>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Payment Review Item & Delivery</h3>
          </div>
          <div className="paymentItemList">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                info={item.info}
                img={item.img}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Payment Method</h3>
          </div>
          <div className="paymentDetail">

          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange}/>
          </form>
            <div className="paymentPriceContainer">
            <CurrencyFormat 
            renderText={(value) =>(
                <>
                    <h3>Order Total :  {value}</h3>
                   
                </>
            )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeprator={true}
                prefix={'$'}
/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
