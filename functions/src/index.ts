import * as functions from "firebase-functions";
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Jj1bbCFikBrW0NDsFUaJdQUUKNHiFg8qOIvkDJmf8KYzCMaIgIiQW4byNcwlaWiC3MS9vL8amZ7ZfqvG0rC5UY400w2Ca4U99');
const app = express();

app.use(cors({
  origin: true
}));
app.use(express.json());

app.post('/payment/create', async (req:any, res:any) => {
  try {
    const { amount, shipping }: { amount:any, shipping:any } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      shipping,
      amount,
      currency: 'usd'
    });

    res
    .status(200)
    .send(paymentIntent.client_secret);

  } catch (err) {
    res
      .status(500)
      .json({
        statusCode: 500,
        message: err.message
      })
  }
})

app.get('*', (req:any, res:any) => {
  res 
    .status(404)
    .send('404 Not Found.');
});

exports.api = functions.https.onRequest(app);

