const mongoose = require("mongoose");
const express = require("express");
const app = express(); 
const  dataconnection  = require("./Config/mongoose");
require("dotenv").config();

// Define the port where your server should listen.
const port = process.env.PORT || 3000; 
mongoose
  .connect(process.env.moongoseAtlasurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(express.json()); 

// Start the server and listen for incoming requests.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
