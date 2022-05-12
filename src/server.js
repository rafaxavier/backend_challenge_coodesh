const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
// const cors =  require('cors');

const routes =  require('./routes');
const services =  require('./services');

const PORT = 3000;
const HOST = '0.0.0.0';

const app= express();

mongoose.connect('**********************');


// app.use(cors());
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
});
