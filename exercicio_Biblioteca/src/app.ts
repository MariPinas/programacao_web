import express from 'express';
import { cadastrarLivro } from './controller/LivroController';

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/api/books", cadastrarLivro);
//app.put("/api/product", atualizarProduto)
//app.delete("/api/product", deletarProduto)
//app.get("/api/product", filtrarProduto)
//app.get("/api/products", listarTodosProduto)

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));