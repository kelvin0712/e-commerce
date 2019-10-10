import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectcartTotal} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const Checkout = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block"> 
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        <div>
            {
                cartItems.map(cartItem => cartItem.name )
            }
        </div>
        <div className="total">
             <span >TOTAL: ${total}</span>
        </div>   
    </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectcartTotal
})

export default connect(mapStateToProps)(Checkout);