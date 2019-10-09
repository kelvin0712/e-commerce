import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem item={cartItem} key={cartItem.id}/>)
            }
        </div>
        <CustomButton>CHECK OUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems: cartItems
})
    
export default connect(mapStateToProps)(CartDropDown); 