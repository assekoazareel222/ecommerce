


import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Formulaire = sequelize.define('Formulaire', {
  nom: { type: DataTypes.STRING, allowNull: false },
  prenom: { type: DataTypes.STRING, allowNull: false },
  numero_transaction: { type: DataTypes.STRING, allowNull: false, unique: true },
  adresse: { type: DataTypes.STRING, allowNull: false },
  mode_livraison: {
    type: DataTypes.ENUM(, 'express', 'retrait en magasin'),
    allowNull: false,
  },
  moyen_paiement: {
    type: DataTypes.ENUM('mobil cash', 'airtel money', 'espèces'),
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Formulaire;
