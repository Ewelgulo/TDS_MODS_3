const express = require("express");

const app = express();

app.use(express.json())


const Cadastro = [
    {
    Nome:"Teste", Usuario:"Teste", Senha:"Teste"
    }
];

app.get("/Cadastro", (request,response)=>{
    return response.send(Cadastro);
});

app.post("/Cadastro", (request, response)=>{

    const {Nome, Usuario, Senha} = request.body;

    console.log(Senha.length);

    if (Senha.length <= 4){
        return response.send({mensagem:"Senha com mais de 4 digitos nescessaria!"});
    }

    // const usuario_exists = Cadastro.filter((item)=>{
    //     if(item.Usuario == Usuario ){
    //         return item
    //     }
    // });

    const usuario_existe = Cadastro.filter(i => i.Usuario == Usuario );

    if (usuario_existe.length > 0){
        return response.send({mensagem: "O usuário informado já existe na base de dados!"});
    }

    /*if(Se <=4){
    }*/
   /*if(Us >=4){
        return response.send(mensagem:"Usuario ja em uso!")
    }*/
    Cadastro.push({
        Nome,
        Usuario,
        Senha
    });

    return response.send({Nome, Usuario, Senha} );

});

app.listen(8080, () => {
    console.log("O servidor esta rodando na porta 8080");
});