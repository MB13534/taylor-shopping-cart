require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

//function from config/db that connects to our MongoDB
connectDB();

//initiate express function in variable
const app = express();

//will need json data from the react client, dont need bodyparser anymore
app.use(express.json());

//any requests going through localhost:3001 /api/products will have access to the productRoutes
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API RUNNING");
  });
}

//get from environment variables or localhost
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
