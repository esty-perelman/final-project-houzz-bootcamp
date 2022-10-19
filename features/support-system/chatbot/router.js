import exp from "express";
import chatbot_model from "./functions.js";
const router = exp.Router()


router.get('/getAllItems',  (req, res) => {

    chatbot_model.getAllItems().then(data=>res.json(data))
    
})
router.get('/:id',  (req, res) => {
    let id = req.params.id
    chatbot_model.getItemsById(id).then(data=>res.json(data))

})

router.post('/post', (req, res) => {
    console.log("chatbotpost");
    console.log(req.body);
        let body = req.body
        chatbot_model.addItems(body).then(data=> res.json(data))    
    })

router.put("/:id",  (req, res) => {
    let id = req.params.id
    let obj = req.body
    chatbot_model.updateItems(id, obj).then(data=>res.json(data))
})

router.delete('/:id',  (req, res) => {
    let id = req.params.id
    chatbot_model.deliteItems(id).then(data=>res.json(data))

})
export default router;

