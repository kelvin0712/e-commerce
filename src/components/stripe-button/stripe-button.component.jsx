import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const key = "pk_test_Q43UCseBeqvCXfMdkChSFOL900teql7xNf";

    const onToken = token => {
        console.log(token);
        alert("payment sucessfull")
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Clothing"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total price is $${price}`}
            stripeKey={key}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
        />
    )
}

export default StripeCheckoutButton;