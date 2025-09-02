const express = require("express");

const app = express();

app.use(express.json())

const pessoas = [
    { Nome: "Matheus", telefone: "46 40028922" },
    { Nome: "Marcao Ruim", telefone: "46 52429983" }
];
console.log("Batman, eu capturei um Pokemon");

app.get("/pessoas", (request, response) => {
    return response.send(pessoas);
});

app.get("/pessoas/:nome", (request, response)=>{
    const nome = request.params.nome;

    const pessoa = pessoas.filter(i => i.Nome === nome);
    
    if(pessoa.length<=0){
        return response.send({mensagem: "Nenhuma pessoa encontrada com esse nome!"});
    }
    return response.send(pessoa);
});


app.post("/pessoas", (request, response) => {
    const nome = request.body.nome;
    const telefone = request.body.telefone;
    const status = request.body.status;

    pessoas.push({
        nome,
        telefone,
        status
    });

    return response.send(pessoas);
});


app.listen(8080, () => {
    console.log("O servidor esta rodando na porta 8080");
});

