// controllers/categorieController.js
import Categorie from '../models/Categorie.js';

// Contrôleur pour récupérer toutes les catégories
export const getCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des catégories' });
  }
};

// Contrôleur pour récupérer une catégorie par ID
export const getCategorieById = async (req, res) => {
  const { id } = req.params;
  try {
    const categorie = await Categorie.findByPk(id);
    if (!categorie) {
      return res.status(404).json({ message: 'Catégorie non trouvée' });
    }
    res.json(categorie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération de la catégorie' });
  }
};

// Contrôleur pour créer une nouvelle catégorie
export const createCategorie = async (req, res) => {
  const { name, description } = req.body;
  
  try {
    const categorie = await Categorie.create({ name, description });
    res.status(201).json({ message: 'Catégorie créée avec succès', categorie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création de la catégorie' });
  }
};

// Contrôleur pour supprimer une catégorie
export const deleteCategorie = async (req, res) => {
  const { id } = req.params;
  
  try {
    const categorie = await Categorie.findByPk(id);
    if (!categorie) {
      return res.status(404).json({ message: 'Catégorie non trouvée' });
    }
    await categorie.destroy();
    res.json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression de la catégorie' });
  }
};
