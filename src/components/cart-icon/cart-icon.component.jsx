import React from 'react';

import { ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg';
import {selectCartItemCount} from '../../redux/cart/cart.selectors';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {createStructuredSelector} from 'reselect';

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

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemCount
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);