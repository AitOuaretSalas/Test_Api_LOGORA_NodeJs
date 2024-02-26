// Importe la fonction "expect" de la bibliothèque d'assertion "chai"
const { expect } = require('chai');

// Importe la bibliothèque "sinon" pour les espions, les stubs et les mocks
const sinon = require('sinon');

// Importe les fonctions "predict" et "score" du contrôleur de modération
const { predict, score } = require('../controllers/moderationController');

// Importe les utilitaires de fetch
const fetchUtils = require('../utils/fetchUtils');

// Définit un groupe de tests pour le contrôleur de modération
describe('Moderation Controller', () => {

    // Définit un sous-groupe de tests pour la fonction "predict"
    describe('Predict', () => {

        // Définit un test pour la fonction "predict"
        it('should return moderation prediction', async () => {

            // Crée une requête fictive
            const req = { body: { text: 'Sample text', language: 'en' } };

            // Crée une réponse fictive avec un espion sur la méthode "json"
            const res = { json: sinon.spy() };

            // Appelle la fonction "predict" avec la requête et la réponse fictives
            await predict(req, res);

            // Vérifie que la méthode "json" a été appelée une fois
            expect(res.json.calledOnce).to.be.true;

            // Vérifie que la première prédiction est proche de 0.9193827509880066
            expect(res.json.firstCall.args[0].prediction['0']).to.be.closeTo(0.9193827509880066, 0.001);
        });
    });

    // Définit un sous-groupe de tests pour la fonction "score"
    describe('Score', () => {

        // Définit un test pour la fonction "score"
        it('should return moderation score', async () => {

            // Crée une requête fictive
            const req = { body: { text: 'Sample text', language: 'en' } };

            // Crée une réponse fictive avec un espion sur la méthode "json"
            const res = { json: sinon.spy() };

            // Appelle la fonction "score" avec la requête et la réponse fictives
            await score(req, res);

            // Vérifie que la méthode "json" a été appelée une fois
            expect(res.json.calledOnce).to.be.true;

            // Vérifie que le score est proche de 0.6946614583333328
            expect(res.json.firstCall.args[0].score).to.be.closeTo( 0.6946614583333328, 0.001);
        });
    });
});