const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
const env =  require('dotenv').config();

const routes =  require('./routes');
const services =  require('./services');

const PORT = process.env.APP_PORT;
const HOST = process.env.APP_HOST;
const MONGO_STRING = process.env.DB_MONGO_STRING;

const app= express();

mongoose.connect(MONGO_STRING);

app.use(express.json());
app.use(routes);

app.listen(PORT, HOST, ()=>{

    // salva todos artigos no BD
    services.loadArticles();
    
    // Executado diariamente às 9h e armazenar os novos artigos no BD
    cron . schedule ( '0 9 * * *' ,  ( )  =>  {  
        services.reloadArticles();
        
    } ,{ 
        schedule : true , 
        timezone : "America/Sao_Paulo" 
    }) ;

    console.log('Servidor escutando na porta: '+process.env.APP_PORT);
});
