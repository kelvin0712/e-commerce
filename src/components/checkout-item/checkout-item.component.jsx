import React from 'react';
import {connect} from 'react-redux';

import {removeItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({items , clearItem, addItem, removeItem}) => {
    const {name, imageUrl, quantity, price} = items;
return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeItem(items)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItem(items)}>&#10095;</div>
        </span> 
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => clearItem(items)}>&#10005;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);