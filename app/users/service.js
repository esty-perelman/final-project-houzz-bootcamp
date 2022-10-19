import jwt from "jsonwebtoken";
import "dotenv/config";
import User from "./model.js";
import bcrypt from "bcrypt";
const { sign } = jwt;

async function getAll() {
  const allUsers = await User.find({})
  return allUsers.map((u) => {
    const {
      password,
      ...userWithoutPassword
    } = u;
    return userWithoutPassword;
  });
}
async function getById(id) {
  const user = await User.findOne({
    _id: id
  });
  const {
    password,
    ...userWithoutPassword
  } = user._doc;
  if (!userWithoutPassword) return;
  return {
    ...userWithoutPassword
  };
}

async function createOneUser(user, asksRole) {
  return new Promise(async (resolve, reject) => {
    try{
      const findUser = await User.findOne({ email: user.email })
      if (!findUser)
        return bcrypt.hash(user.password, 10, (error, hash) => {
          if (error) reject(error);
          const createUser = new User({
            name: user.name,
            email: user.email,
            password: hash,
            role: asksRole == "Admin" && user.role ? user.role : "user",
          });
          createUser.save();
          resolve(createUser);
        });
      reject("email already exist");
    } catch (error){
      reject(error)
    } 
  });
}

function createUserToken(user) {
  const secret = process.env.SECRET
  const token = sign({
    id: user._id,
    role: user.role
  }, secret, {
    algorithm: "HS256"
  });
  const {
    password,
    ...userWithoutPassword
  } = user;
  return {
    ...userWithoutPassword,
    token,
  };
}

async function updateUser(id, user) {
  return new Promise(async (resolve, reject) => {
    try {
      const userToUpdate = ({
        name: user.name,
        role: user.role,
      })
      await User.findByIdAndUpdate(id, {$set: {...userToUpdate}})
      resolve('updated')
    } catch (error) {
      reject(error)
    }
  });
}

async function deleteUser(id) {
  return new Promise(async (resolve, reject) => {
    User.findByIdAndRemove(id)
      .then(resolve("deleted"))
      .catch((err) => reject(err));
  });
}


export default {
  getAll,
  getById,
  updateUser,
  deleteUser
};
export {
  createUserToken,
  createOneUser
};
