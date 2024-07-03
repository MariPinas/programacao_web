"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ModalidadeController_1 = require("./controller/ModalidadeController");
const EstoqueController_1 = require("./controller/EstoqueController");
const VendaController_1 = require("./controller/VendaController");
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
function logInfo() {
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}
//Area Modalidades
app.get('/api/modalidade/todas', ModalidadeController_1.listaModalidades);
app.post('/api/modalidade', ModalidadeController_1.cadastrarModalidade);
app.put('/api/modalidade', ModalidadeController_1.atualizarModalidade);
app.delete('/api/modalidade/:id', ModalidadeController_1.deletarModalidade);
app.get('/api/modalidade/:id', ModalidadeController_1.pesquisarTipoPao);
//Area Estoque
app.post('/api/estoque', EstoqueController_1.adicionaItem);
app.get('/api/estoque/todos', EstoqueController_1.listaEstoques);
app.get('/api/estoque/:id', EstoqueController_1.pesquisarNoEstoque);
app.put('/api/estoque', EstoqueController_1.atualizarEstoque);
app.delete('/api/estoque', EstoqueController_1.deletarQuantidade);
//Area Venda
app.post('/api/venda', VendaController_1.realizarVenda);
app.get('/api/venda/:id', VendaController_1.pesquisarVenda);
app.listen(PORT, logInfo);
