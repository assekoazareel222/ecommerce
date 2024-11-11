


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
      return nombreArticles > 2 ? 0 : (nombreArticles > 3 ? 5000 : 0);
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
