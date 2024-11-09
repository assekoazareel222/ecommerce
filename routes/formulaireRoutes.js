import express from 'express';
import { getFormulaires, createFormulaire, deleteFormulaire } from '../controllers/formulaireController.js';

const router = express.Router();

router.get('/formulaire', getFormulaires);
router.post('/formulaire', createFormulaire);
router.delete('/formulaire/:id', deleteFormulaire);

export default router;
