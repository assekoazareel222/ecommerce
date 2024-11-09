// import Produit from '../models/Produit.js';

// export const getAllProduits = async (req, res) => {
//   try {
//     const produits = await Produit.findAll();
//     res.json(produits);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch products' });
//   }
// };

// produitController.js

import Produit from '../models/Produit.js';

// Fonction pour récupérer tous les produits
export const getAllProducts = async (req, res) => {
  try {
    const produits = await Produit.findAll();
    res.status(200).json(produits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour créer un nouveau produit
export const createProduct = async (req, res) => {
  try {
    const produit = await Produit.create(req.body);
    res.status(201).json(produit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour supprimer un produit
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const produit = await Produit.findByPk(id);
    if (!produit) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    await produit.destroy();
    res.status(200).json({ message: "Produit supprimé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

