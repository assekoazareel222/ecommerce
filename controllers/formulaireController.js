

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
