// routes/factureRoutes.js
import express from 'express';
import { createFacture, getFactures, getFactureById, updateFacture, deleteFacture } from '../controllers/factureController.js';

const router = express.Router();

// Route pour créer une nouvelle facture
router.post('/factures', createFacture);

// Route pour obtenir toutes les factures
router.get('/factures', getFactures);

// Route pour obtenir une facture par ID
router.get('/factures/:id', getFactureById);

// Route pour mettre à jour une facture
router.put('/factures/:id', updateFacture);

// Route pour supprimer une facture
router.delete('/factures/:id', deleteFacture);

export default router;
