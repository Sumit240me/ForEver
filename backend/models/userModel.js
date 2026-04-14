import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    cartData:{
        type: Object,
        default: {}
    }
},{minimize:false})

// we have are the minimize true because the mongoose generally neglect the empty field
// but we need only empty field thats why adding minimizze false

export const User = mongoose.model("User", userSchema)