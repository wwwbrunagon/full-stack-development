const express = require('express');

const app = express();

app.use(express.json());

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Filtros e paginação
 * Route Params: Identificar recursos (Atualizar/Deletar)
 * Request Body: Conteúdo na hora criar ou editar um recurso (JSON)
 */



app.get('/projects', (req, res) => {
  const { title, owner } = req.query;
  console.log(title);
  console.log(owner);

  return res.json([
    'Project 01',
    'Project 02'
  ])
});


app.post('/projects', (req, res) => {

  const body = req.body;
  
  console.log(body)

  
  return res.json([
    'Project 01',
    'Project 02',
    'Project 03'
  ])
});

app.put('/projects/:id', (req, res) => {
  return res.json([
    'Project 04',
    'Project 02',
    'Project 03'
  ])
});


app.delete('/projects/:id', (req, res) => {
  return res.json([
    'Project 01',
    'Project 02',
    'Project 03'
  ])
});




app.listen(3333, () => {
  console.log(' 🚀 Backend started!')
})