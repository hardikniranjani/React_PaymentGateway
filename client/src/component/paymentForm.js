import React, { useState } from 'react';
import StripeCheckout from "react-stripe-checkout";
import { FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import PayPal from './Paypal';

function PaymentForm() {
    const [amount, setAmount] = useState(0);
    const KEY = "pk_test_51MNvWPSEwZC2nN6GpDkhHq6MVGrGILIW7dfB4DiaPQwEAr0iY305KNpy0pDxa4bKhwpOvXTXbb36Ll7uunVN86qW00nfHIKEIj"

    const handleToken = (token) => {
        // const data = {
        //     token: token,
        //     amount: amount
        // }
        // console.log("data", data)
        fetch("http://localhost:3001/payment/stripe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token, amount }),
        })
            .then(res => res.json())
            .then(_ => {
                window.alert("Transaction Successful.");
            }).catch(_ => window.alert("Transaction Failed."))
    }
    const handleAmountChange = (e) => {
        const value = e.target.value;
        setAmount(value);
    };
    return (
        <div>
            <FormControl sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={amount}
                    onChange={handleAmountChange}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Amount"
                />
            </FormControl>
            <StripeCheckout
                stripeKey={KEY}
                token={handleToken}
                name="Stripe"
                label="Pay With Stripe"
                panelLabel={`Pay`}
                currency="USD"
                amount={amount * 100}
            >
            </StripeCheckout>
            <PayPal amount={amount}/>
        </div>
    )
}

export default PaymentForm