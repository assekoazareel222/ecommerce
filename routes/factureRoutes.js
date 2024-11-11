// routes/factureRoutes.js
import express from 'express';
import { createFacture, getFactures, getFactureById, updateFacture, deleteFacture } from '../controllers/factureController.js';

const facturerouter = express.Router();

// Route pour créer une nouvelle facture
facturerouter.post('/factures', createFacture);

// Route pour obtenir toutes les factures
facturerouter.get('/factures', getFactures);

// Route pour obtenir une facture par ID
facturerouter.get('/factures/:id', getFactureById);

// Route pour mettre à jour une facture
facturerouter.put('/factures/:id', updateFacture);

// Route pour supprimer une facture
facturerouter.delete('/factures/:id', deleteFacture);

export default facturerouter;
