// imports 
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const paymentRoute = require('./routes/PaymentRoute');
dotenv.config();

// creating the backend app 
const port = process.env.PORT || 9000;
const app = express();

// middlewares setup 
app.use(cors());
app.use(express.json());

// api routes 
app.use('/api/payment', paymentRoute);

// initializing the server 
app.listen(port, () => {
    console.log(`Server has started at port ${port}`);
})
