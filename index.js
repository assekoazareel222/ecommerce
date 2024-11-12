import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import sequelize from './config/database.js';
import produitrouter from './routes/produitRoutes.js';
import formulairerouter from './routes/formulaireRoutes.js';
import facturerouter from './routes/factureRoutes.js';
import categorierouter from './routes/categorieRoutes.js';

// Charger les variables d'environnement
dotenv.config();

// Créer l'application Express
const app = express();

// Configurer CORS pour permettre les requêtes de votre frontend
app.use(
  cors({
    origin: ["*"], // Autoriser les deux origines
    methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    allowedHeaders:
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization",
  })
);

// Middleware pour parser le corps des requêtes JSON
app.use(express.json());
app.use(bodyParser.json());

// Routes de votre API
app.use('/api', produitrouter);
app.use('/api', formulairerouter);
app.use('/api', facturerouter);
app.use('/api', categorierouter);

// Connexion à la base de données avec Sequelize
sequelize.sync().then(() => {
  console.log('Base de données connectée!');
}).catch(error => console.error('Base de données non connectée:', error));

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default sequelize;
