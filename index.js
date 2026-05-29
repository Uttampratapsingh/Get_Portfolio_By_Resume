const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = require("./src/app");

const connectDB = require("./src/config/db");
app.use(cors());
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});