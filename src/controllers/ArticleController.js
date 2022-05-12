const Article = require('../models/Article');

module.exports = {
    // exibe todas os artigos
    async index(req, res) {
        // caso page n informada setar como 1
        var page = req.query.page || 1;
        // limite de conteudos a serem exibidos
        var limite = 10;
        // calcula o salto a ser dado na consulta
        var salto = (page - 1) * limite;

        const articles = await Article.find().skip(salto).limit(limite);
        return res.status(200).json(articles);
    },

    // armazena um ou mais recursos no BD
    async store(req, res, data) {

        try {
            /* se dados virem do body da req sera attb a 'var data', 
                caso contrario os dados virão da 'data' preenchidos 
                dinamicamente pelas funcs loadArticle ou reloadArticle
            */
            if (req) {
                var data = req.body;
            }
            
            const articleExist=  await Article.findOne({'id': data.id});
            if(articleExist){
                return res.status(400).json({msg:'ID='+ articleExist.id + ' já existe'});
            }else{
                //inserindo no BD
                const article = Article.insertMany(data);
                if (article){
                    console.log(data.id);
                    return res.status(200).json({ msg: 'salvo no BD com sucesso' });
                }
            }

        } catch (error) {
            // Error 😨
            if (error.response) {

                return res.status(400).json('error.response.status');
            }
        }

    },

    // exibe determinado artigo por ID
    async show(req, res) {
        const id = req.params.id;

        const article = await Article.find({ 'id': id });
        return res.status(200).json(article);
    },

    // atualizar determinado artigo por ID
    async update(req, res) {
        const id = req.params.id;
        const data = req.body;

        const article = await Article.updateOne({ 'id': id }, {
            title: data.title,
            url: data.url,
            imageUrl: data.imageUrl,
            newsSite: data.newsSite,
            summary: data.summary,
            updatedAt: Date.now(),
            featured: data.featured,
            launches: data.launches,
            events: data.events

        });

        if(article.modifiedCount === 1){
            return res.status(200).json({msg:'ID='+id+' Atualizado com sucesso'});
        }
        return res.status(404).json({msg: 'ID='+id+' não existe'});
    },

    // deleta determinado artigo por ID
    async destroy(req, res) {
        const id = req.params.id;
        
        const article= await Article.deleteOne({ id: id }); 

        if(article.deletedCount === 1){
            return res.status(200).json({msg:'ID='+id+' Deletado com sucesso'});
        }

        return res.status(404).json({msg:'ID='+id+' Não existe'});

    },
};

