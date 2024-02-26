// Importe le module "express" pour créer l'application
const express = require('express');

// Importe le module "body-parser" pour analyser le corps des requêtes HTTP
const bodyParser = require('body-parser');

// Importe les routes de modération
const moderationRoutes = require('./routes/moderationRoutes');

// Crée une nouvelle application Express
const app = express();

// Définit le port sur lequel l'application va écouter
const PORT = 3001;

// Utilise "body-parser" pour analyser le corps des requêtes HTTP en JSON
app.use(bodyParser.json());

// Utilise les routes de modération pour toutes les requêtes commençant par "/api/moderation"
app.use('/api/moderation', moderationRoutes);

// Démarre l'application sur le port défini
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

// Exporte l'application pour les tests
module.exports = app; 