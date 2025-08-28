const express = require("express");

const app = express();

/*app.get("/", (request, response)=>{

        const {nome} = request.query;
        response.send(`cóe mano, ${nome}blz cara?` )
});
*/
app.get("/somade",(request, response)=>{
    
    const {valorA,valorB} = request.query;
    response.send(`soma de ${parseInt(valorA)} + ${parseInt(valorB)} = ${parseInt(valorA)+parseInt(valorB)}`);
});
app.get("/subtracaode",(request, response)=>{
    
    const {valorA,valorB} = request.query;
    response.send(`subtracao de ${parseInt(valorA)} - ${parseInt(valorB)} = ${parseInt(valorA)-parseInt(valorB)}`);
});
app.get("/multiplicacaode",(request, response)=>{
    
    const {valorA,valorB} = request.query;
    response.send(`multiplicacao de ${parseInt(valorA)} * ${parseInt(valorB)} = ${parseInt(valorA)*parseInt(valorB)}`);
});
app.get("/divisaode",(request, response)=>{
    
    const {valorA,valorB} = request.query;
    response.send(`divisao de ${parseInt(valorA)} / ${parseInt(valorB)} = ${parseInt(valorA)/parseInt(valorB)}`);
});

app.listen(8080,()=>{
    console.log("O servidor esta rodando na porta 8080");
});