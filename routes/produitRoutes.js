import express from 'express';
import { getAllProducts ,updateProduit, deleteProduct } from '../controllers/produitController.js';

const router = express.Router();

router.get('/produits', getAllProducts);

// Route pour mettre à jour un produit
router.put('/produits/:id', updateProduit);

// Route pour supprimer un produit
router.delete('/produits/:id', deleteProduct);

export default router;
