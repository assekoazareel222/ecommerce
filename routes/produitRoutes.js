import express from 'express';
import { getAllProducts ,updateProduit, deleteProduct, createProduct, likeProduct } from '../controllers/produitController.js';

const produitrouter = express.Router();

produitrouter.get('/produits', getAllProducts);

// Route pour mettre à jour un produit
produitrouter.put('/produits/:id', updateProduit);

// Route pour supprimer un produit
produitrouter.delete('/produits/:id', deleteProduct);

// Route pour créer un produit
produitrouter.post('/produits', createProduct);




export default produitrouter;
