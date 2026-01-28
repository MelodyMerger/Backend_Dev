const express=require("express");
const app=express();
const port=8000;

app.get("/",(req,res)=>{
    res.send("welcome to home page")
})
app.get("/users",(req,res)=>{
    res.send("<h1>this is user page</h1>")
})

app.get("/users/:id",(req,res)=>{
    const userId=req.params.id
    res.send(`you are requesting for the users: ${userId}`)
})


app.listen(port,()=>{
    console.log(`port is running on port ${port}`);
    
})