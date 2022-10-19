import RequestModel from "./model.js";

const getAllRequests = ()=>
{
    return new Promise((resolve, reject) => 
    {
        RequestModel.find({},(err, result) => 
        {
            if (err)
            {
                reject(err);
            }
            for (let i = 0; i < result.length; i++) 
            {
                let request = result[i];
                console.log(request.requestNumber + ", " + request.subject + ", " + request.content);
            }
            resolve(result);
        })
    })   
}

const getRequestById = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        RequestModel.findOne({requestNumber: id} , (err, result) =>
        {   
            if (err)
            {
                reject(err);
            }else
            {
                console.log("this request:"+result.requestsNumber + ", " + result.subject + ", " + result.content);
                resolve(result);
            }
        })
    });
}

const createRequest = (obj, res) => {
    return new Promise((resolve, reject) =>
    {
        let r = new RequestModel(
            {
                //אמור להיות בידי המשתמש להכניס מס פניה? לא אמור להיות אוטומטי??
                "requestNumber": obj.requestNumber,   
                "sender": obj.sender,
                "subject": obj.subject,
                "content": obj.content,
                "status": obj.status
            }
        )
        //למה נוצר לי שדה ריק בזמן הוספה???
        r.save();
        resolve(RequestModel.find({ requestNumber: 2 }));
        // resolve(r);
        // r.save((error, response)=>
        // {  
        //     if (error) 
        //     {  
        //         reject(error);  
        //     }else{
        //         resolve('inserted!!')
        //     }  
        // })
    })
}

const updateRequest = (id, obj) =>
{
    return new Promise((resolve, reject) =>
    {
        console.log('obj.id: '+obj.id);
        RequestModel.findOneAndUpdate({requestNumber: id},
        {
            "requestsNumber": id,
            "sender": obj.sender, 
            "subject": obj.subject,
            "content": obj.content,
            "status": obj.status
        },(err,res)=>
        {
            if(err)
            {  
                reject(err);  
            }else{
                resolve("request updated!")
            } 
        })
    })
}

const deleteRequest = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        RequestModel.findOneAndDelete({requestNumber:id}, (err, res)=>
        {
            if(err)
            {
                reject(err);
            }else{
                resolve("request deleted!")
            }
        })
    })
}

export default {getAllRequests, getRequestById, createRequest, updateRequest, deleteRequest}
