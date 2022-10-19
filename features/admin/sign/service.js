import "dotenv/config";
import {
  createOneUser,
  createUserToken
} from "../../../app/users/service.js"
import User from "../../../app/users/model.js";
import bcrypt from "bcrypt";

function register(req, res) {
  createOneUser(req.body)
    .then((result) => {
      const user = createUserToken(result._doc);
      const now = new Date();
      var time = now.getTime() + 60 * 60 * 1000;
      now.setTime(time);
      res
        .cookie("access_token", user.token, {
          httpOnly: true,
          expires: now,
          secure: process.env.NODE_ENV === "production",
        })
        .cookie("id", user._id.toHexString(), {
          httpOnly: false,
          expires: now,
          secure: process.env.NODE_ENV === "production",
        })
        .cookie("name", user.name, {
          httpOnly: false,
          expires: now,
          secure: process.env.NODE_ENV === "production",
        })
        .status(201).json({
          message: "User Created Successfully",
          user
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error creating user",
        error
      });
    });
}

function login(req, res) {
  User.findOne({
      email: req.body.email
    })
    .then((result) => {
      bcrypt
        .compare(req.body.password, result.password)
        .then(async (correctPassword) => {
          if (!correctPassword)
            res
            .status(400)
            .json({
              massage: "Email or password does not exists",
              error
            });
          const now = new Date();
          var time = req.body.remember? now.getTime() + 60 * 60 * 1000 * 24 : now.getTime() + 60 * 60 * 1000;
          now.setTime(time);
          const user = await createUserToken(result._doc);
          return res
            .cookie("access_token", user.token, {
              httpOnly: true,
              expires: now,
              secure: process.env.NODE_ENV === "production",
            })
            .cookie("id", user._id.toHexString(), {
              httpOnly: false,
              expires: now,
              secure: process.env.NODE_ENV === "production",
            })
            .cookie("name", user.name, {
              httpOnly: false,
              expires: now,
              secure: process.env.NODE_ENV === "production",
            })
            .status(200).json({
              message: "Login Successful",
              user
            });
        })
        .catch((error) => {
          res.status(400).json({
            message: "Email or password does not exists",
            error
          });
        });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Email or password does not exists",
        error
      });
    });
}

export {
  register,
  login
};
