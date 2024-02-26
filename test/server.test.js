const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const app = require('../server');

chai.use(chaiHttp);

describe('Server', () => {
    it('should return 200 for valid routes', async () => {
        // Fait une requête POST à la route "/api/moderation/predict"
        const res = await chai.request(app).post('/api/moderation/predict').send({ text: 'Sample text', language: 'en' });

        // Vérifie que le statut de la réponse est 200
        expect(res.status).to.equal(200);

        // Vérifie que la réponse est un objet
        expect(res.body).to.be.an('object');

        // Vérifie que la réponse contient une propriété "prediction"
        expect(res.body).to.have.property('prediction');
    });
});

