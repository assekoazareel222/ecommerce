

// import Produit from '../models/Produit.js';






// // Fonction pour récupérer tous les produits
// export const getAllProducts = async (req, res) => {
//   try {
//     const produits = await Produit.findAll();
//     res.status(200).json(produits);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Fonction pour créer un nouveau produit
// export const createProduct = async (req, res) => {
//   try {
//     const produit = await Produit.create(req.body);
//     res.status(201).json(produit);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Fonction pour supprimer un produit
// export const deleteProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const produit = await Produit.findByPk(id);
//     if (!produit) {
//       return res.status(404).json({ message: "Produit non trouvé" });
//     }
//     await produit.destroy();
//     res.status(200).json({ message: "Produit supprimé" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// // Contrôleur pour mettre à jour un produit
// export const updateProduit = async (req, res) => {
//   const { id } = req.params;
//   const { name, description, price, stock_quantity, image_url, categorie_id } = req.body;

//   try {
//     const produit = await Produit.findByPk(id);

//     if (!produit) {
//       return res.status(404).json({ message: 'Produit non trouvé' });
//     }

//     await produit.update({
//       name,
//       description,
//       price,
//       stock_quantity,
//       image_url,
//       categorie_id,
//     });

//     res.json({ message: 'Produit mis à jour avec succès', produit });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Erreur lors de la mise à jour du produit' });
//   }
// };



import Produit from '../models/Produit.js';
import Categorie from '../models/Categorie.js';

const produitController = {
  // Créer un nouveau produit
  async createProdut(req, res) {
    try {
      const { name, description, price, stock_quantity, image_url, categorie_id } = req.body;

      // Vérification des valeurs requises
      if (!name || !price || !stock_quantity || !categorie_id) {
        return res.status(400).json({ error: 'Les champs name, price, stock_quantity et categorie_id sont requis.' });
      }

      // Vérifier que la catégorie existe
      const categorie = await Categorie.findByPk(categorie_id);
      if (!categorie) {
        return res.status(404).json({ error: 'Catégorie non trouvée' });
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

      res.status(201).json(produit);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Liker un produit
  async likeProduct(req, res) {
    try {
      const { id } = req.params;

      // Récupérer le produit par ID
      const produit = await Produit.findByPk(id);
      if (!produit) {
        return res.status(404).json({ error: 'Produit non trouvé' });
      }

      // Incrémenter le compteur de likes
      produit.likes += 1;
      await produit.save();

      res.json({ message: 'Produit liké avec succès', likes: produit.likes });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Récupérer tous les produits avec leur catégorie
  async getAllProducts(req, res) {
    try {
      const produits = await Produit.findAll({
        include: {
          model: Categorie,
          attributes: ['id', 'nom'], // Inclure seulement les attributs nécessaires de la catégorie
        },
      });

      res.json(produits);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};


// controllers/produitController.js
export const createProduct = async (req, res) => {
  try {
    // Code pour créer un produit
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  // Code pour obtenir tous les produits
};

export const updateProduit = async (req, res) => {
  // Code pour mettre à jour un produit
};

export const deleteProduct = async (req, res) => {
  // Code pour supprimer un produit
};

export const likeProduct = async (req, res) => {
  try {
    const produitId = req.params.id;
    const produit = await Produit.findByPk(produitId);
    if (!produit) {
      return res.status(404).json({ error: 'Produit non trouvé' });
    }

    // Supposons que le modèle Produit ait un champ "likes" pour compter les likes
    produit.likes = (produit.likes || 0) + 1;
    await produit.save();

    res.status(200).json(produit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default produitController;
