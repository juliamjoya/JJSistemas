const express = require('express');
const app = express();
const port = 3000;

const Routes = require('./routes');

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use(express.json()); //Para que parsee lo que recibe en JSON
app.use('/users', Routes.UserRoutes);
app.use('/api', Routes.ApiRoutes);

app.listen(port, () => {
  console.log(`Api para la tienda virtual JJSistemas escuchando en el puerto ${port}`);
});