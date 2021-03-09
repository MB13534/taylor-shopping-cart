require("dotenv").config();

//our hardcoded products
const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

//connecting to our DB
connectDB();

//this will delete everything in our DB and add the hardcoded items
//it is a DB so async/await
//this script is not intended to run always

//npm run data:import
const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productsData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import");
    process.exit(1);
  }
};

importData();
