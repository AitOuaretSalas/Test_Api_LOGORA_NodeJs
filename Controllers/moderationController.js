// Importe les utilitaires de fetch
const fetchUtils = require('../utils/fetchUtils');

// Définit une fonction asynchrone "predict"
async function predict(req, res) {
    // Extrait "text" et "language" du corps de la requête
    const { text, language } = req.body;

    try {
        // Appelle l'API Logora pour obtenir une prédiction de modération
        const response = await fetchUtils.fetchPredict(text, language);
        // Envoie la réponse au client
        res.json(response);
    } catch (error) {
        // En cas d'erreur, affiche l'erreur et envoie une réponse d'erreur au client
        console.error('Erreur lors de la requête à l\'API Logora :', error);
        res.status(500).json({ error: 'Erreur lors de la requête à l\'API Logora' });
    }
}

// Définit une fonction asynchrone "score"
async function score(req, res) {
    // Extrait "text" et "language" du corps de la requête
    const { text, language } = req.body;

    try {
        // Appelle l'API Logora pour obtenir un score de qualité
        const response = await fetchUtils.fetchScore(text, language);
        // Envoie la réponse au client
        res.json(response);
    } catch (error) {
        // En cas d'erreur, affiche l'erreur et envoie une réponse d'erreur au client
        console.error('Erreur lors de la requête à l\'API Logora :', error);
        res.status(500).json({ error: 'Erreur lors de la requête à l\'API Logora' });
    }
}

// Exporte les fonctions "predict" et "score"
module.exports = { predict, score };