const express = require('express');
const router = express.Router();
const razorpayController = require('../controllers/paymentController');

router.post('/create-order', razorpayController.initiatePayementOrder);

module.exports = router;