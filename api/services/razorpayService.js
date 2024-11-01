const razorpay = require('../config/razorpayConfig');

async function createOrder(options){
    try{
        console.log('service: ' + options);
        const order = await razorpay.orders.create(options);
        return order;
    }catch(error){
        throw error;
    }
}

module.exports = {
    createOrder
}