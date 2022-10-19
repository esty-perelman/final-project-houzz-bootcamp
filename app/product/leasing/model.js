import { createMongooseModel } from "../../API/create-quick/mongo.js";

const LeasingModel = createMongooseModel('Leasing', {
    producer: {
        type: String,
        required: [true, "Please provide a producer!"],
    },
    model: {
        type: String,
        required: [true, "Please provide a model!"],
    },
    state: {
        type: String,
        required: [true, "Please provide a state!"],
    },
    category: {
        type: {
            id: {
                type: String,
                required: [true, "Please provide a categoryId!"],
            },
            name: {
                type: String,
                required: [true, "Please provide a categoryName!"],
            },
        },
        required: [true, "Please provide a category!"],
    },
    engine: {
        type: String,
        required: [true, "Please provide an engine!"],
    },
    YearOfProduction: {
        type: Number,
        required: [true, "Please provide a YearOfProduction!"]
    },
    km: {
        type: Number,
        required: [true, "Please provide a km!"],
    },
    engineCapacity: {
        type: Number,
        required: [true, "Please provide an engineCapacity!"],
    },
    tradeInOnline: {
        type: Boolean,
        required: [true, "Please provide a tradeInOnline!"],
    },
    numOfSites: {
        type: Number,
        required: [true, "Please provide a numOfSites!"],
    },   
    accessories: {
        type: String,
        required: [true, "Please provide an accessories!"],
    },
    color: {
        type: String,
        required: [true, "Please provide a color!"],
    },
    price: {
        type: Number,
        required: [true, "Please provide a price!"],
    },
    quantity: {
        type: Number,
        required: [true, "Please provide a quantity!"],
    },
    image: {
        type: String,
        required: [true, "Please provide a image!"],
    },
})

export default LeasingModel

