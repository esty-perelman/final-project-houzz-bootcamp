import express from "express";
import { authorize } from "../API/authentications-and-authorizations/authorize.js";
import userService from './service.js';
const router = express.Router();

router.get("/", authorize("Admin"), getAll);
router.get("/:id", authorize(), getById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser)


function getAll(req, res, next) {
  userService
    .getAll()
    .then((users) =>
      res.status(201).json({ message: "get all success", users })
    )
    .catch((err) => next(err));
}

function getById(req, res, next) {
  // const currentUser = req.auth;
  const id = req.params.id;
  // if (id !== currentUser.id && currentUser.role !== "Admin") {
  //   return res.status(401).json({ message: "Unauthorized" });
  //}
  userService
    .getById(id)
    .then((user) =>
      user
        ? res.status(201).json({ message: "success get user", user })
        : res.sendStatus(404).json({ massage: "User Not Found" })
    )
    .catch((error) => next(error));
}

function updateUser(req, res, next) {
  const id = req.params.id
  const user = req.body
  userService
  .updateUser(id, user)
  .then((data) => res.status(200).json({ message: data }))
  .catch((error) => next(error));
}

function deleteUser(req, res, next) {
  const id = req.params.id
  userService
  .deleteUser(id)
  .then((data) => {
    const cookie = req.cookies;
    for (var prop in cookie) {
      if (!cookie.hasOwnProperty(prop)) {
          continue;
      }    
      res.cookie(prop, '', {expires: new Date(0)});
  }
    res.status(200).json({ message: data })
  })
  .catch((err)=> {next(err)})
}

export default router;
