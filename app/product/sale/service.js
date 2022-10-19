import "dotenv/config";
import Sale from "./model.js";
import bcrypt from "bcrypt";

async function getAll() {
    return new Promise(async (resolve, reject) => {
        try {
            const allProduct = await Sale.find({});
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
            const product = await Sale.findOne({ _id: id });
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
            const product = await Sale.create(obj);
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
            const product = await Sale.findByIdAndUpdate(id, obj);
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
            const product = await Sale.findOne({ _id: id });
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
            await Sale.findByIdAndDelete(id);
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

