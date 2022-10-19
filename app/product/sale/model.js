import { createMongooseModel } from "../../API/create-quick/mongo.js";

const SaleModel = createMongooseModel('Sale', {
    name: {
        type: String,
        required: [true, "Please provide an name!"],
    },
    price: {
        type: Number,
        required: [true, "Please provide an price!"],
    },
    category: {
        type: String,
        required: [true, "Please provide an category!"],
    },
    description: {
        type: String,
        required: [true, "Please provide an description!"],
    },
    image: {
        type: String,
        required: [true, "Please provide an image!"],
    },
    quantity:{
        type: Number,
        required: [true, "Please provide an quantity!"]
    }
})

export default SaleModel

