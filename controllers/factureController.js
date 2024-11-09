// controllers/factureController.js
import Facture from '../models/Facture.js';

// Créer une nouvelle facture
export const createFacture = async (req, res) => {
  try {
    const newFacture = await Facture.create(req.body);
    res.status(201).json(newFacture);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer toutes les factures
export const getFactures = async (req, res) => {
  try {
    const factures = await Facture.findAll();
    res.status(200).json(factures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer une facture par ID
export const getFactureById = async (req, res) => {
  try {
    const facture = await Facture.findByPk(req.params.id);
    if (facture) {
      res.status(200).json(facture);
    } else {
      res.status(404).json({ message: 'Facture not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour une facture
export const updateFacture = async (req, res) => {
  try {
    const facture = await Facture.findByPk(req.params.id);
    if (facture) {
      await facture.update(req.body);
      res.status(200).json(facture);
    } else {
      res.status(404).json({ message: 'Facture not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer une facture
export const deleteFacture = async (req, res) => {
  try {
    const facture = await Facture.findByPk(req.params.id);
    if (facture) {
      await facture.destroy();
      res.status(204).json({ message: 'Facture deleted' });
    } else {
      res.status(404).json({ message: 'Facture not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
