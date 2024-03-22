"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3500;
let estoque = [];
const app = (0, express_1.default)();
app.use(express_1.default.json());
function appLog() {
    console.log("API se encontra disponivel no URL: http://localhost:3500");
}
function CadProducts(req, res) {
    const produtos = req.body;
    for (let i = 0; i < produtos.length; i++) {
        estoque.push(produtos[i]); //criei um novo vetor e fui adicionando os valores do vetor do post neste por este for
    }
    res.status(201).json({
        mensagem: "Produto salvo com sucesso :)",
        produtos: produtos
    });
}
app.post("/api/products", CadProducts);
app.listen(PORT, appLog);
