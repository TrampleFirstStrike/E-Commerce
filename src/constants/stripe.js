// import React, { Component } from 'react';
// import axios from 'axios';
// import StripeCheckout from "react-stripe-checkout";
// import swal from 'sweetalert';

// const STRIPE_PUBLISHABLE = "pk_test_gRKhbtjvAjDvqk2RfC8oUuAz";
// const PAYMENT_SERVER_URL = "/api/payment";
// const CURRENCY = "USD"

// const fromUsdCent = amount => amount * 100;

// class Stripe extends Component {
//     onToken = (amount, description) => token =>
//         axios
//         .post(PAYMENT_SERVER_URL, {
//             description, 
//             source: token.id,
//             currency: CURRENCY,
//             amount: fromUsdCent(amount)
//         })

//     .then(response => {
//         swal("Order Placed, Thank You For Your Hodor!")
//     })




// render() {
//     const { name, description, amount } = this.props;
//     return (
//         <StripeCheckout
//             name={name}
//             description={description}
//             amount={fromUsdCent(amount)}
//             token={this.onToken(amount, description)}
//             currency={CURRENCY}
//             stripeKey={STRIPE_PUBLISHABLE}
//             shippingAddress
//             billingAddress={true}
//             ></StripeCheckout>

//     )
// }
// }

// export default Stripe;