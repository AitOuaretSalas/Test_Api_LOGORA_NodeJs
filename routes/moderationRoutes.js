// Importe le module "express" pour créer le routeur
const express = require('express');

// Crée un nouveau routeur
const router = express.Router();

// Importe le contrôleur de modération
const moderationController = require('../controllers/moderationController');

// Ajoute une route POST pour "/predict" qui appelle la fonction "predict" du contrôleur de modération
router.post('/predict', moderationController.predict);

// Ajoute une route POST pour "/score" qui appelle la fonction "score" du contrôleur de modération
router.post('/score', moderationController.score);

// Exporte le routeur
module.exports = router;