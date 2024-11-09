import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';


const Categorie = sequelize.define('Categorie', {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
  }, {
    timestamps: true,
  });
  
  export default Categorie;
