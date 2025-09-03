const express = require("express");

const app = express();

app.use(express.json())

const pessoas = [
    { id: 1, nome: "Matheus", telefone: "46 40028922" },
    { id: 2, nome: "Marcao Ruim", telefone: "46 52429983" }
];

var contador = 2;
console.log("Batman, eu capturei um Pokemon");

app.get("/pessoas", (request, response) => {
    return response.send(pessoas);
});

app.get("/pessoas/:nome", (request, response) => {
    const nome = request.params.nome;

    const pessoa = pessoas.filter(i => i.Nome === nome);

    if (pessoa.length <= 0) {
        return response.send({ mensagem: "Nenhuma pessoa encontrada com esse nome!" });
    }
    return response.send(pessoa);
});


app.post("/pessoas", (request, response) => {
    const nome = request.body.nome;
    const telefone = request.body.telefone;
    const status = request.body.status;

    contador++;

    pessoas.push({
        id: contador,
        nome,
        telefone,
        status
    });

    return response.send(pessoas);
});

app.put("/pessoas", (request, response) => {
    const { id, nome, telefone, status } = request.body;

    if (id == undefined) {
        return response.send({ mensagem: "O campo ID eh obrigatorio no corpo da requisição" })
    }


    const pessoa = pessoas.filter((item) => item.id == id);


    response.send({ id, nome, telefone, status });

    if (pessoa.length <= 0) {

        return response.send({ mensagem: "Codigo da pessoa invalido!" });
    }
    pessoa[0].nome = nome;
    pessoa[0].telefone = telefone;
    pessoa[0].status = status;

    return response.send(pessoa);

});





app.listen(8080, () => {
    console.log("O servidor esta rodando na porta 8080");
});

