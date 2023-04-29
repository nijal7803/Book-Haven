const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bookRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// middlwares

app.use("/books",router);

mongoose.connect("mongodb://localhost:27017/bookstore")
.then(()=>{
    console.log("Connection successful");
})
.then(()=>{
    app.listen(5000);
})
.catch((e)=>{
    console.log(e);
})