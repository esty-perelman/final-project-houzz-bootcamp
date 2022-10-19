import { createMongooseModel } from "../API/create-quick/mongo.js";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CartModel = createMongooseModel('Cart', {
    product: {
        type: Schema.Types.ObjectId, 
        ref: 'Product',
        required: [true, "Please provide an prodcut!"],
    },
    quantity: {
        type: Number,
        required: [true, "Please provide an quantity!"],
    },
    want: {
        type: Boolean,
        required: [true, "Please provide an if you want!"],
    },
    cart: {
      type: Schema.Types.Date,
      ref: 'Product',
      require: [true, "mast have role"],
    },
})

export default CartModel
