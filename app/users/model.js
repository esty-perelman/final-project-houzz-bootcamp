import { createMongooseModel } from "../API/create-quick/mongo.js";

const UserModel = createMongooseModel('User', {
  name: {
    type: String,
    required: [true, "Please provide a name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
  },
  password: {
    type: String,
    require: [true, "Please provide a password!"],
  },
  role: {
    type: String,
    require: [true, "mast have role"],
  },
})

const routersModel = [
  { getall: { roles: "Admin" } },
  {
    getbyid: {
      roles: ["User", "Admin"],
      middleware: (req, res, next) => {
        const currentUser = req.user;
        const id = req.params.id;
        if (id !== currentUser.id && currentUser.role !== "Admin")
          return res.status(401).json({ message: "Unauthorized" });
        next();
      },
    },
  },
];

const usersRouter = {
  name: "User",
  model:  UserModel,
  routers: routersModel,
};

export default UserModel
export { usersRouter };

