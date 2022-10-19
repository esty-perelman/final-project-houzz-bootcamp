import express from "express";
import { authorize } from "../../API/authentications-and-authorizations/authorize.js";
import leasingService from "./service.js"
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", authorize("Admin"), create);
router.put("/:id", authorize("Admin"), update);
router.put("/updateQuantity/:id", updateQuantity);
router.delete("/delete/:id", authorize("Admin"), deleteProduct);

function getAll(req, res) {
    leasingService
        .getAll()
        .then((p) =>
            res.status(201).json({ message: "get all sacsses", p })
        )
}

function getById(req, res) {
    let id = req.params.id;
    leasingService
        .getById(id)
        .then((p) =>
            res.status(201).json({ message: "get by id sacsses", p })
        )
}

function create(req, res) {
    let obj = req.body;
    leasingService
        .create(obj)
        .then((p) =>
            res.status(201).json({ message: "created ", p })
        )
}

function update(req, res) {
    let id = req.params.id;
    let obj = req.body;
    leasingService
        .update(id, obj)
        .then((p) =>
            res.status(201).json({ message: "updated ", p })
        )
}

function updateQuantity(req, res) {
    let id = req.params.id;
    leasingService
        .updateQuantity(id)
        .then((p) =>
            res.status(201).json({ message: "updated ", p })
        )
}

function deleteProduct(req, res) {
    let id = req.params.id;
    leasingService
        .deleteProduct(id)
        .then((p) =>
            res.status(201).json({ message: "deleted ", p })
        )
}

export default router;
