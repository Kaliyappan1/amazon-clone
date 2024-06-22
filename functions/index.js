const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PT1TfRxuVmyxJXTzippUU6WocxxQ25i4DtXj2zYzVnult1zcXGMHelFqkShoGHb6qdrabUA8MA0jCFdhTObezmZ00N17gwaLX');
// API
// App config 
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => {
  response.status(200).send('hello world');
});

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment Request Recieved Boom!!! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency 
        currency: 'usd',
    });

    // ok - created
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

// Listen command
exports.api = onRequest(app);

// example endpoint
// http://127.0.0.1:5001/amzon-clone-1/us-central1/api