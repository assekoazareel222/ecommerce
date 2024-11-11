import express from 'express';
import { getFormulaires, createFormulaire, deleteFormulaire } from '../controllers/formulaireController.js';

const formulairerouter = express.Router();

formulairerouter.get('/formulaire', getFormulaires);
formulairerouter.post('/formulaire', createFormulaire);
formulairerouter.delete('/formulaire/:id', deleteFormulaire);

export default formulairerouter;
