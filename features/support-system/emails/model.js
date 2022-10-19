
import { createMongooseModel } from "../../../app/API/create-quick/mongo.js";

const EmailModel = createMongooseModel('Email', {
    // to: {
    //   type: String,
    //   required: [true, "Please provide an Email!"],
    // },
    emailNumber: {
      type: Number,
      required: [true],
    },
    subject: {
      type: String,
      require: [true, "Please give title about email-content!"],
    },
    text: {
      type: String,
      require: [false],
    },
    
  })

export default EmailModel;