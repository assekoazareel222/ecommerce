// import { DataTypes } from 'sequelize';
// import sequelize from '../config/database.js';
import User from './Facture.js';

// const Order = sequelize.define('Order', {
//   status: { type: DataTypes.ENUM('pending', 'shipped', 'delivered'), defaultValue: 'pending' },
//   total_amount: { type: DataTypes.DECIMAL, allowNull: false },
// }, {
//   timestamps: true,
// });

// Order.belongsTo(User, { foreignKey: 'user_id' });
// export default Order;


// 

// import { DataTypes } from 'sequelize';
// import sequelize from '../config/database.js';

// const Formulaire = sequelize.define('Formulaire', {
//   nom: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   prenom: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   numero_transaction: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,  // Chaque transaction doit avoir un numéro unique
//   },
//   adresse: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   mode_livraison: {
//     type: DataTypes.ENUM('standard', 'express', 'retrait en magasin'),  // Définissez les options disponibles
//     allowNull: false,
//   },
//   moyen_paiement: {
//     type: DataTypes.ENUM('mobil cash', 'airtel monain', 'espèces'),  // Définissez les moyens de paiement possibles
//     allowNull: false,
//   },
// }, {
//   timestamps: true,
// });

// export default Formulaire;


// import { DataTypes } from 'sequelize';
// import sequelize from '../config/database.js';

// import Facture from './Facture.js';

// const Formulaire = sequelize.define('Formulaire', {
//   // Champs du modèle Formulaire
//   nom: { type: DataTypes.STRING, allowNull: false },
//   prenom: { type: DataTypes.STRING, allowNull: false },
//   numero_transaction: { type: DataTypes.STRING, allowNull: false, unique: true },
//   adresse: { type: DataTypes.STRING, allowNull: false },
//   mode_livraison: {
//     type: DataTypes.ENUM('standard', 'express', 'retrait en magasin'),
//     allowNull: false,
//   },
//   moyen_paiement: {
//     type: DataTypes.ENUM('mobil cash', 'airtel monain', 'espèces'),
//     allowNull: false,
//   },
// }, {
//   timestamps: true,
// });

// export default Formulaire;


import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Formulaire = sequelize.define('Formulaire', {
  nom: { type: DataTypes.STRING, allowNull: false },
  prenom: { type: DataTypes.STRING, allowNull: false },
  numero_transaction: { type: DataTypes.STRING, allowNull: false, unique: true },
  adresse: { type: DataTypes.STRING, allowNull: false },
  mode_livraison: {
    type: DataTypes.ENUM('standard', 'express', 'retrait en magasin'),
    allowNull: false,
  },
  moyen_paiement: {
    type: DataTypes.ENUM('mobil cash', 'airtel monain', 'espèces'),
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Formulaire;
