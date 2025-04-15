const express = require("express");
const donenv = require("dotenv").config();
const receiptRoutes = require("./routes/receiptRoutes");
const app=express();


const port= process.env.PORT || 5000;

app.use("/api/receipts",receiptRoutes);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})