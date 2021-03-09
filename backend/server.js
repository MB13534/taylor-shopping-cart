require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

//function from config/db that connects to our MongoDB
connectDB();

//initiate express function in variable
const app = express();

//get from environment variables or localhost
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
