// routes/categorieRoutes.js
import express from 'express';
import { getCategories, getCategorieById, createCategorie, deleteCategorie } from '../controllers/categorieController.js';

const categorierouter = express.Router();

// Route pour récupérer toutes les catégories
categorierouter.get('/categories', getCategories);

// Route pour récupérer une catégorie par ID
categorierouter.get('/categories/:id', getCategorieById);

// Route pour créer une nouvelle catégorie
categorierouter.post('/categories', createCategorie);

// Route pour supprimer une catégorie
categorierouter.delete('/categories/:id', deleteCategorie);

export default categorierouter;
