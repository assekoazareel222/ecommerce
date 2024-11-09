// import { DataTypes } from 'sequelize';
// import sequelize from '../config/database.js';
import Category from './Categorie.js';

// const Product = sequelize.define('Product', {
//   name: { type: DataTypes.STRING, allowNull: false },
//   description: { type: DataTypes.TEXT },
//   price: { type: DataTypes.DECIMAL, allowNull: false },
//   stock_quantity: { type: DataTypes.INTEGER, allowNull: false },
//   image_url: { type: DataTypes.STRING },
// }, {
//   timestamps: true,
// });

// Product.belongsTo(Category, { foreignKey: 'category_id' });

// export default Product;

// import { DataTypes } from 'sequelize';
// import sequelize from '../config/database.js';
// import Categorie from './Categorie.js';

// const Produit = sequelize.define('Produit', {
//   name: { type: DataTypes.STRING, allowNull: false },
//   description: { type: DataTypes.TEXT },
//   price: { type: DataTypes.DECIMAL, allowNull: false },
//   stock_quantity: { type: DataTypes.INTEGER, allowNull: false },
//   image_url: { type: DataTypes.STRING },
// }, {
//   timestamps: true,
// });

// Produit.belongsTo(Categorie, { foreignKey: 'category_id' });

// export default Produit;


import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Categorie from './Categorie.js';  // Assurez-vous que c'est bien la seule fois où `DataTypes` est importé

const Produit = sequelize.define('Produit', {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  price: { type: DataTypes.DECIMAL, allowNull: false },
  stock_quantity: { type: DataTypes.INTEGER, allowNull: false },
  image_url: { type: DataTypes.STRING },
}, {
  timestamps: true,
});

Produit.belongsTo(Categorie, { foreignKey: 'categorie_id' });

export default Produit;

