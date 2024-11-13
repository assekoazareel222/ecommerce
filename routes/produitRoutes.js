import express from 'express';
import produitController from '../controllers/produitController.js';
import getOneProduct from '../controllers/produitController.js'

const produitrouter = express.Router();

produitrouter.get('/produits', produitController.getAllProducts);
produitrouter.post('/produits', produitController.createProduct);
produitrouter.put('/produits/:id', produitController.updateProduit);
produitrouter.get('/produits/:id', produitController.getOneProduct);
produitrouter.delete('/produits/:id', produitController.deleteProduct);

export default produitrouter;
