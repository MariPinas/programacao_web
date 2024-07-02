import express from "express";

import { listaModalidades, cadastrarModalidade, atualizarModalidade, deletarModalidade, pesquisarTipoPao } from "./controller/ModalidadeController";
import { adicionaItem, atualizarEstoque, listaEstoques, pesquisarNoEstoque } from "./controller/EstoqueController";
const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());


function logInfo(){
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}
//Area Modalidades
app.get('/api/modalidade/todas',listaModalidades);
app.post('/api/modalidade', cadastrarModalidade);
app.put('/api/modalidade', atualizarModalidade );
app.delete('/api/modalidade/:id', deletarModalidade);
app.get('/api/modalidade/:id', pesquisarTipoPao);
//Area Estoque
app.post('/api/estoque', adicionaItem);
app.get('/api/estoque/todos',listaEstoques);
app.get('/api/estoque/:id', pesquisarNoEstoque);
app.put('/api/estoque', atualizarEstoque);

//Area Venda



app.listen(PORT, logInfo);


