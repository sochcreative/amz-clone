import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer.js';
import {useStateValue} from './StateProvider.js';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [ { basket }, dispatch] = useStateValue();
    return (

        <div className="subtotal">

        <CurrencyFormat 
            renderText={(value) =>(
                <>
                    <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
                    <small className="subtotalGift">
                        <input type="checkbox"/> This order contain a Gift
                    </small>
                </>
            )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeprator={true}
                prefix={'$'}
/>

        <button className="subTotalButton" onClick={e => history.push('/payment')}>Proceed to Checkout</button>    
        </div>
    );
}

export default Subtotal;
