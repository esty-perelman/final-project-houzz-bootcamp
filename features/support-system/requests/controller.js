import express from "express";
const router = express.Router();

import { createRequire } from 'module';
//require("dotenv").config();
import service from "./service.js";

router.get('/', async(req, res) => {    
    let data = await service.getAllRequests();
    res.json(data);
});

router.get('/:id', async(req, res) => {    
    let data = await service.getRequestById(req.params.id);
    res.json(data);
});

router.post('/', async(req, res) => {
    console.log('POST request');
    console.log('numbers', req.body.requestNumber+' sender: '+
    req.body.sender+' subject: '+req.body.subject+' contents: '+req.body.content+ ' status: '+
    req.body.status);
    let data = await service.createRequest(req.body);
    res.json(data);
});

router.put('/:id', async(req, res) => {
    let data= await service.updateRequest(req.params.id, req.body);
    res.json(data);
});

router.delete('/:id', async(req, res) =>{
    let data = await service.deleteRequest(req.params.id);
    res.json(data);
});

export default router;