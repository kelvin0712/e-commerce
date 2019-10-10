import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.ultils';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';


const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/">Contact</Link>
            {
                currentUser ? <div className="option" onClick={() => auth.signOut()}>Sign Out</div> 
                : <Link className="option" to="/signin">Sign In</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropDown />
        }
    </div>

);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
}) 

export default connect(mapStateToProps)(Header);