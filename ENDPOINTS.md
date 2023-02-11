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



# EndPoints
 **Relatorio intrajornada**
 http://127.0.0.1:5025/relatorio/intrajornada/filters?initialdate=2022-12-01&finaldate=2022-12-30&limit=100&page=1&setorfk=1&count=false

```json
"response": [
	{
		"nome": "FULANO DA SILVA",
		"pis": "999.9999.999-9",
		"data": "16-12-2022",
		"duracaopausa": "00:56",
		"transgredido": "-00:04"
	},
]
```
  http://127.0.0.1:5025/relatorio/intrajornada/filters?initialdate=2022-12-01&finaldate=2022-12-30&limit=100&page=1&setorfk=1&count=true

```json
"response": [
	{
		"totalViolacaoIntrajornada": 20
	}
]

```

