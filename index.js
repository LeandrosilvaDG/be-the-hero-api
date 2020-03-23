const express = require('express');

const app = express();

app.get("/", (request, response) => {
  response.json({users: [
    {name: "Leandro", age: 36, city: "Natal"},
    {name: "Suley", age: 35, city: "Lajes"}
  ]});
});

app.listen(3333)