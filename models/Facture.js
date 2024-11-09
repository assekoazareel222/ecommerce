// import { DataTypes } from 'sequelize';
// import sequelize from '../config/database.js';
// import Orders from './Orders.js';

// const Facture = sequelize.define('Facture', {
//   nom_article: { type: DataTypes.STRING, allowNull: false },
//   nombre_article: { type: DataTypes.INTEGER, allowNull: false },
//   prix_article: { type: DataTypes.DECIMAL, allowNull: false },
//   numero_transaction: { type: DataTypes.STRING, allowNull: false, unique: true },
//   date_transaction: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },

//   // Clé étrangère pour lier à Orders
//   orderId: { 
//     type: DataTypes.INTEGER,
//     references: {
//       model: Orders,
//       key: 'id'
//     }
//   },

//   // Informations du client héritées d'Orders
//   livraison: {
//     type: DataTypes.DECIMAL,
//     allowNull: false,
//     defaultValue: 0,
//     get() {
//       const nombreArticles = this.getDataValue('nombre_article');
//       if (nombreArticles > 3) return 0;
//       else if (nombreArticles > 2) return 5000;
//       return 0;
//     }
//   },
//   total: {
//     type: DataTypes.DECIMAL,
//     allowNull: false,
//     get() {
//       const prixArticle = parseFloat(this.getDataValue('prix_article')) || 0;
//       const fraisLivraison = parseFloat(this.getDataValue('livraison')) || 0;
//       return prixArticle + fraisLivraison;
//     }
//   }
// }, {
//   timestamps: true,
// });

// export default Facture;

// 

// import { DataTypes } from 'sequelize';
// import sequelize from '../config/database.js';
// import Formulaire from './Formulaire.js';

// const Facture = sequelize.define('Facture', {
//   nom_article: { type: DataTypes.STRING, allowNull: false },
//   nombre_article: { type: DataTypes.INTEGER, allowNull: false },
//   prix_article: { type: DataTypes.DECIMAL, allowNull: false },
//   numero_transaction: { type: DataTypes.STRING, allowNull: false, unique: true },
//   date_transaction: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },

//   livraison: {
//     type: DataTypes.DECIMAL,
//     allowNull: false,
//     defaultValue: 0,
//     get() {
//       const nombreArticles = this.getDataValue('nombre_article');
//       return nombreArticles > 3 ? 0 : (nombreArticles > 2 ? 5000 : 0);
//     }
//   },
//   total: {
//     type: DataTypes.DECIMAL,
//     allowNull: false,
//     get() {
//       const prixArticle = parseFloat(this.getDataValue('prix_article')) || 0;
//       const fraisLivraison = parseFloat(this.getDataValue('livraison')) || 0;
//       return prixArticle + fraisLivraison;
//     }
//   }
// }, {
//   timestamps: true,
// });

// Facture.belongsTo(Formulaire, { foreignKey: 'formulaireId' });
// Formulaire.hasMany(Facture, { foreignKey: 'formulaireId' });

// // Exportez le modèle avant de configurer les associations
// export default Facture;

// // Définissez les relations après les exports


import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Facture = sequelize.define('Facture', {
  nom_article: { type: DataTypes.STRING, allowNull: false },
  nombre_article: { type: DataTypes.INTEGER, allowNull: false },
  prix_article: { type: DataTypes.DECIMAL, allowNull: false },
  numero_transaction: { type: DataTypes.STRING, allowNull: false, unique: true },
  date_transaction: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  livraison: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    defaultValue: 0,
    get() {
      const nombreArticles = this.getDataValue('nombre_article');
      return nombreArticles > 3 ? 0 : (nombreArticles > 2 ? 5000 : 0);
    }
  },
  total: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    get() {
      const prixArticle = parseFloat(this.getDataValue('prix_article')) || 0;
      const fraisLivraison = parseFloat(this.getDataValue('livraison')) || 0;
      return prixArticle + fraisLivraison;
    }
  }
}, {
  timestamps: true,
});

export default Facture;
