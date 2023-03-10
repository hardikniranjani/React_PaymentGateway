const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// For Stripe

router.post('/stripe', async (req, res) => {
    const { token = {}, amount = 0 } = req.body;
    console.log("data", req.body)
    if (!Object.keys(token).length || !amount) {
        res.status(400).json({ success: false });
    }

    const { id: customerId } = await stripe.customers.create({
        email: token.email,
        source: token.id,
    }).catch(e => {
        console.log(e);
        return null;
    })

    if (!customerId) {
        res.status(500).json({ success: false });
        return;
    }

    const invoiceId = `${token.email}-${Math.random().toString()}-${Date.now().toString()}`;

    const charge = await stripe.charges.create({
        amount: amount * 100,
        currency: "USD",
        customer: customerId,
        receipt_email: token.email,
        description: "Stripe Payment",
    }, { idempotencyKey: invoiceId }).catch(e => {
        console.log(e);
        return null;
    });

    if (!charge) {
        res.status(500).json({ success: false });
        return;
    };

    res.status(201).json({ success: true });
})

router.post('/newstripe', async (req, res) => {
    // const Domain = process.env.BaseURL_Front;
    const { token = {}, amount = 0 } = req.body;
    const { id: customerId } = await stripe.customers.create({
        email: token.email,
        source: token.id,
    }).catch(e => {
        console.log(e);
        return null;
    })

    if (!customerId) {
        res.status(500).json({ success: false });
        return;
    }

    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: "usd",
        payment_method_types: ['card'],
        payment_method: 'pm_card_visa',
        description: 'Pay using Stripe',

    });

    if (paymentIntent) {
        return res.status(200).json({ success: true });
    } else {
        return res.status(500).json({ success: false });
    }
})

module.exports = router;