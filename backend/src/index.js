const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // !important que seja antes das rotas     
app.use(routes);
    // Rota /Recurso


//Metodos

// Get: Buscar/listar uma informaçao do backend

// Post: Criar uma informaçao no back-end

// PUT: Alterar ..................
//Delete : Deletar uma informaçao




/**
 * Tipos de Parametros:
 * 
 * Query : Parametros nomeados enviados na rotas apos de "?" (Filtros, pagination)
 * 
 * Route Params: Parametros utilizados para identificar recursos
 * 
 * Request Body: corpo da requisiçao , utilizado para criar ou alterar rcurso
 */


 /**
  * SQL : MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc...
  */

  /**
   * Driver: SELECT * FROM users
   * 
   * Query BUILDER: table('users).select('*).where()
   */

app.listen(3333);