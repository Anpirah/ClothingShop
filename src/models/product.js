const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:  {type: String},
  description:{type: String},
  image: {type: String},
  category: { type: String, enum: ['Camisetas', 'Pantalones', 'Zapatos', 'Accesorios'] },
  size: { type: String, enum: ['XS', 'S', 'M', 'L', 'XL'] },
},{ timestamps: true });

const Product = mongoose.model('Product', productSchema );
module.exports = Product;
