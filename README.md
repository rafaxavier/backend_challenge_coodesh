#  Desafio de back-end 🏅 2021 - Notícias sobre voos espaciais
<p>Esse desafio foi desenvolvido uma API REST que usará os dados do projeto Space Flight News.</p>

<h2>Tecnologias usadas:</h2>
<ul>
    <li>Node.js</li>
    <li>MongoDB</li>
    <li>Docker</li>
</ul>

Libs usadas:
```json
"dependencies": {
    "axios": "^0.27.2",
    "cors": "^2.8.5",
    "express": "^4.18.0",
    "mongoose": "^6.3.1",
    "node-cron": "^3.0.0",
    "nodemon": "^2.0.15"
  }
```

<h2>Instruções</h2>
Na raiz do projeto execute o comando para subir o docker:

```bash
$ sudo docker-compose up
```

Execute o comando abaixo para rodar a aplicação na porta 3000. Após subir, será carregado os artigos da API publica para o BD. 

```bash
$ sudo docker run backend_challenge_coodesh_app 
```

*** Rotas
<table>
    <tr>
       <td>Método</td>   	
       <td>Endpoint</td>    	
       <td>Descrição</td>
    </tr>
    <tr>
       <td>GET</td>   	
       <td>http://localhost:3000/</td>    	
       <td> Retornar um Status: 200 e uma Mensagem "Back-end Challenge 2021 🏅 - Space Flight News".</td>
    </tr>
    <tr>
       <td>GET</td>   	
       <td>http://localhost:3000/articles</td>    	
       <td>Listar os primeiros 10 artigos</td>
    </tr>
    <tr>
       <td>GET</td>   	
       <td>http://localhost:3000/articles?page={pag}</td>    	
       <td>Utilizar o sistema de paginação para não sobrecarregar a REQUEST (Limite 10 artigos/pag)</td>
    </tr>
    <tr>
       <td>GET	</td>   	
       <td>http://localhost:3000/articles/{id}</td>    	
       <td>Obter a informação somente de um artigo</td>
    </tr>
    <tr>
       <td>POST</td>   	
       <td>http://localhost:3000/articles</td>    	
       <td>Adicionar um novo artigo</td>
    </tr>
    <tr>
       <td>PUT</td>   	
       <td>http://localhost:3000/articles/{id}</td>    	
       <td>Atualizar um artigo baseado no id</td>
    </tr>
    <tr>
       <td>DELETE</td>   	
       <td>http://localhost:3000/articles/{id}</td>    	
       <td>Remover um artigo baseado no id</td>
    </tr>
</table>



Link da apresentação > https://www.loom.com/embed/6aadae4da68c463cb2e7f83bed592087

Este é um desafio da <a href="https://coodesh.com/"> Coodesh </a>
