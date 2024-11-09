import Formulaire from './Formulaire.js';
import Facture from './Facture.js';

// Définir les relations
Formulaire.hasMany(Facture, { foreignKey: 'formulaireId' });
Facture.belongsTo(Formulaire, { foreignKey: 'formulaireId' });

export { Formulaire, Facture };
