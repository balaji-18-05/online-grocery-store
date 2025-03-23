const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema(
    {
        name :{
            type: String,
            required: true
        },
        email :{
            type:String,
            required: true
        },
        password :{
            type:String,
            required:true
        }
    }
)

const cust = mongoose.model("Userdetails",CustomerSchema);
 module.exports=cust;