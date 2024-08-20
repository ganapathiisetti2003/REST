 var express=require('express')


 var app=express()
 var port=2003
 app.get('/about',(req,res)=>{
    //res.send("<hi>HELLO WORLD</h1>")
    res.send("about")

 })
 app.get('/users/:name',(req,res)=>{
    var userName=req.params.name;
    res.send( `hello,${userName}!`);
 })


 app. listen(port,()=>{
    console.log('server running')
 })