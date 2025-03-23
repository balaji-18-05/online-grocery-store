import express from "express";
const app = express();
import cust from "./models/customer.js";
import mongoose from "mongoose";
import cors from 'cors';

app.use(express.json());
app.use(cors());


app.post('/login', async(req,res)=>{
    const {email,password}=req.body;
    cust.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password) res.json("success");
            else res.json("password incorrect");
        }
        else{
            res.json("user not exist");
        }
    })
})



app.post('/register', async(req,res)=>{
    try{
        const existinguser = await cust.findOne({email:req.body.email})
        if(existinguser){
            res.json("exist");
        }
       else{
        const product = await cust.create(req.body)
        res.status(200).json(product);
       }
        
    } catch(error){
        res.status(500).json({message: error.message});
    }
})

app.listen('3001',()=>{
    console.log("from 3001");
})



mongoose.connect("mongodb://127.0.0.1:27017/store",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("connected successfully");
})
.catch((err)=>{
    console.log("connection failed"+err);
});