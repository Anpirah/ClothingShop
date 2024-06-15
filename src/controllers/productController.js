
// const Product = require('../models/product');

// const showProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     const productCards = getProductCards(products);
//     const html = `
//       <html>
//       <head><link rel="stylesheet" href="/styles.css"></head>
//       <body>
//         <h1>Productos</h1>
//         <div>${productCards}</div>
//         <p>${products}</p>
//       </body>
//       </html>
//     `;
//     res.send(html);
//   } catch (error) {
//     res.status(500).send('Error retrieving products');
//   }
// };

// const showProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.productId);
//     const html = `
//       <html>
//       <head><link rel="stylesheet" href="/styles.css"></head>
//       <body>
//         <h1>${product.name}</h1>
//         <p>${product.description}</p>
//         <img src="${product.image}" alt="${product.name}">
//       </body>
//       </html>
//     `;
//     res.send(html);
//   } catch (error) {
//     res.status(500).send('Error retrieving product');
//   }
// };

// const showProductsDashboard = async (req, res) => {
//   try {
//     const products = await Product.find();
//     const productCards = getProductCardsDashboard(products);
//     const html = `
//       <html>
//       <head><link rel="stylesheet" href="/styles.css"></head>
//       <body>
//         <h1>Dashboard</h1>
//         <a href="/dashboard/new">Nuevo Producto</a>
//         <div>${productCards}</div>
//       </body>
//       </html>
//     `;
//     res.send(html);
//   } catch (error) {
//     res.status(500).send('Error retrieving products');
//   }
// };

// const showNewProduct = (req, res) => {
//   res.send(`
//     <html>
//     <head><link rel="stylesheet" href="/styles.css"></head>
//     <body>
//       <h1>Nuevo Producto</h1>
//       <form action="/dashboard" method="POST">
//         <input type="text" name="name" placeholder="Nombre">
//         <textarea name="description" placeholder="Descripción"></textarea>
//         <input type="text" name="image" placeholder="URL de la Imagen">
//         <select name="category">
//           <option value="Camisetas">Camisetas</option>
//           <option value="Pantalones">Pantalones</option>
//           <option value="Zapatos">Zapatos</option>
//           <option value="Accesorios">Accesorios</option>
//         </select>
//         <select name="size">
//           <option value="XS">XS</option>
//           <option value="S">S</option>
//           <option value="M">M</option>
//           <option value="L">L</option>
//           <option value="XL">XL</option>
//         </select>
//         <button type="submit">Crear Producto</button>
//       </form>
//     </body>
//     </html>
//   `);
// };

// const createProduct = async (req, res) => {

//     const { name, description, image, category, size } = req.body;

//     if (!name || !description || !image || !category || !size) {
//       return res.status(400).send('Todos los campos son obligatorios');
//     }
//     try {
//     const product = new Product({name,
//       description,
//       image,
//       category,
//       size});
//     console.log(product);
//     console.log(req.body);

//     await product.save();
//     res.redirect('/dashboard');
//     } catch (error) {
//     res.status(500).send('Error creating product');
//   }
// };

// const showEditProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.productId);
//     const html = `
//       <html>
//       <head><link rel="stylesheet" href="/styles.css"></head>
//       <body>
//         <h1>Editar Producto</h1>
//         <form action="/dashboard/${product._id}?_method=PUT" method="POST">
//           <input type="text" name="name" value="${product.name}" placeholder="Nombre">
//           <textarea name="description" placeholder="Descripción">${product.description}</textarea>
//           <input type="text" name="image" value="${product.image}" placeholder="URL de la Imagen">
//           <select name="category" value="${product.category}">
//             <option value="Camisetas">Camisetas</option>
//             <option value="Pantalones">Pantalones</option>
//             <option value="Zapatos">Zapatos</option>
//             <option value="Accesorios">Accesorios</option>
//           </select>
//           <select name="size" value="${product.size}">
//             <option value="XS">XS</option>
//             <option value="S">S</option>
//             <option value="M">M</option>
//             <option value="L">L</option>
//             <option value="XL">XL</option>
//           </select>
//           <button type="submit">Actualizar Producto</button>
//         </form>
//       </body>
//       </html>
//     `;
//     res.send(html);
//   } catch (error) {
//     res.status(500).send('Error retrieving product');
//   }
// };

// const updateProduct = async (req, res) => {
//   try {
//     await Product.findByIdAndUpdate(req.params.productId, req.body);
//     res.redirect('/dashboard');
//   } catch (error) {
//     res.status(500).send('Error updating product');
//   }
// };

// const deleteProduct = async (req, res) => {
//   try {
//   console.log(req.params.productId);
//    await Product.findByIdAndDelete(req.params.productId);
//     res.redirect('/dashboard');
//   } catch (error) {
//     res.status(500).send('Error deleting product');
//   }
// };

// const getProductCards = (products) => {
//   let html = '';
//   for (let product of products) {
//     html += `
//       <div class="product-card">
//         <img src="${product.image}" alt="${product.name}">
//         <h2>${product.name}</h2>
//         <p>${product.description}</p>
//         <a href="/products/${product._id}">Ver detalle</a>
//       </div>
//     `;
//   }
//   return html;
// };

// const getProductCardsDashboard = (products) => {
//   let html = '';
//   for (let product of products) {
//     html += `
//       <div class="product-card">
//         <img src="${product.image}" alt="${product.name}">
//         <h2>${product.name}</h2>
//         <p>${product.description}</p>
//         <a href="/dashboard/${product._id}/edit">Editar</a>
//         <form action="/dashboard/${product._id}/delete?_method=DELETE" method="POST">
//           <button type="submit">Eliminar</button>
//         </form>
//       </div>
//     `;
//   }
//   return html;
// };

// module.exports = {
//   showProducts,
//   showProductById,
//   showProductsDashboard,
//   showNewProduct,
//   createProduct,
//   showEditProduct,
//   updateProduct,
//   deleteProduct,
// };
const Product = require('../models/product');

const baseHtml = (title, bodyContent) => `
  <!DOCTYPE html>
  <html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    ${bodyContent}
  </body>
  </html>
`;

const getNavBar = (isDashboard = false) => `
  <nav>
    <a href="/products">Productos</a>
    <a href="/products?category=Camisetas">Camisetas</a>
    <a href="/products?category=Pantalones">Pantalones</a>
    <a href="/products?category=Zapatos">Zapatos</a>
    <a href="/products?category=Accesorios">Accesorios</a>
    ${isDashboard ? '<a href="/dashboard/new">Nuevo Producto</a>' : ''}
  </nav>
`;

const getProductCards = (products) => {
  let html = '';
  for (let product of products) {
    html += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <a href="/products/${product._id}">Ver detalle</a>
        ${product.category ? `<p>Categoría: ${product.category}</p>` : ''}
        ${product.size ? `<p>Tamaño: ${product.size}</p>` : ''}
      </div>
    `;
  }
  return html;
};

const getProductCardsDashboard = (products) => {
  let html = '';
  for (let product of products) {
    html += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <a href="/dashboard/${product._id}/edit">Editar</a>
        <form action="/dashboard/${product._id}/delete?_method=DELETE" method="POST">
          <input type="hidden" name="_method" value="DELETE">
          <button type="submit">Eliminar</button>
        </form>
      </div>
    `;
  }
  return html;
};



const showProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productCards = getProductCards(products);
    const bodyContent = `
      ${getNavBar()}
      <h1>Productos</h1>
      <div class="product-container">${productCards}</div>
    `;
    const html = baseHtml('Productos', bodyContent);
    res.send(html);
  } catch (error) {
    res.status(500).send('Error retrieving products');
  }
};

const showProductsDashboard = async (req, res) => {
  try {
    const products = await Product.find();
    const productCards = getProductCardsDashboard(products);
    const bodyContent = `
      ${getNavBar(true)}
      <h1>Dashboard</h1>
      <div class="product-container">${productCards}</div>
    `;
    const html = baseHtml('Dashboard', bodyContent);
    res.send(html);
  } catch (error) {
    res.status(500).send('Error retrieving products');
  }
};

const showProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    const bodyContent = `
      ${getNavBar()}
      <h1>${product.name}</h1>
      <p>${product.description}</p>
      <img src="${product.image}" alt="${product.name}">
      <p>Categoría: ${product.category}</p>
      <p>Tamaño: ${product.size}</p>
    `;
    const html = baseHtml(product.name, bodyContent);
    res.send(html);
  } catch (error) {
    res.status(500).send('Error retrieving product');
  }
};

const showNewProduct = (req, res) => {
  const bodyContent = `
    ${getNavBar(true)}
    <h1>Nuevo Producto</h1>
    <form action="/dashboard" method="POST">
      <input type="text" name="name" placeholder="Nombre" required>
      <textarea name="description" placeholder="Descripción" required></textarea>
      <input type="text" name="image" placeholder="URL de la Imagen" required>
      <select name="category" required>
        <option value="Camisetas">Camisetas</option>
        <option value="Pantalones">Pantalones</option>
        <option value="Zapatos">Zapatos</option>
        <option value="Accesorios">Accesorios</option>
      </select>
      <select name="size" required>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      <button type="submit">Crear Producto</button>
    </form>
  `;
  const html = baseHtml('Nuevo Producto', bodyContent);
  res.send(html);
};

const createProduct = async (req, res) => {
  const { name, description, image, category, size } = req.body;

  if (!name || !description || !image || !category || !size) {
    return res.status(400).send('Todos los campos son obligatorios');
  }

  try {
    const product = new Product({ name, description, image, category, size });
    await product.save();
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send('Error creating product');
  }
};

const showEditProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    const bodyContent = `
      ${getNavBar(true)}
      <h1>Editar Producto</h1>
      <form action="/dashboard/${product._id}?_method=PUT" method="POST">
        <input type="text" name="name" value="${product.name}" placeholder="Nombre" required>
        <textarea name="description" placeholder="Descripción" required>${product.description}</textarea>
        <input type="text" name="image" value="${product.image}" placeholder="URL de la Imagen" required>
        <select name="category" required>
          <option value="Camisetas" ${product.category === 'Camisetas' ? 'selected' : ''}>Camisetas</option>
          <option value="Pantalones" ${product.category === 'Pantalones' ? 'selected' : ''}>Pantalones</option>
          <option value="Zapatos" ${product.category === 'Zapatos' ? 'selected' : ''}>Zapatos</option>
          <option value="Accesorios" ${product.category === 'Accesorios' ? 'selected' : ''}>Accesorios</option>
        </select>
        <select name="size" required>
          <option value="XS" ${product.size === 'XS' ? 'selected' : ''}>XS</option>
          <option value="S" ${product.size === 'S' ? 'selected' : ''}>S</option>
          <option value="M" ${product.size === 'M' ? 'selected' : ''}>M</option>
          <option value="L" ${product.size === 'L' ? 'selected' : ''}>L</option>
          <option value="XL" ${product.size === 'XL' ? 'selected' : ''}>XL</option>
        </select>
        <button type="submit">Actualizar Producto</button>
      </form>
    `;
    const html = baseHtml('Editar Producto', bodyContent);
    res.send(html);
  } catch (error) {
    res.status(500).send('Error retrieving product');
  }
};

const updateProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.productId, req.body);
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send('Error updating product');
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.productId);
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send('Error deleting product');
  }
};

module.exports = {
  showProducts,
  showProductById,
  showProductsDashboard,
  showNewProduct,
  createProduct,
  showEditProduct,
  updateProduct,
  deleteProduct,
};
