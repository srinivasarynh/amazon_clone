import React from "react";
import { useStateValue } from "../StateProvider";
import "./checkoutProduct.css";

function CheckoutProduct({id, title, image, price, rating}) {
    const [{}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    
    return (
        <div className="checkoutProduct">
        <img src={image} alt="" className="checkoutProduct__image"/>
        <div className="checkoutProduct__info">
        <p className="checkProduct__title">{title}</p>
        <p className="checkoutProduct__price">
            <small>₹</small>
            <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
        {
        Array(rating).fill().map((_) => (
                <p>⭐</p>
        ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
        </div>
    )
}

export default CheckoutProduct;