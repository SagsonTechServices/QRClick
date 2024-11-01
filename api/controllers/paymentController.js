const razorpayService = require('../services/razorpayService');

async function initiatePayementOrder(req , res){
    const {amount} = req.body;
    console.log('controller: ' + amount);
    const options = {
        amount: amount * 100,
        currency: "INR",
        receipt: `receipt_${Date.now}`
    };
    console.log(options);
    try{
        const order = await razorpayService.createOrder(options);
        res.status(200).json({order});
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Could not instantiate payment."});
    }
}

module.exports = {
    initiatePayementOrder
}