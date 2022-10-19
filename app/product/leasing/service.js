import "dotenv/config";
import Leasing from "./model.js";
import bcrypt from "bcrypt";

async function getAll() {
    return new Promise(async (resolve, reject) => {
        try {
            const allProduct = await Leasing.find({});
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
            const product = await Leasing.findOne({ _id: id });
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
            const product = await Leasing.create(obj);
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
            const product = await Leasing.findByIdAndUpdate(id, obj);
            resolve(product);
        }
        catch(error){
            reject(error);
        }
    })
}

async function updateQuantity (id) {
    return new Promise(async (resolve, reject) => {
        try{
            const product = await Leasing.findOne({ _id: id });
            product.update({quantity: product.quantity--});
            //const product = await Product.findByIdAndUpdate(id, obj);
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
            await Product.findByIdAndDelete(id);
            resolve("deleted");
        }
        catch(error){
            reject(error);
        }
    })
}

// const sendBill = (obj) => {
//     jfile.writeFile('./bill.js', (obj), function (err, data) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log("send you bill");
//         }
//     })
// }

export default{ getAll, getById, create, update,updateQuantity, deleteProduct };

