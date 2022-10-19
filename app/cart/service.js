import "dotenv/config";
import Cart from "./model.js";
import bcrypt from "bcrypt";

async function getAll() {
    return new Promise(async (resolve, reject) => {
        try {
            const allProduct = await Cart.find({});
            resolve(allProduct);
        }
        catch (error) {
            reject(error);
        }
    })
}

async function getById (id) {
    return new Promise(async (resolve, reject) => {
        try{
            const product = await Cart.findOne({ _id: id });
            resolve(product);
        }
        catch(error){
            reject(error);
        }
    })
}
async function create (obj) {
    return new Promise(async (resolve, reject) => {
        try{
            const product = await Cart.create(obj);
            resolve(product);
        }
        catch(error){
            reject(error);
        }
    })
}

async function update (id, obj) {
    return new Promise(async (resolve, reject) => {
        try{
            const product = await Cart.findByIdAndUpdate(id, obj);
            resolve(product);
        }
        catch(error){
            reject(error);
        }
    })
}

async function deleteProduct (id) {
    return new Promise(async (resolve, reject) => {
        try{
            await Cart.findByIdAndDelete(id);
            resolve("deleted");
        }
        catch(error){
            reject(error);
        }
    })
}

export default{ getAll, getById, create, update, deleteProduct };

