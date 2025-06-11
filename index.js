const express = require("express");
const mongoose = require("mongoose");

const jobRoutes = require("./route/job.routes");

const app = express();

//Middleware
app.use(express.json());

//Connection with mongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/jobApp")
  .then(() => console.log(`DB Connected successfully`))
  .catch((err) => console.log(`Error connecting database`, err));

//Routes
app.use("/api/v1/job", jobRoutes);

const PORT = 8080;

app.listen(PORT, () => console.log(`Server is up and running at port ${PORT}`));
