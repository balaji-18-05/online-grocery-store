const express = require('express')
const app = express()
const mongoose = require('mongoose')


app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hi from server");
})

app.post('/api/products',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

mongoose.connect("mongodb://127.0.0.1:27017/store", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
     console.log("Connected successfully")
     app.listen(3000,()=>{
        console.log("server is running in 3000");
     });
})
.catch(err => console.log("DB Connection Error:", err));
