const express=require('express')
const app=express()
app.get('/',function(req,res){
    res.send('Good Evening! Backend server is running successfully.')
})
app.get('/login',function(req,res){
    res.send('Login page is working fine.')
})
app.get('/register',function(req,res){
    res.send('Register page is working fine.')
})
app.listen(3000,function(req,res){
  console.log('Server is running on port http://localhost:3000')
})

