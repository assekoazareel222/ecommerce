import Produit from "../models/Produit.js";
import Categorie from "../models/Categorie.js";
import Sequelize from "sequelize"; // N'oublie pas d'importer Sequelize pour utiliser Op.iLike

// Définition de l'objet produitController
const produitController = {
  // Fonction pour récupérer tous les produits avec leur catégorie
  async getAllProducts(req, res) {
    try {
      const produits = await Produit.findAll({
        include: {
          model: Categorie,
          attributes: ["id", "name"],
        },
      });
      res.json(produits);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Fonction pour récupérer un produit spécifique avec sa catégorie
  async getOneProduct(req, res) {
    try {
      // Récupérer l'ID du produit à partir des paramètres de la requête
      const { id } = req.params;
  
      // Rechercher le produit par ID avec l'association de la catégorie
      const produit = await Produit.findOne({
        where: { id }, // Condition pour récupérer le produit avec cet ID
        include: {
          model: Categorie,
          attributes: ["id", "name"], // Sélectionnez les attributs de la catégorie
        },
      });
  
      // Vérifiez si le produit existe
      if (!produit) {
        return res.status(404).json({ error: "Produit non trouvé" });
      }
  
      // Retourner le produit en format JSON
      res.json(produit);
    } catch (error) {
      // Gérer les erreurs et renvoyer un statut 500
      res.status(500).json({ error: error.message });
    }
  },

  // Fonction de recherche des produits par nom
  async searchProducts(req, res) {
    try {
      const searchTerm = req.query.q || ''; // Récupère le terme de recherche (query string)
  
      // Recherche insensible à la casse (fonctionne avec PostgreSQL et Sequelize)
      const products = await Produit.findAll({
        where: Sequelize.where(
          Sequelize.fn('LOWER', Sequelize.col('name')),
          'LIKE',
          '%' + searchTerm.toLowerCase() + '%'
        )
      });
      // Si des produits sont trouvés, on les retourne
      if (products.length > 0) {
        return res.json(products);
      } else {
        return res.status(404).json({ message: 'Aucun produit trouvé.' });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Erreur du serveur' });
    }
  },

  // Fonction pour créer un nouveau produit
  async createProduct(req, res) {
    try {
        const { name, description, price, stock_quantity, image_url, categorie_id } = req.body;

        const errors = {}; // Objet pour stocker les erreurs

        // Vérification des champs
        if (!name || name.trim() === "") errors.name = "Le champ 'name' est requis.";
        if (!description || description.trim() === "") errors.description = "Le champ 'description' est requis.";
        if (!price || isNaN(price) || price <= 0) errors.price = "Le champ 'price' doit être un nombre valide supérieur à 0.";
        if (!stock_quantity || isNaN(stock_quantity) || stock_quantity < 0) errors.stock_quantity = "Le champ 'stock_quantity' doit être un nombre valide (0 ou plus).";
        if (!image_url || image_url.trim() === "") errors.image_url = "Le champ 'image_url' est requis.";
        if (!categorie_id || isNaN(categorie_id)) errors.categorie_id = "Le champ 'categorie_id' doit être un nombre valide.";

        // Si des erreurs sont présentes, renvoyer un message d'erreur détaillé
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ errors });
        }

        // Vérifier si la catégorie existe
        const categorie = await Categorie.findByPk(categorie_id);
        if (!categorie) {
            return res.status(404).json({ error: "Catégorie non trouvée" });
        }

        // Créer le produit
        const produit = await Produit.create({
            name,
            description,
            price,
            stock_quantity,
            image_url,
            categorie_id,
        });

        // Répondre avec le produit créé
        res.status(201).json(produit);

    } catch (error) {
        console.error(error); // Ajout de la journalisation des erreurs serveur
        res.status(500).json({ error: error.message });
    }
}
,
  

  // Fonction pour mettre à jour un produit
  async updateProduit(req, res) {
    const { id } = req.params;
    const { name, description, price, stock_quantity, image_url, categorie_id } = req.body;

    try {
      const produit = await Produit.findByPk(id);
      if (!produit) {
        return res.status(404).json({ message: "Produit non trouvé" });
      }

      await produit.update({
        name,
        description,
        price,
        stock_quantity,
        image_url,
        categorie_id,
      });

      res.json({ message: "Produit mis à jour avec succès", produit });
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la mise à jour du produit" });
    }
  },

  // Fonction pour supprimer un produit
  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const produit = await Produit.findByPk(id);
      if (!produit) {
        return res.status(404).json({ message: "Produit non trouvé" });
      }
      await produit.destroy();
      res.status(200).json({ message: "Produit supprimé" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Fonction pour liker un produit (optionnel si tu veux l'ajouter à l'avenir)
  // async likeProduct(req, res) {
  //   try {
  //     const { id } = req.params;
  //     const produit = await Produit.findByPk(id);
  //     if (!produit) {
  //       return res.status(404).json({ error: "Produit non trouvé" });
  //     }

  //     produit.likes += 1;
  //     await produit.save();

  //     res.json({ message: "Produit liké avec succès", likes: produit.likes });
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // },
};

// Exportation par défaut
export default produitController;
