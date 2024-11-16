
import Facture from '../models/Facture.js'; // Importer le modèle Facture


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


export const createFormulaire = async (req, res) => {
  const transaction = await Formulaire.sequelize.transaction(); // Gestion de transaction
  try {
    // Récupérer les données du formulaire depuis la requête
    const {
      nom,
      prenom,
      numero_transaction,
      adresse,
      mode_livraison,
      moyen_paiement,
      nom_article,
      nombre_article,
      prix_article,
    } = req.body;

    // Vérification des champs obligatoires
    if (
      !nom ||
      !prenom ||
      !numero_transaction ||
      !adresse ||
      !mode_livraison ||
      !moyen_paiement ||
      !nom_article ||
      !nombre_article ||
      !prix_article
    ) {
      return res.status(400).json({ message: 'Tous les champs doivent être remplis.' });
    }

    // Créer le formulaire
    const formulaire = await Formulaire.create(
      { nom, prenom, numero_transaction, adresse, mode_livraison, moyen_paiement },
      { transaction }
    );

    // Calculer les frais de livraison
    const livraison = nombre_article > 2 ? 0 : 2000;

    // Calculer le total
    const total = nombre_article * prix_article + livraison;

    // Créer la facture associée
    const facture = await Facture.create(
      {
        nom_article,
        nombre_article,
        prix_article,
        numero_transaction, // Lié au formulaire
        livraison,
        total, // Assigner le total calculé ici
      },
      { transaction }
    );

    // Confirmer la transaction
    await transaction.commit();

    // Retourner les données du formulaire et de la facture
    res.status(201).json({
      message: 'Formulaire et facture créés avec succès.',
      formulaire,
      facture,
    });
  } catch (error) {
    // En cas d'erreur, annuler la transaction
    await transaction.rollback();
    console.error('Erreur lors de la création du formulaire et de la facture :', error);
    res.status(500).json({ message: 'Erreur lors de la création du formulaire et de la facture.' });
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
