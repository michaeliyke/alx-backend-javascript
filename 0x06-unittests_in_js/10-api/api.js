#!/usr/bin/node

const express = require('express');

const app = express();
app.use(express.json());

const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const cartId = req.params.id;
  if (!/^\d+$/.test(cartId)) {
    res.status(404).send('Invalid cart ID');
    return;
  }
  res.send(`Payment methods for cart ${cartId}`);
});

app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.send(`Welcome ${username}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
