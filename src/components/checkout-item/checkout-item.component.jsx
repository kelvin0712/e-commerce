import React from 'react';
import {connect} from 'react-redux';

import {removeItemFromCart} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({items , clearItem}) => {
    const {name, imageUrl, quantity, price} = items;
return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span> 
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => clearItem(items)}>&#10005;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);