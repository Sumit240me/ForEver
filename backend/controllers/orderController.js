
import orderModel from "../models/orderModel.js"
import { User } from "../models/userModel.js";
import Stripe from 'stripe'

// gateway initialize

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Placing orders using the COD Method
const placeOrder = async(req, res) => {
try {

    const { userId, items, amount, address } = req.body;

    const orderData = {
        userId,
        items,
        address,
        amount,
        paymentMethod:"COD",
        payment:false,
        date:Date.now()
    }

    const newOrder = new orderModel(orderData)
    await newOrder.save()

    await User.findByIdAndUpdate(userId,{cartData:{}})

    return res.json({success: true, message:"Order Placed"})
    
} catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
}

}

// Placing orders using Stripe Method
const placeOrderStripe = async(req,res) => {
  
}

// Placing orders using Razorpay Method
const placeOrderRazorpay = async(req,res)=>{

}

//All orders data for admin panel

const allorders = async(req,res)=>{
    try {
        
        const orders = await orderModel.find({});

        res.json({success:true, orders})

    } catch (error) {
       console.log(error)
       res.json({success:false, message:error.message}) 
    }
}

//User order Data For Fronted
const userOrders = async (req, res) => {
    try {
        
        const { userId } = req.body

        const orders = await orderModel.find({userId:userId})

        res.json({success:true, orders})

    } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message}) 
    }
}

//update order status From Admin panel
const updatestatus = async(req,res) => {
    try {
        
        const {orderId, status} = req.body

        await orderModel.findByIdAndUpdate(orderId, { status })
        res.json({succes:true, message:'Status Updated'})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message}) 
    }
}


export { placeOrder,placeOrderStripe,placeOrderRazorpay, allorders, userOrders, updatestatus }