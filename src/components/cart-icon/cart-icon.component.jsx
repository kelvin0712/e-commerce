import React from 'react';

import { ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg';

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const Cart = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingBag className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce(
        (accumulator, cartItem) => accumulator + cartItem.quantity, 0
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);