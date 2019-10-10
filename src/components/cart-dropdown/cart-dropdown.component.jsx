import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {withRouter} from 'react-router-dom';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem item={cartItem} key={cartItem.id}/>)
                : <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }
            }>CHECK OUT</CustomButton> 
    </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})
    
export default withRouter(connect(mapStateToProps)(CartDropDown)); 