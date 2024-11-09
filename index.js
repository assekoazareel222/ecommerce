import express from 'express';
import sequelize from './config/database.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import produitRoutes from './routes/produitRoutes.js';
import formulaireRoutes from './routes/formulaireRoutes.js';
import factureRoutes from './routes/factureRoutes.js';






dotenv.config();

const app = express();
app.use(express.json());

app.use(bodyParser.json())

app.use('/api', produitRoutes);
app.use('/api', formulaireRoutes);
app.use('/api/', factureRoutes);



sequelize.sync().then(() => {
    console.log('Base de donne connecte!');
    
  }).catch(error => console.error('Base de donne non connecter:', error));

export default sequelize;

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });