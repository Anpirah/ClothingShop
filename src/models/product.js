const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  category: { type: String, enum: ['Camisetas', 'Pantalones', 'Zapatos', 'Accesorios'] },
  size: { type: String, enum: ['XS', 'S', 'M', 'L', 'XL'] },
},{ timestamps: true });

module.exports = mongoose.model('Product', productSchema);
