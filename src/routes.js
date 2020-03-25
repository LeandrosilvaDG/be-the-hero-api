const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionsCotroller = require('./controllers/SessionsController');

const routes = express.Router();

routes.post('/sessions', SessionsCotroller.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;
