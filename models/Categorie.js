import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

// const Category = sequelize.define('Category', {
//   name: { type: DataTypes.STRING, allowNull: false },
//   description: { type: DataTypes.TEXT },
// }, {
//   timestamps: true,
// });

// export default Category;

const Categorie = sequelize.define('Categorie', {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
  }, {
    timestamps: true,
  });
  
  export default Categorie;
