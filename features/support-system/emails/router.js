const router = require("express").Router();
//import { BL } from "./BL"
const BL = require("./service");
router.post('/', function (req, res) {
    console.log("i rouet email");
    
    // BL.sendEmail2(req);
});