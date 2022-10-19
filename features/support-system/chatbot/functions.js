import chatbot_model  from  './model.js' ;

const getAllItems = () => {
    return new Promise((resolve) => {
        chatbot_model.find({}, {}, (err, data) => {
            if (err) {
                throw err
            }
            else {
                resolve(data)
            }
            console.log(data);
        })
        
    })
}
const getItemsById = (id) => {
    console.log(id);
    return new Promise((resolve) => {

        chatbot_model.find({ id }, {_id: 0, __v: 0}, (err, data) => {

            if (err) {
                throw err
            }
            else {
                resolve(data)
            }
            console.log(data);
        });
        // resolve("ItemsById")
    })
}


const updateItems = (id, obj) => {
console.log(obj,"obj");
    return new Promise((resolve,reject) => {
        chatbot_model.update({id},obj    
        , (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
               
            }

        })
       
    })
}

const deliteItems = (id) => {
    console.log(id);
    return new Promise((resolve) => {
        chatbot_model.remove({id}, (err, data) => {
            if (err) {
                return err
            }
            else {
                resolve(data)
            }
        })
    })
}

const addItems = (obj) => {
    return new Promise((resolve, reject)=> {
        let add = new chatbot_model(obj)
        add.save()
        resolve(add)

       
    })

}
export default {getAllItems,getItemsById,deliteItems,updateItems,addItems}
