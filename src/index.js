const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const {dbConnection} = require('./config/db');
const app = express();
const router = require('./routes/productRoutes.js');
const methodOverride = require('method-override');


dotenv.config();

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;


dbConnection();


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use('/',router);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
