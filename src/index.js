const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const {dbConnection} = require('./config/db');
const PORT = process.env.PORT || 3000;
const app = express();

dotenv.config();


const MONGO_URI = process.env.MONGO_URI;


dbConnection();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
