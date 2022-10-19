import { createMongooseModel } from "../../../app/API/create-quick/mongo.js"
import mongoose from 'mongoose';

const {Schema}=mongoose;


const solution2 = new Schema({
    key: {
        type: String,
        required: true
    },
    value: {
        type: [String],
        required: function () { return chatbot.titel != "information" }//check required

    }
}, { _id: 0 })


const chatbot =createMongooseModel("chatbot", {
    title: {
        type: String,
        required: true
    },
    solution: [solution2]
           
    }
    )

// if (chatbot.titel =="information") { 
//      solution2=new Schema ({
//         key:{
//             type:String,
//             required:true
//         }
//     },{_id:0})
// } else  {
//      solution2=new Schema({
//         key:{
//             type:String,
//             required:true
//         },
//         value:{
//             type:[String],
//             required:true
    
//         }
//     },{_id:0})
// }

export default chatbot