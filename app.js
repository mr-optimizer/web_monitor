const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const cors = require("cors");

const errorMiddleware = require("./middleWares/errors");

//setting up config file
dotenv.config({ path: "./config/config.env" });

const allowedOrigins = [
  "http://localhost:3000",
];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

const userRoutes = require("./routes/user");

// import all routes here
app.use("/api/v1/", userRoutes);

// middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
