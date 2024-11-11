import express from 'express';
import produitController from '../controllers/produitController.js';

const produitrouter = express.Router();

produitrouter.get('/produits', produitController.getAllProducts);
produitrouter.post('/produits', produitController.createProduct);
produitrouter.put('/produits/:id', produitController.updateProduit);
produitrouter.delete('/produits/:id', produitController.deleteProduct);

export default produitrouter;
