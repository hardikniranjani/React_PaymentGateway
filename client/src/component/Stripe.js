import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
// import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const KEY = "pk_test_51MNvWPSEwZC2nN6GpDkhHq6MVGrGILIW7dfB4DiaPQwEAr0iY305KNpy0pDxa4bKhwpOvXTXbb36Ll7uunVN86qW00nfHIKEIj"
const stripePromise = loadStripe(KEY);

export default function Stripe(props) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:3001/payment/newstripe", {
      mode: 'no-cors',
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( props.amount ),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}