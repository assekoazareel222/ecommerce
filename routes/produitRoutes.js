import express from 'express';
import { getAllProducts } from '../controllers/produitController.js';

const router = express.Router();

router.get('/produits', getAllProducts);

export default router;
