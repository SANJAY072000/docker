const express = require("express"),
  app = express(),
  port = 3000 || process.env.PORT;

app.get("/",(req,res)=>{
    res.status(200).json({"message":"Home"});
});

app.get("/register",(req,res)=>{
    res.status(200).json({"message":"Register"});
});

app.get("/login",(req,res)=>{
    res.status(200).json({"message":"Login"});
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
