const express = require("express");

const doctorController = require("./controllers/doctor.controllers");

const app = express();

app.use(express.json());

app.use("/doc", doctorController);


module.exports = app;   