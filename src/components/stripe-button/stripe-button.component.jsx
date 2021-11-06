import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk-test_acascwacaACAcwacascacsa";

const onToken = token => {
    console.log(token);
    alert('pagado');
}
    
    return (
        <StripeCheckout 
            label='pay now'
            name = 'e-shop'
            billingAddress
            shippingAddress
            description = {`your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;