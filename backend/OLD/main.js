const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    // database: 'virtualstorejjsistemas',
    database: 'dvdrentals',
    user: 'postgres',
    password: 'root'
});

pool.query("SELECT * FROM actor WHERE first_name = 'Penelope'", (error, resultQuery) => {
    if(error){
        console.error('Ocurrio un error al consultar la tabla actor');
        console.error(error);
        return;
    }
    console.log(resultQuery.rows);
});