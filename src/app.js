const express = require("express");
const cors = require("cors");
const helmet = require("helmet"); // For securing HTTP headers
const morgan = require("morgan"); // For logging HTTP requests

const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan("dev")); // Log HTTP requests in development mode

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server Running"
  });
});

module.exports = app;
