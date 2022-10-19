import { createMongooseModel } from "../../../app/API/create-quick/mongo.js";
import userModel  from "../../../app/users/model.js";

const RequestModel = createMongooseModel('Request', {
    requestNumber: {
      type: Number,
      required: [true],
    },
    sender: {
      //how its be user model???
      type: String,
      required: [true],
    },
    subject: {
      type: String,
      require: [true, "Please give title about request content!"],
    },
    content: {
      type: String,
      require: [false],
    },
    status:{
        type: Boolean,
        require: [true, "must be status of request!"]
    }
    
  })

export default RequestModel;