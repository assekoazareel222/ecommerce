import Produit from "../models/Produit.js";
import Categorie from "../models/Categorie.js";

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

  // Fonction pour créer un nouveau produit
  async createProduct(req, res) {
    try {
      const { name, description, price, stock_quantity, image_url, categorie_id } = req.body;

      if (!name || !price || !stock_quantity || !categorie_id) {
        return res
          .status(400)
          .json({ error: "Les champs name, price, stock_quantity et categorie_id sont requis." });
      }

      const categorie = await Categorie.findByPk(categorie_id);
      if (!categorie) {
        return res.status(404).json({ error: "Catégorie non trouvée" });
      }

      const produit = await Produit.create({
        name,
        description,
        price,
        stock_quantity,
        image_url,
        categorie_id,
      });

      res.status(201).json(produit);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

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

  // Fonction pour liker un produit
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
