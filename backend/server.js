const express = require("express"); // Calling Express needed dependencies
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express(); // Declare a variable
require("dotenv").config();

const PORT = process.env.PORT || 5000; // define port to run the server 

app.use(cors());
app.use(bodyParser.json()); // to use the key value pairs in mongodb 

const URL = process.env.MONGODB_URL; // call the cerated MongoDB URL 

mongoose.connect(URL, {
    useNewUrlParser: true, // options need to keep the mongodb Configurations
    useUnifiedTopology: true,
})

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection success!!");
})

const router = require('./routes/Students.js');
app.use('/student',router);


app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})
