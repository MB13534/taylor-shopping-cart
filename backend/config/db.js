require("dotenv").config();
const mongoose = require("mongoose");

//create setup and get mongoose to connect to DB

//async because we are connecting to our DB
const connectDB = async () => {
  try {
    //takes in DB uri and an object of settings
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESSFUL");
  } catch (error) {
    console.error("MongoDB connection FAILED");
    //exit server if failed
    process.exit(1);
  }
};

//export the function
module.exports = connectDB;
