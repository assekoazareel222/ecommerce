
// import Form from '../models/Formulaire.js';

// // Récupérer toutes les commandes
// export const getFormulaire = async (req, res) => {
//   try {
//     const formulaire = await Form.findAll();
//     res.status(200).json(formulaire);
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur lors de la récupération des commandes.', error });
//   }
// };

// // Créer une nouvelle commande
// export const createFormulaire = async (req, res) => {
//   try {
//     const { nom, prenom, numero_transaction, adresse, mode_livraison, moyen_paiement } = req.body;
//     const newFormulaire = await Form.create({
//       nom,
//       prenom,
//       numero_transaction,
//       adresse,
//       mode_livraison,
//       moyen_paiement,
//     });
//     res.status(201).json(newFormulaire);
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur lors de la création de la commande.', error });
//   }
// };

// // Supprimer une commande par ID
// export const deleteFormulaire = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const formulaire = await Form.findByPk(id);

//     if (!formulaire) {
//       return res.status(404).json({ message: 'Commande non trouvée.' });
//     }

//     await formulaire.destroy();
//     res.status(200).json({ message: 'Commande supprimée avec succès.' });
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur lors de la suppression de la commande.', error });
//   }
// };

// formulaireController.js

import Formulaire from '../models/Formulaire.js';

// Fonction pour récupérer tous les formulaires
export const getFormulaires = async (req, res) => {
  try {
    const formulaires = await Formulaire.findAll();
    res.status(200).json(formulaires);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour créer un nouveau formulaire
export const createFormulaire = async (req, res) => {
  try {
    const formulaire = await Formulaire.create(req.body);
    res.status(201).json(formulaire);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour supprimer un formulaire
export const deleteFormulaire = async (req, res) => {
  try {
    const { id } = req.params;
    const formulaire = await Formulaire.findByPk(id);
    if (!formulaire) {
      return res.status(404).json({ message: "Formulaire non trouvé" });
    }
    await formulaire.destroy();
    res.status(200).json({ message: "Formulaire supprimé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
