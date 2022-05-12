const axios = require('axios');
const articleController = require('./controllers/ArticleController');
const Article = require('./models/Article');


module.exports = {
    // recupera todos os artigos da api 
    async getArticles(limit){
        
        try {
            const result =  await axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${limit}`);
            return result;

        } catch (error) {
            // Error 😨
            if (error.response) {
                console.log(error.response.status);
                return res.status(404).json(error.response.status);
            }
        }

    },

    // salva no Banco de Dados todos artigos recuperados da API
    async loadArticles(req, res){
        const numRegistro = await Article.estimatedDocumentCount();
        if(numRegistro  == 0){
            const limit = 20000;
            const response = await this.getArticles(limit);

            response.data.forEach(i => {
                articleController.store(req, res, i);
            });
        }
        console.log(numRegistro);
    },

    // caso surja artigo novo na API ele será inserido no BD, Func disparado diariamente as 9:00
    async reloadArticles(req, res){
        const limit= 20;
        const response = await this.getArticles(limit);

        response.data.forEach(i => {
            articleController.store(req, res, i);
        });
    }
}
