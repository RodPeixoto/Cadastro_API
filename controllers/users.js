// Incluir as bibliotecas 
// Gerencia as requisições, rotas e URLs, entre outras funcionalidades
const express = require('express');

// Chamar a função express
const router = express.Router();

//Incluir o arquivo que possui a conexão com banco de dados
const db = require('./../db/models');

//Criar a rota cadastrar
//Endereços para acessar através da aplicação externa: http://localhost:8080/users
/*
// A aplicação externa deve indicar que está enviado os dados em formato de abjeto
Content-Type: application/json

// Dados em formato de objeto
{
    "name": "Rodrigo",
    "email": "rod@suporte.com"
}
*/


//Criar a rota cadastrar
router.post("/users", async (req, res) => {

    // Receber os dados enviados no corpo da requisição
    var dados = req.body;
    console.log(dados);

    //Salvar no banco de dados
    await db.Users.create(dados).then((dadosUsuario) => {
        // Pausar o processamento e retornar os dados em formato de objeto
        return res.json({
            mensagem: "usuario cadastrado com sucesso!",
            dadosUsuario
        });
    }).catch(() => {
        // Pausar o processamento e retornar a mensagem de erro
        return res.json ({
            mensagem: "Erro: Usuario não cadastrado com sucesso!"
        });

    })

    
});

// Exportar a instrução que está dentro da constante router
module.exports =  router