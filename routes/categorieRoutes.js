// routes/categorieRoutes.js
import express from 'express';
import { getCategories, getCategorieById, createCategorie, deleteCategorie } from '../controllers/categorieController.js';

const router = express.Router();

// Route pour récupérer toutes les catégories
router.get('/categories', getCategories);

// Route pour récupérer une catégorie par ID
router.get('/categories/:id', getCategorieById);

// Route pour créer une nouvelle catégorie
router.post('/categories', createCategorie);

// Route pour supprimer une catégorie
router.delete('/categories/:id', deleteCategorie);

export default router;
