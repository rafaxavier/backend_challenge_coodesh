const express = require('express');
const ArticleController = require('./controllers/ArticleController');


const routes = express.Router();

routes.get('/',(req, res)=>{
    return res.status(200).json({msg: "Back-end Challenge 2021 🏅 - Space Flight News" });
});

//Listar todos os artigos da base de dados
routes.get('/articles', ArticleController.index);

// sistema de paginação para não sobrecarregar a REQUEST
routes.get('/articles?page=:page', ArticleController.index);

// Obter a informação somente de um artigo
routes.get('/articles/:id', ArticleController.show);

//  Adicionar um novo artigo
routes.post('/articles', ArticleController.store);

// Atualizar um artigo baseado no id
routes.put('/articles/:id', ArticleController.update);

// deleta um artigo baseado no id
routes.delete('/articles/:id', ArticleController.destroy);

module.exports = routes;