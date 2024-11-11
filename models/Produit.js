import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Categorie from './Categorie.js';

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
