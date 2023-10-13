const express = require('express');
const server = express();
const port = 3000;

// const Routes = require('./routes');

server.get('/', (req, res) => {
  res.send('API para la tienda virtual JJsistemas');
});

// server.use(express.json()); //Para que parsee lo que recibe en JSON
// server.use('/users', Routes.UserRoutes);
// server.use('/api', Routes.ApiRoutes);

server.listen(port, () => {
  console.log(`API JJSistemas escuchando en el puerto ${port}`);
});