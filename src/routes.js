const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {

  response.json({
    name: "leandro silva",
    age: 36
  })

});

module.exports = routes;
