const express = require('express')

const app = express()

/**
* HTTP Methods
* GET: Buscar informação do back-end
* POST: Criar uma informação no back-end
* PUT/PATCH: Alterar uma informação no back-end
* DELETE:  Deletar uma informação no back-end
*/

/**
* Tipos de paramêtros:
* Query Paramns: Filtros e paginação / normalmente tipo GET
* Routes Params:
* Request Body:
*/


app.get('/projects', (req, res) => {
    const {title, owner} = req.query;
    console.log(title);
    console.log(owner);

    return res.json([
        'Project 01',
        'Project 02'
    ])
});


app.post('/projects', (req, res) => {
    return res.json([
        'Project 01',
        'Project 02',
        'Project 03'
    ])
});

app.put('/projects/:id ', (req, res) => {
    return res.json([
        'Project 04',
        'Project 02',
        'Project 03'
    ])
});


app.delete('/projects/:id ', (req, res) => {
    return res.json([
        'Project 01',
        'Project 02',
        'Project 03'
    ])
});




app.listen(3333, () => {
    console.log(' 🚀 Backend started!')
})