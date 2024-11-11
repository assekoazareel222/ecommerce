import express from 'express';
import sequelize from './config/database.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import produitrouter from './routes/produitRoutes.js';
import formulairerouter from './routes/formulaireRoutes.js';
import facturerouter from './routes/factureRoutes.js';
import categorierouter from './routes/categorieRoutes.js';





dotenv.config();

const app = express();
app.use(express.json());

app.use(bodyParser.json())

app.use('/api', produitrouter);
app.use('/api', formulairerouter);
app.use('/api', facturerouter);
app.use('/api', categorierouter);



sequelize.sync().then(() => {
    console.log('Base de donne connecte!');
    
  }).catch(error => console.error('Base de donne non connecter:', error));

export default sequelize;

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });