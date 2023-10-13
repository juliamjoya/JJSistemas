const express = require('express');
const server = express();
const port = 3000;
const pg = require('pg');

// const Routes = require('./routes');

const pool = new pg.Pool({
    //Conexion a postgresql de render desde local
    // connectionString: 'postgres://juliamjoya:0UHim5QqZCoQ6lQhEQivvMyHv0CzmLNS@dpg-ckksc3rj89us73aj1g6g-a.oregon-postgres.render.com/virtualstorejjsistemas',
    //Conexion a postgresql de render desde render
    connectionString: 'postgres://juliamjoya:0UHim5QqZCoQ6lQhEQivvMyHv0CzmLNS@dpg-ckksc3rj89us73aj1g6g-a/virtualstorejjsistemas',
    // ssl: true
})

server.get('/', (req, res) => {
  res.send('API para la tienda virtual JJsistemas');
});

server.get('/testPG', async (req, res) => {
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
  });

// server.use(express.json()); //Para que parsee lo que recibe en JSON
// server.use('/users', Routes.UserRoutes);
// server.use('/api', Routes.ApiRoutes);

server.listen(port, () => {
  console.log(`API JJSistemas escuchando en el puerto ${port}`);
});

