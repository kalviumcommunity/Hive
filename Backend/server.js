const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose')
const PORT = process.env.PORT



const app = express();
app.use(express.json());



app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });

mongoose
  .connect(process.env.mongoUri)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db & Api is running on port`, process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });